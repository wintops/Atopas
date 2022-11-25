unit Unit1;

//
// CRC32 and hash computes (MD5/SHA-1) for a file
//   (Indicate a valid search path for the LLCL files before compiling)
//

// Copyright (c) 2015-2016 ChrisF
// Distributed under the terms of the MIT license: see LICENSE.txt

{$IFDEF FPC}
//  {$mode objfpc}{$H+}
  {$mode delphi}
{$ENDIF}
{$IFDEF FPC_OBJFPC} {$DEFINE IS_FPC_OBJFPC_MODE} {$ENDIF}

interface

uses
{$IFDEF PASJS}
Web, WebCtrls, WebCtrlsMore ,
 {$ENDIF}
  Classes, SysUtils, Forms, Controls, StdCtrls, Dialogs, ExtCtrls
  {$IFNDEF FPC}, XPMan{$ENDIF};

type

  { TForm1 }

  TForm1 = class(TForm)
{$IFNDEF FPC}
    XPManifest1: TXPManifest;
{$ENDIF}
    Button1: TButton;
    Button2: TButton;
    CheckBox1: TCheckBox;
    CheckBox2: TCheckBox;
    Memo1: TMemo;
    OpenDialog1: TOpenDialog;
    StaticText1: TStaticText;
    StaticText2: TStaticText;
    Timer1: TTimer;
    procedure Button1Click(Sender: TObject);
    procedure Button2Click(Sender: TObject);
    procedure FormDestroy(Sender: TObject);
    procedure Timer1Timer(Sender: TObject);
  private
    { private declarations }
  public
    { public declarations }
  end;

var
  Form1: TForm1;

//------------------------------------------------------------------------------

implementation

// Possible program options
{$IFDEF FPC}
//  {$DEFINE USE_FPC_CRCHASH}   // Use CRC and hash functions of FPC
{$ENDIF}
{$DEFINE USE_THREAD}          // Use thread for CRC and hash computes

{$if Defined(FPC) and (not Defined(UNICODE))}
  {$DEFINE USE_FPC_UTF8_FILEFUNC}
{$ifend}

uses
{$IFDEF USE_FPC_UTF8_FILEFUNC}
  LazFileUtils,
{$ENDIF}
{$IFDEF USE_FPC_CRCHASH}
  MD5, SHA1, CRC;
{$ELSE}
  CRCUnit, HashUnit;
{$ENDIF}

{$IFDEF FPC}
  {$R *.lfm}
{$ELSE}
  {$R *.dfm}
{$ENDIF}

procedure DispMessage(Const StrMess: String); forward;
procedure DispError(Const ErrMess: String); forward;

procedure DoCRCHashFile(Const FileName: String; Const MD5Too: Boolean; Const SHA1Too: Boolean; Var ResType: Integer; Var ResStr: String); forward;

{$IFDEF USE_THREAD}
type
  TDoCRCHashFileThr = class(TThread)
  private
    FileName: String;
    MD5Too: Boolean;
    SHA1Too: Boolean;
    TimerThr: TTimer;
    procedure OnThreadTerminate(Sender: TObject);
  public
    procedure Execute; override;
  end;

function  CallDoCRCHashFileThr(Const FileName: String; Const MD5Too: Boolean; Const SHA1Too: Boolean): Boolean; forward;
procedure ResDoCRCHashFileThr; forward;
{$ENDIF}

const
  HEX_CHARS:        array [0..Pred(16)] of Char = '0123456789ABCDEF';
  MAXSIZE_ARRCHARS  = 4096;

function  FindFileSize(Const Filename: String; Var LenFile: Int64): Boolean; forward;
function  ArrByteToChar(Const AByte: array of Byte; Const Posi: Longword; Const Len: Longword): String; forward;

{$IFDEF USE_THREAD}
var
  DoCRCHashFileThr:   TDoCRCHashFileThr;
  ThreadIsRunning:    Boolean = False;
  ThreadFormDestroy:  Boolean = False;
  ThreadResType:      Integer;
  ThreadResStr:       String;
{$ENDIF}

//------------------------------------------------------------------------------

procedure TForm1.Button1Click(Sender: TObject);
begin
  // Quits (End of program)
  //    (Cancel Button - Escape key)
  Application.Terminate;
