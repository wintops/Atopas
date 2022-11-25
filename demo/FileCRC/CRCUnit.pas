unit CRCUnit;

{ CRC Unit    }

// Cyclic Redundancy Check Algorithms : CRC32

// Copyright (c) 2015 ChrisF
// Distributed under the terms of the MIT license: see LICENSE.txt

{$IFDEF FPC}
  {$MODE OBJFPC}{$H+}
//  {$MODE DELPHI}
{$ENDIF}

//------------------------------------------------------------------------------

interface

{$DEFINE COMPCRCTABLES1}           // Dynamically Compute CRC Tables (Instead of Static CRC Tables)

function  CRC32_BE_Update(Const Data: array of Byte; Const DataLen: Longword; Const InitValue: Longword; Const XorMode: Integer): Longword;
function  CRC32_LE_Update(Const Data: array of Byte; Const DataLen: Longword; Const InitValue: Longword; Const XorMode: Integer): Longword;

function  CRC32(Const Data: array of Byte; Const DataLen: Longword): Longword;

//------------------------------------------------------------------------------

implementation

{$IFDEF COMPCRCTABLES}
const
  CRC32_BE_POLY   = $04C11DB7;        // Polynomial Value To Compute CRC32 Table (Big Endian Version)
  CRC32_LE_POLY   = $EDB88320;        // Polynomial Value To Compute CRC32 Table (Little Endian Version)

procedure CompCRC32_BE_TABLE(); forward;
procedure CompCRC32_LE_TABLE(); forward;

