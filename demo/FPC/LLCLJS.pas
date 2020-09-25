program LLCLJS;




{$mode delphi}

uses
  unit1,
  unit1frm,
  WebCtrls,
  Forms,

  JS,
  Classes,
  SysUtils,
  Web;

begin

  Application.Initialize;
  Application.CreateForm(TForm1, Form1);
  Loaded;
  Application.Run;

end.
