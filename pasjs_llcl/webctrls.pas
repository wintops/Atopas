unit WebCtrls;

{$I pas2js_widget.inc}

interface

uses browserapp,
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

  { TForm }

  TForm = class(TCustomForm)
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

  TFormClass = class of TForm;

  { TFrame }

  TFrame = class(TCustomFrame)
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

  TFrameClass = class of TFrame;

  { TDataModule }

  TDataModule = class(TCustomDataModule)
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
    property HorizontalOffset: LongInt read FHorizontalOffset
      write FHorizontalOffset;
    property VerticalOffset: LongInt read FVerticalOffset write FVerticalOffset;
    property PPI: LongInt read FPPI write FPPI;
  end;

  TDataModuleClass = class of TDataModule;

  { TComboBox }

  TComboBox = class(TCustomComboBox)
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
    property DroppedDown;
  end;

  { TEdit }

  TEdit = class(TCustomEdit)
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
    property HandleID;
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

  { TMemo }

  TMemo = class(TCustomMemo)
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
    property HandleID;
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

  { TButton }

  TButton = class(TCustomButton)
  published
    property Align;
    property AutoSize;
    property BorderSpacing;
    property Caption;
    property Color;
    property Enabled;
    property Font;
    property HandleClass;
    property HandleID;
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

  { TCheckbox }

  TCheckbox = class(TCustomCheckbox)
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
    property HandleID;
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

  { TLabel }

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
    property HandleID;
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

  { TImage }

  TImage = class(TCustomImage)
  published
    property Align;
    property AutoSize;
    property BorderSpacing;
    property Center;
    property Enabled;
    property HandleClass;
    property HandleID;
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

  { TPanel }

  TPanel = class(TCustomPanel)
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
    property HandleID;
    property ParentColor;
    property ParentFont;
    property ParentShowHint;
    property ShowHint;
    property TabOrder;
    property TabStop;
    property Visible;
    property WordWrap;
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

  { TPageControl }

  TPageControl = class(TCustomPageControl)
  published
    property ActivePage;
    property Align;
    property BorderSpacing;
    property Enabled;
    property Font;
    property HandleClass;
    property HandleID;
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

  { TFloatEdit }

  TFloatEdit = class(TCustomNumericEdit)
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
    property HandleID;
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

  { TIntegertEdit }

  TIntegertEdit = class(TCustomNumericEdit)
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
    property HandleID;
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

  { TDateEditBox }

  TDateEditBox = class(TCustomDateTimeEdit)
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
    property HandleID;
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

  { TTimeEditBox }

  TTimeEditBox = class(TCustomDateTimeEdit)
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
    property HandleID;
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

  { TFileButton }

  TFileButton = class(TCustomFileButton)
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
    property HandleID;
    // property ModalResult;
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

  { TDataGrid }

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
    property HandleID;
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

  { TPagination }

  TPagination = class(TCustomPagination)
  published
    property Align;
    property BorderSpacing;
    property CurrentPage;
    property Enabled;
    property Font;
    property HandleClass;
    property HandleID;
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

  TListBox = class(TCustomPanel)
    Items: TStringList;
    ItemIndex: integer;
    procedure Clear;
  end;

  TGroupBox = class(TCustomPanel);

  TOpenOption = (ofReadOnly, ofOverwritePrompt, ofHideReadOnly, ofNoChangeDir,
    ofShowHelp, ofNoValidate, ofAllowMultiSelect, ofExtensionDifferent,
    ofPathMustExist, ofFileMustExist, ofCreatePrompt, ofShareAware,
    ofNoReadOnlyReturn, ofNoTestFileCreate, ofNoNetworkButton, ofNoLongNames,
    ofOldStyleDialog, ofNoDereferenceLinks, ofEnableIncludeNotify,
    ofEnableSizing, ofDontAddToRecent, ofForceShowHidden, ofViewDetail,
    ofAutoPreview);
  TOpenOptions = set of TOpenOption;

  TOpenDialog = class(TCustomPanel)
    FileName: string;
    Filter: string;
    FilterIndex: integer;
    InitialDir: string;
    Options: TOpenOptions;
    Title: string;
    function Execute: boolean;
  end;


  TSaveDialog = class(TCustomPanel)
    FileName: string;
    Filter: string;
    FilterIndex: integer;
    InitialDir: string;
    Options: TOpenOptions;
    Title: string;
    function Execute: boolean;
  end;

    TRadioButton = class(TCustomPanel);
  TStaticText = class(TCustomPanel);

  TProgressBar = class(TCustomPanel)
    Position: integer;
    procedure StepIt;
  end;

  TTimer = class(TCustomPanel);
  TMainMenu = class(TCustomPanel);
  TMenuItem = class(TCustomPanel);

  TPopupMenu = class(TCustomPanel)
    procedure Popup(X, Y: integer);
  end;

  TTrackBar = class(TCustomPanel)
    Position: integer;
    Max: integer;
  private
    FOnChange: TNotifyEvent;
  published
    property OnChange: TNotifyEvent read FOnChange write FOnChange;
  end;

  TXPManifest = class(TCustomPanel);

  TMouse = class(TWinControl)
    CursorPos: TPoint;
  end;

  TMyApplication = class(TBrowserApplication)
    ActiveForm: TForm;
    procedure doRun; override;
  end;

