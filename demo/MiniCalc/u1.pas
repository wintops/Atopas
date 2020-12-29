unit u1;

{$mode delphi}

interface

uses SysUtils, Classes, Controls,  Forms,   WebCtrls, WebCtrlsMore;

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
    Form1.Height := 206;
    Form1.Top := 114;
    Form1.Width := 206;
    Form1.BorderStyle := bsSingle;
    Form1.Caption := 'Mini Calculator';
    Form1.ClientHeight := 206;
    Form1.ClientWidth := 206;
    Form1.KeyPreview := True;
    Form1.OnCreate := FormCreate;
    Form1.OnKeyPress := FormKeyPress;
    Form1.OnKeyDown := FormKeyDown;
 //   Form1.Position := poDesktopCenter;
    Edit1 := TEdit.Create(Form1);
    Edit1.BeginUpdate;
    Edit1.Parent := Form1;
    Edit1.Left := 7;
    Edit1.Height := 21;
    Edit1.Top := 7;
    Edit1.Width := 193;
    Edit1.Alignment := taRightJustify;
    Edit1.OnMouseDown := Edit1MouseDown;
    Edit1.ReadOnly := True;
    Edit1.EndUpdate;

    Button1 := TButton.Create(Form1);
    Button1.BeginUpdate;
    Button1.Parent := Form1;
    Button1.Left := 10;
    Button1.Height := 32;
    Button1.Top := 120;
    Button1.Width := 40;
    Button1.Caption := '1';
    Button1.OnClick := Button1Click;
    Button1.EndUpdate;

    Button2 := TButton.Create(Form1);
    Button2.BeginUpdate;
    Button2.Parent := Form1;
    Button2.Left := 58;
    Button2.Height := 32;
    Button2.Top := 120;
    Button2.Width := 40;
    Button2.Caption := '2';
    Button2.OnClick := Button2Click;
    Button2.EndUpdate;

    Button3 := TButton.Create(Form1);
    Button3.BeginUpdate;
    Button3.Parent := Form1;
    Button3.Left := 106;
    Button3.Height := 32;
    Button3.Top := 120;
    Button3.Width := 40;
    Button3.Caption := '3';
    Button3.OnClick := Button3Click;
    Button3.EndUpdate;

    Button4 := TButton.Create(Form1);
    Button4.BeginUpdate;
    Button4.Parent := Form1;
    Button4.Left := 10;
    Button4.Height := 32;
    Button4.Top := 80;
    Button4.Width := 40;
    Button4.Caption := '4';
    Button4.OnClick := Button4Click;
    Button4.EndUpdate;

    Button5 := TButton.Create(Form1);
    Button5.BeginUpdate;
    Button5.Parent := Form1;
    Button5.Left := 58;
    Button5.Height := 32;
    Button5.Top := 80;
    Button5.Width := 40;
    Button5.Caption := '5';
    Button5.OnClick := Button5Click;
    Button5.EndUpdate;

    Button6 := TButton.Create(Form1);
    Button6.BeginUpdate;
    Button6.Parent := Form1;
    Button6.Left := 106;
    Button6.Height := 32;
    Button6.Top := 80;
    Button6.Width := 40;
    Button6.Caption := '6';
    Button6.OnClick := Button6Click;
    Button6.EndUpdate;

    Button7 := TButton.Create(Form1);
    Button7.BeginUpdate;
    Button7.Parent := Form1;
    Button7.Left := 10;
    Button7.Height := 32;
    Button7.Top := 40;
    Button7.Width := 40;
    Button7.Caption := '7';
    Button7.OnClick := Button7Click;
    Button7.EndUpdate;

    Button8 := TButton.Create(Form1);
    Button8.BeginUpdate;
    Button8.Parent := Form1;
    Button8.Left := 58;
    Button8.Height := 32;
    Button8.Top := 40;
    Button8.Width := 40;
    Button8.Caption := '8';
    Button8.OnClick := Button8Click;
    Button8.EndUpdate;

    Button9 := TButton.Create(Form1);
    Button9.BeginUpdate;
    Button9.Parent := Form1;
    Button9.Left := 106;
    Button9.Height := 32;
    Button9.Top := 40;
    Button9.Width := 40;
    Button9.Caption := '9';
    Button9.OnClick := Button9Click;
    Button9.EndUpdate;

    Button10 := TButton.Create(Form1);
    Button10.BeginUpdate;
    Button10.Parent := Form1;
    Button10.Left := 10;
    Button10.Height := 32;
    Button10.Top := 160;
    Button10.Width := 40;
    Button10.Caption := '0';
    Button10.OnClick := Button10Click;
    Button10.EndUpdate;

    Button11 := TButton.Create(Form1);
    Button11.BeginUpdate;
    Button11.Parent := Form1;
    Button11.Left := 58;
    Button11.Height := 32;
    Button11.Top := 160;
    Button11.Width := 40;
    Button11.Caption := 'C';
    Button11.OnClick := Button11Click;
    Button11.EndUpdate;

    Button12 := TButton.Create(Form1);
    Button12.BeginUpdate;
    Button12.Parent := Form1;
    Button12.Left := 106;
    Button12.Height := 32;
    Button12.Top := 160;
    Button12.Width := 40;
    Button12.Caption := '=';
    Button12.OnClick := Button12Click;
    Button12.EndUpdate;

    Button13 := TButton.Create(Form1);
    Button13.BeginUpdate;
    Button13.Parent := Form1;
    Button13.Left := 154;
    Button13.Height := 32;
    Button13.Top := 40;
    Button13.Width := 40;
    Button13.Caption := '/';
    Button13.OnClick := Button13Click;
    Button13.EndUpdate;

    Button14 := TButton.Create(Form1);
    Button14.BeginUpdate;
    Button14.Parent := Form1;
    Button14.Left := 154;
    Button14.Height := 32;
    Button14.Top := 80;
    Button14.Width := 40;
    Button14.Caption := '*';
    Button14.OnClick := Button14Click;
    Button14.EndUpdate;

    Button15 := TButton.Create(Form1);
    Button15.BeginUpdate;
    Button15.Parent := Form1;
    Button15.Left := 154;
    Button15.Height := 32;
    Button15.Top := 120;
    Button15.Width := 40;
    Button15.Caption := '-';
    Button15.OnClick := Button15Click;
    Button15.EndUpdate;

    Button16 := TButton.Create(Form1);
    Button16.BeginUpdate;
    Button16.Parent := Form1;
    Button16.Left := 154;
    Button16.Height := 32;
    Button16.Top := 160;
    Button16.Width := 40;
    Button16.Caption := '+';
    Button16.OnClick := Button16Click;
    Button16.EndUpdate;

    HiddenButton := TButton.Create(Form1);
    HiddenButton.BeginUpdate;
    HiddenButton.Parent := Form1;
    HiddenButton.Visible := false;

    HiddenButton.Caption := 'Hidden Focus';
    HiddenButton.Default := True;
    HiddenButton.OnClick := HiddenButtonClick;
    HiddenButton.EndUpdate;

    Form1.EndUpdate;
    Form1.EndUpdate;
    Form1.FormCreate(nil);
  end;
end;


end.
