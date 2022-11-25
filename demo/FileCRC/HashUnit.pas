unit HashUnit;

{ Hash Unit   }

// Hash Algorithms : MD5, SHA-1

// Copyright (c) 2015 ChrisF
// Distributed under the terms of the MIT license: see LICENSE.txt

{$IFDEF FPC}
//  {$MODE OBJFPC}{$H+}
  {$MODE DELPHI}
{$ENDIF}

//------------------------------------------------------------------------------

interface

const
  // Exported Constants for the MD5 Algo
  MD5_BLOCK = 64;   // Length for MD5 Block
  MD5_NBRH = 4;    // Number of H Variables
  MD5_DIGESTSIZE = 16;   // Size of Digest for MD5 (Number of Bytes)

  // Exported Constants for the SHA-1 Algo
  SHA1_BLOCK = 64;   // Length for SHA-1 Block
  SHA1_NBRH = 5;    // Number of H Variables
  SHA1_DIGESTSIZE = 20;   // Size of Digest for SHA-1 (Number of Bytes)

type
  MD5_CTX = record                 // Structure for MD5 Context
    Num: longword;
    Len: uint64;
    H: array [0..Pred(MD5_NBRH)] of longword;    // Hash buffers
    Data: array [0..Pred(MD5_BLOCK)] of byte;       // Input buffer
  end;

type
  SHA1_CTX = record                // Structure for SHA-1 Context
    Num: integer;
    Len: uint64;
    Data: array [0..Pred(SHA1_BLOCK)] of byte;
    H: array [0..Pred(SHA1_NBRH)] of longword;
  end;

procedure MD5Digest(const Data: array of byte; const DataLen: longword;
  var Digest: array of byte);
procedure MD5Init(var MD5CTX: MD5_CTX);
procedure MD5Update(var MD5CTX: MD5_CTX; const Data: array of byte;
  const DataLen: longword);
procedure MD5Final(var MD5CTX: MD5_CTX; var Digest: array of byte);

procedure SHA1Digest(const Data: array of byte; const DataLen: longword;
  var Digest: array of byte);
procedure SHA1Init(var SHA1CTX: SHA1_CTX);
procedure SHA1Update(var SHA1CTX: SHA1_CTX; const Data: array of byte;
  const DataLen: longword);
procedure SHA1Final(var SHA1CTX: SHA1_CTX; var Digest: array of byte);

//------------------------------------------------------------------------------

implementation

procedure ArrBLongLong(var Buffer: array of byte; const Posi: integer;
  const Value: uint64); forward;
procedure ArrBLongLongInv(var Buffer: array of byte; const Posi: integer;
  const Value: uint64); forward;
function LongArrB(const Buffer: array of byte; const Posi: integer): longword; forward;
function LongArrBInv(const Buffer: array of byte; const Posi: integer): longword;
  forward;
procedure ArrBLong(var Buffer: array of byte; const Posi: integer;
  const Value: longword); forward;
procedure ArrBLongInv(var Buffer: array of byte; const Posi: integer;
  const Value: longword); forward;

{$IFDEF FPC}
  {$MACRO ON}
  {$DEFINE ROL:=ROLDWord}
  {$DEFINE ROR:=RORDWord}
//  {$ASMMODE INTEL}                // Intel/AMD Processors by Default
{$ELSE}
  {$DEFINE ENDIAN_LITTLE}// Assumes Delphi is always for Intel/AMD processors
function ROR(const InLong: longword; const Times: byte): longword; forward;
function ROL(const InLong: longword; const Times: byte): longword; forward;
{$ENDIF}

{$IFDEF PASJS}
function ROR(const InLong: longword; const Times: byte): longword; forward;
function ROL(const InLong: longword; const Times: byte): longword; forward;

Procedure Move(const source;var dest;count:{$ifdef MOVE_HAS_SIZEUINT_COUNT}SizeUInt{$else}SizeInt{$endif});
begin

end;
procedure MD5Body(var MD5CTX: MD5_CTX; const Data:array of byte;
  const DataLen: longword); forward;
