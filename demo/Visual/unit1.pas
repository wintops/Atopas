unit Unit1;

//
// Using GDI and OpenGL APIs
//   (Indicate a valid search path for the LLCL files before compiling)
//
//    (Inspired from various programs: Petzold, 4coder.org, )
//
//    (Program icon from "FatCow Farm Fresh Icons"
//        http://www.fatcow.com/free-icons)
//
// 1) This sample requires OpenGL to run ("Fire" part)
//
// 2) The SysUtils.pas file used must be the 'standard' one for
//      Lazarus/FPC (because of GL.pas): so, delete or rename the
//      one coming from the LLCL units before the compilation
//
// 3) This sample requires the LLCL to be compiled with the
//     LLCL_OPT_EXTENDGRAPHICAL option (see option file LLCLOptions.inc).
//     This option permits the support of PNG files, transparent
//     images/bitmaps and double buffering painting (to avoid flickerings).
//
//     Concerning the PNG files support, by default the Zlib decompression
//     is done by with pure Pascal code (PasZlib); some other options are
//     available (see LLCL_OPT_USEZLIBxxx in LLCLOptions.inc). For Delphi,
//     as there is no such possibility, either an external PasZlib package
//     must be provided (for instance http://sageshome.net/oss/paszlib-sg.php),
//     or another Zlib option must be used.
//

// Copyright (c) 2015-2016 ChrisF
// Distributed under the terms of the MIT license: see LICENSE.txt


{$IFDEF FPC}
  {$mode objfpc}{$H+}
//  {$mode delphi}
{$ENDIF}

{$IFDEF PASJS}
{$mode delphi}{$H+}
{$ENDIF}

interface

uses
  Classes, SysUtils, Forms, Controls, StdCtrls, ExtCtrls, Dialogs,
  Windows, Graphics,
  {$IFDEF PASJS}
  Web, WebCtrls, WebCtrlsMore , GLUtils, GLTypes,WebGL
   {$ELSE}
  {$IFNDEF FPC}Messages, OpenGL, XPMan{$ELSE}GL{$ENDIF}
  {$ENDIF}
  ;

type

  { TForm1 }

  TForm1 = class(TForm)
{$IFNDEF FPC}
    XPManifest1: TXPManifest;
{$ENDIF}
    Button1: TButton;
    Button2: TButton;
    Button3: TButton;
    Button4: TButton;
    Image1: TImage;
    Label1: TLabel;
    OpenDialog1: TOpenDialog;
    StaticText1: TStaticText;
    StaticText2: TStaticText;
    Timer1: TTimer;
    procedure FormCreate(Sender: TObject);
    procedure FormDestroy(Sender: TObject);
    procedure FormPaint(Sender: TObject);
    procedure FormResize(Sender: TObject);
    procedure Button1Click(Sender: TObject);
    procedure Button2Click(Sender: TObject);
    procedure Button3Click(Sender: TObject);
    procedure Button4Click(Sender: TObject);
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

{$IFDEF FPC}
  {$R *.lfm}
{$ELSE}
  {$R *.dfm}
{$ENDIF}

 const
    Fire_MaxCur = 100;
    Fire_GlowCols:  array [0..3,0..3] of GLFloat = (
        (1,1,0,1),(1,0,0,0),(0.1,0.1,0.1,1),(0,0,0,0));

type
  FireData_Struct = record
    x,y,
    dx,dy:          GLFloat;
    lix,lex:        Longword;
  end;

