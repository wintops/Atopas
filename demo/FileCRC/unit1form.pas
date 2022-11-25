unit unit1form;

{$mode delphi}

interface

uses SysUtils, Classes, Dialogs, Controls, StdCtrls, Forms, Graphics,
  WebCtrls, WebCtrlsMore;

procedure Loaded;

implementation

uses unit1;

procedure Loaded;
begin
  form1.HandleId := 'form1';
  form1.FormType := ftTop;

  with Form1 do
  begin

    Form1.BeginUpdate;
    Form1.Left := 198;
    Form1.Height := 240;
    Form1.Top := 20;
    Form1.Width := 501;
    Form1.BorderStyle := bsSingle;
    Form1.Caption := 'Computes CRC32 and hashes for a file';
    Form1.ClientHeight := 300;
    Form1.ClientWidth := 601;
    Memo1 := TMemo.Create(Form1);
    Memo1.BeginUpdate;
    Memo1.Parent := Form1;
    Memo1.Left := 11;
    Memo1.Height := 224;
    Memo1.Top := 8;
    Memo1.Width := 378;
    Memo1.ReadOnly := True;
    // Memo1.ScrollBars := ssHorizontal;
    Memo1.WordWrap := False;
    Memo1.EndUpdate;

    Button1 := TButton.Create(Form1);
    Button1.BeginUpdate;
    Button1.Parent := Form1;
    Button1.Left := 400;
    Button1.Height := 34;
    Button1.Top := 8;
    Button1.Width := 91;
    Button1.Cancel := True;
    Button1.Caption := '&Quit';
    Button1.OnClick := Button1Click;
    Button1.EndUpdate;

    Button2 := TButton.Create(Form1);
    Button2.BeginUpdate;
    Button2.Parent := Form1;
    Button2.Left := 400;
    Button2.Height := 29;
    Button2.Top := 48;
    Button2.Width := 91;
    Button2.Caption := '&File...';
    Button2.Default := True;
    Button2.OnClick := Button2Click;
    Button2.EndUpdate;

    CheckBox2 := TCheckBox.Create(Form1);
    CheckBox2.BeginUpdate;
    CheckBox2.Parent := Form1;
    CheckBox2.Left := 400;
    CheckBox2.Height := 17;
    CheckBox2.Top := 136;
    CheckBox2.Width := 150;
    CheckBox2.Caption := '&SHA-1 Hash';
    CheckBox2.Checked := True;
    CheckBox2.State := cbChecked;
    CheckBox2.EndUpdate;

    StaticText1 := TStaticText.Create(Form1);
    StaticText1.BeginUpdate;
    StaticText1.Parent := Form1;
    StaticText1.Left := 400;
    StaticText1.Height := 19;
    StaticText1.Top := 213;
    StaticText1.Width := 100;
    StaticText1.Alignment := taCenter;
    StaticText1.Caption := 'Version 1.1 (F)';
    StaticText1.EndUpdate;

    StaticText2 := TStaticText.Create(Form1);
    StaticText2.BeginUpdate;
    StaticText2.Parent := Form1;
    StaticText2.Left := 400;
    StaticText2.Height := 25;
    StaticText2.Top := 96;
    StaticText2.Width :=150;
    StaticText2.Caption := 'Include also:';
    StaticText2.EndUpdate;

    CheckBox1 := TCheckBox.Create(Form1);
    CheckBox1.BeginUpdate;
    CheckBox1.Parent := Form1;
    CheckBox1.Left := 400;
    CheckBox1.Height := 17;
    CheckBox1.Top := 116;
    CheckBox1.Width := 150;
    CheckBox1.Caption := '&MD5 Hash';
    CheckBox1.Checked := True;
    CheckBox1.State := cbChecked;
    CheckBox1.EndUpdate;

    OpenDialog1 := TOpenDialog.Create(Form1);
    OpenDialog1.BeginUpdate;
    OpenDialog1.Parent := Form1;
    OpenDialog1.left := 456;
    OpenDialog1.top := 160;
    OpenDialog1.EndUpdate;

    Timer1 := TTimer.Create(Form1);
    Timer1.Enabled := False;
    Timer1.Interval := 50;
    Timer1.OnTimer := Timer1Timer;

    Form1.EndUpdate;

  end;

end;

end.
end;