procedure SHA1Body(var SHA1CTX: SHA1_CTX; const Data:array of  byte;
  const DataLen: longword); forward;


{$ELSE}
procedure MD5Body(var MD5CTX: MD5_CTX; const Data: array of byte;
  const DataLen: longword); forward;
procedure SHA1Body(var SHA1CTX: SHA1_CTX; const Data: array of byte;
  const DataLen: longword); forward;


{$ENDIF}

const
  // Constants for the MD5 Algo
  MD5_BLOCKP2 = 6;    // Power of 2 for Length for MD5 Block

  // Constants for the SHA-1 Algo
  SHA1_BLOCKP2 = 6;    // Power of 2 for Length for SHA-1 Block
  SHA1_WSIZE = 80;   // Size of W Block


//------------------------------------------------------------------------------

// MD5 : Only for Bytes Message (Not Bits) - Limited to (2^61)-1 Bytes (i.e. (2^64)-1 Bits)


// MD5 General Call : Limited to (2^32)-1 Bytes

procedure MD5Digest(const Data: array of byte; const DataLen: longword;
  var Digest: array of byte);
var
  LocalMD5CTX: MD5_CTX;
begin
  MD5Init(LocalMD5CTX);
  MD5Update(LocalMD5CTX, Data, DataLen);
  MD5Final(LocalMD5CTX, Digest);
end;


// MD5 Initializations

procedure MD5Init(var MD5CTX: MD5_CTX);
const
  KI: array [0..Pred(MD5_NBRH)] of longword =
    ($67452301, $EFCDAB89, $98BADCFE, $10325476);
  // Constants defined for MD5
var
  i1: integer;
begin
  MD5CTX.Num := 0;
  MD5CTX.Len := 0;
  for i1 := 0 to Pred(MD5_NBRH) do MD5CTX.H[i1] := KI[i1];
end;


// MD5 Add Data : Limited to (2^32)-1 Bytes per Call

procedure MD5Update(var MD5CTX: MD5_CTX; const Data: array of byte;
  const DataLen: longword);
var
  i1, i2, i3, i4: longword;
var
  j1: uint64;
begin
  if DataLen = 0 then Exit;     // Sanity
  j1 := uint64(DataLen);
  MD5CTX.Len := MD5CTX.Len + j1;
  i4 := 0;        // Initial Position in Data Buffer
  i3 := DataLen;  // Initial Data Buffer Length
  i1 := MD5CTX.Num;
  if i1 <> 0 then               // Have Some Previous Unprocessed Data ?
  begin
    j1 := uint64(i1);
    j1 := j1 + uint64(i3);
    if j1 < uint64(MD5_BLOCK) then
      // Still a Partial Block (Not Enough for a Full Block)
    begin
          {$IFNDEF PASJS}
      Move(Data, MD5CTX.Data[i1], i3);
          {$ENDIF}
      MD5CTX.Num := i1 + i3;
      Exit;
    end
    else                    // At Least a Full Block (or More)
    begin
      i2 := MD5_BLOCK - i1;
                    {$IFNDEF PASJS}
      Move(Data, MD5CTX.Data[i1], i2);
          {$ENDIF}

      Dec(i3, i2);
      Inc(i4, i2);
      MD5CTX.Num := 0;
      MD5Body(MD5CTX, MD5CTX.Data, MD5_BLOCK);

      MD5Body(MD5CTX, MD5CTX.Data, MD5_BLOCK);
    end;
  end;
  i1 := i3 and (not Pred(MD5_BLOCK));
  // Number of Bytes for Full Block(s) Only (Because MD5_BLOCK is a Power of 2)
                        {$IFNDEF PASJS}
  if i1 <> 0 then
    MD5Body(MD5CTX, Data[i4], i1);
          {$ENDIF}

  Dec(i3, i1);
  if i3 <> 0 then                       // Still some Data ?

                            {$IFNDEF PASJS}
    Move(Data[i4 + i1], MD5CTX.Data[0], i3);
  // Store Them for the Next Call
  {$ELSE}
   ;
          {$ENDIF}

  MD5CTX.Num := i3;
