unit U1;

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
    Form1.Left := 131;
    Form1.Height := 514;
    Form1.Top := 20;
    Form1.Width := 700;
    Form1.Caption := 'Visual - GDI and OpenGL tests';

    Form1.OnCreate := FormCreate;
    Form1.OnDestroy := FormDestroy;
    Form1.OnPaint := FormPaint;
    Form1.OnResize := FormResize;
    Button1 := TButton.Create(Form1);
    Button1.BeginUpdate;
    Button1.Parent := Form1;
    Button1.Left := 464;
    Button1.Height := 46;
    Button1.Top := 8;
    Button1.Width := 82;
    Button1.Cancel := True;
    Button1.Caption := '&Quit';
    Button1.OnClick := Button1Click;
    Button1.EndUpdate;

    Button2 := TButton.Create(Form1);
    Button2.BeginUpdate;
    Button2.Parent := Form1;
    Button2.Left := 464;
    Button2.Height := 46;
    Button2.Top := 64;
    Button2.Width := 82;
    Button2.Caption := '&T';
    Button2.OnClick := Button2Click;
    Button2.EndUpdate;

    Button3 := TButton.Create(Form1);
    Button3.BeginUpdate;
    Button3.Parent := Form1;
    Button3.Left := 464;
    Button3.Height := 46;
    Button3.Top := 120;
    Button3.Width := 82;
    Button3.Caption := '&Fire';
    Button3.OnClick := Button3Click;
    Button3.EndUpdate;

    Image1 := TImage.Create(Form1);
    Image1.BeginUpdate;
    Image1.Parent := Form1;
    Image1.Left := 24;
    Image1.Height := 337;
    Image1.Top := 64;
    Image1.Width := 424;
    Image1.Stretch := True;
    Image1.Visible := False;
    Image1.EndUpdate;

    StaticText1 := TStaticText.Create(Form1);
    StaticText1.BeginUpdate;
    StaticText1.Parent := Form1;
    StaticText1.Left := 464;
    StaticText1.Height := 30;
    StaticText1.Top := 384;
    StaticText1.Width := 150;
    StaticText1.Alignment := taCenter;
    StaticText1.Caption := 'Version 1.1 (F)';
    StaticText1.EndUpdate;

    Button4 := TButton.Create(Form1);
    Button4.BeginUpdate;
    Button4.Parent := Form1;
    Button4.Left := 464;
    Button4.Height := 46;
    Button4.Top := 176;
    Button4.Width := 82;
    Button4.Caption := '&Image...';
    Button4.OnClick := Button4Click;
    Button4.EndUpdate;

    Label1 := TLabel.Create(Form1);
    Label1.BeginUpdate;
    Label1.Parent := Form1;
    Label1.Left := 49;
    Label1.Height := 31;
    Label1.Top := 17;
    Label1.Width := 367;
    Label1.Alignment := taCenter;
    Label1.AutoSize := False;
    Label1.Color := clGray;
    Label1.Font.Color := clBlack;
    Label1.Font.Height := -21;
    Label1.Font.Name := 'Tahoma';
    Label1.ParentColor := False;
    Label1.ParentFont := False;
    Label1.Visible := False;
    Label1.EndUpdate;

    StaticText2 := TStaticText.Create(Form1);
    StaticText2.BeginUpdate;
    StaticText2.Parent := Form1;
    StaticText2.Left := 49;
    StaticText2.Height := 180;
    StaticText2.Top := 120;
    StaticText2.Width := 367;
    StaticText2.EndUpdate;

    Timer1 := TTimer.Create(Form1);
    Timer1.Enabled := False;
    Timer1.OnTimer := Timer1Timer;

    OpenDialog1 := TOpenDialog.Create(Form1);
    OpenDialog1.BeginUpdate;
    OpenDialog1.Parent := Form1;
    OpenDialog1.Left := 16;
    OpenDialog1.Top := 56;
    OpenDialog1.EndUpdate;

    Form1.EndUpdate;
  end;

end;

end.
