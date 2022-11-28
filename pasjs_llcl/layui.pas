unit layui;

{$mode Delphi}
{$modeswitch externalclass}

interface

uses JS, Web,
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
  TopCtrls,
  DataGrid;


type

  { TDataModule }

  TDataModule = class(TCustomDataModule)
  private
    FHorizontalOffset: longint;
    FPPI: longint;
    FVerticalOffset: longint;
  published
    property OnCreate;
    property OnDestroy;
    property OldCreateOrder;
  published
    /// Fake
    property HorizontalOffset: longint read FHorizontalOffset write FHorizontalOffset;
    property VerticalOffset: longint read FVerticalOffset write FVerticalOffset;
    property PPI: longint read FPPI write FPPI;
  end;

  TDataModuleClass = class of TDataModule;

  { TComboBox }

  TComboBox = class(TCustomComboBox)
    protected
    procedure Changed; override;
  published
     DroppedDown :Boolean;
    property Align;
    property Anchors;
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

  { TListBox }

  TListBox = class(TCustomListBox)
  published
    property Align;
    property Anchors;
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
    property MultiSelect;
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
    property OnKeyDown;
    property OnKeyPress;
    property OnKeyUp;
    property OnMouseDown;
    property OnMouseEnter;
    property OnMouseLeave;
    property OnMouseMove;
    property OnMouseUp;
    property OnMouseWheel;
    property OnSelectionChange;
  end;

  { TEdit }

  TEdit = class(TCustomEdit)
  published
    property Align;
    property Anchors;
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

  { TMemo }

  TMemo = class(TCustomMemo)
  published
    property Align;
    property Anchors;
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
     property Text;
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

  protected
    procedure Changed; override;
  published
    property Align;
    property Anchors;
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

  { TCheckbox }

  TCheckbox = class(TCustomCheckbox)
    protected
    procedure Changed; override;
  published
    property Align;
    property Alignment;
    property AllowGrayed;
    property Anchors;
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

  { TLabel }

  TLabel = class(TCustomLabel)
  published
    property Align;
    property Alignment;
    property Anchors;
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

  { TImage }

  TImage = class(TCustomImage)
  published
    property Align;
    property Anchors;
    property AutoSize;
    property BorderSpacing;
    property Center;
    property Enabled;
    property HandleClass;
    property HandleId;
    property ParentShowHint;
    property Proportional;
    property ShowHint;
    property Stretch;
    property StretchOutEnabled;
    property StretchInEnabled;
    property Transparent;
    property URL;
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
    property Anchors;
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

  { TTimer }

  TTimer = class(TCustomTimer)
  published
    property Enabled;
    property Interval;
    property OnTimer;
    property OnStartTimer;
    property OnStopTimer;
  end;

  { TPageControl }

  TPageControl = class(TCustomPageControl)
  published
    property ActivePage;
    property Align;
    property Anchors;
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
    property Anchors;
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

  { TIntegerEdit }

  TIntegerEdit = class(TCustomNumericEdit)
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
    property Anchors;
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
    property Anchors;
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
    property Anchors;
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

  { TFileButton }

  TFileButton = class(TCustomFileButton)
  published
    property Align;
    property Anchors;
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

  { TDataGrid }

  TDataGrid = class(TCustomDataGrid)
  published
    property Align;
    property Anchors;
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

  { TPagination }

  TPagination = class(TCustomPagination)
  published
    property Align;
    property Anchors;
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


  TProgressBar = class(TCustomProgressBar)
      protected
    procedure Changed; override;
      procedure SetPosition(Value: integer); override;
  public

    property Min;
    property Max;
    property Position;
    property Step;

  end;

    TTrackBar = class(TCustomTrackBar)

  protected

    procedure Changed; override;
     procedure Paint; override;
         function CreateHandleElement: TJSHTMLElement; override;
           procedure MouseUp(Button: TMouseButton; Shift: TShiftState; X, Y: integer); override;
  public

    constructor Create(AOwner: TComponent); override;
    property Min;
    property Max;
    property Position;
    property Frequency;
    property LineSize;
    property PageSize;
    property Orientation;
    // Run-time modification ignored; write present only for dynamical control creation purpose
    property TickStyle;
    // Run-time modification ignored; write present only for dynamical control creation purpose
    property OnChange;

  end;

    TLayuiCallBack = reference to procedure; safecall;
    TLayuiValueCallBack = reference to procedure(value:integer); safecall;

  TLayui = Class external name 'Layui' (TJSObject)
     procedure use(args: array of string; aCallBack : TLayuiCallBack);
  end;

  TLayuiElement = Class external name 'LayuiElement' (TJSObject)
    constructor new;
  Procedure progress(const aName,aValue : String);
  end;