end;


// MD5 Final Digest

procedure MD5Final(var MD5CTX: MD5_CTX; var Digest: array of byte);
var
  i1: integer;
begin
  i1 := MD5CTX.Num;
  {$IFNDEF PASJS}
  FillChar(MD5CTX.Data[i1], MD5_BLOCK - i1, 0);
  {$ELSE}
   ;
          {$ENDIF}


  if i1 < MD5_BLOCK then MD5CTX.Data[i1] := $80;
  // Bit 1 just after the Data (if possible)
  if i1 > MD5_BLOCK - Succ(8) then
    // Too much Previous Unprocessed Data To Add Full Data Length ?
  begin
    MD5Body(MD5CTX, MD5CTX.Data, MD5_BLOCK);

        {$IFNDEF PASJS}
    FillChar(MD5CTX.Data, MD5_BLOCK, 0);
  {$ELSE}
   ;
          {$ENDIF}

    if i1 = MD5_BLOCK then MD5CTX.Data[0] := $80;
    // Bit 1 just after the Data (if not possible in previous block)
  end;
  // Add Length
  ArrBLongLongInv(MD5CTX.Data, MD5_BLOCK - 8, MD5CTX.Len shl 3);    // Size in Bits
  MD5Body(MD5CTX, MD5CTX.Data, MD5_BLOCK);
  // Return 16 Bytes From H Buffers
  for i1 := 0 to Pred(MD5_NBRH) do
    ArrBLongInv(Digest, i1 shl 2, MD5CTx.H[i1]);
end;


// MD5 Main Algo (Partially Unrolled Version)

procedure MD5Body(var MD5CTX: MD5_CTX; const Data: array of byte;
  const DataLen: longword);
const
  MD5_TRSF: array [0..Pred(64)] of longword = (   // Array for the MD5 Transformation
    $D76AA478, $E8C7B756, $242070DB, $C1BDCEEE, $F57C0FAF,
    $4787C62A, $A8304613, $FD469501,
    $698098D8, $8B44F7AF, $FFFF5BB1, $895CD7BE, $6B901122,
    $FD987193, $A679438E, $49B40821,
    $F61E2562, $C040B340, $265E5A51, $E9B6C7AA, $D62F105D,
    $02441453, $D8A1E681, $E7D3FBC8,
    $21E1CDE6, $C33707D6, $F4D50D87, $455A14ED, $A9E3E905,
    $FCEFA3F8, $676F02D9, $8D2A4C8A,
    $FFFA3942, $8771F681, $6D9D6122, $FDE5380C, $A4BEEA44,
    $4BDECFA9, $F6BB4B60, $BEBFBC70,
    $289B7EC6, $EAA127FA, $D4EF3085, $04881D05, $D9D4D039,
    $e6DB99E5, $1fA27CF8, $C4AC5665,
    $F4292244, $432AFF97, $AB9423A7, $FC93A039, $655B59C3,
    $8F0CCC92, $FFEFF47D, $85845DD1,
    $6FA87E4F, $FE2CE6E0, $A3014314, $4E0811A1, $F7537E82,
    $BD3AF235, $2AD7D2BB, $EB86D391);
var
  DataIn: array [0..Pred(16)] of longword;
var
  a, b, c, d: longword;
var
  i1, i2: integer;
