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
unit ExtCtrls;

{$I pas2js_widget.inc}

interface

uses
  Classes,
  SysUtils,
  Types,
  Web,
  Graphics,
  Controls;

type

  { TCustomImage }

  TCustomImage = class(TCustomControl)
  private
    FCenter: boolean;
    FPicture: TPicture;
    FProportional: boolean;
    FStretch: boolean;
    FOnPictureChanged: TNotifyEvent;
    FStretchInEnabled: boolean;
    FStretchOutEnabled: boolean;
    FTransparent: boolean;
    procedure SetCenter(AValue: boolean);
    procedure SetPicture(AValue: TPicture);
    procedure SetProportiona(AValue: boolean);
    procedure SetStretch(AValue: boolean);
    procedure SetStretchInEnabled(AValue: boolean);
    procedure SetStretchOutEnabled(AValue: boolean);
    procedure SetTransparent(AValue: boolean);
  protected
    procedure Changed; override;
    function CreateHandleElement: TJSHTMLElement; override;
    function CheckChildClassAllowed(AChildClass: TClass): boolean; override;
    procedure PictureChanged(Sender: TObject); virtual;
  protected
    class function GetControlClassDefaultSize: TSize; override;
  public
    constructor Create(AOwner: TComponent); override;
  public
    property Center: boolean read FCenter write SetCenter;
    property Picture: TPicture read FPicture write SetPicture;
    property Proportional: boolean read FProportional write SetProportiona;
    property Stretch: boolean read FStretch write SetStretch;
    property StretchOutEnabled: boolean read FStretchOutEnabled write SetStretchOutEnabled;
    property StretchInEnabled: boolean read FStretchInEnabled write SetStretchInEnabled;
    property Transparent: boolean read FTransparent write SetTransparent;
    property OnPictureChanged: TNotifyEvent read FOnPictureChanged write FOnPictureChanged;
  end;

  TPanelBevel = TBevelCut;
  TBevelWidth = 1..Maxint;

  { TCustomPanel }

  TCustomPanel = class(TCustomControl)
  private
    FAlignment: TAlignment;
    FBevelColor: TColor;
    FBevelInner: TPanelBevel;
    FBevelOuter: TPanelBevel;
    FBevelWidth: TBevelWidth;
    FContentElement: TJSHTMLTableElement;
    FLayout: TTextLayout;
    FWordWrap: boolean;
    procedure SetAlignment(AValue: TAlignment);
    procedure SetBevelColor(AValue: TColor);
    procedure SetBevelInner(AValue: TPanelBevel);
    procedure SetBevelOuter(AValue: TPanelBevel);
    procedure SetBevelWidth(AValue: TBevelWidth);
    procedure SetLayout(AValue: TTextLayout);
    procedure SetWordWrap(AValue: boolean);
  protected
    property ContentElement: TJSHTMLTableElement read FContentElement;
    property Layout: TTextLayout read FLayout write SetLayout;
    property WordWrap: boolean read FWordWrap write SetWordWrap;
  protected
    procedure Changed; override;
    function CreateHandleElement: TJSHTMLElement; override;
    function CreateContentElement: TJSHTMLTableElement; virtual;
  protected
    class function GetControlClassDefaultSize: TSize; override;
  public
    constructor Create(AOwner: TComponent); override;
  public
    property Alignment: TAlignment read FAlignment write SetAlignment;
    property BevelColor: TColor read FBevelColor write SetBevelColor;
    property BevelInner: TPanelBevel read FBevelInner write SetBevelInner;
    property BevelOuter: TPanelBevel read FBevelOuter write SetBevelOuter;
    property BevelWidth: TBevelWidth read FBevelWidth write SetBevelWidth;
  end;

implementation

{ TCustomImage }

procedure TCustomImage.SetCenter(AValue: boolean);
begin
  if (FCenter <> AValue) then
  begin
    FCenter := AValue;
    PictureChanged(Self);
  end;
end;

procedure TCustomImage.SetPicture(AValue: TPicture);
begin
  if (not FPicture.IsEqual(AValue)) then
  begin
    FPicture.Assign(AValue);
  end;
end;

procedure TCustomImage.SetProportiona(AValue: boolean);
begin
  if (FProportional <> AValue) then
  begin
    FProportional := AValue;
    PictureChanged(Self);
  end;
end;

procedure TCustomImage.SetStretch(AValue: boolean);
begin
  if (FStretch <> AValue) then
  begin
    FStretch := AValue;
    PictureChanged(Self);
  end;
end;

