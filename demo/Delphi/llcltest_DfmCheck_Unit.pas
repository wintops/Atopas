unit llcltest_DfmCheck_Unit;

interface

implementation

uses
  Unit1,
  SysUtils;

procedure TestDfmFormConsistency;
begin
{ Form1: TForm1 }
  with TForm1(nil) do { Unit1.pas }
  begin
    Label1.ClassName; { Label1: TLabel; }
    GroupBox1.ClassName; { GroupBox1: TGroupBox; }
    RadioButton1.ClassName; { RadioButton1: TRadioButton; }
    RadioButton2.ClassName; { RadioButton2: TRadioButton; }
    ComboBox1.ClassName; { ComboBox1: TComboBox; }
    Edit1.ClassName; { Edit1: TEdit; }
    Button1.ClassName; { Button1: TButton; }
    Button3.ClassName; { Button3: TButton; }
    ListBox1.ClassName; { ListBox1: TListBox; }
    Memo1.ClassName; { Memo1: TMemo; }
    Button2.ClassName; { Button2: TButton; }
    Button4.ClassName; { Button4: TButton; }
    CheckBox1.ClassName; { CheckBox1: TCheckBox; }
    Button6.ClassName; { Button6: TButton; }
    Button7.ClassName; { Button7: TButton; }
    Button8.ClassName; { Button8: TButton; }
    Button9.ClassName; { Button9: TButton; }
    Button10.ClassName; { Button10: TButton; }
    CheckBox2.ClassName; { CheckBox2: TCheckBox; }
    CheckBox3.ClassName; { CheckBox3: TCheckBox; }
    ComboBox2.ClassName; { ComboBox2: TComboBox; }
    StaticText1.ClassName; { StaticText1: TStaticText; }
    Button5.ClassName; { Button5: TButton; }
    Button11.ClassName; { Button11: TButton; }
    ProgressBar1.ClassName; { ProgressBar1: TProgressBar; }
    StaticText2.ClassName; { StaticText2: TStaticText; }
    Timer1.ClassName; { Timer1: TTimer; }
    MainMenu1.ClassName; { MainMenu1: TMainMenu; }
    MenuItem1.ClassName; { MenuItem1: TMenuItem; }
    MenuItem3.ClassName; { MenuItem3: TMenuItem; }
    MenuItem4.ClassName; { MenuItem4: TMenuItem; }
    MenuItem13.ClassName; { MenuItem13: TMenuItem; }
    MenuItem11.ClassName; { MenuItem11: TMenuItem; }
    MenuItem12.ClassName; { MenuItem12: TMenuItem; }
    MenuItem5.ClassName; { MenuItem5: TMenuItem; }
    MenuItem6.ClassName; { MenuItem6: TMenuItem; }
    MenuItem2.ClassName; { MenuItem2: TMenuItem; }
    MenuItem7.ClassName; { MenuItem7: TMenuItem; }
    MenuItem8.ClassName; { MenuItem8: TMenuItem; }
    PopupMenu1.ClassName; { PopupMenu1: TPopupMenu; }
    MenuItem9.ClassName; { MenuItem9: TMenuItem; }
    MenuItem10.ClassName; { MenuItem10: TMenuItem; }
    XPManifest1.ClassName; { XPManifest1: TXPManifest; }
    SaveDialog1.ClassName; { SaveDialog1: TSaveDialog; }
    OpenDialog1.ClassName; { OpenDialog1: TOpenDialog; }
  end;

end;

end.