{$IFDEF PASJS}
    type
  TContext_Struct = record
    PalStatus:      Integer; // 0=Palettes not created, 1=Palettes created
    AllPalettes:     Byte;
    aPalette:       Integer;
    CurIndex:       Integer;
  end;

    FireContext_Struct = record
    Status:         Integer; // 0= Not initialized, 1=Initialized
    FormHDC:        Integer;
    ORC:            Integer;
    TimerIndex:     Integer;
    TimerCur:       Byte;
    Data:           array[0..Pred(Fire_MaxCur)] of FireData_Struct;
  end;

   // procedure TPaintForm(aFormHandle: Integer; aHDC: Integer); forward;
   // procedure FireInit(Const hForm:  Integer); forward;
  //  procedure FireStop(Const hForm: Integer); forward;
 {$ELSE}
   type
  TContext_Struct = record
    PalStatus:      Integer; // 0=Palettes not created, 1=Palettes created
    AllPalettes:    array [0..Pred(SizeOf(LOGPALETTE)+(256*SizeOf(PALETTEENTRY)))] of Byte;
    aPalette:       HPALETTE;
    CurIndex:       Integer;
  end;


    FireContext_Struct = record
    Status:         Integer; // 0= Not initialized, 1=Initialized
    FormHDC:        HDC;
    ORC:            HGLRC;
    TimerIndex:     Integer;
    TimerCur:       Byte;
    Data:           array[0..Pred(Fire_MaxCur)] of FireData_Struct;
  end;

    procedure TPaintForm(aFormHandle: THandle; aHDC: HDC); forward;
    procedure FireInit(Const hForm: THandle); forward;
    procedure FireStop(Const hForm: THandle); forward;

    procedure FireEvent(); forward;
procedure FE_Glow(Const cr, cg, cb, ca, rr, rg, rb, ra, Size: GLFloat); forward;
{$ENDIF}






 type
  ImageContext_Struct = record
    WidthDiff:      Integer;
    HeightDiff:     Integer;
  end;

var
  IsTRunning:       Boolean = False;
  IsFireRunning:    Boolean = False;
  IsImageRunning:   Boolean = False;
  TContext:         TContext_Struct;
  FireContext:      FireContext_Struct;
  ImageContext:     ImageContext_Struct;

procedure ModifyButton(Const CurButton: TObject; Const State: Boolean; Const NewCaption: String); forward;

procedure TCreatePalette; forward;
procedure TChangePalette; forward;






//------------------------------------------------------------------------------

procedure ModifyButton(Const CurButton: TObject; Const State: Boolean; Const NewCaption: String);
begin
  if Form1.Button1=CurButton then
     Form1.Button1.Caption := NewCaption
  else
      Form1.Button1.Enabled := State;
  if Form1.Button2=CurButton then
     Form1.Button2.Caption := NewCaption
  else
      Form1.Button2.Enabled := State;
  if Form1.Button3=CurButton then
     Form1.Button3.Caption := NewCaption
  else
      Form1.Button3.Enabled := State;
  if Form1.Button4=CurButton then
     Form1.Button4.Caption := NewCaption
  else
      Form1.Button4.Enabled := State;
end;

procedure TForm1.FormCreate(Sender: TObject);
begin


{$IFNDEF PASJS}

FillChar(TContext, SizeOf(TContext), 0);
FillChar(FireContext, SizeOf(FireContext), 0);
ImageContext.HeightDiff := Height - Image1.Height;
ImageContext.WidthDiff := Width - Image1.Width;
// (Double buffering requires LLCL_OPT_DOUBLEBUFF in LLCLOptions.inc)
DoubleBuffered := True;
{$IF Declared(LLCLVersion) and Not Defined(LLCL_OPT_EXTENDGRAPHICAL)}
  // A message to indicate that the LLCL has to be compiled with
  // the LLCL_OPT_EXTENDGRAPHICAL option (no way to check it here),
  // as mentioned in the header note 3 of this program.
  //
  // LLCL_OPT_EXTENDGRAPHICAL is defined in this project options,
  // which is also another way to declare LLCL options
  StaticText2.Caption :=
  'Important note:' + sLineBreak + sLineBreak +
  'If you experiment flickerings, or if PNG files can''t be loaded, or' + sLineBreak +
  'if transparency images are not rendered properly, it means that the' + sLineBreak +
  'LLCL has not been compiled with the "Extended graphical options".' + sLineBreak + sLineBreak +
  'See LLCL_OPT_EXTENDGRAPHICAL in option file LLCLOptions.inc';
{$IFEND}
{$IFEND}
end;

procedure TForm1.FormDestroy(Sender: TObject);
begin
  Timer1.Enabled := False;
 {$IFNDEF PASJS}
  if TContext.PalStatus<>0 then
    DeleteObject(TContext.aPalette);
  if FireContext.Status<>0 then
    FireStop(Form1.Handle);
  {$IFEND}