begin
  if DataLen = 0 then Exit;     // Sanity
  for i1 := 0 to Pred(DataLen shr MD5_BLOCKP2) do
  begin
    a := MD5CTX.H[0];
    b := MD5CTX.H[1];
    c := MD5CTX.H[2];
    d := MD5CTX.H[3];
    for i2 := 0 to Pred(16) do
      DataIn[i2] := LongArrBInv(Data, (i1 shl MD5_BLOCKP2) + (i2 shl 2));
    // MD5 Core (4 rounds)
    Inc(a, DataIn[00] + MD5_TRSF[00] + (d xor (b and (c xor d))));
    a := ROL(a, 07) + b;
    Inc(d, DataIn[01] + MD5_TRSF[01] + (c xor (a and (b xor c))));
    d := ROL(d, 12) + a;
    Inc(c, DataIn[02] + MD5_TRSF[02] + (b xor (d and (a xor b))));
    c := ROL(c, 17) + d;
    Inc(b, DataIn[03] + MD5_TRSF[03] + (a xor (c and (d xor a))));
    b := ROL(b, 22) + c;
    Inc(a, DataIn[04] + MD5_TRSF[04] + (d xor (b and (c xor d))));
    a := ROL(a, 07) + b;
    Inc(d, DataIn[05] + MD5_TRSF[05] + (c xor (a and (b xor c))));
    d := ROL(d, 12) + a;
    Inc(c, DataIn[06] + MD5_TRSF[06] + (b xor (d and (a xor b))));
    c := ROL(c, 17) + d;
    Inc(b, DataIn[07] + MD5_TRSF[07] + (a xor (c and (d xor a))));
    b := ROL(b, 22) + c;
    Inc(a, DataIn[08] + MD5_TRSF[08] + (d xor (b and (c xor d))));
    a := ROL(a, 07) + b;
    Inc(d, DataIn[09] + MD5_TRSF[09] + (c xor (a and (b xor c))));
    d := ROL(d, 12) + a;
    Inc(c, DataIn[10] + MD5_TRSF[10] + (b xor (d and (a xor b))));
    c := ROL(c, 17) + d;
    Inc(b, DataIn[11] + MD5_TRSF[11] + (a xor (c and (d xor a))));
    b := ROL(b, 22) + c;
    Inc(a, DataIn[12] + MD5_TRSF[12] + (d xor (b and (c xor d))));
    a := ROL(a, 07) + b;
    Inc(d, DataIn[13] + MD5_TRSF[13] + (c xor (a and (b xor c))));
    d := ROL(d, 12) + a;
    Inc(c, DataIn[14] + MD5_TRSF[14] + (b xor (d and (a xor b))));
    c := ROL(c, 17) + d;
    Inc(b, DataIn[15] + MD5_TRSF[15] + (a xor (c and (d xor a))));
    b := ROL(b, 22) + c;

    Inc(a, DataIn[01] + MD5_TRSF[16] + (c xor (d and (b xor c))));
    a := ROL(a, 05) + b;
    Inc(d, DataIn[06] + MD5_TRSF[17] + (b xor (c and (a xor b))));
    d := ROL(d, 09) + a;
    Inc(c, DataIn[11] + MD5_TRSF[18] + (a xor (b and (d xor a))));
    c := ROL(c, 14) + d;
    Inc(b, DataIn[00] + MD5_TRSF[19] + (d xor (a and (c xor d))));
    b := ROL(b, 20) + c;
    Inc(a, DataIn[05] + MD5_TRSF[20] + (c xor (d and (b xor c))));
    a := ROL(a, 05) + b;
    Inc(d, DataIn[10] + MD5_TRSF[21] + (b xor (c and (a xor b))));
    d := ROL(d, 09) + a;
    Inc(c, DataIn[15] + MD5_TRSF[22] + (a xor (b and (d xor a))));
    c := ROL(c, 14) + d;
    Inc(b, DataIn[04] + MD5_TRSF[23] + (d xor (a and (c xor d))));
    b := ROL(b, 20) + c;
    Inc(a, DataIn[09] + MD5_TRSF[24] + (c xor (d and (b xor c))));
    a := ROL(a, 05) + b;
    Inc(d, DataIn[14] + MD5_TRSF[25] + (b xor (c and (a xor b))));
    d := ROL(d, 09) + a;
    Inc(c, DataIn[03] + MD5_TRSF[26] + (a xor (b and (d xor a))));
    c := ROL(c, 14) + d;
    Inc(b, DataIn[08] + MD5_TRSF[27] + (d xor (a and (c xor d))));
    b := ROL(b, 20) + c;
    Inc(a, DataIn[13] + MD5_TRSF[28] + (c xor (d and (b xor c))));
    a := ROL(a, 05) + b;
    Inc(d, DataIn[02] + MD5_TRSF[29] + (b xor (c and (a xor b))));
    d := ROL(d, 09) + a;
    Inc(c, DataIn[07] + MD5_TRSF[30] + (a xor (b and (d xor a))));
    c := ROL(c, 14) + d;
    Inc(b, DataIn[12] + MD5_TRSF[31] + (d xor (a and (c xor d))));
    b := ROL(b, 20) + c;

    Inc(a, DataIn[05] + MD5_TRSF[32] + (b xor c xor d));
    a := ROL(a, 04) + b;
    Inc(d, DataIn[08] + MD5_TRSF[33] + (a xor b xor c));
    d := ROL(d, 11) + a;
    Inc(c, DataIn[11] + MD5_TRSF[34] + (d xor a xor b));
    c := ROL(c, 16) + d;
    Inc(b, DataIn[14] + MD5_TRSF[35] + (c xor d xor a));
    b := ROL(b, 23) + c;
    Inc(a, DataIn[01] + MD5_TRSF[36] + (b xor c xor d));
    a := ROL(a, 04) + b;
    Inc(d, DataIn[04] + MD5_TRSF[37] + (a xor b xor c));
    d := ROL(d, 11) + a;
    Inc(c, DataIn[07] + MD5_TRSF[38] + (d xor a xor b));
    c := ROL(c, 16) + d;
    Inc(b, DataIn[10] + MD5_TRSF[39] + (c xor d xor a));
    b := ROL(b, 23) + c;
    Inc(a, DataIn[13] + MD5_TRSF[40] + (b xor c xor d));
    a := ROL(a, 04) + b;
    Inc(d, DataIn[00] + MD5_TRSF[41] + (a xor b xor c));
    d := ROL(d, 11) + a;
    Inc(c, DataIn[03] + MD5_TRSF[42] + (d xor a xor b));
    c := ROL(c, 16) + d;
    Inc(b, DataIn[06] + MD5_TRSF[43] + (c xor d xor a));
    b := ROL(b, 23) + c;
    Inc(a, DataIn[09] + MD5_TRSF[44] + (b xor c xor d));
    a := ROL(a, 04) + b;
    Inc(d, DataIn[12] + MD5_TRSF[45] + (a xor b xor c));
    d := ROL(d, 11) + a;
    Inc(c, DataIn[15] + MD5_TRSF[46] + (d xor a xor b));
    c := ROL(c, 16) + d;
    Inc(b, DataIn[02] + MD5_TRSF[47] + (c xor d xor a));
    b := ROL(b, 23) + c;

    Inc(a, DataIn[00] + MD5_TRSF[48] + (c xor (b or (not d))));
    a := ROL(a, 06) + b;
    Inc(d, DataIn[07] + MD5_TRSF[49] + (b xor (a or (not c))));
    d := ROL(d, 10) + a;
    Inc(c, DataIn[14] + MD5_TRSF[50] + (a xor (d or (not b))));
    c := ROL(c, 15) + d;
    Inc(b, DataIn[05] + MD5_TRSF[51] + (d xor (c or (not a))));
    b := ROL(b, 21) + c;
    Inc(a, DataIn[12] + MD5_TRSF[52] + (c xor (b or (not d))));
    a := ROL(a, 06) + b;
    Inc(d, DataIn[03] + MD5_TRSF[53] + (b xor (a or (not c))));
    d := ROL(d, 10) + a;
    Inc(c, DataIn[10] + MD5_TRSF[54] + (a xor (d or (not b))));
    c := ROL(c, 15) + d;
    Inc(b, DataIn[01] + MD5_TRSF[55] + (d xor (c or (not a))));
    b := ROL(b, 21) + c;
    Inc(a, DataIn[08] + MD5_TRSF[56] + (c xor (b or (not d))));
    a := ROL(a, 06) + b;
    Inc(d, DataIn[15] + MD5_TRSF[57] + (b xor (a or (not c))));
    d := ROL(d, 10) + a;
    Inc(c, DataIn[06] + MD5_TRSF[58] + (a xor (d or (not b))));
    c := ROL(c, 15) + d;
    Inc(b, DataIn[13] + MD5_TRSF[59] + (d xor (c or (not a))));
    b := ROL(b, 21) + c;
    Inc(a, DataIn[04] + MD5_TRSF[60] + (c xor (b or (not d))));
    a := ROL(a, 06) + b;
    Inc(d, DataIn[11] + MD5_TRSF[61] + (b xor (a or (not c))));
    d := ROL(d, 10) + a;
    Inc(c, DataIn[02] + MD5_TRSF[62] + (a xor (d or (not b))));
    c := ROL(c, 15) + d;
    Inc(b, DataIn[09] + MD5_TRSF[63] + (d xor (c or (not a))));
    b := ROL(b, 21) + c;

    Inc(MD5CTX.H[0], a);
    Inc(MD5CTX.H[1], b);
    Inc(MD5CTX.H[2], c);
    Inc(MD5CTX.H[3], d);
  end;
