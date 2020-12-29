unit Unit1;

//
// A very basic integer calculator
//   (Indicate a valid search path for the LLCL files before compiling)
//
//    (Program icon from "FatCow Farm Fresh Icons"
//        http://www.fatcow.com/free-icons)
//

// Copyright (c) 2015-2016 ChrisF
// Distributed under the terms of the MIT license: see LICENSE.txt

{$IFDEF FPC}
  {$mode objfpc}{$H+}
//  {$mode delphi}
{$ENDIF}

//------------------------------------------------------------------------------

interface

  uses  SysUtils, Classes, Controls,  Forms,
{$IFDEF PASJS}
  WebCtrls, WebCtrlsMore
{$ELSE}
    StdCtrls
{$IFNDEF FPC}  ,XPMan {$ENDIF}

{$ENDIF}
    ;



type

  { TForm1 }

  TForm1 = class(TForm)
{$IFNDEF FPC}
    XPManifest1: TXPManifest;
{$ENDIF}
    Edit1: TEdit;
    Button1: TButton;
    Button2: TButton;
    Button3: TButton;
    Button4: TButton;
    Button5: TButton;
    Button6: TButton;
    Button7: TButton;
    Button8: TButton;
    Button9: TButton;
    Button10: TButton;
    Button11: TButton;
    Button12: TButton;
    Button13: TButton;
    Button14: TButton;
    Button15: TButton;
    Button16: TButton;
    HiddenButton: TButton;
    procedure Button1Click(Sender: TObject);
    procedure Button2Click(Sender: TObject);
    procedure Button3Click(Sender: TObject);
    procedure Button4Click(Sender: TObject);
    procedure Button5Click(Sender: TObject);
    procedure Button6Click(Sender: TObject);
    procedure Button7Click(Sender: TObject);
    procedure Button8Click(Sender: TObject);
    procedure Button9Click(Sender: TObject);
    procedure Button10Click(Sender: TObject);
    procedure Button11Click(Sender: TObject);
    procedure Button12Click(Sender: TObject);
    procedure Button13Click(Sender: TObject);
    procedure Button14Click(Sender: TObject);
    procedure Button15Click(Sender: TObject);
    procedure Button16Click(Sender: TObject);
    procedure FormCreate(Sender: TObject);
    procedure Edit1MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: {$IFDEF PASJS}NativeInt{$ELSE}Integer{$ENDIF});
    procedure FormKeyDown(Sender: TObject; var Key:{$IFDEF PASJS}NativeInt{$ELSE}Word{$ENDIF} ; Shift: TShiftState);
    procedure HiddenButtonClick(Sender: TObject);
    procedure FormKeyPress(Sender: TObject; var Key: Char);
  private
    { private declarations }
  // Workaround for Delphi (TEdit doesn't have any Alignment property)
    {$IFNDEF PASJS}
  {$IFNDEF FPC}
  {$IF Declared(LLCLVersion)}
  protected
    procedure CreateParams(var Params : TCreateParams); override;
  {$IFEND}
  {$ENDIF}
   {$ENDIF}
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

type
  TOperations = (toNone, toDiv, toMul, toMin, toAdd, toEqual);

type CalcContext_Struct = record    // Context for Calculator
  CurNumVal:      Int64;
  StackNumVal:    Int64;
  StackOperation: TOperations;
  EqualDone:      Boolean;
  IsError:        Boolean;
end;

var
  CalcContext:    CalcContext_Struct;

procedure Empties(); forward;
procedure DisplayNumVal(); forward;
procedure ErrorInput(); forward;
procedure Computes(Oper: TOperations); forward;
procedure ComputeError(Const ErrMess: string); forward;
function  IsMulOverflow(Const Val1, Val2: Int64; Var Res: Int64): Boolean; forward;

procedure CAddDigit(Value: Char); forward;
procedure CRemDigit(); forward;
procedure CClear; forward;
procedure CEqual; forward;
procedure CDiv; forward;
procedure CMul; forward;
procedure CMin; forward;
procedure CAdd; forward;

//------------------------------------------------------------------------------

// Workaround for Delphi (TEdit doesn't have any Alignment property)
{$IFNDEF PASJS}
{$IFNDEF FPC}
{$IF Declared(LLCLVersion)}
procedure TForm1.CreateParams(var Params : TCreateParams);
begin
    inherited;
    Form1.Edit1.Alignment:=taRightJustify;
end;
{$IFEND}
{$ENDIF}
{$ENDIF}