var
  CRC32_BE_TABLE: array [0..Pred(256)] of Longword;   // CRC32 Table (Big Endian Version)
  CRC32_LE_TABLE: array [0..Pred(256)] of Longword;   // CRC32 Table (Little Endian Version)

  HasCRC32_BE_TABLE:  Longbool = False;               // CRC32_BE_TABLE Computed
  HasCRC32_LE_TABLE:  Longbool = False;               // CRC32_LE_TABLE Computed
{$ELSE}
const
  CRC32_BE_TABLE: array [0..Pred(256)] of Longword = (  // CRC32 Table (Big Endian Version)
        $00000000, $04C11DB7, $09823B6E, $0D4326D9, $130476DC, $17C56B6B, $1A864DB2, $1E475005,
        $2608EDB8, $22C9F00F, $2F8AD6D6, $2B4BCB61, $350C9B64, $31CD86D3, $3C8EA00A, $384FBDBD,
        $4C11DB70, $48D0C6C7, $4593E01E, $4152FDA9, $5F15ADAC, $5BD4B01B, $569796C2, $52568B75,
        $6A1936C8, $6ED82B7F, $639B0DA6, $675A1011, $791D4014, $7DDC5DA3, $709F7B7A, $745E66CD,
        $9823B6E0, $9CE2AB57, $91A18D8E, $95609039, $8B27C03C, $8FE6DD8B, $82A5FB52, $8664E6E5,
        $BE2B5B58, $BAEA46EF, $B7A96036, $B3687D81, $AD2F2D84, $A9EE3033, $A4AD16EA, $A06C0B5D,
        $D4326D90, $D0F37027, $DDB056FE, $D9714B49, $C7361B4C, $C3F706FB, $CEB42022, $CA753D95,
        $F23A8028, $F6FB9D9F, $FBB8BB46, $FF79A6F1, $E13EF6F4, $E5FFEB43, $E8BCCD9A, $EC7DD02D,
        $34867077, $30476DC0, $3D044B19, $39C556AE, $278206AB, $23431B1C, $2E003DC5, $2AC12072,
        $128E9DCF, $164F8078, $1B0CA6A1, $1FCDBB16, $018AEB13, $054BF6A4, $0808D07D, $0CC9CDCA,
        $7897AB07, $7C56B6B0, $71159069, $75D48DDE, $6B93DDDB, $6F52C06C, $6211E6B5, $66D0FB02,
        $5E9F46BF, $5A5E5B08, $571D7DD1, $53DC6066, $4D9B3063, $495A2DD4, $44190B0D, $40D816BA,
        $ACA5C697, $A864DB20, $A527FDF9, $A1E6E04E, $BFA1B04B, $BB60ADFC, $B6238B25, $B2E29692,
        $8AAD2B2F, $8E6C3698, $832F1041, $87EE0DF6, $99A95DF3, $9D684044, $902B669D, $94EA7B2A,
        $E0B41DE7, $E4750050, $E9362689, $EDF73B3E, $F3B06B3B, $F771768C, $FA325055, $FEF34DE2,
        $C6BCF05F, $C27DEDE8, $CF3ECB31, $CBFFD686, $D5B88683, $D1799B34, $DC3ABDED, $D8FBA05A,
        $690CE0EE, $6DCDFD59, $608EDB80, $644FC637, $7A089632, $7EC98B85, $738AAD5C, $774BB0EB,
        $4F040D56, $4BC510E1, $46863638, $42472B8F, $5C007B8A, $58C1663D, $558240E4, $51435D53,
        $251D3B9E, $21DC2629, $2C9F00F0, $285E1D47, $36194D42, $32D850F5, $3F9B762C, $3B5A6B9B,
        $0315D626, $07D4CB91, $0A97ED48, $0E56F0FF, $1011A0FA, $14D0BD4D, $19939B94, $1D528623,
        $F12F560E, $F5EE4BB9, $F8AD6D60, $FC6C70D7, $E22B20D2, $E6EA3D65, $EBA91BBC, $EF68060B,
        $D727BBB6, $D3E6A601, $DEA580D8, $DA649D6F, $C423CD6A, $C0E2D0DD, $CDA1F604, $C960EBB3,
        $BD3E8D7E, $B9FF90C9, $B4BCB610, $B07DABA7, $AE3AFBA2, $AAFBE615, $A7B8C0CC, $A379DD7B,
        $9B3660C6, $9FF77D71, $92B45BA8, $9675461F, $8832161A, $8CF30BAD, $81B02D74, $857130C3,
        $5D8A9099, $594B8D2E, $5408ABF7, $50C9B640, $4E8EE645, $4A4FFBF2, $470CDD2B, $43CDC09C,
        $7B827D21, $7F436096, $7200464F, $76C15BF8, $68860BFD, $6C47164A, $61043093, $65C52D24,
        $119B4BE9, $155A565E, $18197087, $1CD86D30, $029F3D35, $065E2082, $0B1D065B, $0FDC1BEC,
        $3793A651, $3352BBE6, $3E119D3F, $3AD08088, $2497D08D, $2056CD3A, $2D15EBE3, $29D4F654,
        $C5A92679, $C1683BCE, $CC2B1D17, $C8EA00A0, $D6AD50A5, $D26C4D12, $DF2F6BCB, $DBEE767C,
        $E3A1CBC1, $E760D676, $EA23F0AF, $EEE2ED18, $F0A5BD1D, $F464A0AA, $F9278673, $FDE69BC4,
        $89B8FD09, $8D79E0BE, $803AC667, $84FBDBD0, $9ABC8BD5, $9E7D9662, $933EB0BB, $97FFAD0C,
        $AFB010B1, $AB710D06, $A6322BDF, $A2F33668, $BCB4666D, $B8757BDA, $B5365D03, $B1F740B4 );

  CRC32_LE_TABLE: array [0..Pred(256)] of Longword = (  // CRC32 Table (Little Endian Version)
        $00000000, $77073096, $EE0E612C, $990951BA, $076DC419, $706AF48F, $E963A535, $9E6495A3,
        $0EDB8832, $79DCB8A4, $E0D5E91E, $97D2D988, $09B64C2B, $7EB17CBD, $E7B82D07, $90BF1D91,
        $1DB71064, $6AB020F2, $F3B97148, $84BE41DE, $1ADAD47D, $6DDDE4EB, $F4D4B551, $83D385C7,
        $136C9856, $646BA8C0, $FD62F97A, $8A65C9EC, $14015C4F, $63066CD9, $FA0F3D63, $8D080DF5,
        $3B6E20C8, $4C69105E, $D56041E4, $A2677172, $3C03E4D1, $4B04D447, $D20D85FD, $A50AB56B,
        $35B5A8FA, $42B2986C, $DBBBC9D6, $ACBCF940, $32D86CE3, $45DF5C75, $DCD60DCF, $ABD13D59,
        $26D930AC, $51DE003A, $C8D75180, $BFD06116, $21B4F4B5, $56B3C423, $CFBA9599, $B8BDA50F,
        $2802B89E, $5F058808, $C60CD9B2, $B10BE924, $2F6F7C87, $58684C11, $C1611DAB, $B6662D3D,
        $76DC4190, $01DB7106, $98D220BC, $EFD5102A, $71B18589, $06B6B51F, $9FBFE4A5, $E8B8D433,
        $7807C9A2, $0F00F934, $9609A88E, $E10E9818, $7F6A0DBB, $086D3D2D, $91646C97, $E6635C01,
        $6B6B51F4, $1C6C6162, $856530D8, $F262004E, $6C0695ED, $1B01A57B, $8208F4C1, $F50FC457,
        $65B0D9C6, $12B7E950, $8BBEB8EA, $FCB9887C, $62DD1DDF, $15DA2D49, $8CD37CF3, $FBD44C65,
        $4DB26158, $3AB551CE, $A3BC0074, $D4BB30E2, $4ADFA541, $3DD895D7, $A4D1C46D, $D3D6F4FB,
        $4369E96A, $346ED9FC, $AD678846, $DA60B8D0, $44042D73, $33031DE5, $AA0A4C5F, $DD0D7CC9,
        $5005713C, $270241AA, $BE0B1010, $C90C2086, $5768B525, $206F85B3, $B966D409, $CE61E49F,
        $5EDEF90E, $29D9C998, $B0D09822, $C7D7A8B4, $59B33D17, $2EB40D81, $B7BD5C3B, $C0BA6CAD,
        $EDB88320, $9ABFB3B6, $03B6E20C, $74B1D29A, $EAD54739, $9DD277AF, $04DB2615, $73DC1683,
        $E3630B12, $94643B84, $0D6D6A3E, $7A6A5AA8, $E40ECF0B, $9309FF9D, $0A00AE27, $7D079EB1,
        $F00F9344, $8708A3D2, $1E01F268, $6906C2FE, $F762575D, $806567CB, $196C3671, $6E6B06E7,
        $FED41B76, $89D32BE0, $10DA7A5A, $67DD4ACC, $F9B9DF6F, $8EBEEFF9, $17B7BE43, $60B08ED5,
        $D6D6A3E8, $A1D1937E, $38D8C2C4, $4FDFF252, $D1BB67F1, $A6BC5767, $3FB506DD, $48B2364B,
        $D80D2BDA, $AF0A1B4C, $36034AF6, $41047A60, $DF60EFC3, $A867DF55, $316E8EEF, $4669BE79,
        $CB61B38C, $BC66831A, $256FD2A0, $5268E236, $CC0C7795, $BB0B4703, $220216B9, $5505262F,
        $C5BA3BBE, $B2BD0B28, $2BB45A92, $5CB36A04, $C2D7FFA7, $B5D0CF31, $2CD99E8B, $5BDEAE1D,
        $9B64C2B0, $EC63F226, $756AA39C, $026D930A, $9C0906A9, $EB0E363F, $72076785, $05005713,
        $95BF4A82, $E2B87A14, $7BB12BAE, $0CB61B38, $92D28E9B, $E5D5BE0D, $7CDCEFB7, $0BDBDF21,
        $86D3D2D4, $F1D4E242, $68DDB3F8, $1FDA836E, $81BE16CD, $F6B9265B, $6FB077E1, $18B74777,
        $88085AE6, $FF0F6A70, $66063BCA, $11010B5C, $8F659EFF, $F862AE69, $616BFFD3, $166CCF45,
        $A00AE278, $D70DD2EE, $4E048354, $3903B3C2, $A7672661, $D06016F7, $4969474D, $3E6E77DB,
        $AED16A4A, $D9D65ADC, $40DF0B66, $37D83BF0, $A9BCAE53, $DEBB9EC5, $47B2CF7F, $30B5FFE9,
        $BDBDF21C, $CABAC28A, $53B39330, $24B4A3A6, $BAD03605, $CDD70693, $54DE5729, $23D967BF,
        $B3667A2E, $C4614AB8, $5D681B02, $2A6F2B94, $B40BBE37, $C30C8EA1, $5A05DF1B, $2D02EF8D );
{$ENDIF}