procedure layui_use;
    procedure layui_open;


  var
    element : TLayuiElement; external name 'element';

    layui : TLayui; external name 'layui';
    isLoad:Boolean;
implementation



procedure layui_use;
begin

  layui.use(['layer', 'form'],procedure begin end);



end;

procedure layui_open;
begin
  asm


  	var index2= layer.open({
  type:1,
  title :['Form1', 'font-size:12px;'],
 area:['480px','680px'],
  maxmin: true,
  scrollbar: false,
  shade:0,
  content: layui.$('#form1')
  	});


  end;
  isLoad:=True;
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
  inherited RealSetText(FloatToStrF(StrToFloatDef(AValue, 0), ffFixed,
    20, DecimalPlaces));
end;

{ TIntegerEdit }

function TIntegerEdit.GetValue: NativeInt;
begin
  Result := StrToIntDef(RealGetText, 0);
end;

procedure TIntegerEdit.SetValue(AValue: NativeInt);
begin
  RealSetText(FloatToStrF(AValue, ffFixed, 20, DecimalPlaces));
end;

procedure TIntegerEdit.RealSetText(const AValue: string);
begin
  inherited RealSetText(FloatToStrF(StrToFloatDef(AValue, 0), ffFixed,
    20, DecimalPlaces));
end;

constructor TIntegerEdit.Create(AOwner: TComponent);
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
  inherited RealSetText(FormatDateTime(ShortDateFormat, StrToDateDef(AValue, 0)));
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
  inherited RealSetText(FormatDateTime(ShortTimeFormat, StrToTimeDef(AValue, 0)));
end;


procedure TButton.Changed;
begin
  inherited Changed;
  if height<30 then
    HandleElement['class']:='layui-btn layui-btn-xs'
  else
    HandleElement['class']:='layui-btn';

  // HandleElement.Attrs['class']:='layui-btn';
end;

procedure TCheckBox.Changed;
begin
   inherited Changed;
    HandleElement['class']:='layui-form-item';
 //  TForm(Owner).HandleElement['class']:='layui-form';

end;

procedure TComboBox.Changed;
begin
   inherited Changed;
    HandleElement['class']:='layui-form-item';
end;


procedure TProgressBar.Changed;
begin
   inherited Changed;
   HandleElement.style.removeProperty('background-color');
       HandleElement['class']:='layui-progress ';

   BarElement['class']:='layui-progress-bar lay-filter="demo"';
   BarElement.style['height']:='100%';
   BarElement.style['width']:=inttostr(round(Position/Max*100))+'%';
    BarElement['lay-percent']:=inttostr(round(Position/Max*100))+'%';


end;


procedure TProgressBar.SetPosition(Value: integer);
begin
  inherited ;

end;


constructor TTrackBar.Create(AOwner: TComponent);
begin
  inherited Create(AOwner);

  layui.use(['slider'],procedure begin end);
  end;


function TTrackBar.CreateHandleElement: TJSHTMLElement;
begin
  Result := TJSHTMLElement(Document.CreateElement('div'));

end;






 procedure  TTrackBar.Changed;


  var
   id:string;
   changed: TLayuiValueCallBack ;

 begin


   inherited Changed;
   Self.HandleId:=Self.Name;
   HandleElement.style.setProperty('margin','10px');
   HandleElement.style.removeProperty('overflow');
  HandleElement['id']:=HandleId;
   id:='#'+HandleId;
   changed:= procedure  (value:integer)
begin
  Position:=value;
    if assigned(FOnChange) then FOnChange(Self);
end;

   asm
   layui.slider.render({
    elem: id,
    change:changed
  });

   end;
 end;

procedure TTrackBar.MouseUp(Button: TMouseButton; Shift: TShiftState; X, Y: integer);
begin
end;


 procedure  TTrackBar.Paint;
 begin

 end;


Initialization
layui_use;

end.