end;

//------------------------------------------------------------------------------

// SHA-1 : Only for Bytes Message (Not Bits) - Limited to (2^61)-1 Bytes (i.e. (2^64)-1 Bits)


// SHA-1 General Call : Limited to (2^32)-1 Bytes

procedure SHA1Digest(const Data: array of byte; const DataLen: longword;
  var Digest: array of byte);
var
  LocalSHA1CTX: SHA1_CTX;
begin
  SHA1Init(LocalSHA1CTX);
  SHA1Update(LocalSHA1CTX, Data, DataLen);
  SHA1Final(LocalSHA1CTX, Digest);
end;


// SHA-1 Initializations

procedure SHA1Init(var SHA1CTX: SHA1_CTX);
const
  KI: array [0..Pred(SHA1_NBRH)] of longword =
    ($67452301, $EFCDAB89, $98BADCFE, $10325476, $C3D2E1F0);
  // Constants defined for SHA-1
var
  i1: integer;
begin
  SHA1CTX.Num := 0;
  SHA1CTX.Len := 0;
  for i1 := 0 to Pred(SHA1_NBRH) do SHA1CTX.H[i1] := KI[i1];
end;


// SHA-1 Add Data : Limited to (2^32)-1 Bytes per Call

procedure SHA1Update(var SHA1CTX: SHA1_CTX; const Data: array of byte;
  const DataLen: longword);
