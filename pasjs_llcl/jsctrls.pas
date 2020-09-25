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
unit jsctrls;

{$I pas2js_widget.inc}

interface

uses
  Classes,
  SysUtils,
  Types,
  Graphics,
  Controls,
  Forms,
  StdCtrls,
  ExtCtrls,
  ComCtrls,
  NumCtrls,
  DttCtrls,
  BtnCtrls,
  DataGrid;

type

  { Form }

  Form = class(TCustomForm)
  published
    property ActiveControl;
    property Align;
    property AlphaBlend;
    property AlphaBlendValue;
    property Caption;
    property ClientHeight;
    property Clientwidth;
    property Color;
    property Enabled;
    property Font;
    property HandleClass;
    property HandleID;
    property KeyPreview;
    property ShowHint;
    property Visible;
    property OnActivate;
    property OnClick;
    property OnClose;
    property OnCloseQuery;
    property OnCreate;
    property OnDblClick;
    property OnDeactivate;
    property OnDestroy;
    property OnHide;
    property OnKeyDown;
    property OnKeyPress;
    property OnKeyUp;
    property OnMouseDown;
    property OnMouseEnter;
    property OnMouseLeave;
    property OnMouseMove;
    property OnMouseUp;
    property OnMouseWheel;
    property OnResize;
    property OnScroll;
    property OnShow;
  end;
  FormClass = class of Form;

  { Frame }

  Frame = class(TCustomFrame)
  private             
    /// Fake
    FDesignLeft: LongInt;
    FDesignTop: LongInt;
  published
    property Align;
    property AutoSize;
    property BorderSpacing;
    property ClientHeight;
    property Clientwidth;
    property Color;
    property Enabled;
    property Font;
    property ParentColor;
    property ParentFont;
    property ParentShowHint;
    property ShowHint;
    property TabOrder;
    property TabStop;
    property Visible;
    property OnClick;
    property OnDblClick;
    property OnEnter;
    property OnExit;
    property OnMouseDown;
    property OnMouseEnter;
    property OnMouseLeave;
    property OnMouseMove;
    property OnMouseUp;
    property OnMouseWheel;
    property OnResize;
  published         
    /// Fake
    property DesignLeft: LongInt read FDesignLeft write FDesignLeft;
    property DesignTop: LongInt read FDesignTop write FDesignTop;
  end;  
  FrameClass = class of Frame;

  { DataModule }

  DataModule = class(TCustomDataModule)
  private
    FHorizontalOffset: LongInt;
    FPPI: LongInt;
    FVerticalOffset: LongInt;
  published
    property OnCreate;
    property OnDestroy;
    property OldCreateOrder;
  published
    /// Fake
    property HorizontalOffset: LongInt read FHorizontalOffset write FHorizontalOffset;
    property VerticalOffset: LongInt read FVerticalOffset write FVerticalOffset;   
    property PPI: LongInt read FPPI write FPPI;
  end;
  DataModuleClass = class of DataModule;

  { ComboBox }

  ComboBox = class(TCustomComboBox)
  published
    property Align;
    property AutoSize;
    property BorderSpacing;
    property BorderStyle;
    property Color;
    property Enabled;
    property Font;
    property HandleClass;
    property HandleID;
    property ItemHeight;
    property ItemIndex;
    property Items;
    property ParentColor;
    property ParentFont;
    property ParentShowHint;
    property ShowHint;
    property TabOrder;
    property TabStop;
    property Text;
    property Visible;
    property OnChange;
    property OnClick;
    property OnDblClick;
    property OnEnter;
    property OnExit;
    property OnKeyDown;
    property OnKeyPress;
    property OnKeyUp;
    property OnMouseDown;
    property OnMouseEnter;
    property OnMouseLeave;
    property OnMouseMove;
    property OnMouseUp;
    property OnMouseWheel;
  end;

  { Edit }

  Edit = class(TCustomEdit)
  published
    property Align;
    property Alignment;
    property AutoSize;
    property BorderSpacing;
    property BorderStyle;
    property CharCase;
    property Color;
    property Enabled;
    property Font;
    property HandleClass;
    property HandleId;
    property MaxLength;
    property ParentColor;
    property ParentFont;
    property ParentShowHint;
    property PasswordChar;
    property ReadOnly;
    property ShowHint;
    property TabStop;
    property TabOrder;
    property Text;
    property TextHint;
    property Visible;
    property OnChange;
    property OnClick;
    property OnDblClick;
    property OnEnter;
    property OnExit;
    property OnKeyDown;
    property OnKeyPress;
    property OnKeyUp;
    property OnMouseDown;
    property OnMouseEnter;
    property OnMouseLeave;
    property OnMouseMove;
    property OnMouseUp;
    property OnMouseWheel;
    property OnResize;
  end;

  { Memo }

  Memo = class(TCustomMemo)
  published
    property Align;
    property Alignment;
    property BorderSpacing;
    property BorderStyle;
    property CharCase;
    property Color;
    property Enabled;
    property Font; 
    property HandleClass;
    property HandleId;
    property Lines;
    property MaxLength;
    property ParentColor;
    property ParentFont;
    property ParentShowHint;
    property ReadOnly;
    property ShowHint;
    property TabOrder;
    property TabStop;
    property TextHint;
    property Visible;
    property WantReturns;
    property WantTabs;
    property WordWrap;
    property OnChange;
    property OnClick;
    property OnDblClick;
    property OnEnter;
    property OnExit;
    property OnKeyDown;
    property OnKeyPress;
    property OnKeyUp;
    property OnMouseDown;
    property OnMouseEnter;
    property OnMouseLeave;
    property OnMouseMove;
    property OnMouseUp;
    property OnMouseWheel;
    property OnResize;
  end;

  { Button }

  Button = class(TCustomButton)
  published
    property Align;
    property AutoSize;
    property BorderSpacing;
    property Caption;
    property Color;
    property Enabled;
    property Font;
    property HandleClass;
    property HandleId; 
    property Hint;
    property ModalResult;
    property ParentFont;
    property ParentShowHint;
    property ShowHint;
    property TabOrder;
    property TabStop;
    property Visible;
    property OnClick;
    property OnEnter;
    property OnExit;
    property OnKeyDown;
    property OnKeyPress;
    property OnKeyUp;
    property OnMouseDown;
    property OnMouseEnter;
    property OnMouseLeave;
    property OnMouseMove;
    property OnMouseUp;
    property OnMouseWheel;
    property OnResize;
  end;

  { Checkbox }

  Checkbox = class(TCustomCheckbox)
  public
    property Align;
    property Alignment;
    /// property AllowGrayed;
    property AutoSize;
    property BorderSpacing;
    property Caption;
    property Checked;
    property Color;
    property Enabled;
    property Font; 
    property HandleClass;
    property HandleId;
    property ParentColor;
    property ParentFont;
    property ParentShowHint;
    property ShowHint;
    property State;
    property TabOrder;
    property TabStop;
    property Visible;
    property OnChange;
    property OnClick;
    property OnEnter;
    property OnExit;
    property OnKeyPress;
    property OnKeyDown;
    property OnKeyUp;
    property OnMouseDown;
    property OnMouseEnter;
    property OnMouseLeave;
    property OnMouseMove;
    property OnMouseUp;
    property OnMouseWheel;
    property OnResize;
  end;

  { Label }

  TLabel = class(TCustomLabel)
  published
    property Align;
    property Alignment;
    property AutoSize;
    property BorderSpacing;
    property Caption;
    property Color;
    property Enabled;
    property FocusControl;
    property Font;
    property HandleClass;
    property HandleId;
    property Layout;
    property ParentColor;
    property ParentFont;
    property ParentShowHint;
    property ShowHint;
    property Transparent;
    property Visible;
    property WordWrap;
    property OnClick;
    property OnDblClick;
    property OnMouseDown;
    property OnMouseEnter;
    property OnMouseLeave;
    property OnMouseMove;
    property OnMouseUp;
    property OnMouseWheel;
    property OnResize;
  end;

  { Image }

  Image = class(TCustomImage)
  published
    property Align;
    property AutoSize;
    property BorderSpacing;
    property Center;
    property Enabled;   
    property HandleClass;
    property HandleId;
    property ParentShowHint;
    property Picture;
    property Proportional;
    property ShowHint;
    property Stretch;
    property StretchOutEnabled;
    property StretchInEnabled;
    property Transparent;
    property Visible;
    property OnClick;
    property OnDblClick;
    property OnMouseDown;
    property OnMouseEnter;
    property OnMouseLeave;
    property OnMouseMove;
    property OnMouseUp;
    property OnMouseWheel;
    property OnPaint;
    property OnPictureChanged;
    property OnResize;
  end;

  { Panel }

  Panel = class(TCustomPanel)
  published
    property Align;
    property Alignment;
    property AutoSize;
    property BevelColor;
    property BevelInner;
    property BevelOuter;
    property BevelWidth;
    property BorderSpacing;
    property Caption;
    property ClientHeight;
    property Clientwidth;
    property Color;
    property Enabled;
    property Font; 
    property HandleClass;
    property HandleId;
    property ParentColor;
    property ParentFont;
    property ParentShowHint;
    property ShowHint;
    property TabOrder;
    property TabStop;
    property Visible;
    property Wordwrap;
    property OnClick;
    property OnDblClick;
    property OnEnter;
    property OnExit;
    property OnMouseDown;
    property OnMouseEnter;
    property OnMouseLeave;
    property OnMouseMove;
    property OnMouseUp;
    property OnMouseWheel;
    property OnPaint;
    property OnResize;
  end;

  { PageControl }

  PageControl = class(TCustomPageControl)
  published
    property ActivePage;
    property Align;
    property BorderSpacing;
    property Enabled;
    property Font;
    property HandleClass;
    property HandleId;
    property ParentFont;
    property ParentShowHint;
    property ShowHint;
    property ShowTabs;
    property TabHeight;
    property TabIndex;
    property TabPosition;
    property TabOrder;
    property TabStop;
    property TabWidth;
    property Visible;
    property OnEnter;
    property OnExit;
    property OnMouseDown;
    property OnMouseEnter;
    property OnMouseLeave;
    property OnMouseMove;
    property OnMouseUp;
    property OnMouseWheel;
  end;

  { FloatEdit }

  FloatEdit = class(TCustomNumericEdit)
  private
    function GetValue: double;
    procedure SetValue(AValue: double);
  protected
    procedure RealSetText(const AValue: string); override;
  published
    property Align;
    property Alignment;
    property AutoSize;
    property BorderSpacing;
    property BorderStyle;
    property Color;
    property DecimalPlaces;
    property Enabled;
    property Font;  
    property HandleClass;
    property HandleId;
    property ParentColor;
    property ParentFont;
    property ParentShowHint;
    property PasswordChar;
    property ReadOnly;
    property ShowHint;
    property TabStop;
    property TabOrder;
    property Text;
    property TextHint;
    property Value: double read GetValue write SetValue;
    property Visible;
    property OnChange;
    property OnClick;
    property OnDblClick;
    property OnEnter;
    property OnExit;
    property OnKeyDown;
    property OnKeyPress;
    property OnKeyUp;
    property OnMouseDown;
    property OnMouseEnter;
    property OnMouseLeave;
    property OnMouseMove;
    property OnMouseUp;
    property OnMouseWheel;
    property OnResize;
  end;

  { IntegertEdit }

  IntegertEdit = class(TCustomNumericEdit)
  private
    function GetValue: NativeInt;
    procedure SetValue(AValue: NativeInt);
  protected
    procedure RealSetText(const AValue: string); override;
  public
    constructor Create(AOwner: TComponent); override;
  published
    property Align;
    property Alignment;
    property AutoSize;
    property BorderSpacing;
    property BorderStyle;
    property Color;
    property Enabled;
    property Font;  
    property HandleClass;
    property HandleId;
    property ParentColor;
    property ParentFont;
    property ParentShowHint;
    property PasswordChar;
    property ReadOnly;
    property ShowHint;
    property TabStop;
    property TabOrder;
    property Text;
    property TextHint;
    property Value: NativeInt read GetValue write SetValue;
    property Visible;
    property OnChange;
    property OnClick;
    property OnDblClick;
    property OnEnter;
    property OnExit;
    property OnKeyDown;
    property OnKeyPress;
    property OnKeyUp;
    property OnMouseDown;
    property OnMouseEnter;
    property OnMouseLeave;
    property OnMouseMove;
    property OnMouseUp;
    property OnMouseWheel;
    property OnResize;
  end;

  { DateEditBox }

  DateEditBox = class(TCustomDateTimeEdit)
  private
    function GetValue: TDate;
    procedure SetValue(AValue: TDate);
  protected
    function InputType: string; override;
    procedure RealSetText(const AValue: string); override;
  published
    property Align;
    property Alignment;
    property AutoSize;
    property BorderSpacing;
    property BorderStyle;
    property Color;
    property Enabled;
    property Font;  
    property HandleClass;
    property HandleId;
    property ParentColor;
    property ParentFont;
    property ParentShowHint;
    property PasswordChar;
    property ReadOnly;
    property ShowHint;
    property TabStop;
    property TabOrder;
    property Text;
    property TextHint;
    property Value: TDate read GetValue write SetValue;
    property Visible;
    property OnChange;
    property OnClick;
    property OnDblClick;
    property OnEnter;
    property OnExit;
    property OnKeyDown;
    property OnKeyPress;
    property OnKeyUp;
    property OnMouseDown;
    property OnMouseEnter;
    property OnMouseLeave;
    property OnMouseMove;
    property OnMouseUp;
    property OnMouseWheel;
    property OnResize;
  end;

  { TimeEditBox }

  TimeEditBox = class(TCustomDateTimeEdit)
  private
    function GetValue: TTime;
    procedure SetValue(AValue: TTime);
  protected
    function InputType: string; override;
    procedure RealSetText(const AValue: string); override;
  published
    property Align;
    property Alignment;
    property AutoSize;
    property BorderSpacing;
    property BorderStyle;
    property Color;
    property Enabled;
    property Font;
    property HandleClass;
    property HandleId;
    property ParentColor;
    property ParentFont;
    property ParentShowHint;
    property PasswordChar;
    property ReadOnly;
    property ShowHint;
    property TabStop;
    property TabOrder;
    property Text;
    property TextHint;
    property Value: TTime read GetValue write SetValue;
    property Visible;
    property OnChange;
    property OnClick;
    property OnDblClick;
    property OnEnter;
    property OnExit;
    property OnKeyDown;
    property OnKeyPress;
    property OnKeyUp;
    property OnMouseDown;
    property OnMouseEnter;
    property OnMouseLeave;
    property OnMouseMove;
    property OnMouseUp;
    property OnMouseWheel;
    property OnResize;
  end;

  { FileButton }

  FileButton = class(TCustomFileButton)
  published
    property Align;
    property AutoSize;
    property BorderSpacing;
    property Caption;
    property Color;
    property Enabled;
    property Filter;
    property Font;   
    property HandleClass;
    property HandleId;
    //property ModalResult;
    property ParentFont;
    property ParentShowHint;
    property ShowHint;
    property TabOrder;
    property TabStop;
    property Visible; 
    property OnChange;
    property OnClick;
    property OnEnter;
    property OnExit;
    property OnKeyDown;
    property OnKeyPress;
    property OnKeyUp;
    property OnMouseDown;
    property OnMouseEnter;
    property OnMouseLeave;
    property OnMouseMove;
    property OnMouseUp;
    property OnMouseWheel;
    property OnResize;
  end;

  { DataGrid }

  TDataGrid = class(TCustomDataGrid)
  published
    property Align;
    property BorderSpacing;
    property Columns;
    property ColumnClickSorts;
    property DefaultColWidth;
    property DefaultRowHeight;
    property Enabled;
    property Font;
    property HandleClass;
    property HandleId;
    property ParentFont;
    property ParentShowHint;
    property ShowHint;
    property SortOrder;
    property ShowHeader;
    property TabOrder;
    property TabStop;
    property Visible;
    property OnCellClick;
    property OnEnter;
    property OnExit;
    property OnHeaderClick;
    property OnKeyDown;
    property OnKeyPress;
    property OnKeyUp;
    property OnMouseDown;
    property OnMouseEnter;
    property OnMouseLeave;
    property OnMouseMove;
    property OnMouseUp;
    property OnMouseWheel;
  end;

  { Pagination }

  Pagination = class(TCustomPagination)
  published
    property Align;
    property BorderSpacing;
    property CurrentPage;
    property Enabled;
    property Font;   
    property HandleClass;
    property HandleId;
    property ParentFont;
    property ParentShowHint;
    property RecordsPerPage;
    property ShowHint;
    property TabOrder;
    property TabStop;
    property TotalPages;
    property TotalRecords;
    property Visible;
    property OnKeyDown;
    property OnKeyPress;
    property OnKeyUp;
    property OnMouseDown;
    property OnMouseEnter;
    property OnMouseLeave;
    property OnMouseMove;
    property OnMouseUp;
    property OnMouseWheel;
    property OnPageClick;
  end;

