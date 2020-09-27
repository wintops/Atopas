unit UIConsts;

interface

uses  SysUtils;

type

  TIdentToInt = function(const Ident: string; var Int: Integer): Boolean;
  TIntToIdent = function(Int: Integer; var Ident: string): Boolean;

  TColor = LongInt;

  TGetStrProc = procedure(const S: string) of object;
  TIdentMapEntry = record
    Value: Integer;
    Name: String;
  end;

  TColorRec = record
  const
    SystemColor = $FF000000;
    // System Colors (Windows only)
    cSCROLLBAR = 0;
    cBACKGROUND = 1;
    cACTIVECAPTION = 2;
    cINACTIVECAPTION = 3;
    cMENU = 4;
    cWINDOW = 5;
    cWINDOWFRAME = 6;
    cMENUTEXT = 7;
    cWINDOWTEXT = 8;
    cCAPTIONTEXT = 9;
    cACTIVEBORDER = 10;
    cINACTIVEBORDER = 11;
    cAPPWORKSPACE = 12;
    cHIGHLIGHT = 13;
    cHIGHLIGHTTEXT = 14;
    cBTNFACE = 15;
    cBTNSHADOW = $10;
    cGRAYTEXT = 17;
    cBTNTEXT = 18;
    cINACTIVECAPTIONTEXT = 19;
    cBTNHIGHLIGHT = 20;
    c3DDKSHADOW = 21;
    c3DLIGHT = 22;
    cINFOTEXT = 23;
    cINFOBK = 24;
    cHOTLIGHT = 26;
    cGRADIENTACTIVECAPTION = 27;
    cGRADIENTINACTIVECAPTION = 28;
    cMENUHILIGHT = 29;
    cMENUBAR = 30;
    cENDCOLORS = cMENUBAR;
    cDESKTOP = cBACKGROUND;
    c3DFACE = cBTNFACE;
    c3DSHADOW = cBTNSHADOW;
    c3DHIGHLIGHT = cBTNHIGHLIGHT;
    c3DHILIGHT = cBTNHIGHLIGHT;
    cBTNHILIGHT = cBTNHIGHLIGHT;
    SysScrollBar = TColor(SystemColor or cSCROLLBAR);
    SysBackground = TColor(SystemColor or cBACKGROUND);
    SysActiveCaption = TColor(SystemColor or cACTIVECAPTION);
    SysInactiveCaption = TColor(SystemColor or cINACTIVECAPTION);
    SysMenu = TColor(SystemColor or cMENU);
    SysWindow = TColor(SystemColor or cWINDOW);
    SysWindowFrame = TColor(SystemColor or cWINDOWFRAME);
    SysMenuText = TColor(SystemColor or cMENUTEXT);
    SysWindowText = TColor(SystemColor or cWINDOWTEXT);
    SysCaptionText = TColor(SystemColor or cCAPTIONTEXT);
    SysActiveBorder = TColor(SystemColor or cACTIVEBORDER);
    SysInactiveBorder = TColor(SystemColor or cINACTIVEBORDER);
    SysAppWorkSpace = TColor(SystemColor or cAPPWORKSPACE);
    SysHighlight = TColor(SystemColor or cHIGHLIGHT);
    SysHighlightText = TColor(SystemColor or cHIGHLIGHTTEXT);
    SysBtnFace = TColor(SystemColor or cBTNFACE);
    SysBtnShadow = TColor(SystemColor or cBTNSHADOW);
    SysGrayText = TColor(SystemColor or cGRAYTEXT);
    SysBtnText = TColor(SystemColor or cBTNTEXT);
    SysInactiveCaptionText = TColor(SystemColor or cINACTIVECAPTIONTEXT);
    SysBtnHighlight = TColor(SystemColor or cBTNHIGHLIGHT);
    Sys3DDkShadow = TColor(SystemColor or c3DDKSHADOW);
    Sys3DLight = TColor(SystemColor or c3DLIGHT);
    SysInfoText = TColor(SystemColor or cINFOTEXT);
    SysInfoBk = TColor(SystemColor or cINFOBK);
    SysHotLight = TColor(SystemColor or cHOTLIGHT);
    SysGradientActiveCaption = TColor(SystemColor or cGRADIENTACTIVECAPTION);
    SysGradientInactiveCaption = TColor(SystemColor or cGRADIENTINACTIVECAPTION);
    SysMenuHighlight = TColor(SystemColor or cMENUHILIGHT);
    SysMenuBar = TColor(SystemColor or cMENUBAR);
    SysNone = TColor($1FFFFFFF);
    SysDefault = TColor($20000000);
    // Actual colors
    Aliceblue = TColor($FFF8F0);
    Antiquewhite = TColor($D7EBFA);
    Aqua = TColor($FFFF00);
    Aquamarine = TColor($D4FF7F);
    Azure = TColor($FFFFF0);
    Beige = TColor($DCF5F5);
    Bisque = TColor($C4E4FF);
    Black = TColor($000000);
    Blanchedalmond = TColor($CDEBFF);
    Blue = TColor($FF0000);
    Blueviolet = TColor($E22B8A);
    Brown = TColor($2A2AA5);
    Burlywood = TColor($87B8DE);
    Cadetblue = TColor($A09E5F);
    Chartreuse = TColor($00FF7F);
    Chocolate = TColor($1E69D2);
    Coral = TColor($507FFF);
    Cornflowerblue = TColor($ED9564);
    Cornsilk = TColor($DCF8FF);
    Crimson = TColor($3C14DC);
    Cyan = TColor($FFFF00);
    Darkblue = TColor($8B0000);
    Darkcyan = TColor($8B8B00);
    Darkgoldenrod = TColor($0B86B8);
    Darkgray = TColor($A9A9A9);
    Darkgreen = TColor($006400);
    Darkgrey = TColor($A9A9A9);
    Darkkhaki = TColor($6BB7BD);
    Darkmagenta = TColor($8B008B);
    Darkolivegreen = TColor($2F6B55);
    Darkorange = TColor($008CFF);
    Darkorchid = TColor($CC3299);
    Darkred = TColor($00008B);
    Darksalmon = TColor($7A96E9);
    Darkseagreen = TColor($8FBC8F);
    Darkslateblue = TColor($8B3D48);
    Darkslategray = TColor($4F4F2F);
    Darkslategrey = TColor($4F4F2F);
    Darkturquoise = TColor($D1CE00);
    Darkviolet = TColor($D30094);
    Deeppink = TColor($9314FF);
    Deepskyblue = TColor($FFBF00);
    Dimgray = TColor($696969);
    Dimgrey = TColor($696969);
    Dodgerblue = TColor($FF901E);
    Firebrick = TColor($2222B2);
    Floralwhite = TColor($F0FAFF);
    Forestgreen = TColor($228B22);
    Fuchsia = TColor($FF00FF);
    Gainsboro = TColor($DCDCDC);
    Ghostwhite = TColor($FFF8F8);
    Gold = TColor($00D7FF);
    Goldenrod = TColor($20A5DA);
    Gray = TColor($808080);
    Green = TColor($008000);
    Greenyellow = TColor($2FFFAD);
    Grey = TColor($808080);
    Honeydew = TColor($F0FFF0);
    Hotpink = TColor($B469FF);
    Indianred = TColor($5C5CCD);
    Indigo = TColor($82004B);
    Ivory = TColor($F0FFFF);
    Khaki = TColor($8CE6F0);
    Lavender = TColor($FAE6E6);
    Lavenderblush = TColor($F5F0FF);
    Lawngreen = TColor($00FC7C);
    Lemonchiffon = TColor($CDFAFF);
    Lightblue = TColor($E6D8AD);
    Lightcoral = TColor($8080F0);
    Lightcyan = TColor($FFFFE0);
    Lightgoldenrodyellow = TColor($D2FAFA);
    Lightgray = TColor($D3D3D3);
    Lightgreen = TColor($90EE90);
    Lightgrey = TColor($D3D3D3);
    Lightpink = TColor($C1B6FF);
    Lightsalmon = TColor($7AA0FF);
    Lightseagreen = TColor($AAB220);
    Lightskyblue = TColor($FACE87);
    Lightslategray = TColor($998877);
    Lightslategrey = TColor($998877);
    Lightsteelblue = TColor($DEC4B0);
    Lightyellow = TColor($E0FFFF);
    LtGray = TColor($C0C0C0);
    MedGray = TColor($A4A0A0);
    DkGray = TColor($808080);
    MoneyGreen = TColor($C0DCC0);
    LegacySkyBlue = TColor($F0CAA6);
    Cream = TColor($F0FBFF);
    Lime = TColor($00FF00);
    Limegreen = TColor($32CD32);
    Linen = TColor($E6F0FA);
    Magenta = TColor($FF00FF);
    Maroon = TColor($000080);
    Mediumaquamarine = TColor($AACD66);
    Mediumblue = TColor($CD0000);
    Mediumorchid = TColor($D355BA);
    Mediumpurple = TColor($DB7093);
    Mediumseagreen = TColor($71B33C);
    Mediumslateblue = TColor($EE687B);
    Mediumspringgreen = TColor($9AFA00);
    Mediumturquoise = TColor($CCD148);
    Mediumvioletred = TColor($8515C7);
    Midnightblue = TColor($701919);
    Mintcream = TColor($FAFFF5);
    Mistyrose = TColor($E1E4FF);
    Moccasin = TColor($B5E4FF);
    Navajowhite = TColor($ADDEFF);
    Navy = TColor($800000);
    Oldlace = TColor($E6F5FD);
    Olive = TColor($008080);
    Olivedrab = TColor($238E6B);
    Orange = TColor($00A5FF);
    Orangered = TColor($0045FF);
    Orchid = TColor($D670DA);
    Palegoldenrod = TColor($AAE8EE);
    Palegreen = TColor($98FB98);
    Paleturquoise = TColor($EEEEAF);
    Palevioletred = TColor($9370DB);
    Papayawhip = TColor($D5EFFF);
    Peachpuff = TColor($B9DAFF);
    Peru = TColor($3F85CD);
    Pink = TColor($CBC0FF);
    Plum = TColor($DDA0DD);
    Powderblue = TColor($E6E0B0);
    Purple = TColor($800080);
    Red = TColor($0000FF);
    Rosybrown = TColor($8F8FBC);
    Royalblue = TColor($E16941);
    Saddlebrown = TColor($13458B);
    Salmon = TColor($7280FA);
    Sandybrown = TColor($60A4F4);
    Seagreen = TColor($578B2E);
    Seashell = TColor($EEF5FF);
    Sienna = TColor($2D52A0);
    Silver = TColor($C0C0C0);
    Skyblue = TColor($EBCE87);
    Slateblue = TColor($CD5A6A);
    Slategray = TColor($908070);
    Slategrey = TColor($908070);
    Snow = TColor($FAFAFF);
    Springgreen = TColor($7FFF00);
    Steelblue = TColor($B48246);
    Tan = TColor($8CB4D2);
    Teal = TColor($808000);
    Thistle = TColor($D8BFD8);
    Tomato = TColor($4763FF);
    Turquoise = TColor($D0E040);
    Violet = TColor($EE82EE);
    Wheat = TColor($B3DEF5);
    White = TColor($FFFFFF);
    Whitesmoke = TColor($F5F5F5);
    Yellow = TColor($00FFFF);
    Yellowgreen = TColor($32CD9A);
    Null = TColor($00000000);

   end;

  TColors = TColorRec;