var
  i1, i2, i3, i4: longword;
var
  j1: uint64;
begin
  if DataLen = 0 then Exit;     // Sanity
  j1 := uint64(DataLen);
  SHA1CTX.Len := SHA1CTX.Len + j1;
  i4 := 0;        // Initial Position in Data Buffer
  i3 := DataLen;  // Initial Data Buffer Length
  i1 := SHA1CTX.Num;
  if i1 <> 0 then               // Have Some Previous Unprocessed Data ?
  begin
    j1 := uint64(i1);
    j1 := j1 + uint64(i3);
    if j1 < uint64(SHA1_BLOCK) then
      // Still a Partial Block (Not Enough for a Full Block)
    begin
      Move(Data, SHA1CTX.Data[i1], i3);
      SHA1CTX.Num := i1 + i3;
      Exit;
    end
    else                    // At Least a Full Block (or More)
    begin
      i2 := SHA1_BLOCK - i1;
      Move(Data, SHA1CTX.Data[i1], i2);
      Dec(i3, i2);
      Inc(i4, i2);
      SHA1CTX.Num := 0;
      {$IFNDEF PASJS}SHA1Body(SHA1CTX, SHA1CTX.Data, SHA1_BLOCK);{$ENDIF}
    end;
  end;
  i1 := i3 and (not Pred(SHA1_BLOCK));
  // Number of Bytes for Full Block(s) Only (Because SHA1_BLOCK is a Power of 2)
  {$IFNDEF PASJS}  if i1 <> 0 then                       // One or More Full Block(s) to Process
    SHA1Body(SHA1CTX, Data[i4], i1);{$ENDIF}
  Dec(i3, i1);
  if i3 <> 0 then                       // Still some Data ?
    Move(Data[i4 + i1], SHA1CTX.Data[0], i3);       // Store Them for the Next Call
  SHA1CTX.Num := i3;