procedure TForm1.FormCreate(Sender: TObject);
begin
  // (Don't call Clear or DisplayNumVal because of SetFocus)
  Empties();
  Form1.Edit1.Text:='0';
end;

procedure TForm1.Button1Click(Sender: TObject);
begin
  CAddDigit('1');
end;

procedure TForm1.Button2Click(Sender: TObject);
begin
  CAddDigit('2');
end;

procedure TForm1.Button3Click(Sender: TObject);
begin
  CAddDigit('3');
end;

procedure TForm1.Button4Click(Sender: TObject);
begin
  CAddDigit('4');
end;

procedure TForm1.Button5Click(Sender: TObject);
begin
  CAddDigit('5');
end;

procedure TForm1.Button6Click(Sender: TObject);
begin
  CAddDigit('6');
end;

procedure TForm1.Button7Click(Sender: TObject);
begin
  CAddDigit('7');
end;

procedure TForm1.Button8Click(Sender: TObject);
begin
  CAddDigit('8');
end;

procedure TForm1.Button9Click(Sender: TObject);
begin
  CAddDigit('9');
end;

procedure TForm1.Button10Click(Sender: TObject);
begin
  CAddDigit('0');
end;

procedure TForm1.Button11Click(Sender: TObject);
begin
  CClear();   // 'C' = Clear
end;

procedure TForm1.Button12Click(Sender: TObject);
begin
  CEqual();   // '='
end;

procedure TForm1.Button13Click(Sender: TObject);
begin
  CDiv();     // '/'
end;

procedure TForm1.Button14Click(Sender: TObject);
begin
  CMul();   // '*'
end;

procedure TForm1.Button15Click(Sender: TObject);
begin
  CMin();   // '-'
end;

procedure TForm1.Button16Click(Sender: TObject);
begin
  CAdd();   // '+'
end;

procedure TForm1.Edit1MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: {$IFDEF PASJS}NativeInt{$ELSE}Integer{$ENDIF});
begin

  HiddenButton.SetFocus();

end;

procedure TForm1.FormKeyDown(Sender: TObject; var Key: {$IFDEF PASJS}NativeInt{$ELSE}Word{$ENDIF} ; Shift: TShiftState
  );
begin
   {$IFDEF PASJS}
   case Key of
   8:           CRemDigit();
   9:key:=0;
    27:
     CClear();
   end;
   {$ENDIF}
end;

procedure TForm1.HiddenButtonClick(Sender: TObject);
begin
  // HiddenButton has 'Default' property,
  //    so processes here the 'Enter' key
  // Note: HiddenButton is not really hidden (i.e. Visible=False),
  //    but it's located out of the visible part of the form
  CEqual();
end;

procedure TForm1.FormKeyPress(Sender: TObject; var Key: Char);
begin
  // Processes direct keyboard inputs
  case Key of
  // Calculator keys
  '0'..'9':         CAddDigit(Key);
  'c','C':          CClear();
  '=':              CEqual();
  '/':              CDiv();
  '*':              CMul();
  '-':              CMin();
  '+':              CAdd();
  // Non visible keys
  Chr(13):
        {$IFDEF PASJS}
        CEqual()
      {$ENDIF}
      ;           // Enter - ignored here because Delphi<>FPC
                                  //    (Processed with HiddenButton)
  {$IFNDEF PASJS}
  Chr(8):           CRemDigit();  // Backspace
  Chr(27):          CClear();     // Escape = Clear
  Chr(9):           ;             // (Shift-)Tab -> ignored
  {$ENDIF}
  // Other keys
  else              ErrorInput(); // Error
  end;
end;

//------------------------------------------------------------------------------

//
// Clear Context
//
procedure Empties();
begin
  {$IFDEF PASJS}
  asm
  for (var member in $impl.CalcContext) $impl.CalcContext[member]=0;
  end;
  {$ELSE}
  FillChar(CalcContext,SizeOf(CalcContext),0);

   {$ENDIF}
end;

//
//  Displays (in Edit1) current numeric value
//
procedure DisplayNumVal();
begin
  Form1.Edit1.Text:=IntToStr(CalcContext.CurNumVal);
  Form1.HiddenButton.SetFocus;
end;

//
// Input error
//
procedure ErrorInput();
begin
   {$IFNDEF PASJS}
  Beep();
    {$ENDIF}
  Form1.HiddenButton.SetFocus;

end;