implementation

{ FloatEdit }

function FloatEdit.GetValue: double;
begin
  Result := StrToFloatDef(RealGetText, 0);
end;

procedure FloatEdit.SetValue(AValue: double);
begin
  RealSetText(FloatToStrF(AValue, ffFixed, 20, DecimalPlaces));
end;

procedure FloatEdit.RealSetText(const AValue: string);
begin
  inherited RealSetText(FloatToStrF(StrToFloatDef(AValue, 0), ffFixed, 20, DecimalPlaces));
end;

{ IntegertEdit }

function IntegertEdit.GetValue: NativeInt;
begin
  Result := StrToIntDef(RealGetText, 0);
end;

procedure IntegertEdit.SetValue(AValue: NativeInt);
begin
  RealSetText(FloatToStrF(AValue, ffFixed, 20, DecimalPlaces));
end;

procedure IntegertEdit.RealSetText(const AValue: string);
begin
  inherited RealSetText(FloatToStrF(StrToFloatDef(AValue, 0), ffFixed, 20, DecimalPlaces));
end;

constructor IntegertEdit.Create(AOwner: TComponent);
begin
  inherited Create(AOwner);  
  BeginUpdate;
  try
    DecimalPlaces := 0;
  finally
    EndUpdate;
  end;
end;

{ DateEditBox }

function DateEditBox.GetValue: TDate;
begin
  Result := StrToDateDef(RealGetText, 0);
end;

procedure DateEditBox.SetValue(AValue: TDate);
begin
  RealSetText(DateToStr(AValue));
end;

function DateEditBox.InputType: string;
begin
  Result := 'date';
end;

procedure DateEditBox.RealSetText(const AValue: string);
begin
  inherited RealSetText(FormatDateTime(ShortDateFormat, StrToDateDef(AValue, 0)));
end;

{ TimeEditBox }

function TimeEditBox.GetValue: TTime;
begin
  Result := StrToTimeDef(RealGetText, 0);
end;

procedure TimeEditBox.SetValue(AValue: TTime);
begin
  RealSetText(TimeToStr(AValue));
end;

function TimeEditBox.InputType: string;
begin
  Result := 'time';
end;

procedure TimeEditBox.RealSetText(const AValue: string);
begin
  inherited RealSetText(FormatDateTime(ShortTimeFormat, StrToTimeDef(AValue, 0)));
end;

end.