const
  Colors: array[0..51] of TIdentMapEntry = (
    (Value: TColors.Black; Name: 'clBlack'),
    (Value: TColors.Maroon; Name: 'clMaroon'),
    (Value: TColors.Green; Name: 'clGreen'),
    (Value: TColors.Olive; Name: 'clOlive'),
    (Value: TColors.Navy; Name: 'clNavy'),
    (Value: TColors.Purple; Name: 'clPurple'),
    (Value: TColors.Teal; Name: 'clTeal'),
    (Value: TColors.Gray; Name: 'clGray'),
    (Value: TColors.Silver; Name: 'clSilver'),
    (Value: TColors.Red; Name: 'clRed'),
    (Value: TColors.Lime; Name: 'clLime'),
    (Value: TColors.Yellow; Name: 'clYellow'),
    (Value: TColors.Blue; Name: 'clBlue'),
    (Value: TColors.Fuchsia; Name: 'clFuchsia'),
    (Value: TColors.Aqua; Name: 'clAqua'),
    (Value: TColors.White; Name: 'clWhite'),

    (Value: TColors.MoneyGreen; Name: 'clMoneyGreen'),
    // Use LegacySkyBlue to maintain consistency in VCL colors
    (Value: TColors.LegacySkyBlue; Name: 'clSkyBlue'),
    (Value: TColors.Cream; Name: 'clCream'),
    (Value: TColors.MedGray; Name: 'clMedGray'),

    (Value: TColors.SysActiveBorder; Name: 'clActiveBorder'),
    (Value: TColors.SysActiveCaption; Name: 'clActiveCaption'),
    (Value: TColors.SysAppWorkSpace; Name: 'clAppWorkSpace'),
    (Value: TColors.SysBackground; Name: 'clBackground'),
    (Value: TColors.SysBtnFace; Name: 'clBtnFace'),
    (Value: TColors.SysBtnHighlight; Name: 'clBtnHighlight'),
    (Value: TColors.SysBtnShadow; Name: 'clBtnShadow'),
    (Value: TColors.SysBtnText; Name: 'clBtnText'),
    (Value: TColors.SysCaptionText; Name: 'clCaptionText'),
    (Value: TColors.SysDefault; Name: 'clDefault'),
    (Value: TColors.SysGradientActiveCaption; Name: 'clGradientActiveCaption'),
    (Value: TColors.SysGradientInactiveCaption; Name: 'clGradientInactiveCaption'),
    (Value: TColors.SysGrayText; Name: 'clGrayText'),
    (Value: TColors.SysHighlight; Name: 'clHighlight'),
    (Value: TColors.SysHighlightText; Name: 'clHighlightText'),
    (Value: TColors.SysHotLight; Name: 'clHotLight'),
    (Value: TColors.SysInactiveBorder; Name: 'clInactiveBorder'),
    (Value: TColors.SysInactiveCaption; Name: 'clInactiveCaption'),
    (Value: TColors.SysInactiveCaptionText; Name: 'clInactiveCaptionText'),
    (Value: TColors.SysInfoBk; Name: 'clInfoBk'),
    (Value: TColors.SysInfoText; Name: 'clInfoText'),
    (Value: TColors.SysMenu; Name: 'clMenu'),
    (Value: TColors.SysMenuBar; Name: 'clMenuBar'),
    (Value: TColors.SysMenuHighlight; Name: 'clMenuHighlight'),
    (Value: TColors.SysMenuText; Name: 'clMenuText'),
    (Value: TColors.SysNone; Name: 'clNone'),
    (Value: TColors.SysScrollBar; Name: 'clScrollBar'),
    (Value: TColors.Sys3DDkShadow; Name: 'cl3DDkShadow'),
    (Value: TColors.Sys3DLight; Name: 'cl3DLight'),
    (Value: TColors.SysWindow; Name: 'clWindow'),
    (Value: TColors.SysWindowFrame; Name: 'clWindowFrame'),
    (Value: TColors.SysWindowText; Name: 'clWindowText'));

  procedure GetColorValues(Proc: TGetStrProc);
  function IdentToColor(const Ident: string; var Color: Integer): Boolean;
  function IdentToInt(const Ident: string; var Int: Integer; const Map: array of TIdentMapEntry): Boolean;
  function IntToIdent(Int: Integer; var Ident: string; const Map: array of TIdentMapEntry): Boolean;