end;

procedure TForm1.Button2Click(Sender: TObject);
{$IFNDEF USE_THREAD}
var ResType: Integer;
var ResStr: String;
{$ENDIF}
begin
  {$IFDEF USE_THREAD}
  // If abort called during thread run
  if ThreadIsRunning then
    begin
      DoCRCHashFileThr.Terminate;
      Exit;
    end;
  {$ENDIF}
  // File... (Computes CRC/Hashes for a file chosen by the user)
  //    (Default Button - Return key)
  // Asks for any (existing) file
  OpenDialog1.Options:=OpenDialog1.Options+[ofPathMustExist, ofFileMustExist];
  OpenDialog1.Filter:='All Files (*.*)|*.*';
  // Aborts, if no file selected
  if not OpenDialog1.Execute then
    Exit;
  // Processes file
  DispMessage(' Processing File : '+OpenDialog1.FileName+' ...');
  Application.ProcessMessages;
  {$IFDEF USE_THREAD}
  CallDoCRCHashFileThr(OpenDialog1.FileName, Form1.CheckBox1.Checked, Form1.CheckBox2.Checked);
  if ThreadResType<>0 then
    ResDoCRCHashFileThr;
  {$ELSE}
  DoCRCHashFile(OpenDialog1.FileName, Form1.CheckBox1.Checked, Form1.CheckBox2.Checked,ResType,ResStr);
  // Display results
  if ResType=0 then
    DispMessage(ResStr)
  else
    DispError(ResStr);
  {$ENDIF}
end;

{$IFDEF USE_THREAD}
procedure TForm1.Timer1Timer(Sender: TObject);
begin
  // Timer stopped
  Timer1.Enabled:=False;
  // Do not display results, if thread aborted because application si closing
  if (not ThreadFormDestroy) then
    ResDoCRCHashFileThr;
end;

procedure TForm1.FormDestroy(Sender: TObject);
begin
  // Terminates thread if running
  if ThreadIsRunning then
    begin
      ThreadFormDestroy:=True;  // Thread aborted because application si closing
      DoCRCHashFileThr.Terminate;
      DoCRCHashFileThr.WaitFor;
    end;
end;
{$ELSE}
procedure TForm1.Timer1Timer(Sender: TObject);
begin
  // Do nothing
end;

procedure TForm1.FormDestroy(Sender: TObject);
begin
  // Do nothing
end;
{$ENDIF}

//------------------------------------------------------------------------------

//
// Displays a standard message (not an error)
//
procedure DispMessage(Const StrMess: String);
begin
  Form1.Memo1.Text:=sLineBreak+StrMess;
end;

//
// Displays an error message
//
procedure DispError(Const ErrMess: String);
begin
  Form1.Memo1.Text:=sLineBreak+'  *** ERROR ***'+sLineBreak+sLineBreak+ErrMess;
end;

//------------------------------------------------------------------------------

{$IFDEF USE_THREAD}
//
// Calls CRC/Hash Thread
//
function  CallDoCRCHashFileThr(Const FileName: String; Const MD5Too: Boolean; Const SHA1Too: Boolean): Boolean;
begin
  // Creates thread
  result:=False;
  ThreadResType:=0;
  ThreadResStr:='';
  try
    DoCRCHashFileThr:= TDoCRCHashFileThr.Create(True);
  except
    ThreadResType:=1;
    ThreadResStr:=' Internal error: Can''t start thread to process file';
    Exit;
  end;
  result:=True;
  // Initializations
  Form1.Button1.Enabled:=False;
  Form1.Button2.Caption:='&Abort';
  Form1.CheckBox1.Enabled:=False;
  Form1.CheckBox2.Enabled:=False;
  Form1.Memo1.Enabled:=False;
  Application.ProcessMessages;
  // Thread parameters
  DoCRCHashFileThr.FreeOnTerminate:=True;
  DoCRCHashFileThr.OnTerminate:={$IFDEF IS_FPC_OBJFPC_MODE}@{$ENDIF}DoCRCHashFileThr.OnThreadTerminate;
  DoCRCHashFileThr.FileName:=FileName;
  DoCRCHashFileThr.MD5Too:=MD5Too;
  DoCRCHashFileThr.SHA1Too:=SHA1Too;
  DoCRCHashFileThr.TimerThr:=Form1.Timer1;
  // Starts thread
  ThreadIsRunning:=True;
  // Resume is deprecated since Delphi 2010+ and FPC 2.4.4 (Start should be used instead)
{$IFDEF FPC}
  DoCRCHashFileThr.Start;
{$ELSE FPC}
  {$if CompilerVersion >= 21}       // Delphi 2010 or after
  DoCRCHashFileThr.Start;
  {$else}
  DoCRCHashFileThr.Resume;
  {$ifend}
{$ENDIF FPC}
end;