procedure TCustomImage.SetStretchInEnabled(AValue: boolean);
begin
  if (FStretchInEnabled <> AValue) then;
  begin
    FStretchInEnabled := AValue;
    PictureChanged(Self);
  end;
end;

procedure TCustomImage.SetStretchOutEnabled(AValue: boolean);
begin
  if (FStretchOutEnabled <> AValue) then
  begin
    FStretchOutEnabled := AValue;
    PictureChanged(Self);
  end;
end;

procedure TCustomImage.SetTransparent(AValue: boolean);
begin
  if (FTransparent = AValue) then
  begin
    FTransparent := AValue;
  end;
end;

procedure TCustomImage.Changed;
begin
  inherited Changed;
  if (not IsUpdating) then
  begin
    with HandleElement do
    begin
      /// Focus highlight
      Style.SetProperty('outline', 'none');
      /// Load image
      Style.SetProperty('background-image', FPicture.Data);
      Style.SetProperty('background-repeat', 'no-repeat');
      /// Center
      if (FCenter) then
      begin
        Style.SetProperty('background-position', 'center  center');
      end
      else
      begin
        Style.RemoveProperty('background-position');
      end;
      /// Proportional
      if (FProportional) then
      begin
        Style.SetProperty('background-size', 'contain');
      end
      else
      /// Stretch
      if (FStretch) then
      begin
        if (FStretchInEnabled) and (FStretchOutEnabled) then
        begin
          Style.SetProperty('background-size', '100% 100%');
        end
        else
        if (FStretchInEnabled) then
        begin
          Style.SetProperty('background-size', 'auto 100%');
        end
        else
        if (FStretchOutEnabled) then
        begin
          Style.SetProperty('background-size', '100% auto');
        end;
      end
      else
      begin
        Style.SetProperty('background-size', 'auto');
      end;
    end;
  end;
end;

function TCustomImage.CreateHandleElement: TJSHTMLElement;
begin
  Result := TJSHTMLElement(Document.CreateElement('div'));
end;

{$hints off}

function TCustomImage.CheckChildClassAllowed(AChildClass: TClass): boolean;
begin
  Result := False;
end;

{$hints on}

{$hints off}

procedure TCustomImage.PictureChanged(Sender: TObject);
begin
  Changed;
  if (Assigned(FOnPictureChanged)) then
  begin
    FOnPictureChanged(Self);
  end;
end;

{$hints on}

class function TCustomImage.GetControlClassDefaultSize: TSize;
begin
  Result.Cx := 90;
  Result.Cy := 90;
end;

constructor TCustomImage.Create(AOwner: TComponent);
begin
  inherited Create(AOwner);
  FPicture := TPicture.Create;
  FPicture.OnChange := @PictureChanged;
  FCenter := False;
  FProportional := False;
  FStretch := False;
  FStretchOutEnabled := True;
  FStretchInEnabled := True;
  FTransparent := False;
  BeginUpdate;
  try
    with GetControlClassDefaultSize do
    begin
      SetBounds(0, 0, Cx, Cy);
    end;
  finally
    EndUpdate;
  end;
end;

{ TCustomPanel }

procedure TCustomPanel.SetAlignment(AValue: TAlignment);
begin
  if (FAlignment <> AValue) then
  begin
    FAlignment := AValue;
    Changed;
  end;
end;

procedure TCustomPanel.SetBevelColor(AValue: TColor);
begin
  if (FBevelColor <> AValue) then
  begin
    FBevelColor := AValue;
    Changed;
  end;
end;

procedure TCustomPanel.SetBevelInner(AValue: TPanelBevel);
begin
  if (FBevelInner <> AValue) then
  begin
    FBevelInner := AValue;
    Changed;
  end;
end;

procedure TCustomPanel.SetBevelOuter(AValue: TPanelBevel);
begin
  if (FBevelOuter <> AValue) then
  begin
    FBevelOuter := AValue;
    Changed;
  end;
end;

procedure TCustomPanel.SetBevelWidth(AValue: TBevelWidth);
begin
  if (FBevelWidth <> AValue) then
  begin
    FBevelWidth := AValue;
    Changed;
  end;
end;

procedure TCustomPanel.SetLayout(AValue: TTextLayout);
begin
  if (FLayout <> AValue) then
  begin
    FLayout := AValue;
    Changed;
  end;
end;

procedure TCustomPanel.SetWordWrap(AValue: boolean);
begin
  if (FWordWrap <> AValue) then
  begin
    FWordWrap := AValue;
    Changed;
  end;
end;

procedure TCustomPanel.Changed;
var
  VTopColor: TColor;
  VBottomColor: TColor;
  VTr: TJSHTMLTableRowElement;
  VTd: TJSHTMLTableCellElement;