//------------------------------------------------------------------------------

{$IFDEF COMPCRCTABLES}
//
// Compute CRC32 Table (Big Endian Version)
//
procedure CompCRC32_BE_TABLE();
var i1,i2: Integer;
var j1: Longword;
begin
  for i1:=0 to Pred(256) do
    begin
      j1:=i1 shl 24;
      for i2:=Pred(8) downto 0 do
        if (j1 and $80000000)<>0 then
          j1:=(j1 shl 1) xor CRC32_BE_POLY
        else
          j1:=j1 shl 1;
      CRC32_BE_TABLE[i1]:=j1;
    end;
  HasCRC32_BE_TABLE:=True;
end;

//
// Compute CRC32 Table (Little Endian Version)
//
procedure CompCRC32_LE_TABLE();
var i1,i2: Integer;
var j1: Longword;
begin
  for i1:=0 to Pred(256) do
    begin
      j1:=i1;
      for i2:=0 to Pred(8) do
        if (j1 and 1)<>0 then
          j1:=CRC32_LE_POLY xor (j1 shr 1)
        else
          j1:=j1 shr 1;
      CRC32_LE_TABLE[i1]:=j1;
    end;
  HasCRC32_LE_TABLE:=True;
end;
{$ENDIF}

//
// Full Standard Big Endian CRC32 Algorithm : Limited to (2^32)-1 Bytes per Call
//   XORMode: 0=None, 1=Initial, 2=Final, 1+2=Both
//
function  CRC32_BE_Update(Const Data: array of Byte; Const DataLen: Longword; Const InitValue: Longword; Const XorMode: Integer): Longword;
var i1: Longword;
var j1: Longword;
begin
{$IFDEF COMPCRCTABLES}
  if (not HasCRC32_BE_TABLE) then CompCRC32_BE_TABLE();
{$ENDIF}
  j1:=InitValue;
  if (XorMode and 1)<>0 then j1:=(not j1);
  if DataLen>0 then
    for i1:=0 to Pred(DataLen) do
      j1:=(j1 shl 8) xor CRC32_BE_TABLE[((j1 shr 24) xor Data[i1]) and $FF];
  if (XorMode and 2)<>0 then j1:=(not j1);
  CRC32_BE_Update:=j1;