end;


// SHA-1 Final Digest

procedure SHA1Final(var SHA1CTX: SHA1_CTX; var Digest: array of byte);
var
  i1: integer;
begin
  i1 := SHA1CTX.Num;
  {$IFNDEF PASJS}FillChar(SHA1CTX.Data[i1], SHA1_BLOCK - i1, 0);{$ENDIF}
  if i1 < SHA1_BLOCK then SHA1CTX.Data[i1] := $80;
  // Bit 1 just after the Data (if possible)
  if i1 > SHA1_BLOCK - Succ(8) then
    // Too much Previous Unprocessed Data To Add Full Data Length ?
  begin
    {$IFNDEF PASJS}    SHA1Body(SHA1CTX, SHA1CTX.Data, SHA1_BLOCK);
    FillChar(SHA1CTX.Data, SHA1_BLOCK, 0);
    {$ENDIF}
    if i1 = SHA1_BLOCK then SHA1CTX.Data[0] := $80;
    // Bit 1 just after the Data (if not possible in previous block)
  end;
  // Add Length
  ArrBLongLong(SHA1CTX.Data, SHA1_BLOCK - 8, SHA1CTX.Len shl 3);    // Size in Bits
  {$IFNDEF PASJS}  SHA1Body(SHA1CTX, SHA1CTX.Data, SHA1_BLOCK);{$ENDIF}
  // Return 20 Bytes From H Buffers
  for i1 := 0 to Pred(SHA1_NBRH) do
    ArrBLong(Digest, i1 shl 2, SHA1CTX.H[i1]);
end;


// SHA-1 Main Algo

procedure SHA1Body(var SHA1CTX: SHA1_CTX; const Data: array of byte;
  const DataLen: longword);
const
  K: array [0..Pred(4)] of longword = ($5A827999, $6ED9EBA1, $8F1BBCDC, $CA62C1D6);
  // Constants defined for SHA-1
var
  W: array [0..Pred(SHA1_WSIZE)] of longword; // Word sequence
var
  T: longword;                                // Temporary Word value
var
  A, B, C, D, E: longword;                        // Word buffers
var
  i1, i2: integer;
begin
  if DataLen = 0 then Exit;     // Sanity
  // Proceed all Blocks
  for i1 := 0 to Pred(DataLen shr SHA1_BLOCKP2) do
  begin
    // Initialize first 16 words in array W
    for i2 := 0 to Pred(16) do
      W[i2] := LongArrB(Data, (i1 shl SHA1_BLOCKP2) + (i2 shl 2));
    // Compute others words in array W
    for i2 := 16 to Pred(SHA1_WSIZE) do
    begin
      T := W[i2 - 3] xor W[i2 - 8] xor W[i2 - 14] xor W[i2 - 16];
      W[i2] := (T shl 1) or (T shr 31);
    end;
    // Copy from H Buffer
    A := SHA1CTX.H[0];
    B := SHA1CTX.H[1];
    C := SHA1CTX.H[2];
    D := SHA1CTX.H[3];
    E := SHA1CTX.H[4];
    // Run Logical Functions
    for i2 := 0 to Pred(SHA1_WSIZE) do
    begin
      T := (A shl 5) or (A shr 27);
      case i2 of
        00..19:
          T := T + ((B and C) or ((not B) and D)) + E + W[i2] + K[0];
        20..39:
          T := T + (B xor C xor D) + E + W[i2] + K[1];
        40..59:
          T := T + ((B and C) or (B and D) or (C and D)) + E + W[i2] + K[2];
        60..79:
          T := T + (B xor C xor D) + E + W[i2] + K[3];
      end;
      E := D;
      D := C;
      C := (B shl 30) or (B shr 2);
      B := A;
      A := T;
    end;
    // Update H Buffer
    Inc(SHA1CTX.H[0], A);
    Inc(SHA1CTX.H[1], B);
    Inc(SHA1CTX.H[2], C);
    Inc(SHA1CTX.H[3], D);
    Inc(SHA1CTX.H[4], E);
  end;