end;

procedure TForm1.FormPaint(Sender: TObject);
begin
   {$IFNDEF PASJS}
  if IsTRunning then
    TPaintForm(Form1.Handle, Canvas.Handle);
     {$IFEND}
end;

procedure TForm1.FormResize(Sender: TObject);
var i1, i2: Integer;
begin
  i2 := Height - ImageContext.HeightDiff;
  if i2<0 then i2 := 0;
  i1 := Width - ImageContext.WidthDiff;
  if i1<0 then i1 := 0;
  Image1.SetBounds(Image1.Left, Image1.Top, i1, i2);
end;

procedure TForm1.Button1Click(Sender: TObject);   // Quit
begin
  Application.Terminate;
end;

procedure TForm1.Button2Click(Sender: TObject);   // T
begin
  StaticText2.Visible := False;
  IsTRunning := not IsTRunning;
  if not IsTRunning then        // End
    begin
      Timer1.Enabled := False;
      ModifyButton(Sender, True, '&T');
      Invalidate;   // (Call to restore form background)
    end
  else                          // Begin
    begin
      ModifyButton(Sender, False, '&End');
      if TContext.PalStatus=0 then
        TCreatePalette;
      Timer1.Interval := 30;
      Timer1.Enabled := True;
    end;
end;

procedure TForm1.Button3Click(Sender: TObject);   // Fire
begin
  StaticText2.Visible := False;
  IsFireRunning := not IsFireRunning;
  if not IsFireRunning then     // End
    begin
      Timer1.Enabled := False;
      ModifyButton(Sender, True, '&Fire');
       {$IFNDEF PASJS}
      FireStop(Form1.Handle);
        Application.ProcessMessages;
         Sleep(50);
            {$IFEND}


      Invalidate;   // (Call to restore form background)
    end
  else                          // Begin
    begin
      Label1.Caption := 'Please wait...';
      Label1.Visible := True;

      ModifyButton(Sender, False, '&End');
       {$IFNDEF PASJS}
          Application.ProcessMessages;
      if FireContext.Status=0 then
        FireInit(Form1.Handle);
            {$IFEND}
      Timer1.Interval := 5;
      Timer1.Enabled := True;
      Label1.Visible := False;
    end;
end;

procedure TForm1.Button4Click(Sender: TObject);
var BitmapLoaded: Boolean;
begin
  StaticText2.Visible := False;
  IsImageRunning := not IsImageRunning;
  if not IsImageRunning then    // End
    begin
              {$IFNDEF PASJS}
      if not Image1.Picture.Bitmap.Empty then
        Image1.Picture := nil;
                {$IFEND}
      Label1.Visible := False;
      ModifyButton(Sender, True, '&Image...');
      Image1.Visible := False;
    end
  else                          // Begin
    begin
      // Load an image from an external file
      OpenDialog1.Options := OpenDialog1.Options+[ofPathMustExist, ofFileMustExist];
      // (PNG files support requires LLCL_OPT_PNGSUPPORT in LLCLOptions.inc)
      // (Transparency support requires LLCL_OPT_IMGTRANSPARENT in LLCLOptions.inc)
      OpenDialog1.Filter := 'Bitmap Files (*.bmp)|*.bmp|PNG Files (*.png)|*.png';
      // Exit if no file selected
      if not OpenDialog1.Execute then
        begin
          IsImageRunning := False;
          Exit;
        end;
      // Loads it
      BitmapLoaded := True;
      try
          {$IFNDEF PASJS}
        Image1.Picture.LoadFromFile(OpenDialog1.FileName);
              {$IFEND}
      except
        BitmapLoaded := False;
      end;
      // Exit if any error
      if (not BitmapLoaded) then
        begin
          ShowMessage('*** ERROR ***: Absent or incorrect image file: '+OpenDialog1.FileName);
          IsImageRunning := False;
          Exit;
        end;
      ModifyButton(Sender, False, '&End');
      Label1.Caption := '(Resize the form)';
      Label1.Visible := True;
      Image1.Visible := True;
    end;
end;

