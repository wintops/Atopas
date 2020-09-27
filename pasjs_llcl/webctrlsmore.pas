unit WebCtrlsMore;

{$mode delphi}

interface

uses
  Classes,
  SysUtils,
  Types,
  Graphics,
  Controls,
    StdCtrls,
  ExtCtrls,
  Forms,
  browserapp;

type

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

  TRadioButton = class(TCustomPanel)
    Checked: boolean;
  end;

  TStaticBorderStyle =
    (sbsNone, sbsSingle, sbsSunken);

  TStaticText = class(TCustomPanel)
    BorderStyle: TStaticBorderStyle;
  end;

  TProgressBar = class(TCustomPanel)
    Position: integer;
    procedure StepIt;
  end;



  TMainMenu = class(TCustomPanel);

  TMenuItem = class(TCustomPanel)
    AutoCheck: boolean;
    Checked: boolean;
  end;

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
   // procedure doRun; override;
  end;

var
  Mouse: TMouse;

implementation



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