end;

//------------------------------------------------------------------------------

procedure ArrBLongLong(var Buffer: array of byte; const Posi: integer;
  const Value: uint64);
begin
  Buffer[Posi] := Value shr 56;
  Buffer[Posi + 1] := Value shr 48;
  Buffer[Posi + 2] := Value shr 40;
  Buffer[Posi + 3] := Value shr 32;
  Buffer[Posi + 4] := Value shr 24;
  Buffer[Posi + 5] := Value shr 16;
  Buffer[Posi + 6] := Value shr 8;
  Buffer[Posi + 7] := Value;
end;

procedure ArrBLongLongInv(var Buffer: array of byte; const Posi: integer;
  const Value: uint64);
begin
{$IFDEF ENDIAN_LITTLE}
  PLongword(@Buffer[Posi + 4])^ := Value shr 32;
  PLongword(@Buffer[Posi])^ := Value;
{$ELSE}
  Buffer[Posi+7]:=Value shr 56;
  Buffer[Posi+6]:=Value shr 48;
  Buffer[Posi+5]:=Value shr 40;
  Buffer[Posi+4]:=Value shr 32;
  Buffer[Posi+3]:=Value shr 24;
  Buffer[Posi+2]:=Value shr 16;
  Buffer[Posi+1]:=Value shr 8;
  Buffer[Posi]:=Value;
{$ENDIF}
end;

function LongArrB(const Buffer: array of byte; const Posi: integer): longword;
begin
  Result := (Buffer[Posi] shl 24) or (Buffer[Posi + 1] shl 16) or
    (Buffer[Posi + 2] shl 8) or Buffer[Posi + 3];
end;

function LongArrBInv(const Buffer: array of byte; const Posi: integer): longword;
begin
{$IFDEF ENDIAN_LITTLE}
  Result := PLongword(@Buffer[Posi])^;
{$ELSE}
  Result:=(Buffer[Posi+3] shl 24) or (Buffer[Posi+2] shl 16) or (Buffer[Posi+1] shl 8) or Buffer[Posi];
{$ENDIF}
end;

procedure ArrBLong(var Buffer: array of byte; const Posi: integer;
  const Value: longword);
begin
  Buffer[Posi] := Value shr 24;
  Buffer[Posi + 1] := Value shr 16;
  Buffer[Posi + 2] := Value shr 8;
  Buffer[Posi + 3] := Value;
end;

procedure ArrBLongInv(var Buffer: array of byte; const Posi: integer;
  const Value: longword);
begin
{$IFDEF ENDIAN_LITTLE}
  PLongword(@Buffer[Posi])^ := Value;
{$ELSE}
  Buffer[Posi+3]:=Value shr 24;
  Buffer[Posi+2]:=Value shr 16;
  Buffer[Posi+1]:=Value shr 8;
  Buffer[Posi]:=Value;
{$ENDIF}
end;


// Additional Functions

{$IFDEF FPC}

{$IFDEF PASJS}

function ROR(const InLong: longword; const Times: byte): longword;
begin
end;

function ROL(const InLong: longword; const Times: byte): longword;
begin
end;
{$ENDIF}


{$ELSE}

function ROR(const InLong: longword; const Times: byte): longword;
asm
         MOV     EAX, InLong
         MOV     CL,  Times
         ROR     EAX, CL
end;

function ROL(const InLong: longword; const Times: byte): longword;
asm
         MOV     EAX, InLong
         MOV     CL,  Times
         ROL     EAX, CL
end;
{$ENDIF}

end.
