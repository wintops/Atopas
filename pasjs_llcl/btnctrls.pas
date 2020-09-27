{
  MIT License

  Copyright (c) 2018 Hélio S. Ribeiro and Anderson J. Gado da Silva

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
}
unit BtnCtrls;

{$I pas2js_widget.inc}

interface

uses
  Classes,
  SysUtils,
  Types,
  Web,
  Graphics,
  Controls,
  StdCtrls;

type

  { TCustomFileButton }

  TCustomFileButton = class(TWinControl)
  private
    FFileSelect: TJSHTMLFile;
    FFilter: string;
    FOnChange: TNotifyEvent;
    FOpendDialogElement: TJSHTMLInputElement;
    procedure SetFilter(AValue: string);         
  protected
    procedure Change; virtual;
  protected
    property OpendDialogElement: TJSHTMLInputElement read FOpendDialogElement;
    property OnChange: TNotifyEvent read FOnChange write FOnChange;
  protected
    function HandleClick(AEvent: TJSMouseEvent): boolean; override;
    function HandleChange(AEvent: TEventListenerEvent): boolean; virtual;
  protected
    procedure Changed; override;
    function CreateHandleElement: TJSHTMLElement; override;
    function CreateOpendDialogElement: TJSHTMLInputElement; virtual;
    function CheckChildClassAllowed(AChildClass: TClass): boolean; override;
  protected
    class function GetControlClassDefaultSize: TSize; override;
  public
    constructor Create(AOwner: TComponent); override;
    destructor Destroy; override;
    procedure AdjustSize; override;
    property FileSelected: TJSHTMLFile read FFileSelect;
    property Filter: string read FFilter write SetFilter;
  end;

implementation

uses
  LCLStrConsts;

{ TCustomFileButton }

procedure TCustomFileButton.SetFilter(AValue: string);
begin
  if (FFilter <> AValue) then
  begin
    FFilter := AValue;
    Changed;
  end;
end;

procedure TCustomFileButton.Change;
begin
  if (Assigned(FOnChange)) then
  begin
    FOnChange(Self);
  end;
end;

function TCustomFileButton.HandleClick(AEvent: TJSMouseEvent): boolean;
begin
  Result := inherited HandleClick(AEvent);
  if (Assigned(OpendDialogElement)) then
  begin
    OpendDialogElement.Click;
  end;
end;

function TCustomFileButton.HandleChange(AEvent: TEventListenerEvent): boolean;
var
  VFile: TJSHTMLFile;
  VList: TJSHTMLFileList;
begin
  if (AEvent.Target is TJSHTMLInputElement) then
  begin
    VList := TJSHTMLInputElement(AEvent.Target).Files;
    if (VList.Length = 0) then
    begin
      FFileSelect := nil;
      Caption := rsFileButtonNoFileSelected;
      Changed;
      Exit(False);
    end;
    VFile := VList[0];
    FFileSelect := VFile;
    Caption := VFile.Name;
    Hint:= VFile.Name;
    Changed;          
    Change;
    Result := True;
  end;
end;

procedure TCustomFileButton.Changed;
begin
  inherited Changed;
  if (not IsUpdating) and not (csLoading in ComponentState) then
  begin
    with HandleElement do
    begin
      /// Normalize
      Style.SetProperty('padding', '0');
      /// Caption
      InnerHTML := Self.Caption;
    end;
    /// OpendDialog
    if (Assigned(OpendDialogElement)) then
    begin
      with OpendDialogElement do
      begin
        /// Filter
        Accept := FFilter;
        /// Type
        _Type := 'file';
      end;
    end;
  end;
end;

function TCustomFileButton.CreateHandleElement: TJSHTMLElement;
begin
  Result := TJSHTMLElement(Document.CreateElement('button'));
end;

function TCustomFileButton.CreateOpendDialogElement: TJSHTMLInputElement;
begin
  Result := TJSHTMLInputElement(HandleElement.AppendChild(Document.CreateElement('input')));
end;

{$push}
{$hints off}

function TCustomFileButton.CheckChildClassAllowed(AChildClass: TClass): boolean;
begin
  Result := False;
end;

{$pop}

class function TCustomFileButton.GetControlClassDefaultSize: TSize;
begin
  Result.Cx := 80;
  Result.Cy := 25;
end;

constructor TCustomFileButton.Create(AOwner: TComponent);
begin
  inherited Create(AOwner);
  FOpendDialogElement := CreateOpendDialogElement;
  FOpendDialogElement.AddEventListener('change', @HandleChange);
  FFilter := '';
  FFileSelect := nil;
  BeginUpdate;
  try
    Caption := rsFileButtonNoFileSelected;
    Hint := Caption;
    with GetControlClassDefaultSize do
    begin
      SetBounds(0, 0, Cx, Cy);
    end;
  finally
    EndUpdate;
  end;
end;

destructor TCustomFileButton.Destroy;
begin
  if (Assigned(OpendDialogElement)) then
  begin
    OpendDialogElement.RemoveEventListener('change', @HandleChange);
  end;
  inherited Destroy;
end;

procedure TCustomFileButton.AdjustSize;
var
  VSize: TSize;
begin
  inherited AdjustSize;
  VSize := Font.TextExtent(Caption);
  SetBounds(Left, Top, VSize.Cx, VSize.Cy);
end;

end.