procedure TForm1.Timer1Timer(Sender: TObject);
begin
  {$IFNDEF PASJS}
  if IsTRunning then
    TChangePalette()
  else
    if IsFireRunning then
      FireEvent();
   {$IFEND}

end;

//------------------------------------------------------------------------------

//
// Creates all the palette data
//
procedure TCreatePalette;
{$IFNDEF PASJS}    var ptrPalette: ^LOGPALETTE;    {$IFEND}
var i: Integer;
var b: Byte;
begin
     {$IFNDEF PASJS}
  ptrPalette := @TContext.AllPalettes;
  // Initializes general fields
  ptrPalette^.palVersion := $0300;
  ptrPalette^.palNumEntries := 128;
  // Fills palette data
  for i := 0 to Pred(128) do
    begin
      if i<64 then
        b := i shl 2
      else
        if i=64 then
          b := 255
        else
          b := (i-128) shl 2;
       ptrPalette^.palPalEntry[i].peRed := b;
       ptrPalette^.palPalEntry[i].peGreen := b;
       ptrPalette^.palPalEntry[i].peBlue := b;
       ptrPalette^.palPalEntry[i].peFlags := PC_RESERVED ;
       ptrPalette^.palPalEntry[i+128].peRed := b;
       ptrPalette^.palPalEntry[i+128].peGreen := b;
       ptrPalette^.palPalEntry[i+128].peBlue := b;
       ptrPalette^.palPalEntry[i+128].peFlags := PC_RESERVED ;
    end;
  // Create it
  TContext.aPalette := CreatePalette(ptrPalette^);
  if TContext.aPalette<>0 then
    TContext.PalStatus := 1;

   {$IFEND}
end;

//
// Changes palette
//
procedure TChangePalette;
{$IFNDEF PASJS} var ptrPalette: ^LOGPALETTE;      {$IFEND}
begin
  {$IFNDEF PASJS}
  if TContext.PalStatus=0 then Exit;  // Sanity
  ptrPalette := @TContext.AllPalettes;
  TContext.CurIndex := (TContext.CurIndex+1) and 127;
  AnimatePalette(TContext.aPalette,0, 128, {$IFNDEF FPC}@{$ENDIF}(ptrPalette^.palPalEntry[TContext.CurIndex]));
  InvalidateRect(Form1.Handle, nil, False);
     {$IFEND}
end;
 {$IFNDEF PASJS}
//
// Paints Form1 background
//
procedure TPaintForm(aFormHandle: THandle; aHDC: HDC);
var aRect, fRect: TRECT;
var ahBrush: HBRUSH;
var fClientX, fClientY: Integer;
var i: Integer;
begin
  if TContext.PalStatus=0 then Exit;  // Sanity
  // (Double buffering done inside LLCL - see LLCL_OPT_DOUBLEBUFF in LLCLOptions.inc)
  SelectPalette(aHDC, TContext.aPalette, False);
  RealizePalette(aHDC);
  GetClientRect(aFormHandle, fRect);
  fClientX := fRect.Right - fRect.Left;
  fClientY := fRect.Bottom - fRect.Top;
  // Draws shapes
  for i := 0 to Pred(128) do
    begin
      arect.Left := ((i*fClientX) div 255);
      arect.Top := ((i*fClientY) div 255);
      arect.Right := fClientX - ((i*fClientX) div 255);
      arect.Bottom := fClientY - ((i*fClientY) div 255);
      ahBrush := CreateSolidBrush(PALETTEINDEX(i));
      FillRect(aHDC, arect, ahBrush);
      DeleteObject(ahBrush);
    end;
end;

//------------------------------------------------------------------------------