//
// Results for CRC/Hash Thread
//
procedure ResDoCRCHashFileThr;
begin
  Form1.Button1.Enabled:=True;
  Form1.Button2.Caption:='&File...';
  Form1.CheckBox1.Enabled:=True;
  Form1.CheckBox2.Enabled:=True;
  Form1.Memo1.Enabled:=True;
  if ThreadResType=0 then
    DispMessage(ThreadResStr)
  else
    DispError(ThreadResStr);
end;

procedure TDoCRCHashFileThr.Execute;
begin
  DoCRCHashFile(FileName,MD5Too,SHA1Too,ThreadResType,ThreadResStr);
  ThreadIsRunning:=False;
end;

procedure TDoCRCHashFileThr.OnThreadTerminate(Sender: TObject);
begin
  // Function run into calling thread for LLCL: can't use LLCL directly
  // Timer started
  TimerThr.Enabled:=True;
end;
{$ENDIF}

//
// CRC/Hashes for a file
//   Computes CRC32 value, and eventually MD5/SHA-1 hashes
//
procedure DoCRCHashFile(Const FileName: String; Const MD5Too: Boolean; Const SHA1Too: Boolean; Var ResType: Integer; Var ResStr: String);
var LenFile,SaveLenFile: Int64;
var LenToRead: Integer;
var FileError: Integer;
var CRC32Val: Longword;
var FBuffer: array [0..Pred(8192)] of Byte;
{$IFDEF USE_FPC_CRCHASH}
var HFMD5Ctx: TMD5Context;
var HFSHA1Ctx: TSHA1Context;
var DigestMD5: TMD5Digest;
var DigestSHA1: TSHA1Digest;
{$ELSE}
var HFMD5Ctx: MD5_CTX;
var HFSHA1Ctx: SHA1_CTX;
{$ENDIF}
var HFile: THandle;
var Digest: array [0..Pred(20)] of Byte;    // Longest of MD5/SHA-1
var s1: String;
begin
  ResType:=1;   // (error by default)
  // Error, if file absent
  if not FindFileSize(FileName,LenFile) then
    begin
      ResStr:=' File missing: '+FileName;
      Exit;
    end;
  // Inits
  SaveLenFile:=LenFile;
  FileError:=0;

  {$IFDEF PASJS}

  {$ELSE}
  // Opens file (read only mode)

  HFile := {$IFDEF USE_FPC_UTF8_FILEFUNC}FileOpenUTF8{$ELSE}FileOpen{$ENDIF}(FileName,fmOpenRead);
  if HFile=THandle(-1) then
    // Error, if can't open it
    FileError:=10
  else
    begin
      // Prepares initial values
      CRC32Val:=0;
      if MD5Too then MD5Init(HFMD5Ctx);
      if SHA1Too then SHA1Init(HFSHA1Ctx);
      // Processes file 'till end of file
      while LenFile<>0 do
        begin
          {$IFDEF USE_THREAD}
          // If abort called during thread run
          if DoCRCHashFileThr.Terminated then
            begin
              FileError:=20;
              Break;
            end;
          {$ENDIF}
          // Reads file data by blocks
          LenToRead:=SizeOf(FBuffer);
          if LenToRead>LenFile then LenToRead:=LenFile;
          if FileRead(HFile, FBuffer, LenToRead) <> LenToRead then
            begin
              // Error, if can't read it
              FileError:=1;
              Break;
            end;
          // Computes values for the current block
          {$IFDEF USE_FPC_CRCHASH}
          CRC32Val:=CRC32(CRC32Val,@FBuffer,LenToRead);
          {$ELSE}
          CRC32Val:=CRC32_LE_Update(FBuffer,LenToRead,CRC32Val,1+2);
          {$ENDIF}
          if MD5Too then MD5Update(HFMD5Ctx,FBuffer,LenToRead);
          if SHA1Too then SHA1Update(HFSHA1Ctx,FBuffer,LenToRead);
          // Current block done
          Dec(LenFile,LenToRead);
        end;
      // Results OK, if no read error(s)
      if FileError=0 then
        begin
          // CRC32 value
          s1:=' Processed File: '+FileName+' ('+IntToStr(SaveLenFile)+' bytes)'+
              sLineBreak+sLineBreak+sLineBreak+' CRC32 Value: '+
              IntToHex(CRC32Val,8)+sLineBreak+sLineBreak;
          // Plus hashes, if selected by user
          if MD5Too then
            begin
              {$IFDEF USE_FPC_CRCHASH}
              MD5Final(HFMD5Ctx,DigestMD5);
              Move(DigestMD5,Digest,16);
              {$ELSE}
              MD5Final(HFMD5Ctx,Digest);
              {$ENDIF}
              s1:=s1+' MD5 Hash: '+ArrByteToChar(Digest,0,16)+sLineBreak+sLineBreak;
            end;
          if SHA1Too then
            begin
              {$IFDEF USE_FPC_CRCHASH}
              SHA1Final(HFSHA1Ctx,DigestSHA1);
              Move(DigestSHA1,Digest,20);
              {$ELSE}
              SHA1Final(HFSHA1Ctx,Digest);
              {$ENDIF}
              s1:=s1+' SHA-1 Hash: '+ArrByteToChar(Digest,0,20)+sLineBreak+sLineBreak;
            end;
          // Sets result message
          ResType:=0;
          ResStr:=s1;
        end;
      // Finally, closes file
      FileClose(HFile);
    end;
   {$ENDIF}

  // Error(s) ?
  if FileError<>0 then
    {$IFDEF USE_THREAD}
    // Aborted by user
    if FileError=20 then
      begin
        if (not ThreadFormDestroy) then
          ResStr:=' File: '+FileName+sLineBreak+sLineBreak+' Operation aborted by user';
      end
    else
    {$ENDIF}
      // Error during file processing
      ResStr:=' Can''t process file: '+FileName+' (Error '+IntToStr(FileError)+')';
