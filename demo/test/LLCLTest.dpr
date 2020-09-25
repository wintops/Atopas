program LLCLTest;
// ported with DFM To Pas App (from Delphi do Free Pascal + LCL)
 
 uses Forms
, Unit1;
 
 {$IFDEF DELPHI}
  {$R *.RES}
 {$ENDIF}
 
 begin 
     Application.Initialize;
     Application.CreateForm(TForm1
,Form1);
     Application.Run;
 end.