//
// Fire Initialization
//
procedure FireInit(Const hForm: THandle);
var pfd: TPixelFormatDescriptor;
var nPixelFormat: Integer;
begin
  Randomize;
  FireContext.FormHDC := GetDC(hForm);
  if FireContext.FormHDC=0 then   // Sanity
    Exit;
  FillChar(pfd,SizeOf(pfd), 0);
  pfd.dwFlags := PFD_SUPPORT_OPENGL or PFD_DOUBLEBUFFER;
  nPixelFormat := ChoosePixelFormat(FireContext.FormHDC, @pfd);
  SetPixelFormat(FireContext.FormHDC, nPixelFormat, @pfd);
  FireContext.ORC := WGLCreateContext(FireContext.FormHDC);
  if FireContext.ORC=0 then       // Sanity
    begin
      ReleaseDC(hForm, FireContext.FormHDC);
      Exit;
    end;
  WGLMakeCurrent(FireContext.FormHDC, FireContext.ORC);
  GLClearColor(0, 0, 0, 1);
  GLEnable(GL_BLEND);
  GLBlendFunc(GL_SRC_ALPHA, GL_One) ;
  FireContext.Status := 1;
end;

//
// Change Fire
//
procedure FireEvent;
const ddx: array [0..Pred(7)] of Integer = (
                                  -30,-20,-10,0,10,20,30);
const ddy: array [0..Pred(7)] of Integer = (
                                  0,12,18,24,18,12,0);
var i, j, k: Integer;
begin
  if FireContext.TimerIndex<5 then
    Inc(FireContext.TimerIndex)
  else
    if FireContext.TimerCur<100 then
      Inc(FireContext.TimerCur);
  GLClear(GL_COLOR_BUFFER_BIT);
  GLLoadIdentity;
  GLScalef(0.03, 0.03, 0.03);
  if FireContext.TimerCur<1 then Exit;
  for i := 0 to Pred(FireContext.TimerCur) do
    begin
      if (FireContext.Data[i].lix=0) or (FireContext.Data[i].lex>=FireContext.Data[i].lix) then
        with FireContext.Data[i] do
          begin
            x := 0;
            y := -32;
            dx := random*0.5-0.25;
            dy := 0.55+random*0.3;
            lix := 30+random(20);
            lex := 0;
          end;
      Inc(FireContext.Data[i].lex);
      FireContext.Data[i].dy := FireContext.Data[i].dy*1.005;
      FireContext.Data[i].x := FireContext.Data[i].x+FireContext.Data[i].dx;
      FireContext.Data[i].y := FireContext.Data[i].y+FireContext.Data[i].dy;
      for k := 0 to Pred(Length(ddx)) do
        begin
          GLPopMatrix;
          GLPushMatrix;
          GLTranslatef(FireContext.Data[i].x+ddx[k], FireContext.Data[i].y+ddy[k], 0);
          if (FireContext.Data[i].lix / FireContext.Data[i].lex)<2 then
            j := 2 else j := 0;
          FE_Glow(Fire_GlowCols[j, 0], Fire_GlowCols[j, 1], Fire_GlowCols[j, 2], Fire_GlowCols[j, 3],
              Fire_GlowCols[j+1, 0], Fire_GlowCols[j+1, 1], Fire_GlowCols[j+1, 2], Fire_GlowCols[j+1, 3], (j+1)*2);
        end;
    end;
  SwapBuffers(FireContext.FormHDC);
end;
//
procedure FE_Glow(Const cr, cg, cb, ca, rr, rg, rb, ra, Size: GLFloat);
begin
  GLScalef(Size+1, Size+1, Size+1);
  GLBegin(GL_TRIANGLE_FAN);
  GLColor4f(cr, cg, cb, ca);
  GLVertex2f(0, 0);
  GLColor4f(rr, rg, rb, ra);
  GLVertex2f(0, 1);
  GLVertex2f(-0.866025403, 0.5);
  GLVertex2f(-0.866025403, -0.5);
  GLVertex2f(0, -1);
  GLVertex2f(0.866025403, -0.5);
  GLVertex2f(0.866025403, 0.5);
  GLVertex2f(0, 1);
  GLEnd;
end;

//
// Stop Fire
//
procedure FireStop(Const hForm: THandle);
begin
  if FireContext.Status=0 then Exit;    // Sanity
  WGLMakeCurrent(0, 0);
  if FireContext.FormHDC<>0 then
    ReleaseDC(hForm, FireContext.FormHDC);
  if FireContext.ORC<>0 then
    WGLDeleteContext(FireContext.ORC);
  FireContext.Status := 0;
end;
  {$IFEND}

end.