begin
  inherited Changed;
  if (not IsUpdating) then
  begin
    with HandleElement do
    begin
      /// Bevel/Border
      if (FBevelOuter = bvNone) then
      begin
        Style.RemoveProperty('border-width');
        Style.RemoveProperty('border-left-color');
        Style.RemoveProperty('border-left-style');
        Style.RemoveProperty('border-top-color');
        Style.RemoveProperty('border-top-style');
        Style.RemoveProperty('border-right-color');
        Style.RemoveProperty('border-right-style');
        Style.RemoveProperty('border-bottom-color');
        Style.RemoveProperty('border-bottom-style');
      end
      else
      begin
        if (FBevelColor = clDefault) then
        begin
          case FBevelOuter of
            bvLowered:
            begin
              VTopColor := clGray; /// dark
              VBottomColor := clWhite;
            end;
            bvRaised:
            begin
              VTopColor := clWhite;
              VBottomColor := clGray; /// dark
            end;
            else
            begin
              VTopColor := Self.Color;
              VBottomColor := Self.Color;
            end;
          end;
        end
        else
        begin
          VTopColor := FBevelColor;
          VBottomColor := FBevelColor;
        end;
        Style.SetProperty('border-width', IntToStr(FBevelWidth) + 'px');
        Style.SetProperty('border-style', 'solid');
        Style.SetProperty('border-left-color', JSColor(VTopColor));
        Style.SetProperty('border-top-color', JSColor(VTopColor));
        Style.SetProperty('border-right-color', JSColor(VBottomColor));
        Style.SetProperty('border-bottom-color', JSColor(VBottomColor));
      end;
      /// Focus highlight
      Style.SetProperty('outline', 'none');
      /// Prevent text selection
      Style.SetProperty('user-select', 'none');
      Style.SetProperty('-moz-user-select', 'none');
      Style.SetProperty('-ms-user-select', 'none');
      Style.SetProperty('-khtml-user-select', 'none');
      Style.SetProperty('-webkit-user-select', 'none');
    end;
    /// ContentElement
    with FContentElement do
    begin
      /// Clear
      InnerHTML := '';
      Style.SetProperty('height', '100%');
      Style.SetProperty('width', '100%');
      Style.SetProperty('table-layout', 'fixed');
      VTr := TJSHTMLTableRowElement(FContentElement.AppendChild(Document.CreateElement('tr')));  
      VTd := TJSHTMLTableCellElement(VTr.AppendChild(Document.CreateElement('td')));
      with VTd do
      begin
        /// Aligment
        case FAlignment of
          taCenter: Style.SetProperty('text-align', 'center');
          taLeftJustify: Style.SetProperty('text-align', 'left');
          taRightJustify: Style.SetProperty('text-align', 'right');
        end;
        /// Layout
        case FLayout of
          tlBottom: Style.SetProperty('vertical-align', 'bottom');
          tlCenter: Style.SetProperty('vertical-align', 'middle');
          tlTop: Style.SetProperty('vertical-align', 'top');
        end;
        /// WordWrap
        if (FWordWrap) then
        begin
          Style.SetProperty('word-wrap', 'break-word');
        end
        else
        begin
          Style.removeProperty('word-wrap');
        end;
        /// Scroll
        Style.SetProperty('overflow', 'hidden');
        /// Specifies how overflowed content
        Style.SetProperty('text-overflow', 'ellipsis');
        /// Caption
        InnerHTML := Self.Caption;
      end;
    end;
  end;
end;

function TCustomPanel.CreateHandleElement: TJSHTMLElement;
begin
  Result := TJSHTMLElement(Document.CreateElement('div'));
end;

function TCustomPanel.CreateContentElement: TJSHTMLTableElement;
begin
  Result := TJSHTMLTableElement(HandleElement.AppendChild(Document.CreateElement('table')));
end;

class function TCustomPanel.GetControlClassDefaultSize: TSize;
begin
  Result.Cx := 170;
  Result.Cy := 50;
end;

constructor TCustomPanel.Create(AOwner: TComponent);
begin
  inherited Create(AOwner);
  FContentElement := CreateContentElement;
  FAlignment := taCenter;
  FBevelColor := clDefault;
  FBevelOuter := bvRaised;
  FBevelInner := bvNone;
  FBevelWidth := 1;
  FLayout := tlCenter;
  FWordWrap := False;
  BeginUpdate;
  try
    TabStop := False;
    with GetControlClassDefaultSize do
    begin
      SetBounds(0, 0, Cx, Cy);
    end;
  finally
    EndUpdate;
  end;
end;

end.
