{
 /***************************************************************************
                                  maskutils.pas
                                  ---------

 ***************************************************************************/

 *****************************************************************************
 *                                                                           *
 *  This file is part of the Lazarus Component Library (LCL)                 *
 *                                                                           *
 *  See the file COPYING.modifiedLGPL, included in this distribution,        *
 *  for details about the copyright.                                         *
 *                                                                           *
 *  This program is distributed in the hope that it will be useful,          *
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of           *
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.                     *
 *                                                                           *
 *****************************************************************************


 Author: Boguslaw Brandys

 Abstract:
    FormatMaskText implementation

}
unit MaskUtils;

{$mode objfpc}{$H+}

interface

uses
  Classes,
  SysUtils,
  JS;

type
  TStepState =
    (
    stLeading,  //? not used currently
    stUpper,    //use uppercase
    stLower,    //use lowercase
    stSpecial,  //use escape character
    stArbitrary //put arbitrary character
    );
  TParseState = set of TStepState;

  { TMaskUtils }

  TMaskUtils = class
  private
    FValue: string;
    FSourcePosition: NativeInt;
    FPosition: NativeInt;
    FEditMask: string;
    FMask: string;
    FSourceVal: string;
    FExitVal: string;
    FMatched: boolean;
    FMissChar: char;
    FState: TParseState;
    procedure EvaluateExit;
    procedure EvaluateMissing;
    procedure DoFillRest;
    procedure DoLiteral;
    procedure DoLiteralInputMask;
    procedure DoToken;
    procedure DoTokenInputMask;
    procedure DoUpper;
    procedure DoLower;
    procedure DoNumeric(ARequired: boolean);
    procedure DoAlpha(ARequired: boolean);
    procedure DoAlphaNumeric(ARequired: boolean);
    procedure DoNumericPlusMinus;
    procedure DoArbitrary(ARequired: boolean);
    procedure DoTime;
    procedure DoDate;
    function GetInputMask: string;
    procedure SetMask(const AValue: string);
    procedure SetValue(const AValue: string);
  protected
    procedure RaiseError;
    procedure ExtractMask;
    function MaskPtr: char;
    function SourcePtr: char;
    property Matched: boolean read FMatched write FMatched;
    property MissChar: char read FMissChar write FMissChar;
  public
    function ValidateInput: string;
    property Mask: string read FEditMask write SetMask;
    property Value: string read FValue write SetValue;
    property InputMask: string read GetInputMask;
  end;

function FormatMaskText(const AEditMask: string; const AValue: string): string;
function FormatMaskInput(const AEditMask: string): string;
function MaskDoFormatText(const AEditMask: string; const AValue: string; ABlank: char): string;

implementation

resourcestring
  exInvalidMaskValue = 'FormatMaskText function failed!';

function IsNumeric(const C: char): boolean;
begin
  Result := (C in ['0'..'9']);
end;

function IsAlpha(const C: char): boolean;
begin
  Result := (C in ['a'..'z', 'A'..'Z']);
end;