end;

//
// Full Standard Little Endian CRC32 Algorithm : Limited to (2^32)-1 Bytes per Call
//   XORMode: 0=None, 1=Initial, 2=Final, 1+2=Both
//
function  CRC32_LE_Update(Const Data: array of Byte; Const DataLen: Longword; Const InitValue: Longword; Const XorMode: Integer): Longword;
var i1: Longword;
var j1: Longword;
begin
{$IFDEF COMPCRCTABLES}
  if (not HasCRC32_LE_TABLE) then CompCRC32_LE_TABLE();
{$ENDIF}
  j1:=InitValue;
  if (XorMode and 1)<>0 then j1:=(not j1);
  if DataLen>0 then
    for i1:=0 to Pred(DataLen) do
      j1:=CRC32_LE_TABLE[(j1 xor Data[i1]) and $FF] xor (j1 shr 8);
  if (XorMode and 2)<>0 then j1:=(not j1);
  CRC32_LE_Update:=j1;
end;

//
// Standard (Little Endian Version) CRC32 Algorithm : Limited to (2^32)-1 Bytes
//
function  CRC32(Const Data: array of Byte; Const DataLen: Longword): Longword;
begin
  CRC32:=CRC32_LE_Update(Data,DataLen,0,1+2);
end;

end.