var
  Mouse: TMouse;
//  Application: TMyApplication;

implementation

procedure TMyApplication.doRun;

begin
  // Your code here
  Terminate;
end;

{ TFloatEdit }

function TFloatEdit.GetValue: double;
begin
  Result := StrToFloatDef(RealGetText, 0);
end;

procedure TFloatEdit.SetValue(AValue: double);
begin
  RealSetText(FloatToStrF(AValue, ffFixed, 20, DecimalPlaces));
end;

procedure TFloatEdit.RealSetText(const AValue: string);
begin
  inherited RealSetText(FloatToStrF(StrToFloatDef(AValue, 0), ffFixed, 20,
    DecimalPlaces));
end;

{ TIntegertEdit }

function TIntegertEdit.GetValue: NativeInt;
begin
  Result := StrToIntDef(RealGetText, 0);
end;

procedure TIntegertEdit.SetValue(AValue: NativeInt);
begin
  RealSetText(FloatToStrF(AValue, ffFixed, 20, DecimalPlaces));
end;

procedure TIntegertEdit.RealSetText(const AValue: string);
begin
  inherited RealSetText(FloatToStrF(StrToFloatDef(AValue, 0), ffFixed, 20,
    DecimalPlaces));
end;

constructor TIntegertEdit.Create(AOwner: TComponent);
begin
  inherited Create(AOwner);
  BeginUpdate;
  try
    DecimalPlaces := 0;
  finally
    EndUpdate;
  end;
end;

{ TDateEditBox }

function TDateEditBox.GetValue: TDate;
begin
  Result := StrToDateDef(RealGetText, 0);
end;

procedure TDateEditBox.SetValue(AValue: TDate);
begin
  RealSetText(DateToStr(AValue));
end;

function TDateEditBox.InputType: string;
begin
  Result := 'date';
end;

procedure TDateEditBox.RealSetText(const AValue: string);
begin
  inherited RealSetText(FormatDateTime(ShortDateFormat,
    StrToDateDef(AValue, 0)));
end;

{ TTimeEditBox }

function TTimeEditBox.GetValue: TTime;
begin
  Result := StrToTimeDef(RealGetText, 0);
end;

procedure TTimeEditBox.SetValue(AValue: TTime);
begin
  RealSetText(TimeToStr(AValue));
end;

function TTimeEditBox.InputType: string;
begin
  Result := 'time';
end;

procedure TTimeEditBox.RealSetText(const AValue: string);
begin
  inherited RealSetText(FormatDateTime(ShortTimeFormat,
    StrToTimeDef(AValue, 0)));
end;

procedure TListBox.Clear;
begin
  Items.Clear;
end;

procedure TPopupMenu.Popup(X, Y: integer);
begin

end;

procedure TProgressBar.StepIt;
begin

end;

function TOpenDialog.Execute: boolean;
begin

end;
function TSaveDialog.Execute: boolean;
begin

end;
end.
