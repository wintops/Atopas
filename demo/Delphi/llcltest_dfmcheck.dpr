program LLCLTest;

uses
  Forms,
  Unit1 in 'Unit1.pas' {Form1},
  llcltest_DfmCheck_Unit in 'llcltest_DfmCheck_Unit.pas';

{$R *.res}

begin
  Application.Initialize;
  {$if CompilerVersion > 18}  // Delphi 2007 of after
  Application.MainFormOnTaskbar := True;
  {$ifend}
  Application.CreateForm(TForm1, Form1);
  Application.Run;
end.