//
// Makes one compute (/,*,-,+ or =)
//
procedure Computes(Oper: TOperations);
var NumVal,StackVal: Int64;
var StackOper: TOperations;
var IsOverflow: Boolean;
begin
  if CalcContext.IsError then
    begin
      ErrorInput();
      Exit;
    end;
  // Loads values
  if CalcContext.EqualDone then
    begin
      // Swaps them
      NumVal:=CalcContext.StackNumVal;
      StackVal:=CalcContext.CurNumVal;
    end
  else
    begin
      NumVal:=CalcContext.CurNumVal;
      StackVal:=CalcContext.StackNumVal;
    end;
  // Computes with values
  StackOper:=CalcContext.StackOperation;
  if (StackOper<>toNone) and ((not CalcContext.EqualDone) or (Oper=toEqual)) then
    begin
      IsOverflow:=False;
      case StackOper of
      toDiv:
        begin
          if NumVal=0 then
            begin
              ComputeError('Division by zero');
              Exit;
            end;
          CalcContext.CurNumVal:=StackVal div NumVal;
          // No overflow for division
        end;
      toMul:
        begin
          IsOverFlow:=IsMulOverflow(NumVal,StackVal,CalcContext.CurNumVal);
        end;
      toMin:
        begin
          CalcContext.CurNumVal:=StackVal - NumVal;
          IsOverflow:=((CalcContext.CurNumVal>0) and
                        ((NumVal>0) and (StackVal<0)));
        end;
      toAdd:
        begin
          CalcContext.CurNumVal:=StackVal + NumVal;
          IsOverflow:=((CalcContext.CurNumVal<0) and
                        ((NumVal>0) and (StackVal>0)));
        end;
      end;
      // Overflow ?
      if IsOverflow then
        begin
          ComputeError('Overflow error');
          Exit;
        end;
    end;
  // Displays result
  DisplayNumVal();
  // Update Context flags
  if Oper=toEqual then
    begin
      if not CalcContext.EqualDone then
        CalcContext.StackNumVal:=NumVal;
      CalcContext.EqualDone:=True;
    end
  else
    begin
      CalcContext.StackNumVal:=CalcContext.CurNumVal;
      CalcContext.CurNumVal:=0;
      CalcContext.StackOperation:=Oper;
      CalcContext.EqualDone:=False;
    end;
end;

//
// Error when computing
//
procedure ComputeError(Const ErrMess: string);
begin
  ErrorInput();
  Empties();
  Form1.Edit1.Text:=ErrMess;
  CalcContext.IsError:=True;
end;

//
// Multiplication with test for overflow
//
function  IsMulOverflow(Const Val1, Val2: Int64; Var Res: Int64): Boolean;
begin
  result:=False;
  if (Val1=0) or (Val2=0) then
    Res:=0
  else
    begin
      result:=(Abs(Val1)>(High(Int64) div Abs(Val2)));
      if not result then
        begin
          Res:=Val1*Val2;
          result:=((Res<0) xor ((Val1<0) xor (Val2<0)));
        end;
    end;
end;

//------------------------------------------------------------------------------

//
// Adds one digit to the current numeric value
//
procedure CAddDigit(Value: Char);
var NumVal,i1: Int64;
var IsOverflow: Boolean;
begin
  if CalcContext.EqualDone then
    Empties();
  CalcContext.IsError:=False;
  NumVal:=CalcContext.CurNumVal;
  IsOverflow:=IsMulOverflow(NumVal,10,i1);
  if not IsOverflow then
    begin
      NumVal:=i1+(Ord(Value)-Ord(Char('0')));
      IsOverflow:=((NumVal<0) and (i1>0));
    end;
  if IsOverflow then
    ErrorInput()
  else
    begin
      CalcContext.CurNumVal:=NumVal;
      DisplayNumVal();
    end;
end;

//
// Removes one digit from the current numeric value
//
procedure CRemDigit();
var NumVal: Int64;
begin
  NumVal:=CalcContext.CurNumVal;
  if CalcContext.EqualDone then
    Empties();
  CalcContext.IsError:=False;
  CalcContext.CurNumVal:=NumVal div 10;
  DisplayNumVal();
end;

//
// Clears both context for the Calculator and display
//
procedure CClear;
begin
  Empties();
  DisplayNumVal();
end;

{ Operations  }

procedure CEqual;
begin
  Computes(toEqual);
end;

procedure CDiv;
begin
  Computes(toDiv);
end;

procedure CMul;
begin
  Computes(toMul);
end;

procedure CMin;
begin
  Computes(toMin);
end;

procedure CAdd;
begin
  Computes(toAdd);
end;

end.