implementation

procedure GetColorValues(Proc: TGetStrProc);
var
  I: Integer;
begin
  for I := Low(Colors) to High(Colors) do Proc(Colors[I].Name);
end;

function IdentToColor(const Ident: string; var Color: Integer): Boolean;
begin
  Result := IdentToInt(Ident, Color, Colors);
end;

function SameText(const S1, S2: string): Boolean;
begin
  if Pointer(S1) = Pointer(S2) then
    result := True
  else if (Pointer(S1) = nil) or (Pointer(S2) = nil) then
    result := False
  else
    Result := CompareText(S1, S2) = 0;
end;

function IdentToInt(const Ident: string; var Int: Integer; const Map: array of TIdentMapEntry): Boolean;
var
  I: Integer;
begin
  for I := Low(Map) to High(Map) do
    if SameText(Map[I].Name, Ident) then
    begin
      Result := True;
      Int := Map[I].Value;
      Exit;
    end;
  Result := False;
end;

function IntToIdent(Int: Integer; var Ident: string; const Map: array of TIdentMapEntry): Boolean;
var
  I: Integer;
begin
  for I := Low(Map) to High(Map) do
    if Map[I].Value = Int then
    begin
      Result := True;
      Ident := Map[I].Name;
      Exit;
    end;
  Result := False;
end;
end.