function IsToken(const C: char): boolean;
begin
  Result := C in ['!', '>', '<', '\', 'L', 'l', 'A', 'a', 'C', 'c', '0', '9', '#', ':', '/', ';'];
end;

function FormatMaskText(const AEditMask: string; const AValue: string): string;
var
  VMask: TMaskUtils;
begin
  VMask := TMaskUtils.Create;
  try
    VMask.Mask := AEditMask;
    VMask.Value := AValue;
    Result := VMask.ValidateInput;
  finally
    VMask.Free;
  end;
end;

function FormatMaskInput(const AEditMask: string): string;
var
  VMask: TMaskUtils;
begin
  VMask := TMaskUtils.Create;
  try
    VMask.Mask := AEditMask;
    Result := VMask.ValidateInput;
  finally
    VMask.Free;
  end;
end;

function MaskDoFormatText(const AEditMask: string; const AValue: string; ABlank: char): string;
var
  VMask: TMaskUtils;
begin
  VMask := TMaskUtils.Create;
  try
    VMask.Mask := AEditMask;
    VMask.Value := AValue;
    VMask.Matched := False;
    VMask.MissChar := ABlank;
    Result := VMask.ValidateInput;
  finally
    VMask.Free;
  end;
end;

{ TMaskUtils }

procedure TMaskUtils.EvaluateExit;
begin
  if (stUpper in FState) then
  begin
    FExitVal := FExitVal + UpperCase(SourcePtr);
  end
  else
  if (stLower in FState) then
  begin
    FExitVal := FExitVal + LowerCase(SourcePtr);
  end
  else
  begin
    FExitVal := FExitVal + SourcePtr;
  end;
  Inc(FSourcePosition);
end;

procedure TMaskUtils.EvaluateMissing;
begin
  FExitVal := FExitVal + MissChar;
  Inc(FSourcePosition);
end;

procedure TMaskUtils.DoFillRest;
var
  I: NativeInt;
begin
  {Fill rest of exit value because source is longer then mask
   and the last mask character permit arbitrary char.
   Compatibility with delphi}
  if (stArbitrary in FState) then
  begin
    I := Length(FSourceVal) - Length(FMask);
    while I >= 0 do
    begin
      EvaluateExit;
      Dec(I);
    end;
  end;
end;

procedure TMaskUtils.DoLiteral;
begin
  if (stSpecial in FState) then
  begin
    Exclude(FState, stSpecial);
  end;
  if (Matched) and (MaskPtr <> SourcePtr) then
  begin
    RaiseError;
  end;
  if (Matched) or not (IsAlpha(SourcePtr) or IsNumeric(SourcePtr)) then
  begin
    Inc(FSourcePosition);
  end;
  FExitVal := FExitVal + MaskPtr;
end;

procedure TMaskUtils.DoLiteralInputMask;
begin
  if (stSpecial in FState) then
  begin
    Exclude(FState, stSpecial);
  end;
  FExitVal := FExitVal + MaskPtr;
end;

procedure TMaskUtils.DoToken;
begin
  if (stArbitrary in FState) then
  begin
    Exclude(FState, stArbitrary);
  end;
  case MaskPtr of
    '!': Include(FState, stLeading);
    '>': DoUpper;
    '<': DoLower;
    '\': Include(FState, stSpecial);
    'L': DoAlpha(True);
    'l': DoAlpha(False);
    'A': DoAlphaNumeric(True);
    'a': DoAlphaNumeric(False);
    'C': DoArbitrary(True);
    'c': DoArbitrary(False);
    '0': DoNumeric(True);
    '9': DoNumeric(False);
    '#': DoNumericPlusMinus;
    ':': DoTime;
    '/': DoDate;
  end;
end;

procedure TMaskUtils.DoTokenInputMask;
begin
  case MaskPtr of
    '!',
    '>',
    '<': ;{nothing}
    '\': Include(FState, stSpecial);
    'L',
    'l',
    'A',
    'a',
    'C',
    'c',
    '0',
    '9',
    '#': FExitVal := FExitVal + MissChar;
    ':': DoTime;
    '/': DoDate;
  end;
end;

procedure TMaskUtils.DoUpper;
begin
  if (stLower in FState) then
  begin
    Exclude(FState, stLower);
  end
  else
  begin
    Include(FState, stUpper);
  end;
  {Ugly check for '<>' sequence. Is that required ?}
  if (FPosition > 1) and (FMask[FPosition - 1] = '<') then
  begin
    Exclude(FState, stLower);
    Exclude(FState, stUpper);
  end;
end;

procedure TMaskUtils.DoLower;
begin
  if (stUpper in FState) then
  begin
    Exclude(FState, stUpper);
  end
  else
  begin
    Include(FState, stLower);
  end;
end;

procedure TMaskUtils.DoNumeric(ARequired: boolean);
begin
  if (ARequired) then
  begin
    if (IsNumeric(SourcePtr)) then
    begin
      EvaluateExit;
    end
    else
    begin
      RaiseError;
    end;
  end
  else
  begin
    if (IsNumeric(SourcePtr)) then
    begin
      EvaluateExit;
    end
    else
    begin
      EvaluateMissing;
    end;
  end;
end;

procedure TMaskUtils.DoAlpha(ARequired: boolean);
begin
  if (ARequired) then
  begin
    if IsAlpha(SourcePtr) then
    begin
      EvaluateExit;
    end
    else
    begin
      RaiseError;
    end;
  end
  else
  begin
    if (IsAlpha(SourcePtr)) then
    begin
      EvaluateExit;
    end
    else
    begin
      EvaluateMissing;
    end;
  end;
end;

procedure TMaskUtils.DoAlphaNumeric(ARequired: boolean);
begin
  if (ARequired) then
  begin
    if (IsAlpha(SourcePtr) or IsNumeric(SourcePtr)) then
    begin
      EvaluateExit;
    end
    else
    begin
      RaiseError;
    end;
  end
  else
  begin
    if (IsAlpha(SourcePtr) or IsNumeric(SourcePtr)) then
    begin
      EvaluateExit;
    end
    else
    begin
      EvaluateMissing;
    end;
  end;
end;

procedure TMaskUtils.DoNumericPlusMinus;
begin
  if (IsNumeric(SourcePtr)) or
    (SourcePtr = '+') or
    (SourcePtr = '-') then
  begin
    EvaluateExit;
  end
  else
  begin
    EvaluateMissing;
  end;
end;

procedure TMaskUtils.DoArbitrary(ARequired: boolean);
begin
  Include(FState, stArbitrary);
  if (ARequired) then
  begin
    if (FPosition > Length(FSourceVal)) then
    begin
      RaiseError;
    end;
  end
  else
  begin
    if (FPosition > Length(FSourceVal)) then
    begin
      EvaluateMissing;
    end
    else
    begin
      EvaluateExit;
    end;
  end;
end;

procedure TMaskUtils.DoTime;
begin
  FExitVal := FExitVal + TimeSeparator;
end;

procedure TMaskUtils.DoDate;
begin
  FExitVal := FExitVal + DateSeparator;
end;

function TMaskUtils.GetInputMask: string;
begin
  ///
  FExitVal := '';
  FPosition := 1;
  FState := [];

  /// Process}
  while (FPosition <= Length(FMask)) do
  begin
    if (IsToken(MaskPtr) and not (stSpecial in FState)) then
    begin
      DoTokenInputMask;
    end
    else
    begin
      DoLiteralInputMask;
    end;
    Inc(FPosition);
  end;
  Result := FExitVal;
end;

procedure TMaskUtils.SetMask(const AValue: string);
begin
  if (FEditMask <> AValue) then
  begin
    FEditMask := AValue;
    ExtractMask;
  end;
end;

procedure TMaskUtils.SetValue(const AValue: string);
begin
  if (FSourceVal <> AValue) then
  begin
    FSourceVal := AValue;
  end;
end;

procedure TMaskUtils.RaiseError;
begin
  if (FSourcePosition > Length(FSourceVal)) then
  begin
    EvaluateMissing;
  end
  else
  begin
    raise TJSError.New(exInvalidMaskValue);
  end;
end;

procedure TMaskUtils.ExtractMask;
var
  P: NativeInt;
  S: string;
begin
  FMissChar := #32;
  FMatched := False;
  S := Copy(FEditMask, 1, Length(FEditMask));
  P := (TJSString(S).LastIndexOf(';') + 1);
  if (P = 0) then
  begin
    FMask := S;
  end
  else
  begin
    FMissChar := Copy(s, P + 1, 1)[1];
    Delete(S, P, 2);
    P := (TJSString(S).LastIndexOf(';') + 1);
    FMatched := (Copy(s, P + 1, 1) <> '0');
    Delete(S, P, 2);
    FMask := S;
  end;
end;

function TMaskUtils.MaskPtr: char;
begin
  Result := FMask[FPosition];
end;

function TMaskUtils.SourcePtr: char;
begin
  if (FSourcePosition <= Length(FSourceVal)) then
  begin
    Result := FSourceVal[FSourcePosition];
  end
  else
  begin
    Result := #0;
  end;
end;

function TMaskUtils.ValidateInput: string;
begin
  /// Prepare
  FExitVal := '';
  FPosition := 1;
  FSourcePosition := 1;
  FState := [];

  /// Process
  while (FPosition <= Length(FMask)) do
  begin
    if (IsToken(MaskPtr) and not (stSpecial in FState)) then
    begin
      DoToken;
    end
    else
    begin
      DoLiteral;
    end;
    Inc(FPosition);
  end;
  DoFillRest;
  Result := FExitVal;
end;


end.