end;

//
// Find file and its size
//
function  FindFileSize(Const Filename: String; Var LenFile: Int64): Boolean;

{$IFDEF PASJS}
 begin
{$ELSE}

{$if Defined(FPC) and Defined(UNICODE)}
var SR: TUnicodeSearchRec;
{$else}
var SR: TSearchRec;
{$ifend}
begin
  Result:=False;
  if {$IFDEF USE_FPC_UTF8_FILEFUNC}FindFirstUTF8{$ELSE}FindFirst{$ENDIF}(FileName,faAnyFile,SR)<>0 then exit;
  LenFile:=SR.Size;
  SysUtils.FindClose(SR);
  Result:=True;
{$ENDIF}
end;

//
// Array of Bytes to String Without Space (Limited to 4096 Bytes)
//
function  ArrByteToChar(Const AByte: array of Byte; Const Posi: Longword; Const Len: Longword): String;
var ALen: Longword;
var i1,i2: Longword;
var s1: array [0..Pred(2*Succ(MAXSIZE_ARRCHARS))] of Char;
begin
  if Len<=MAXSIZE_ARRCHARS then ALen:=Len else ALen:=MAXSIZE_ARRCHARS;
  ALen:=ALen*2;
  i1:=0; i2:=Posi;
  while i1<ALen do
    begin
      s1[i1]:=HEX_CHARS[AByte[i2] shr 4]; Inc(i1);
      s1[i1]:=HEX_CHARS[AByte[i2] and $F]; Inc(i1);
      Inc(i2);
    end;
  SetLength(Result,ALen);
  {$IFDEF PASJS}
{$ELSE}

  Move(s1,Result[1],ALen*SizeOf(Char));
  {$ENDIF}
end;

end.

