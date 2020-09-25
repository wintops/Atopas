unit unit1frm;

{$mode delphi}

interface

uses SysUtils, Classes, Dialogs, Controls, StdCtrls, Forms, Graphics, WebCtrls;

procedure Loaded;

implementation

uses unit1;

procedure Loaded;
begin
  with Form1 do
  begin
    Form1.BeginUpdate;
    Form1.Left := 245;
    Form1.Height := 561;
    Form1.Top := 114;
    Form1.Width := 408;
    Form1.Caption := 'LLCL - Just testing...';
    Form1.ClientHeight := 541;
    Form1.ClientWidth := 408;
    Form1.KeyPreview := True;
    //  Form1.Menu := MainMenu1;
    Form1.OnCreate := FormCreate;
    Form1.OnKeyDown := FormKeyDown;
    Form1.OnKeyPress := FormKeyPress;
    Form1.OnKeyUp := FormKeyUp;
    Form1.OnMouseDown := FormMouseDown;
    Form1.OnMouseUp := FormMouseUp;
    GroupBox1 := TGroupBox.Create(Form1);
    GroupBox1.BeginUpdate;
    GroupBox1.Parent := Form1;
    GroupBox1.Left := 8;
    GroupBox1.Height := 65;
    GroupBox1.Top := 140;
    GroupBox1.Width := 129;
    GroupBox1.Caption := 'GroupBox1';
    GroupBox1.ClientHeight := 110;
    GroupBox1.ClientWidth := 125;
    GroupBox1.Font.Color := clBlack;
    GroupBox1.Font.Size := 9;
    GroupBox1.Font.Name := 'Tahoma';
    GroupBox1.ParentFont := False;
    RadioButton1 := TRadioButton.Create(GroupBox1);
    RadioButton1.BeginUpdate;
    RadioButton1.Parent := GroupBox1;
    RadioButton1.Left := 18;
    RadioButton1.Height := 21;
    RadioButton1.Top := 3;
    RadioButton1.Width := 87;
    RadioButton1.Caption := 'RadioButton1';
    RadioButton1.Font.Color := clBlack;
    RadioButton1.Font.Size := 9;
    RadioButton1.Font.Name := 'Tahoma';
    RadioButton1.Font.Style := [fsItalic];
    RadioButton1.ParentFont := False;
    RadioButton1.EndUpdate;

    RadioButton2 := TRadioButton.Create(GroupBox1);
    RadioButton2.BeginUpdate;
    RadioButton2.Parent := GroupBox1;
    RadioButton2.Left := 18;
    RadioButton2.Height := 21;
    RadioButton2.Top := 22;
    RadioButton2.Width := 87;
    RadioButton2.Caption := 'RadioButton2';
    RadioButton2.Checked := True;
    RadioButton2.Font.Color := clBlack;
    RadioButton2.Font.Size := 9;
    RadioButton2.Font.Name := 'Tahoma';
    RadioButton2.ParentFont := False;
    RadioButton2.EndUpdate;

    GroupBox1.EndUpdate;

    ComboBox1 := TComboBox.Create(Form1);
    ComboBox1.BeginUpdate;
    ComboBox1.Parent := Form1;
    ComboBox1.Left := 8;
    ComboBox1.Height := 21;
    ComboBox1.Top := 12;
    ComboBox1.Width := 133;
    ComboBox1.Font.Color := clBlack;
    ComboBox1.Font.Size := 12;
    ComboBox1.Font.Name := 'Tahoma';
    ComboBox1.Font.Style := [fsBold];
    ComboBox1.ItemHeight := 13;
    ComboBox1.Items.CommaText := '11,22,44,33';
    ComboBox1.ItemIndex := 0;
    ComboBox1.OnChange := ComboBox1Change;
    ComboBox1.ParentFont := False;
    ComboBox1.Text := 'sample text';
    ComboBox1.EndUpdate;

    Edit1 := TEdit.Create(Form1);
    Edit1.BeginUpdate;
    Edit1.Parent := Form1;
    Edit1.Left := 276;
    Edit1.Height := 25;
    Edit1.Top := 12;
    Edit1.Width := 125;
    Edit1.OnChange := Edit1Change;
    Edit1.OnDblClick := Edit1DblClick;
    Edit1.Text := 'New item name';
    Edit1.EndUpdate;

    Button1 := TButton.Create(Form1);
    Button1.BeginUpdate;
    Button1.Parent := Form1;
    Button1.Left := 184;
    Button1.Height := 25;
    Button1.Top := 12;
    Button1.Width := 75;
    Button1.Caption := 'Add';
    Button1.Font.Color := clBlack;
    Button1.Font.Height := -13;
    Button1.Font.Name := 'Tahoma';
    Button1.Font.Style := [fsBold];
    Button1.OnClick := Button1Click;
    Button1.ParentFont := False;
    Button1.EndUpdate;

    Button3 := TButton.Create(Form1);
    Button3.BeginUpdate;
    Button3.Parent := Form1;
    Button3.Left := 184;
    Button3.Height := 25;
    Button3.Top := 44;
    Button3.Width := 75;
    Button3.Caption := 'Clear';
    Button3.OnClick := Button3Click;
    Button3.EndUpdate;

    ListBox1 := TListBox.Create(Form1);
    ListBox1.BeginUpdate;
    ListBox1.Parent := Form1;
    ListBox1.Left := 184;
    ListBox1.Height := 100;
    ListBox1.Top := 76;
    ListBox1.Width := 217;
    ListBox1.Font.Color := clBlack;
    ListBox1.Font.Height := -11;
    ListBox1.Font.Name := 'Tahoma';
    ListBox1.Font.Style := [fsBold];
    ListBox1.Items.CommaText := '444,111,333,222';
    ListBox1.ItemHeight := 13;
    ListBox1.OnDblClick := ListBox1DblClick;
    ListBox1.ParentFont := False;
    ListBox1.EndUpdate;

    Memo1 := TMemo.Create(Form1);
    Memo1.BeginUpdate;
    Memo1.Parent := Form1;
    Memo1.Left := 8;
    Memo1.Height := 285;
    Memo1.Top := 216;
    Memo1.Width := 393;
    Memo1.Lines.CommaText := 'asd,zxc';
    Memo1.ScrollBars := ssVertical;
    Memo1.EndUpdate;

    Button2 := TButton.Create(Form1);
    Button2.BeginUpdate;
    Button2.Parent := Form1;
    Button2.Left := 276;
    Button2.Height := 25;
    Button2.Top := 44;
    Button2.Width := 53;
    Button2.Caption := 'GetText';
    Button2.OnClick := Button2Click;
    Button2.Font.Size := 10;
    Button2.EndUpdate;

    Button4 := TButton.Create(Form1);
    Button4.BeginUpdate;
    Button4.Parent := Form1;
    Button4.Left := 348;
    Button4.Height := 25;
    Button4.Top := 44;
    Button4.Width := 53;
    Button4.Caption := 'SetText';
    Button4.Font.Size := 10;
    Button4.OnClick := Button4Click;
    Button4.EndUpdate;

    CheckBox1 := TCheckBox.Create(Form1);
    CheckBox1.BeginUpdate;
    CheckBox1.Parent := Form1;
    CheckBox1.Left := 8;
    CheckBox1.Height := 21;
    CheckBox1.Top := 76;
    CheckBox1.Width := 100;
    CheckBox1.Font.Size := 10;
    CheckBox1.AllowGrayed := True;
    CheckBox1.Caption := 'CheckBox1';
    CheckBox1.State := cbGrayed;
    CheckBox1.EndUpdate;

    Button6 := TButton.Create(Form1);
    Button6.BeginUpdate;
    Button6.Parent := Form1;
    Button6.Left := 88;
    Button6.Height := 25;
    Button6.Top := 92;
    Button6.Width := 53;
    Button6.Caption := 'Grayed';
    Button6.Font.Size := 10;

    Button6.OnClick := Button6Click;
    Button6.EndUpdate;

    Button7 := TButton.Create(Form1);
    Button7.BeginUpdate;
    Button7.Parent := Form1;
    Button7.Left := 148;
    Button7.Height := 25;
    Button7.Top := 12;
    Button7.Width := 29;
    Button7.Caption := 'DD';
    Button7.Font.Size := 10;

    Button7.OnClick := Button7Click;
    Button7.EndUpdate;

    Button8 := TButton.Create(Form1);
    Button8.BeginUpdate;
    Button8.Parent := Form1;
    Button8.Left := 80;
    Button8.Height := 21;
    Button8.Top := 44;
    Button8.Width := 61;
    Button8.Caption := 'Disabled';
    Button8.Font.Size := 10;

    Button8.Enabled := False;
    Button8.OnClick := Button8Click;
    Button8.EndUpdate;

    Button9 := TButton.Create(Form1);
    Button9.BeginUpdate;
    Button9.Parent := Form1;
    Button9.Left := 144;
    Button9.Height := 25;
    Button9.Top := 180;
    Button9.Width := 33;
    Button9.Caption := 'Sh/H';
    Button9.Font.Size := 10;

    Button9.OnClick := Button9Click;
    Button9.EndUpdate;

    Button10 := TButton.Create(Form1);
    Button10.BeginUpdate;
    Button10.Parent := Form1;
    Button10.Left := 8;
    Button10.Height := 21;
    Button10.Top := 44;
    Button10.Width := 69;
    Button10.Caption := 'Invisible!!!';
    Button10.OnClick := Button10Click;
    Button10.Visible := False;
    Button10.EndUpdate;

    CheckBox2 := TCheckBox.Create(Form1);
    CheckBox2.BeginUpdate;
    CheckBox2.Parent := Form1;
    CheckBox2.Left := 8;
    CheckBox2.Height := 21;
    CheckBox2.Top := 96;
    CheckBox2.Width := 100;
    CheckBox2.Caption := 'CheckBox2';
    CheckBox2.Font.Size := 10;
    CheckBox2.Checked := True;
    CheckBox2.State := cbChecked;
    CheckBox2.EndUpdate;

    CheckBox3 := TCheckBox.Create(Form1);
    CheckBox3.BeginUpdate;
    CheckBox3.Parent := Form1;
    CheckBox3.Left := 8;
    CheckBox3.Height := 21;
    CheckBox3.Top := 116;
    CheckBox3.Width := 100;
    CheckBox3.Caption := 'CheckBox3';
    CheckBox3.Font.Size := 10;
    CheckBox3.EndUpdate;

    ComboBox2 := TComboBox.Create(Form1);
    ComboBox2.BeginUpdate;
    ComboBox2.Parent := Form1;
    ComboBox2.Left := 148;
    ComboBox2.Height := 129;
    ComboBox2.Top := 44;
    ComboBox2.Width := 25;
    ComboBox2.ItemHeight := 17;
    ComboBox2.Items.CommaText := '5,4,3,2,1';
    ComboBox2.Style := csSimple;
    ComboBox2.Text := '10';
    ComboBox2.Font.Size := 9;
    ComboBox2.EndUpdate;

    StaticText1 := TStaticText.Create(Form1);
    StaticText1.BeginUpdate;
    StaticText1.Parent := Form1;
    StaticText1.Left := 44;
    StaticText1.Height := 30;
    StaticText1.Top := 512;
    StaticText1.Width := 70;
    StaticText1.Alignment := taCenter;
    StaticText1.BorderStyle := sbsSunken;
    StaticText1.Caption := 'StaticText';
    StaticText1.Font.Size:=9;
    StaticText1.EndUpdate;

    Label1 := TLabel.Create(Form1);
    Label1.BeginUpdate;
    Label1.Parent := Form1;
    Label1.Left := 8;
    Label1.Height := 17;
    Label1.Top := 512;
    Label1.Width := 31;
    Label1.Caption := 'Label';
    Label1.ParentColor := False;
    Label1.EndUpdate;

    Button5 := TButton.Create(Form1);
    Button5.BeginUpdate;
    Button5.Parent := Form1;
    Button5.Left := 120;
    Button5.Height := 25;
    Button5.Top := 512;
    Button5.Width := 94;
    Button5.Cancel := True;
    Button5.Caption := 'Cancel Button';
    Button5.OnClick := Button5Click;
    Button5.EndUpdate;

    Button11 := TButton.Create(Form1);
    Button11.BeginUpdate;
    Button11.Parent := Form1;
    Button11.Left := 216;
    Button11.Height := 25;
    Button11.Top := 512;
    Button11.Width := 94;
    Button11.Caption := 'Default Button';
    Button11.Default := True;
    Button11.OnClick := Button11Click;
    Button11.EndUpdate;

    ProgressBar1 := TProgressBar.Create(Form1);
    ProgressBar1.BeginUpdate;
    ProgressBar1.Parent := Form1;
    ProgressBar1.Left := 320;
    ProgressBar1.Height := 16;
    ProgressBar1.Top := 516;
    ProgressBar1.Width := 81;
    ProgressBar1.EndUpdate;

    StaticText2 := TStaticText.Create(Form1);
    StaticText2.BeginUpdate;
    StaticText2.Parent := Form1;
    StaticText2.Left := 184;
    StaticText2.Height := 17;
    StaticText2.Top := 184;
    StaticText2.Width := 217;
    StaticText2.Alignment := taCenter;
    StaticText2.Caption := '(Reserved for dynamic control)';
    StaticText2.Font.Size:=10;
    StaticText2.Visible := False;
    StaticText2.EndUpdate;


    Timer1 := TTimer.Create(Form1);
    Timer1.BeginUpdate;
    Timer1.Parent := Form1;
    Timer1.OnTimer := Timer1Timer;
    Timer1.Width := 0;
    Timer1.Height:=0;
    Timer1.EndUpdate;

  {
  MainMenu1 := TMainMenu.Create(Form1);
  MainMenu1.BeginUpdate;
  MainMenu1.Parent := Form1;
  MainMenu1.Top := 600;
  MainMenu1.Left := 336;
  MenuItem1 := TMenuItem.Create(MainMenu1);
  MenuItem1.BeginUpdate;
  MenuItem1.Parent := MainMenu1;
  MenuItem1.Caption := 'Menu1';
  MenuItem3 := TMenuItem.Create(MenuItem1);
  MenuItem3.BeginUpdate;
  MenuItem3.Parent := MenuItem1;
  MenuItem3.AutoCheck := True;
  MenuItem3.Caption := 'Menu11';
  MenuItem3.Checked := True;
  MenuItem3.EndUpdate;

  MenuItem4 := TMenuItem.Create(MenuItem1);
  MenuItem4.BeginUpdate;
  MenuItem4.Parent := MenuItem1;
  MenuItem4.Caption := 'Menu12';
  MenuItem4.Enabled := False;
  MenuItem4.EndUpdate;

  MenuItem13 := TMenuItem.Create(MenuItem1);
  MenuItem13.BeginUpdate;
  MenuItem13.Parent := MenuItem1;
  MenuItem13.Caption := '-';
  MenuItem13.EndUpdate;

  MenuItem11 := TMenuItem.Create(MenuItem1);
  MenuItem11.BeginUpdate;
  MenuItem11.Parent := MenuItem1;
  MenuItem11.Caption := 'Open File...';
  MenuItem11.OnClick := MenuItem11Click;
  MenuItem11.EndUpdate;

  MenuItem12 := TMenuItem.Create(MenuItem1);
  MenuItem12.BeginUpdate;
  MenuItem12.Parent := MenuItem1;
  MenuItem12.Caption := 'Save File...';
  MenuItem12.OnClick := MenuItem12Click;
  MenuItem12.EndUpdate;

  MenuItem5 := TMenuItem.Create(MenuItem1);
  MenuItem5.BeginUpdate;
  MenuItem5.Parent := MenuItem1;
  MenuItem5.Caption := '-';
  MenuItem5.EndUpdate;

  MenuItem6 := TMenuItem.Create(MenuItem1);
  MenuItem6.BeginUpdate;
  MenuItem6.Parent := MenuItem1;
  MenuItem6.Caption := 'Quit';
  MenuItem6.OnClick := MenuItem6Click;
  MenuItem6.EndUpdate;

  MenuItem1.EndUpdate;

  MenuItem2 := TMenuItem.Create(MainMenu1);
  MenuItem2.BeginUpdate;
  MenuItem2.Parent := MainMenu1;
  MenuItem2.Caption := 'Menu2';
  MenuItem7 := TMenuItem.Create(MenuItem2);
  MenuItem7.BeginUpdate;
  MenuItem7.Parent := MenuItem2;
  MenuItem7.Caption := 'Menu21';
  MenuItem7.OnClick := MenuItem7Click;
  MenuItem7.EndUpdate;

  MenuItem8 := TMenuItem.Create(MenuItem2);
  MenuItem8.BeginUpdate;
  MenuItem8.Parent := MenuItem2;
  MenuItem8.Caption := 'Menu22';
  MenuItem8.OnClick := MenuItem8Click;
  MenuItem8.EndUpdate;

  MenuItem2.EndUpdate;

  MainMenu1.EndUpdate;

  PopupMenu1 := TPopupMenu.Create(Form1);
  PopupMenu1.BeginUpdate;
  PopupMenu1.Parent := Form1;
  PopupMenu1.Left := 304;
  MenuItem9 := TMenuItem.Create(PopupMenu1);
  MenuItem9.BeginUpdate;
  MenuItem9.Parent := PopupMenu1;
  MenuItem9.Caption := 'Popup1';
  MenuItem9.OnClick := MenuItem9Click;
  MenuItem9.EndUpdate;

  MenuItem10 := TMenuItem.Create(PopupMenu1);
  MenuItem10.BeginUpdate;
  MenuItem10.Parent := PopupMenu1;
  MenuItem10.Caption := 'Popup2';
  MenuItem10.OnClick := MenuItem10Click;
  MenuItem10.EndUpdate;

  PopupMenu1.EndUpdate;

  OpenDialog1 := TOpenDialog.Create(Form1);
  OpenDialog1.BeginUpdate;
  OpenDialog1.Parent := Form1;
  OpenDialog1.Left := 240;
  OpenDialog1.EndUpdate;

  SaveDialog1 := TSaveDialog.Create(Form1);
  SaveDialog1.BeginUpdate;
  SaveDialog1.Parent := Form1;
  SaveDialog1.Left := 272;
  SaveDialog1.EndUpdate;
  }
    Form1.EndUpdate;
  end;
end;


end.


