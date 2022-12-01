rtl.module("System",[],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.LineEnding = "\n";
  this.sLineBreak = this.LineEnding;
  this.MaxLongint = 0x7fffffff;
  this.Maxint = 2147483647;
  this.TTextLineBreakStyle = {"0": "tlbsLF", tlbsLF: 0, "1": "tlbsCRLF", tlbsCRLF: 1, "2": "tlbsCR", tlbsCR: 2};
  rtl.createClass(this,"TObject",null,function () {
    this.$init = function () {
    };
    this.$final = function () {
    };
    this.Create = function () {
      return this;
    };
    this.Destroy = function () {
    };
    this.Free = function () {
      this.$destroy("Destroy");
    };
    this.ClassType = function () {
      return this;
    };
    this.InheritsFrom = function (aClass) {
      return (aClass!=null) && ((this==aClass) || aClass.isPrototypeOf(this));
    };
    this.FieldAddress = function (aName) {
      var Result = null;
      Result = null;
      if (aName === "") return Result;
      var aClass = this.$class;
      var ClassTI = null;
      var myName = aName.toLowerCase();
      var MemberTI = null;
      while (aClass !== null) {
        ClassTI = aClass.$rtti;
        for (var i = 0, $end2 = ClassTI.fields.length - 1; i <= $end2; i++) {
          MemberTI = ClassTI.getField(i);
          if (MemberTI.name.toLowerCase() === myName) {
             return MemberTI;
          };
        };
        aClass = aClass.$ancestor ? aClass.$ancestor : null;
      };
      return Result;
    };
    this.AfterConstruction = function () {
    };
    this.BeforeDestruction = function () {
    };
  });
  this.vtInteger = 0;
  this.vtExtended = 3;
  this.vtWideChar = 9;
  this.vtCurrency = 12;
  this.vtUnicodeString = 18;
  this.vtNativeInt = 19;
  rtl.recNewT(this,"TVarRec",function () {
    this.VType = 0;
    this.VJSValue = undefined;
    this.$eq = function (b) {
      return (this.VType === b.VType) && (this.VJSValue === b.VJSValue) && (this.VJSValue === b.VJSValue) && (this.VJSValue === b.VJSValue) && (this.VJSValue === b.VJSValue) && (this.VJSValue === b.VJSValue) && (this.VJSValue === b.VJSValue) && (this.VJSValue === b.VJSValue);
    };
    this.$assign = function (s) {
      this.VType = s.VType;
      this.VJSValue = s.VJSValue;
      this.VJSValue = s.VJSValue;
      this.VJSValue = s.VJSValue;
      this.VJSValue = s.VJSValue;
      this.VJSValue = s.VJSValue;
      this.VJSValue = s.VJSValue;
      this.VJSValue = s.VJSValue;
      return this;
    };
  });
  this.VarRecs = function () {
    var Result = [];
    var i = 0;
    var v = null;
    Result = [];
    while (i < arguments.length) {
      v = $mod.TVarRec.$new();
      v.VType = rtl.trunc(arguments[i]);
      i += 1;
      v.VJSValue = arguments[i];
      i += 1;
      Result.push($mod.TVarRec.$clone(v));
    };
    return Result;
  };
  this.IsConsole = false;
  this.OnParamCount = null;
  this.OnParamStr = null;
  this.Trunc = function (A) {
    if (!Math.trunc) {
      Math.trunc = function(v) {
        v = +v;
        if (!isFinite(v)) return v;
        return (v - v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);
      };
    }
    $mod.Trunc = Math.trunc;
    return Math.trunc(A);
  };
  this.DefaultTextLineBreakStyle = this.TTextLineBreakStyle.tlbsLF;
  this.Int = function (A) {
    var Result = 0.0;
    Result = $mod.Trunc(A);
    return Result;
  };
  this.Copy = function (S, Index, Size) {
    if (Index<1) Index = 1;
    return (Size>0) ? S.substring(Index-1,Index+Size-1) : "";
  };
  this.Copy$1 = function (S, Index) {
    if (Index<1) Index = 1;
    return S.substr(Index-1);
  };
  this.Delete = function (S, Index, Size) {
    var h = "";
    if ((Index < 1) || (Index > S.get().length) || (Size <= 0)) return;
    h = S.get();
    S.set($mod.Copy(h,1,Index - 1) + $mod.Copy$1(h,Index + Size));
  };
  this.Pos = function (Search, InString) {
    return InString.indexOf(Search)+1;
  };
  this.Insert = function (Insertion, Target, Index) {
    var t = "";
    if (Insertion === "") return;
    t = Target.get();
    if (Index < 1) {
      Target.set(Insertion + t)}
     else if (Index > t.length) {
      Target.set(t + Insertion)}
     else Target.set($mod.Copy(t,1,Index - 1) + Insertion + $mod.Copy(t,Index,t.length));
  };
  this.upcase = function (c) {
    return c.toUpperCase();
  };
  this.val = function (S, NI, Code) {
    NI.set($impl.valint(S,-9007199254740991,9007199254740991,Code));
  };
  this.StringOfChar = function (c, l) {
    var Result = "";
    var i = 0;
    if ((l>0) && c.repeat) return c.repeat(l);
    Result = "";
    for (var $l = 1, $end = l; $l <= $end; $l++) {
      i = $l;
      Result = Result + c;
    };
    return Result;
  };
  this.Writeln = function () {
    var i = 0;
    var l = 0;
    var s = "";
    l = arguments.length - 1;
    if ($impl.WriteCallBack != null) {
      for (var $l = 0, $end = l; $l <= $end; $l++) {
        i = $l;
        $impl.WriteCallBack(arguments[i],i === l);
      };
    } else {
      s = $impl.WriteBuf;
      for (var $l1 = 0, $end1 = l; $l1 <= $end1; $l1++) {
        i = $l1;
        s = s + ("" + arguments[i]);
      };
      console.log(s);
      $impl.WriteBuf = "";
    };
  };
  this.Assigned = function (V) {
    return (V!=undefined) && (V!=null) && (!rtl.isArray(V) || (V.length > 0));
  };
  $mod.$implcode = function () {
    $impl.WriteBuf = "";
    $impl.WriteCallBack = null;
    $impl.valint = function (S, MinVal, MaxVal, Code) {
      var Result = 0;
      var x = 0.0;
      if (S === "") {
        Code.set(1);
        return Result;
      };
      x = Number(S);
      if (isNaN(x)) {
        var $tmp = $mod.Copy(S,1,1);
        if ($tmp === "$") {
          x = Number("0x" + $mod.Copy$1(S,2))}
         else if ($tmp === "&") {
          x = Number("0o" + $mod.Copy$1(S,2))}
         else if ($tmp === "%") {
          x = Number("0b" + $mod.Copy$1(S,2))}
         else {
          Code.set(1);
          return Result;
        };
      };
      if (isNaN(x) || (x !== $mod.Int(x))) {
        Code.set(1)}
       else if ((x < MinVal) || (x > MaxVal)) {
        Code.set(2)}
       else {
        Result = $mod.Trunc(x);
        Code.set(0);
      };
      return Result;
    };
  };
  $mod.$init = function () {
    rtl.exitcode = 0;
  };
},[]);
rtl.module("RTLConsts",["System"],function () {
  "use strict";
  var $mod = this;
  $mod.$resourcestrings = {SArgumentMissing: {org: 'Missing argument in format "%s"'}, SInvalidFormat: {org: 'Invalid format specifier : "%s"'}, SInvalidArgIndex: {org: 'Invalid argument index in format: "%s"'}, SListCapacityError: {org: "List capacity (%s) exceeded."}, SListCountError: {org: "List count (%s) out of bounds."}, SListIndexError: {org: "List index (%s) out of bounds"}, SSortedListError: {org: "Operation not allowed on sorted list"}, SDuplicateString: {org: "String list does not allow duplicates"}, SErrFindNeedsSortedList: {org: "Cannot use find on unsorted list"}, SInvalidName: {org: 'Invalid component name: "%s"'}, SDuplicateName: {org: 'Duplicate component name: "%s"'}};
});
rtl.module("Types",["System"],function () {
  "use strict";
  var $mod = this;
  this.TDuplicates = {"0": "dupIgnore", dupIgnore: 0, "1": "dupAccept", dupAccept: 1, "2": "dupError", dupError: 2};
  this.$rtti.$RefToProcVar("TProc",{procsig: rtl.newTIProcSig([])});
  rtl.recNewT(this,"TSize",function () {
    this.cx = 0;
    this.cy = 0;
    this.$eq = function (b) {
      return (this.cx === b.cx) && (this.cy === b.cy);
    };
    this.$assign = function (s) {
      this.cx = s.cx;
      this.cy = s.cy;
      return this;
    };
  });
  rtl.recNewT(this,"TPoint",function () {
    this.x = 0;
    this.y = 0;
    this.$eq = function (b) {
      return (this.x === b.x) && (this.y === b.y);
    };
    this.$assign = function (s) {
      this.x = s.x;
      this.y = s.y;
      return this;
    };
    var $r = $mod.$rtti.$Record("TPoint",{});
    $r.addField("x",rtl.longint);
    $r.addField("y",rtl.longint);
  });
  rtl.recNewT(this,"TRect",function () {
    this.Left = 0;
    this.Top = 0;
    this.Right = 0;
    this.Bottom = 0;
    this.$eq = function (b) {
      return (this.Left === b.Left) && (this.Top === b.Top) && (this.Right === b.Right) && (this.Bottom === b.Bottom);
    };
    this.$assign = function (s) {
      this.Left = s.Left;
      this.Top = s.Top;
      this.Right = s.Right;
      this.Bottom = s.Bottom;
      return this;
    };
  });
  this.Rect = function (Left, Top, Right, Bottom) {
    var Result = $mod.TRect.$new();
    Result.Left = Left;
    Result.Top = Top;
    Result.Right = Right;
    Result.Bottom = Bottom;
    return Result;
  };
  this.Point = function (x, y) {
    var Result = $mod.TPoint.$new();
    Result.x = x;
    Result.y = y;
    return Result;
  };
  this.Size = function (AWidth, AHeight) {
    var Result = $mod.TSize.$new();
    Result.cx = AWidth;
    Result.cy = AHeight;
    return Result;
  };
});
rtl.module("JS",["System","Types"],function () {
  "use strict";
  var $mod = this;
  this.isClassInstance = function (v) {
    return (typeof(v)=="object") && (v!=null) && (v.$class == Object.getPrototypeOf(v));
  };
});
rtl.module("SysUtils",["System","RTLConsts","JS"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.FreeAndNil = function (Obj) {
    var o = null;
    o = Obj.get();
    if (o === null) return;
    Obj.set(null);
    o.$destroy("Destroy");
  };
  rtl.recNewT(this,"TFormatSettings",function () {
    this.CurrencyDecimals = 0;
    this.CurrencyFormat = 0;
    this.CurrencyString = "";
    this.DateSeparator = "";
    this.DecimalSeparator = "";
    this.LongDateFormat = "";
    this.LongTimeFormat = "";
    this.NegCurrFormat = 0;
    this.ShortDateFormat = "";
    this.ShortTimeFormat = "";
    this.ThousandSeparator = "";
    this.TimeAMString = "";
    this.TimePMString = "";
    this.TimeSeparator = "";
    this.TwoDigitYearCenturyWindow = 0;
    this.InitLocaleHandler = null;
    this.$new = function () {
      var r = Object.create(this);
      r.DateTimeToStrFormat = rtl.arraySetLength(null,"",2);
      r.LongDayNames = rtl.arraySetLength(null,"",7);
      r.LongMonthNames = rtl.arraySetLength(null,"",12);
      r.ShortDayNames = rtl.arraySetLength(null,"",7);
      r.ShortMonthNames = rtl.arraySetLength(null,"",12);
      return r;
    };
    this.$eq = function (b) {
      return (this.CurrencyDecimals === b.CurrencyDecimals) && (this.CurrencyFormat === b.CurrencyFormat) && (this.CurrencyString === b.CurrencyString) && (this.DateSeparator === b.DateSeparator) && rtl.arrayEq(this.DateTimeToStrFormat,b.DateTimeToStrFormat) && (this.DecimalSeparator === b.DecimalSeparator) && (this.LongDateFormat === b.LongDateFormat) && rtl.arrayEq(this.LongDayNames,b.LongDayNames) && rtl.arrayEq(this.LongMonthNames,b.LongMonthNames) && (this.LongTimeFormat === b.LongTimeFormat) && (this.NegCurrFormat === b.NegCurrFormat) && (this.ShortDateFormat === b.ShortDateFormat) && rtl.arrayEq(this.ShortDayNames,b.ShortDayNames) && rtl.arrayEq(this.ShortMonthNames,b.ShortMonthNames) && (this.ShortTimeFormat === b.ShortTimeFormat) && (this.ThousandSeparator === b.ThousandSeparator) && (this.TimeAMString === b.TimeAMString) && (this.TimePMString === b.TimePMString) && (this.TimeSeparator === b.TimeSeparator) && (this.TwoDigitYearCenturyWindow === b.TwoDigitYearCenturyWindow);
    };
    this.$assign = function (s) {
      this.CurrencyDecimals = s.CurrencyDecimals;
      this.CurrencyFormat = s.CurrencyFormat;
      this.CurrencyString = s.CurrencyString;
      this.DateSeparator = s.DateSeparator;
      this.DateTimeToStrFormat = s.DateTimeToStrFormat.slice(0);
      this.DecimalSeparator = s.DecimalSeparator;
      this.LongDateFormat = s.LongDateFormat;
      this.LongDayNames = s.LongDayNames.slice(0);
      this.LongMonthNames = s.LongMonthNames.slice(0);
      this.LongTimeFormat = s.LongTimeFormat;
      this.NegCurrFormat = s.NegCurrFormat;
      this.ShortDateFormat = s.ShortDateFormat;
      this.ShortDayNames = s.ShortDayNames.slice(0);
      this.ShortMonthNames = s.ShortMonthNames.slice(0);
      this.ShortTimeFormat = s.ShortTimeFormat;
      this.ThousandSeparator = s.ThousandSeparator;
      this.TimeAMString = s.TimeAMString;
      this.TimePMString = s.TimePMString;
      this.TimeSeparator = s.TimeSeparator;
      this.TwoDigitYearCenturyWindow = s.TwoDigitYearCenturyWindow;
      return this;
    };
    this.GetJSLocale = function () {
      return Intl.DateTimeFormat().resolvedOptions().locale;
    };
    this.Create = function () {
      var Result = $mod.TFormatSettings.$new();
      Result.$assign($mod.TFormatSettings.Create$1($mod.TFormatSettings.GetJSLocale()));
      return Result;
    };
    this.Create$1 = function (ALocale) {
      var Result = $mod.TFormatSettings.$new();
      Result.LongDayNames = $impl.DefaultLongDayNames.slice(0);
      Result.ShortDayNames = $impl.DefaultShortDayNames.slice(0);
      Result.ShortMonthNames = $impl.DefaultShortMonthNames.slice(0);
      Result.LongMonthNames = $impl.DefaultLongMonthNames.slice(0);
      Result.DateTimeToStrFormat[0] = "c";
      Result.DateTimeToStrFormat[1] = "f";
      Result.DateSeparator = "-";
      Result.TimeSeparator = ":";
      Result.ShortDateFormat = "yyyy-mm-dd";
      Result.LongDateFormat = "ddd, yyyy-mm-dd";
      Result.ShortTimeFormat = "hh:nn";
      Result.LongTimeFormat = "hh:nn:ss";
      Result.DecimalSeparator = ".";
      Result.ThousandSeparator = ",";
      Result.TimeAMString = "AM";
      Result.TimePMString = "PM";
      Result.TwoDigitYearCenturyWindow = 50;
      Result.CurrencyFormat = 0;
      Result.NegCurrFormat = 0;
      Result.CurrencyDecimals = 2;
      Result.CurrencyString = "$";
      if ($mod.TFormatSettings.InitLocaleHandler != null) $mod.TFormatSettings.InitLocaleHandler($mod.UpperCase(ALocale),$mod.TFormatSettings.$clone(Result));
      return Result;
    };
  },true);
  rtl.createClass(this,"Exception",pas.System.TObject,function () {
    this.LogMessageOnCreate = false;
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.fMessage = "";
    };
    this.Create$1 = function (Msg) {
      this.fMessage = Msg;
      if (this.LogMessageOnCreate) pas.System.Writeln("Created exception ",this.$classname," with message: ",Msg);
      return this;
    };
    this.CreateFmt = function (Msg, Args) {
      this.Create$1($mod.Format(Msg,Args));
      return this;
    };
  });
  rtl.createClass(this,"EConvertError",this.Exception,function () {
  });
  rtl.createClass(this,"EHeapMemoryError",this.Exception,function () {
  });
  rtl.createClass(this,"EOutOfMemory",this.EHeapMemoryError,function () {
  });
  this.TrimLeft = function (S) {
    return S.replace(/^[\s\uFEFF\xA0\x00-\x1f]+/,'');
  };
  this.UpperCase = function (s) {
    return s.toUpperCase();
  };
  this.LowerCase = function (s) {
    return s.toLowerCase();
  };
  this.CompareStr = function (s1, s2) {
    var l1 = s1.length;
    var l2 = s2.length;
    if (l1<=l2){
      var s = s2.substr(0,l1);
      if (s1<s){ return -1;
      } else if (s1>s){ return 1;
      } else { return l1<l2 ? -1 : 0; };
    } else {
      var s = s1.substr(0,l2);
      if (s<s2){ return -1;
      } else { return 1; };
    };
  };
  this.CompareText = function (s1, s2) {
    var l1 = s1.toLowerCase();
    var l2 = s2.toLowerCase();
    if (l1>l2){ return 1;
    } else if (l1<l2){ return -1;
    } else { return 0; };
  };
  this.Format = function (Fmt, Args) {
    var Result = "";
    Result = $mod.Format$1(Fmt,Args,$mod.FormatSettings);
    return Result;
  };
  this.Format$1 = function (Fmt, Args, aSettings) {
    var Result = "";
    var ChPos = 0;
    var OldPos = 0;
    var ArgPos = 0;
    var DoArg = 0;
    var Len = 0;
    var Hs = "";
    var ToAdd = "";
    var Index = 0;
    var Width = 0;
    var Prec = 0;
    var Left = false;
    var Fchar = "";
    var vq = 0;
    function ReadFormat() {
      var Result = "";
      var Value = 0;
      function ReadInteger() {
        var Code = 0;
        var ArgN = 0;
        if (Value !== -1) return;
        OldPos = ChPos;
        while ((ChPos <= Len) && (Fmt.charAt(ChPos - 1) <= "9") && (Fmt.charAt(ChPos - 1) >= "0")) ChPos += 1;
        if (ChPos > Len) $impl.DoFormatError(1,Fmt);
        if (Fmt.charAt(ChPos - 1) === "*") {
          if (Index === 255) {
            ArgN = ArgPos}
           else {
            ArgN = Index;
            Index += 1;
          };
          if ((ChPos > OldPos) || (ArgN > (rtl.length(Args) - 1))) $impl.DoFormatError(1,Fmt);
          ArgPos = ArgN + 1;
          var $tmp = Args[ArgN].VType;
          if ($tmp === 0) {
            Value = Args[ArgN].VJSValue}
           else if ($tmp === 19) {
            Value = Args[ArgN].VJSValue}
           else {
            $impl.DoFormatError(1,Fmt);
          };
          ChPos += 1;
        } else {
          if (OldPos < ChPos) {
            pas.System.val(pas.System.Copy(Fmt,OldPos,ChPos - OldPos),{get: function () {
                return Value;
              }, set: function (v) {
                Value = v;
              }},{get: function () {
                return Code;
              }, set: function (v) {
                Code = v;
              }});
            if (Code > 0) $impl.DoFormatError(1,Fmt);
          } else Value = -1;
        };
      };
      function ReadIndex() {
        if (Fmt.charAt(ChPos - 1) !== ":") {
          ReadInteger()}
         else Value = 0;
        if (Fmt.charAt(ChPos - 1) === ":") {
          if (Value === -1) $impl.DoFormatError(2,Fmt);
          Index = Value;
          Value = -1;
          ChPos += 1;
        };
      };
      function ReadLeft() {
        if (Fmt.charAt(ChPos - 1) === "-") {
          Left = true;
          ChPos += 1;
        } else Left = false;
      };
      function ReadWidth() {
        ReadInteger();
        if (Value !== -1) {
          Width = Value;
          Value = -1;
        };
      };
      function ReadPrec() {
        if (Fmt.charAt(ChPos - 1) === ".") {
          ChPos += 1;
          ReadInteger();
          if (Value === -1) Value = 0;
          Prec = Value;
        };
      };
      Index = 255;
      Width = -1;
      Prec = -1;
      Value = -1;
      ChPos += 1;
      if (Fmt.charAt(ChPos - 1) === "%") {
        Result = "%";
        return Result;
      };
      ReadIndex();
      ReadLeft();
      ReadWidth();
      ReadPrec();
      Result = pas.System.upcase(Fmt.charAt(ChPos - 1));
      return Result;
    };
    function Checkarg(AT, err) {
      var Result = false;
      Result = false;
      if (Index === 255) {
        DoArg = ArgPos}
       else DoArg = Index;
      ArgPos = DoArg + 1;
      if ((DoArg > (rtl.length(Args) - 1)) || (Args[DoArg].VType !== AT)) {
        if (err) $impl.DoFormatError(3,Fmt);
        ArgPos -= 1;
        return Result;
      };
      Result = true;
      return Result;
    };
    Result = "";
    Len = Fmt.length;
    ChPos = 1;
    OldPos = 1;
    ArgPos = 0;
    while (ChPos <= Len) {
      while ((ChPos <= Len) && (Fmt.charAt(ChPos - 1) !== "%")) ChPos += 1;
      if (ChPos > OldPos) Result = Result + pas.System.Copy(Fmt,OldPos,ChPos - OldPos);
      if (ChPos < Len) {
        Fchar = ReadFormat();
        var $tmp = Fchar;
        if ($tmp === "D") {
          if (Checkarg(0,false)) {
            ToAdd = $mod.IntToStr(Args[DoArg].VJSValue)}
           else if (Checkarg(19,true)) ToAdd = $mod.IntToStr(Args[DoArg].VJSValue);
          Width = Math.abs(Width);
          Index = Prec - ToAdd.length;
          if (ToAdd.charAt(0) !== "-") {
            ToAdd = pas.System.StringOfChar("0",Index) + ToAdd}
           else pas.System.Insert(pas.System.StringOfChar("0",Index + 1),{get: function () {
              return ToAdd;
            }, set: function (v) {
              ToAdd = v;
            }},2);
        } else if ($tmp === "U") {
          if (Checkarg(0,false)) {
            ToAdd = $mod.IntToStr(Args[DoArg].VJSValue >>> 0)}
           else if (Checkarg(19,true)) ToAdd = $mod.IntToStr(Args[DoArg].VJSValue);
          Width = Math.abs(Width);
          Index = Prec - ToAdd.length;
          ToAdd = pas.System.StringOfChar("0",Index) + ToAdd;
        } else if ($tmp === "E") {
          if (Checkarg(12,false)) {
            ToAdd = $mod.FloatToStrF$1(Args[DoArg].VJSValue / 10000,$mod.TFloatFormat.ffExponent,3,Prec,aSettings)}
           else if (Checkarg(3,true)) ToAdd = $mod.FloatToStrF$1(Args[DoArg].VJSValue,$mod.TFloatFormat.ffExponent,3,Prec,aSettings);
        } else if ($tmp === "F") {
          if (Checkarg(12,false)) {
            ToAdd = $mod.FloatToStrF$1(Args[DoArg].VJSValue / 10000,$mod.TFloatFormat.ffFixed,9999,Prec,aSettings)}
           else if (Checkarg(3,true)) ToAdd = $mod.FloatToStrF$1(Args[DoArg].VJSValue,$mod.TFloatFormat.ffFixed,9999,Prec,aSettings);
        } else if ($tmp === "G") {
          if (Checkarg(12,false)) {
            ToAdd = $mod.FloatToStrF$1(Args[DoArg].VJSValue / 10000,$mod.TFloatFormat.ffGeneral,Prec,3,aSettings)}
           else if (Checkarg(3,true)) ToAdd = $mod.FloatToStrF$1(Args[DoArg].VJSValue,$mod.TFloatFormat.ffGeneral,Prec,3,aSettings);
        } else if ($tmp === "N") {
          if (Checkarg(12,false)) {
            ToAdd = $mod.FloatToStrF$1(Args[DoArg].VJSValue / 10000,$mod.TFloatFormat.ffNumber,9999,Prec,aSettings)}
           else if (Checkarg(3,true)) ToAdd = $mod.FloatToStrF$1(Args[DoArg].VJSValue,$mod.TFloatFormat.ffNumber,9999,Prec,aSettings);
        } else if ($tmp === "M") {
          if (Checkarg(12,false)) {
            ToAdd = $mod.FloatToStrF$1(Args[DoArg].VJSValue / 10000,$mod.TFloatFormat.ffCurrency,9999,Prec,aSettings)}
           else if (Checkarg(3,true)) ToAdd = $mod.FloatToStrF$1(Args[DoArg].VJSValue,$mod.TFloatFormat.ffCurrency,9999,Prec,aSettings);
        } else if ($tmp === "S") {
          if (Checkarg(18,false)) {
            Hs = Args[DoArg].VJSValue}
           else if (Checkarg(9,true)) Hs = Args[DoArg].VJSValue;
          Index = Hs.length;
          if ((Prec !== -1) && (Index > Prec)) Index = Prec;
          ToAdd = pas.System.Copy(Hs,1,Index);
        } else if ($tmp === "P") {
          if (Checkarg(0,false)) {
            ToAdd = $mod.IntToHex(Args[DoArg].VJSValue,8)}
           else if (Checkarg(0,true)) ToAdd = $mod.IntToHex(Args[DoArg].VJSValue,16);
        } else if ($tmp === "X") {
          if (Checkarg(0,false)) {
            vq = Args[DoArg].VJSValue;
            Index = 16;
          } else if (Checkarg(19,true)) {
            vq = Args[DoArg].VJSValue;
            Index = 31;
          };
          if (Prec > Index) {
            ToAdd = $mod.IntToHex(vq,Index)}
           else {
            Index = 1;
            while ((rtl.shl(1,Index * 4) <= vq) && (Index < 16)) Index += 1;
            if (Index > Prec) Prec = Index;
            ToAdd = $mod.IntToHex(vq,Prec);
          };
        } else if ($tmp === "%") ToAdd = "%";
        if (Width !== -1) if (ToAdd.length < Width) if (!Left) {
          ToAdd = pas.System.StringOfChar(" ",Width - ToAdd.length) + ToAdd}
         else ToAdd = ToAdd + pas.System.StringOfChar(" ",Width - ToAdd.length);
        Result = Result + ToAdd;
      };
      ChPos += 1;
      OldPos = ChPos;
    };
    return Result;
  };
  var Alpha = rtl.createSet(null,65,90,null,97,122,95);
  var AlphaNum = rtl.unionSet(Alpha,rtl.createSet(null,48,57));
  var Dot = ".";
  this.IsValidIdent = function (Ident, AllowDots, StrictDots) {
    var Result = false;
    var First = false;
    var I = 0;
    var Len = 0;
    Len = Ident.length;
    if (Len < 1) return false;
    First = true;
    Result = false;
    I = 1;
    while (I <= Len) {
      if (First) {
        if (!(Ident.charCodeAt(I - 1) in Alpha)) return Result;
        First = false;
      } else if (AllowDots && (Ident.charAt(I - 1) === Dot)) {
        if (StrictDots) {
          if (I >= Len) return Result;
          First = true;
        };
      } else if (!(Ident.charCodeAt(I - 1) in AlphaNum)) return Result;
      I = I + 1;
    };
    Result = true;
    return Result;
  };
  this.TStringReplaceFlag = {"0": "rfReplaceAll", rfReplaceAll: 0, "1": "rfIgnoreCase", rfIgnoreCase: 1};
  this.StringReplace = function (aOriginal, aSearch, aReplace, Flags) {
    var Result = "";
    var REFlags = "";
    var REString = "";
    REFlags = "";
    if ($mod.TStringReplaceFlag.rfReplaceAll in Flags) REFlags = "g";
    if ($mod.TStringReplaceFlag.rfIgnoreCase in Flags) REFlags = REFlags + "i";
    REString = aSearch.replace(new RegExp($impl.RESpecials,"g"),"\\$1");
    Result = aOriginal.replace(new RegExp(REString,REFlags),aReplace);
    return Result;
  };
  this.IntToStr = function (Value) {
    var Result = "";
    Result = "" + Value;
    return Result;
  };
  this.TryStrToInt$1 = function (S, res) {
    var Result = false;
    Result = $impl.IntTryStrToInt(S,res,$mod.FormatSettings.DecimalSeparator);
    return Result;
  };
  this.StrToIntDef = function (S, aDef) {
    var Result = 0;
    var R = 0;
    if ($mod.TryStrToInt$1(S,{get: function () {
        return R;
      }, set: function (v) {
        R = v;
      }})) {
      Result = R}
     else Result = aDef;
    return Result;
  };
  this.IntToHex = function (Value, Digits) {
    var Result = "";
    Result = "";
    if (Value < 0) if (Value<0) Value = 0xFFFFFFFF + Value + 1;
    Result=Value.toString(16);
    Result = $mod.UpperCase(Result);
    while (Result.length < Digits) Result = "0" + Result;
    return Result;
  };
  this.TFloatFormat = {"0": "ffFixed", ffFixed: 0, "1": "ffGeneral", ffGeneral: 1, "2": "ffExponent", ffExponent: 2, "3": "ffNumber", ffNumber: 3, "4": "ffCurrency", ffCurrency: 4};
  this.FloatToStr = function (Value) {
    var Result = "";
    Result = $mod.FloatToStr$1(Value,$mod.FormatSettings);
    return Result;
  };
  this.FloatToStr$1 = function (Value, aSettings) {
    var Result = "";
    Result = $mod.FloatToStrF$1(Value,$mod.TFloatFormat.ffGeneral,15,0,aSettings);
    return Result;
  };
  this.FloatToStrF$1 = function (Value, format, Precision, Digits, aSettings) {
    var Result = "";
    var TS = "";
    var DS = "";
    DS = aSettings.DecimalSeparator;
    TS = aSettings.ThousandSeparator;
    var $tmp = format;
    if ($tmp === $mod.TFloatFormat.ffGeneral) {
      Result = $impl.FormatGeneralFloat(Value,Precision,DS)}
     else if ($tmp === $mod.TFloatFormat.ffExponent) {
      Result = $impl.FormatExponentFloat(Value,Precision,Digits,DS)}
     else if ($tmp === $mod.TFloatFormat.ffFixed) {
      Result = $impl.FormatFixedFloat(Value,Digits,DS)}
     else if ($tmp === $mod.TFloatFormat.ffNumber) {
      Result = $impl.FormatNumberFloat(Value,Digits,DS,TS)}
     else if ($tmp === $mod.TFloatFormat.ffCurrency) Result = $impl.FormatNumberCurrency(Value * 10000,Digits,aSettings);
    if ((format !== $mod.TFloatFormat.ffCurrency) && (Result.length > 1) && (Result.charAt(0) === "-")) $impl.RemoveLeadingNegativeSign({get: function () {
        return Result;
      }, set: function (v) {
        Result = v;
      }},DS,TS);
    return Result;
  };
  this.OnGetEnvironmentVariable = null;
  this.OnGetEnvironmentString = null;
  this.OnGetEnvironmentVariableCount = null;
  this.OnShowException = null;
  this.SetOnUnCaughtExceptionHandler = function (aValue) {
    var Result = null;
    Result = $impl.OnPascalException;
    $impl.OnPascalException = aValue;
    $mod.HookUncaughtExceptions();
    return Result;
  };
  this.HookUncaughtExceptions = function () {
    rtl.onUncaughtException = $impl.RTLExceptionHook;
    rtl.showUncaughtExceptions = true;
  };
  this.ShowException = function (ExceptObject, ExceptAddr) {
    var S = "";
    S = rtl.getResStr($mod,"SApplicationException") + ExceptObject.$classname;
    if ($mod.Exception.isPrototypeOf(ExceptObject)) S = S + " : " + ExceptObject.fMessage;
    $impl.DoShowException(S);
    if (ExceptAddr === null) ;
  };
  this.TimeSeparator = "";
  this.DateSeparator = "";
  this.ShortDateFormat = "";
  this.LongDateFormat = "";
  this.ShortTimeFormat = "";
  this.LongTimeFormat = "";
  this.DecimalSeparator = "";
  this.ThousandSeparator = "";
  this.TimeAMString = "";
  this.TimePMString = "";
  this.ShortMonthNames = rtl.arraySetLength(null,"",12);
  this.LongMonthNames = rtl.arraySetLength(null,"",12);
  this.ShortDayNames = rtl.arraySetLength(null,"",7);
  this.LongDayNames = rtl.arraySetLength(null,"",7);
  this.FormatSettings = this.TFormatSettings.$new();
  this.CurrencyFormat = 0;
  this.NegCurrFormat = 0;
  this.CurrencyDecimals = 0;
  this.CurrencyString = "";
  $mod.$implcode = function () {
    $impl.DefaultShortMonthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    $impl.DefaultLongMonthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    $impl.DefaultShortDayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    $impl.DefaultLongDayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    $impl.DoShowException = function (S) {
      if ($mod.OnShowException != null) {
        $mod.OnShowException(S)}
       else {
        window.alert(S);
      };
    };
    $impl.OnPascalException = null;
    $impl.OnJSException = null;
    $impl.RTLExceptionHook = function (aError) {
      var S = "";
      if (pas.JS.isClassInstance(aError)) {
        if ($impl.OnPascalException != null) {
          $impl.OnPascalException(rtl.getObject(aError))}
         else $mod.ShowException(rtl.getObject(aError),null);
      } else if (rtl.isObject(aError)) {
        if ($impl.OnJSException != null) {
          $impl.OnJSException(aError)}
         else {
          if (aError.hasOwnProperty("message")) {
            S = rtl.getResStr($mod,"SErrUnknownExceptionType") + ("" + aError["message"])}
           else S = rtl.getResStr($mod,"SErrUnknownExceptionType") + aError.toString();
          $impl.DoShowException(S);
        };
      } else {
        S = rtl.getResStr($mod,"SErrUnknownExceptionType") + ("" + aError);
        $impl.DoShowException(S);
      };
    };
    $impl.feInvalidFormat = 1;
    $impl.feMissingArgument = 2;
    $impl.feInvalidArgIndex = 3;
    $impl.DoFormatError = function (ErrCode, fmt) {
      var $tmp = ErrCode;
      if ($tmp === 1) {
        throw $mod.EConvertError.$create("CreateFmt",[rtl.getResStr(pas.RTLConsts,"SInvalidFormat"),pas.System.VarRecs(18,fmt)])}
       else if ($tmp === 2) {
        throw $mod.EConvertError.$create("CreateFmt",[rtl.getResStr(pas.RTLConsts,"SArgumentMissing"),pas.System.VarRecs(18,fmt)])}
       else if ($tmp === 3) throw $mod.EConvertError.$create("CreateFmt",[rtl.getResStr(pas.RTLConsts,"SInvalidArgIndex"),pas.System.VarRecs(18,fmt)]);
    };
    $impl.maxdigits = 15;
    $impl.ReplaceDecimalSep = function (S, DS) {
      var Result = "";
      var P = 0;
      P = pas.System.Pos(".",S);
      if (P > 0) {
        Result = pas.System.Copy(S,1,P - 1) + DS + pas.System.Copy(S,P + 1,S.length - P)}
       else Result = S;
      return Result;
    };
    $impl.FormatGeneralFloat = function (Value, Precision, DS) {
      var Result = "";
      var P = 0;
      var PE = 0;
      var Q = 0;
      var Exponent = 0;
      if ((Precision === -1) || (Precision > 15)) Precision = 15;
      Result = rtl.floatToStr(Value,Precision + 7);
      Result = $mod.TrimLeft(Result);
      P = pas.System.Pos(".",Result);
      if (P === 0) return Result;
      PE = pas.System.Pos("E",Result);
      if (PE === 0) {
        Result = $impl.ReplaceDecimalSep(Result,DS);
        return Result;
      };
      Q = PE + 2;
      Exponent = 0;
      while (Q <= Result.length) {
        Exponent = ((Exponent * 10) + Result.charCodeAt(Q - 1)) - 48;
        Q += 1;
      };
      if (Result.charAt((PE + 1) - 1) === "-") Exponent = -Exponent;
      if (((P + Exponent) < PE) && (Exponent > -6)) {
        Result = rtl.strSetLength(Result,PE - 1);
        if (Exponent >= 0) {
          for (var $l = 0, $end = Exponent - 1; $l <= $end; $l++) {
            Q = $l;
            Result = rtl.setCharAt(Result,P - 1,Result.charAt((P + 1) - 1));
            P += 1;
          };
          Result = rtl.setCharAt(Result,P - 1,".");
          P = 1;
          if (Result.charAt(P - 1) === "-") P += 1;
          while ((Result.charAt(P - 1) === "0") && (P < Result.length) && (pas.System.Copy(Result,P + 1,DS.length) !== DS)) pas.System.Delete({get: function () {
              return Result;
            }, set: function (v) {
              Result = v;
            }},P,1);
        } else {
          pas.System.Insert(pas.System.Copy("00000",1,-Exponent),{get: function () {
              return Result;
            }, set: function (v) {
              Result = v;
            }},P - 1);
          Result = rtl.setCharAt(Result,P - Exponent - 1,Result.charAt(P - Exponent - 1 - 1));
          Result = rtl.setCharAt(Result,P - 1,".");
          if (Exponent !== -1) Result = rtl.setCharAt(Result,P - Exponent - 1 - 1,"0");
        };
        Q = Result.length;
        while ((Q > 0) && (Result.charAt(Q - 1) === "0")) Q -= 1;
        if (Result.charAt(Q - 1) === ".") Q -= 1;
        if ((Q === 0) || ((Q === 1) && (Result.charAt(0) === "-"))) {
          Result = "0"}
         else Result = rtl.strSetLength(Result,Q);
      } else {
        while (Result.charAt(PE - 1 - 1) === "0") {
          pas.System.Delete({get: function () {
              return Result;
            }, set: function (v) {
              Result = v;
            }},PE - 1,1);
          PE -= 1;
        };
        if (Result.charAt(PE - 1 - 1) === DS) {
          pas.System.Delete({get: function () {
              return Result;
            }, set: function (v) {
              Result = v;
            }},PE - 1,1);
          PE -= 1;
        };
        if (Result.charAt((PE + 1) - 1) === "+") {
          pas.System.Delete({get: function () {
              return Result;
            }, set: function (v) {
              Result = v;
            }},PE + 1,1)}
         else PE += 1;
        while (Result.charAt((PE + 1) - 1) === "0") pas.System.Delete({get: function () {
            return Result;
          }, set: function (v) {
            Result = v;
          }},PE + 1,1);
      };
      Result = $impl.ReplaceDecimalSep(Result,DS);
      return Result;
    };
    $impl.FormatExponentFloat = function (Value, Precision, Digits, DS) {
      var Result = "";
      var P = 0;
      DS = $mod.FormatSettings.DecimalSeparator;
      if ((Precision === -1) || (Precision > 15)) Precision = 15;
      Result = rtl.floatToStr(Value,Precision + 7);
      while (Result.charAt(0) === " ") pas.System.Delete({get: function () {
          return Result;
        }, set: function (v) {
          Result = v;
        }},1,1);
      P = pas.System.Pos("E",Result);
      if (P === 0) {
        Result = $impl.ReplaceDecimalSep(Result,DS);
        return Result;
      };
      P += 2;
      if (Digits > 4) Digits = 4;
      Digits = (Result.length - P - Digits) + 1;
      if (Digits < 0) {
        pas.System.Insert(pas.System.Copy("0000",1,-Digits),{get: function () {
            return Result;
          }, set: function (v) {
            Result = v;
          }},P)}
       else while ((Digits > 0) && (Result.charAt(P - 1) === "0")) {
        pas.System.Delete({get: function () {
            return Result;
          }, set: function (v) {
            Result = v;
          }},P,1);
        if (P > Result.length) {
          pas.System.Delete({get: function () {
              return Result;
            }, set: function (v) {
              Result = v;
            }},P - 2,2);
          break;
        };
        Digits -= 1;
      };
      Result = $impl.ReplaceDecimalSep(Result,DS);
      return Result;
    };
    $impl.FormatFixedFloat = function (Value, Digits, DS) {
      var Result = "";
      if (Digits === -1) {
        Digits = 2}
       else if (Digits > 18) Digits = 18;
      Result = rtl.floatToStr(Value,0,Digits);
      if ((Result !== "") && (Result.charAt(0) === " ")) pas.System.Delete({get: function () {
          return Result;
        }, set: function (v) {
          Result = v;
        }},1,1);
      Result = $impl.ReplaceDecimalSep(Result,DS);
      return Result;
    };
    $impl.FormatNumberFloat = function (Value, Digits, DS, TS) {
      var Result = "";
      var P = 0;
      if (Digits === -1) {
        Digits = 2}
       else if (Digits > 15) Digits = 15;
      Result = rtl.floatToStr(Value,0,Digits);
      if ((Result !== "") && (Result.charAt(0) === " ")) pas.System.Delete({get: function () {
          return Result;
        }, set: function (v) {
          Result = v;
        }},1,1);
      P = pas.System.Pos(".",Result);
      if (P <= 0) P = Result.length + 1;
      Result = $impl.ReplaceDecimalSep(Result,DS);
      P -= 3;
      if ((TS !== "") && (TS !== "\x00")) while (P > 1) {
        if (Result.charAt(P - 1 - 1) !== "-") pas.System.Insert(TS,{get: function () {
            return Result;
          }, set: function (v) {
            Result = v;
          }},P);
        P -= 3;
      };
      return Result;
    };
    $impl.RemoveLeadingNegativeSign = function (AValue, DS, aThousandSeparator) {
      var Result = false;
      var i = 0;
      var TS = "";
      var StartPos = 0;
      Result = false;
      StartPos = 2;
      TS = aThousandSeparator;
      for (var $l = StartPos, $end = AValue.get().length; $l <= $end; $l++) {
        i = $l;
        Result = (AValue.get().charCodeAt(i - 1) in rtl.createSet(48,DS.charCodeAt(),69,43)) || (AValue.get().charAt(i - 1) === TS);
        if (!Result) break;
      };
      if (Result && (AValue.get().charAt(0) === "-")) pas.System.Delete(AValue,1,1);
      return Result;
    };
    $impl.FormatNumberCurrency = function (Value, Digits, aSettings) {
      var Result = "";
      var Negative = false;
      var P = 0;
      var CS = "";
      var DS = "";
      var TS = "";
      DS = aSettings.DecimalSeparator;
      TS = aSettings.ThousandSeparator;
      CS = aSettings.CurrencyString;
      if (Digits === -1) {
        Digits = aSettings.CurrencyDecimals}
       else if (Digits > 18) Digits = 18;
      Result = rtl.floatToStr(Value / 10000,0,Digits);
      Negative = Result.charAt(0) === "-";
      if (Negative) pas.System.Delete({get: function () {
          return Result;
        }, set: function (v) {
          Result = v;
        }},1,1);
      P = pas.System.Pos(".",Result);
      if (TS !== "") {
        if (P !== 0) {
          Result = $impl.ReplaceDecimalSep(Result,DS)}
         else P = Result.length + 1;
        P -= 3;
        while (P > 1) {
          pas.System.Insert(TS,{get: function () {
              return Result;
            }, set: function (v) {
              Result = v;
            }},P);
          P -= 3;
        };
      };
      if (Negative) $impl.RemoveLeadingNegativeSign({get: function () {
          return Result;
        }, set: function (v) {
          Result = v;
        }},DS,TS);
      if (!Negative) {
        var $tmp = aSettings.CurrencyFormat;
        if ($tmp === 0) {
          Result = CS + Result}
         else if ($tmp === 1) {
          Result = Result + CS}
         else if ($tmp === 2) {
          Result = CS + " " + Result}
         else if ($tmp === 3) Result = Result + " " + CS;
      } else {
        var $tmp1 = aSettings.NegCurrFormat;
        if ($tmp1 === 0) {
          Result = "(" + CS + Result + ")"}
         else if ($tmp1 === 1) {
          Result = "-" + CS + Result}
         else if ($tmp1 === 2) {
          Result = CS + "-" + Result}
         else if ($tmp1 === 3) {
          Result = CS + Result + "-"}
         else if ($tmp1 === 4) {
          Result = "(" + Result + CS + ")"}
         else if ($tmp1 === 5) {
          Result = "-" + Result + CS}
         else if ($tmp1 === 6) {
          Result = Result + "-" + CS}
         else if ($tmp1 === 7) {
          Result = Result + CS + "-"}
         else if ($tmp1 === 8) {
          Result = "-" + Result + " " + CS}
         else if ($tmp1 === 9) {
          Result = "-" + CS + " " + Result}
         else if ($tmp1 === 10) {
          Result = Result + " " + CS + "-"}
         else if ($tmp1 === 11) {
          Result = CS + " " + Result + "-"}
         else if ($tmp1 === 12) {
          Result = CS + " " + "-" + Result}
         else if ($tmp1 === 13) {
          Result = Result + "-" + " " + CS}
         else if ($tmp1 === 14) {
          Result = "(" + CS + " " + Result + ")"}
         else if ($tmp1 === 15) Result = "(" + Result + " " + CS + ")";
      };
      return Result;
    };
    $impl.RESpecials = "([\\$\\+\\[\\]\\(\\)\\\\\\.\\*\\^\\?\\|])";
    $impl.IntTryStrToInt = function (S, res, aSep) {
      var Result = false;
      var Radix = 10;
      var N = "";
      var J = undefined;
      N = S;
      if ((pas.System.Pos(aSep,N) !== 0) || (pas.System.Pos(".",N) !== 0)) return false;
      var $tmp = pas.System.Copy(N,1,1);
      if ($tmp === "$") {
        Radix = 16}
       else if ($tmp === "&") {
        Radix = 8}
       else if ($tmp === "%") Radix = 2;
      if ((Radix !== 16) && (pas.System.Pos("e",$mod.LowerCase(N)) !== 0)) return false;
      if (Radix !== 10) pas.System.Delete({get: function () {
          return N;
        }, set: function (v) {
          N = v;
        }},1,1);
      J = parseInt(N,Radix);
      Result = !isNaN(J);
      if (Result) res.set(rtl.trunc(J));
      return Result;
    };
    $mod.$resourcestrings = {SApplicationException: {org: "Application raised an exception: "}, SErrUnknownExceptionType: {org: "Caught unknown exception type : "}};
  };
  $mod.$init = function () {
    $mod.ShortMonthNames = $impl.DefaultShortMonthNames.slice(0);
    $mod.LongMonthNames = $impl.DefaultLongMonthNames.slice(0);
    $mod.ShortDayNames = $impl.DefaultShortDayNames.slice(0);
    $mod.LongDayNames = $impl.DefaultLongDayNames.slice(0);
    $mod.FormatSettings.$assign($mod.TFormatSettings.Create());
    $mod.TimeSeparator = $mod.FormatSettings.TimeSeparator;
    $mod.DateSeparator = $mod.FormatSettings.DateSeparator;
    $mod.ShortDateFormat = $mod.FormatSettings.ShortDateFormat;
    $mod.LongDateFormat = $mod.FormatSettings.LongDateFormat;
    $mod.ShortTimeFormat = $mod.FormatSettings.ShortTimeFormat;
    $mod.LongTimeFormat = $mod.FormatSettings.LongTimeFormat;
    $mod.DecimalSeparator = $mod.FormatSettings.DecimalSeparator;
    $mod.ThousandSeparator = $mod.FormatSettings.ThousandSeparator;
    $mod.TimeAMString = $mod.FormatSettings.TimeAMString;
    $mod.TimePMString = $mod.FormatSettings.TimePMString;
    $mod.CurrencyFormat = $mod.FormatSettings.CurrencyFormat;
    $mod.NegCurrFormat = $mod.FormatSettings.NegCurrFormat;
    $mod.CurrencyDecimals = $mod.FormatSettings.CurrencyDecimals;
    $mod.CurrencyString = $mod.FormatSettings.CurrencyString;
  };
},[]);
rtl.module("Classes",["System","RTLConsts","Types","SysUtils","JS"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.$rtti.$MethodVar("TNotifyEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]]]), methodkind: 0});
  rtl.createClass(this,"EListError",pas.SysUtils.Exception,function () {
  });
  rtl.createClass(this,"EStringListError",this.EListError,function () {
  });
  rtl.createClass(this,"EComponentError",pas.SysUtils.Exception,function () {
  });
  rtl.createClass(this,"EOutOfResources",pas.SysUtils.EOutOfMemory,function () {
  });
  this.TAlignment = {"0": "taLeftJustify", taLeftJustify: 0, "1": "taRightJustify", taRightJustify: 1, "2": "taCenter", taCenter: 2};
  this.$rtti.$Enum("TAlignment",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TAlignment});
  rtl.createClass(this,"TFPList",pas.System.TObject,function () {
    this.$init = function () {
      pas.System.TObject.$init.call(this);
      this.FList = [];
      this.FCount = 0;
      this.FCapacity = 0;
    };
    this.$final = function () {
      this.FList = undefined;
      pas.System.TObject.$final.call(this);
    };
    this.Get = function (Index) {
      var Result = undefined;
      if ((Index < 0) || (Index >= this.FCount)) this.RaiseIndexError(Index);
      Result = this.FList[Index];
      return Result;
    };
    this.SetCapacity = function (NewCapacity) {
      if (NewCapacity < this.FCount) this.$class.Error(rtl.getResStr(pas.RTLConsts,"SListCapacityError"),"" + NewCapacity);
      if (NewCapacity === this.FCapacity) return;
      this.FList = rtl.arraySetLength(this.FList,undefined,NewCapacity);
      this.FCapacity = NewCapacity;
    };
    this.SetCount = function (NewCount) {
      if (NewCount < 0) this.$class.Error(rtl.getResStr(pas.RTLConsts,"SListCountError"),"" + NewCount);
      if (NewCount > this.FCount) {
        if (NewCount > this.FCapacity) this.SetCapacity(NewCount);
      };
      this.FCount = NewCount;
    };
    this.RaiseIndexError = function (Index) {
      this.$class.Error(rtl.getResStr(pas.RTLConsts,"SListIndexError"),"" + Index);
    };
    this.Destroy = function () {
      this.Clear();
      pas.System.TObject.Destroy.call(this);
    };
    this.Add = function (Item) {
      var Result = 0;
      if (this.FCount === this.FCapacity) this.Expand();
      this.FList[this.FCount] = Item;
      Result = this.FCount;
      this.FCount += 1;
      return Result;
    };
    this.Clear = function () {
      if (rtl.length(this.FList) > 0) {
        this.SetCount(0);
        this.SetCapacity(0);
      };
    };
    this.Delete = function (Index) {
      if ((Index < 0) || (Index >= this.FCount)) this.$class.Error(rtl.getResStr(pas.RTLConsts,"SListIndexError"),"" + Index);
      this.FCount = this.FCount - 1;
      this.FList.splice(Index,1);
      this.FCapacity -= 1;
    };
    this.Error = function (Msg, Data) {
      throw $mod.EListError.$create("CreateFmt",[Msg,pas.System.VarRecs(18,Data)]);
    };
    this.Expand = function () {
      var Result = null;
      var IncSize = 0;
      if (this.FCount < this.FCapacity) return this;
      IncSize = 4;
      if (this.FCapacity > 3) IncSize = IncSize + 4;
      if (this.FCapacity > 8) IncSize = IncSize + 8;
      if (this.FCapacity > 127) IncSize += this.FCapacity >>> 2;
      this.SetCapacity(this.FCapacity + IncSize);
      Result = this;
      return Result;
    };
    this.IndexOf = function (Item) {
      var Result = 0;
      var C = 0;
      Result = 0;
      C = this.FCount;
      while ((Result < C) && (this.FList[Result] != Item)) Result += 1;
      if (Result >= C) Result = -1;
      return Result;
    };
    this.Last = function () {
      var Result = undefined;
      if (this.FCount === 0) {
        Result = null}
       else Result = this.Get(this.FCount - 1);
      return Result;
    };
    this.Remove = function (Item) {
      var Result = 0;
      Result = this.IndexOf(Item);
      if (Result !== -1) this.Delete(Result);
      return Result;
    };
  });
  rtl.createClass(this,"TPersistent",pas.System.TObject,function () {
    this.AssignError = function (Source) {
      var SourceName = "";
      if (Source !== null) {
        SourceName = Source.$classname}
       else SourceName = "Nil";
      throw pas.SysUtils.EConvertError.$create("Create$1",["Cannot assign a " + SourceName + " to a " + this.$classname + "."]);
    };
    this.AssignTo = function (Dest) {
      Dest.AssignError(this);
    };
    this.Assign = function (Source) {
      if (Source !== null) {
        Source.AssignTo(this)}
       else this.AssignError(null);
    };
  });
  rtl.createClass(this,"TStrings",this.TPersistent,function () {
    this.$init = function () {
      $mod.TPersistent.$init.call(this);
      this.FSpecialCharsInited = false;
      this.FAlwaysQuote = false;
      this.FQuoteChar = "";
      this.FDelimiter = "";
      this.FNameValueSeparator = "";
      this.FUpdateCount = 0;
      this.FLBS = 0;
      this.FSkipLastLineBreak = false;
      this.FStrictDelimiter = false;
      this.FLineBreak = "";
    };
    this.SetCommaText = function (Value) {
      var C1 = "";
      var C2 = "";
      this.CheckSpecialChars();
      C1 = this.GetDelimiter();
      C2 = this.GetQuoteChar();
      this.SetDelimiter(",");
      this.SetQuoteChar('"');
      try {
        this.SetDelimitedText(Value);
      } finally {
        this.SetDelimiter(C1);
        this.SetQuoteChar(C2);
      };
    };
    this.SetDelimiter = function (c) {
      this.CheckSpecialChars();
      this.FDelimiter = c;
    };
    this.SetQuoteChar = function (c) {
      this.CheckSpecialChars();
      this.FQuoteChar = c;
    };
    this.DoSetTextStr = function (Value, DoClear) {
      var S = "";
      var P = 0;
      try {
        this.BeginUpdate();
        if (DoClear) this.Clear();
        P = 1;
        while (this.GetNextLinebreak(Value,{get: function () {
            return S;
          }, set: function (v) {
            S = v;
          }},{get: function () {
            return P;
          }, set: function (v) {
            P = v;
          }})) this.Add(S);
      } finally {
        this.EndUpdate();
      };
    };
    this.GetDelimiter = function () {
      var Result = "";
      this.CheckSpecialChars();
      Result = this.FDelimiter;
      return Result;
    };
    this.GetQuoteChar = function () {
      var Result = "";
      this.CheckSpecialChars();
      Result = this.FQuoteChar;
      return Result;
    };
    this.GetSkipLastLineBreak = function () {
      var Result = false;
      this.CheckSpecialChars();
      Result = this.FSkipLastLineBreak;
      return Result;
    };
    this.Error = function (Msg, Data) {
      throw $mod.EStringListError.$create("CreateFmt",[Msg,pas.System.VarRecs(18,pas.SysUtils.IntToStr(Data))]);
    };
    this.GetCapacity = function () {
      var Result = 0;
      Result = this.GetCount();
      return Result;
    };
    this.GetObject = function (Index) {
      var Result = null;
      if (Index === 0) ;
      Result = null;
      return Result;
    };
    this.GetTextStr = function () {
      var Result = "";
      var I = 0;
      var S = "";
      var NL = "";
      this.CheckSpecialChars();
      if (this.FLineBreak !== pas.System.sLineBreak) {
        NL = this.FLineBreak}
       else {
        var $tmp = this.FLBS;
        if ($tmp === pas.System.TTextLineBreakStyle.tlbsLF) {
          NL = "\n"}
         else if ($tmp === pas.System.TTextLineBreakStyle.tlbsCRLF) {
          NL = "\r\n"}
         else if ($tmp === pas.System.TTextLineBreakStyle.tlbsCR) NL = "\r";
      };
      Result = "";
      for (var $l = 0, $end = this.GetCount() - 1; $l <= $end; $l++) {
        I = $l;
        S = this.Get(I);
        Result = Result + S;
        if ((I < (this.GetCount() - 1)) || !this.GetSkipLastLineBreak()) Result = Result + NL;
      };
      return Result;
    };
    this.PutObject = function (Index, AObject) {
      if (Index === 0) return;
      if (AObject === null) return;
    };
    this.SetTextStr = function (Value) {
      this.CheckSpecialChars();
      this.DoSetTextStr(Value,true);
    };
    this.SetUpdateState = function (Updating) {
      if (Updating) ;
    };
    this.DoCompareText = function (s1, s2) {
      var Result = 0;
      Result = pas.SysUtils.CompareText(s1,s2);
      return Result;
    };
    this.SetDelimitedText = function (AValue) {
      var i = 0;
      var j = 0;
      var aNotFirst = false;
      this.CheckSpecialChars();
      this.BeginUpdate();
      i = 1;
      j = 1;
      aNotFirst = false;
      try {
        this.Clear();
        if (this.FStrictDelimiter) {
          while (i <= AValue.length) {
            if (aNotFirst && (i <= AValue.length) && (AValue.charAt(i - 1) === this.FDelimiter)) i += 1;
            if (i <= AValue.length) {
              if (AValue.charAt(i - 1) === this.FQuoteChar) {
                j = i + 1;
                while ((j <= AValue.length) && ((AValue.charAt(j - 1) !== this.FQuoteChar) || (((j + 1) <= AValue.length) && (AValue.charAt((j + 1) - 1) === this.FQuoteChar)))) {
                  if ((j <= AValue.length) && (AValue.charAt(j - 1) === this.FQuoteChar)) {
                    j += 2}
                   else j += 1;
                };
                this.Add(pas.SysUtils.StringReplace(pas.System.Copy(AValue,i + 1,j - i - 1),this.FQuoteChar + this.FQuoteChar,this.FQuoteChar,rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll)));
                i = j + 1;
              } else {
                j = i;
                while ((j <= AValue.length) && (AValue.charAt(j - 1) !== this.FDelimiter)) j += 1;
                this.Add(pas.System.Copy(AValue,i,j - i));
                i = j;
              };
            } else {
              if (aNotFirst) this.Add("");
            };
            aNotFirst = true;
          };
        } else {
          while (i <= AValue.length) {
            if (aNotFirst && (i <= AValue.length) && (AValue.charAt(i - 1) === this.FDelimiter)) i += 1;
            while ((i <= AValue.length) && (AValue.charCodeAt(i - 1) <= 32)) i += 1;
            if (i <= AValue.length) {
              if (AValue.charAt(i - 1) === this.FQuoteChar) {
                j = i + 1;
                while ((j <= AValue.length) && ((AValue.charAt(j - 1) !== this.FQuoteChar) || (((j + 1) <= AValue.length) && (AValue.charAt((j + 1) - 1) === this.FQuoteChar)))) {
                  if ((j <= AValue.length) && (AValue.charAt(j - 1) === this.FQuoteChar)) {
                    j += 2}
                   else j += 1;
                };
                this.Add(pas.SysUtils.StringReplace(pas.System.Copy(AValue,i + 1,j - i - 1),this.FQuoteChar + this.FQuoteChar,this.FQuoteChar,rtl.createSet(pas.SysUtils.TStringReplaceFlag.rfReplaceAll)));
                i = j + 1;
              } else {
                j = i;
                while ((j <= AValue.length) && (AValue.charCodeAt(j - 1) > 32) && (AValue.charAt(j - 1) !== this.FDelimiter)) j += 1;
                this.Add(pas.System.Copy(AValue,i,j - i));
                i = j;
              };
            } else {
              if (aNotFirst) this.Add("");
            };
            while ((i <= AValue.length) && (AValue.charCodeAt(i - 1) <= 32)) i += 1;
            aNotFirst = true;
          };
        };
      } finally {
        this.EndUpdate();
      };
    };
    this.CheckSpecialChars = function () {
      if (!this.FSpecialCharsInited) {
        this.FQuoteChar = '"';
        this.FDelimiter = ",";
        this.FNameValueSeparator = "=";
        this.FLBS = pas.System.DefaultTextLineBreakStyle;
        this.FSpecialCharsInited = true;
        this.FLineBreak = pas.System.sLineBreak;
      };
    };
    this.GetNextLinebreak = function (Value, S, P) {
      var Result = false;
      var PPLF = 0;
      var PPCR = 0;
      var PP = 0;
      var PL = 0;
      S.set("");
      Result = false;
      if ((Value.length - P.get()) < 0) return Result;
      PPLF = Value.indexOf("\n",P.get() - 1) + 1;
      PPCR = Value.indexOf("\r",P.get() - 1) + 1;
      PL = 1;
      if ((PPLF > 0) && (PPCR > 0)) {
        if ((PPLF - PPCR) === 1) PL = 2;
        if (PPLF < PPCR) {
          PP = PPLF}
         else PP = PPCR;
      } else if ((PPLF > 0) && (PPCR < 1)) {
        PP = PPLF}
       else if ((PPCR > 0) && (PPLF < 1)) {
        PP = PPCR}
       else PP = Value.length + 1;
      S.set(pas.System.Copy(Value,P.get(),PP - P.get()));
      P.set(PP + PL);
      Result = true;
      return Result;
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FAlwaysQuote = false;
      return this;
    };
    this.Destroy = function () {
      pas.System.TObject.Destroy.call(this);
    };
    this.Add = function (S) {
      var Result = 0;
      Result = this.GetCount();
      this.Insert(this.GetCount(),S);
      return Result;
    };
    this.AddObject = function (S, AObject) {
      var Result = 0;
      Result = this.Add(S);
      this.PutObject(Result,AObject);
      return Result;
    };
    this.Append = function (S) {
      this.Add(S);
    };
    this.AddStrings = function (TheStrings) {
      var Runner = 0;
      for (var $l = 0, $end = TheStrings.GetCount() - 1; $l <= $end; $l++) {
        Runner = $l;
        this.AddObject(TheStrings.Get(Runner),TheStrings.GetObject(Runner));
      };
    };
    this.Assign = function (Source) {
      var S = null;
      if ($mod.TStrings.isPrototypeOf(Source)) {
        S = Source;
        this.BeginUpdate();
        try {
          this.Clear();
          this.FSpecialCharsInited = S.FSpecialCharsInited;
          this.FQuoteChar = S.FQuoteChar;
          this.FDelimiter = S.FDelimiter;
          this.FNameValueSeparator = S.FNameValueSeparator;
          this.FLBS = S.FLBS;
          this.FLineBreak = S.FLineBreak;
          this.AddStrings(S);
        } finally {
          this.EndUpdate();
        };
      } else $mod.TPersistent.Assign.call(this,Source);
    };
    this.BeginUpdate = function () {
      if (this.FUpdateCount === 0) this.SetUpdateState(true);
      this.FUpdateCount += 1;
    };
    this.EndUpdate = function () {
      if (this.FUpdateCount > 0) this.FUpdateCount -= 1;
      if (this.FUpdateCount === 0) this.SetUpdateState(false);
    };
    this.IndexOf = function (S) {
      var Result = 0;
      Result = 0;
      while ((Result < this.GetCount()) && (this.DoCompareText(this.Get(Result),S) !== 0)) Result = Result + 1;
      if (Result === this.GetCount()) Result = -1;
      return Result;
    };
  });
  rtl.recNewT(this,"TStringItem",function () {
    this.FString = "";
    this.FObject = null;
    this.$eq = function (b) {
      return (this.FString === b.FString) && (this.FObject === b.FObject);
    };
    this.$assign = function (s) {
      this.FString = s.FString;
      this.FObject = s.FObject;
      return this;
    };
  });
  this.TStringsSortStyle = {"0": "sslNone", sslNone: 0, "1": "sslUser", sslUser: 1, "2": "sslAuto", sslAuto: 2};
  rtl.createClass(this,"TStringList",this.TStrings,function () {
    this.$init = function () {
      $mod.TStrings.$init.call(this);
      this.FList = [];
      this.FCount = 0;
      this.FOnChange = null;
      this.FOnChanging = null;
      this.FDuplicates = 0;
      this.FCaseSensitive = false;
      this.FOwnsObjects = false;
      this.FSortStyle = 0;
    };
    this.$final = function () {
      this.FList = undefined;
      this.FOnChange = undefined;
      this.FOnChanging = undefined;
      $mod.TStrings.$final.call(this);
    };
    this.GetSorted = function () {
      var Result = false;
      Result = this.FSortStyle in rtl.createSet($mod.TStringsSortStyle.sslUser,$mod.TStringsSortStyle.sslAuto);
      return Result;
    };
    this.Grow = function () {
      var NC = 0;
      NC = this.GetCapacity();
      if (NC >= 256) {
        NC = NC + rtl.trunc(NC / 4)}
       else if (NC === 0) {
        NC = 4}
       else NC = NC * 4;
      this.SetCapacity(NC);
    };
    this.InternalClear = function (FromIndex, ClearOnly) {
      var I = 0;
      if (FromIndex < this.FCount) {
        if (this.FOwnsObjects) {
          for (var $l = FromIndex, $end = this.FCount - 1; $l <= $end; $l++) {
            I = $l;
            this.FList[I].FString = "";
            pas.SysUtils.FreeAndNil({p: this.FList[I], get: function () {
                return this.p.FObject;
              }, set: function (v) {
                this.p.FObject = v;
              }});
          };
        } else {
          for (var $l1 = FromIndex, $end1 = this.FCount - 1; $l1 <= $end1; $l1++) {
            I = $l1;
            this.FList[I].FString = "";
          };
        };
        this.FCount = FromIndex;
      };
      if (!ClearOnly) this.SetCapacity(0);
    };
    this.CheckIndex = function (AIndex) {
      if ((AIndex < 0) || (AIndex >= this.FCount)) this.Error(rtl.getResStr(pas.RTLConsts,"SListIndexError"),AIndex);
    };
    this.Changed = function () {
      if (this.FUpdateCount === 0) {
        if (this.FOnChange != null) this.FOnChange(this);
      };
    };
    this.Changing = function () {
      if (this.FUpdateCount === 0) if (this.FOnChanging != null) this.FOnChanging(this);
    };
    this.Get = function (Index) {
      var Result = "";
      this.CheckIndex(Index);
      Result = this.FList[Index].FString;
      return Result;
    };
    this.GetCapacity = function () {
      var Result = 0;
      Result = rtl.length(this.FList);
      return Result;
    };
    this.GetCount = function () {
      var Result = 0;
      Result = this.FCount;
      return Result;
    };
    this.GetObject = function (Index) {
      var Result = null;
      this.CheckIndex(Index);
      Result = this.FList[Index].FObject;
      return Result;
    };
    this.PutObject = function (Index, AObject) {
      this.CheckIndex(Index);
      this.Changing();
      this.FList[Index].FObject = AObject;
      this.Changed();
    };
    this.SetCapacity = function (NewCapacity) {
      if (NewCapacity < 0) this.Error(rtl.getResStr(pas.RTLConsts,"SListCapacityError"),NewCapacity);
      if (NewCapacity !== this.GetCapacity()) this.FList = rtl.arraySetLength(this.FList,$mod.TStringItem,NewCapacity);
    };
    this.SetUpdateState = function (Updating) {
      if (Updating) {
        this.Changing()}
       else this.Changed();
    };
    this.InsertItem = function (Index, S) {
      this.InsertItem$1(Index,S,null);
    };
    this.InsertItem$1 = function (Index, S, O) {
      var It = $mod.TStringItem.$new();
      this.Changing();
      if (this.FCount === this.GetCapacity()) this.Grow();
      It.FString = S;
      It.FObject = O;
      this.FList.splice(Index,0,It);
      this.FCount += 1;
      this.Changed();
    };
    this.DoCompareText = function (s1, s2) {
      var Result = 0;
      if (this.FCaseSensitive) {
        Result = pas.SysUtils.CompareStr(s1,s2)}
       else Result = pas.SysUtils.CompareText(s1,s2);
      return Result;
    };
    this.Destroy = function () {
      this.InternalClear(0,false);
      $mod.TStrings.Destroy.call(this);
    };
    this.Add = function (S) {
      var Result = 0;
      if (!(this.FSortStyle === $mod.TStringsSortStyle.sslAuto)) {
        Result = this.FCount}
       else if (this.Find(S,{get: function () {
          return Result;
        }, set: function (v) {
          Result = v;
        }})) {
        var $tmp = this.FDuplicates;
        if ($tmp === pas.Types.TDuplicates.dupIgnore) {
          return Result}
         else if ($tmp === pas.Types.TDuplicates.dupError) this.Error(rtl.getResStr(pas.RTLConsts,"SDuplicateString"),0);
      };
      this.InsertItem(Result,S);
      return Result;
    };
    this.Clear = function () {
      if (this.FCount === 0) return;
      this.Changing();
      this.InternalClear(0,false);
      this.Changed();
    };
    this.Find = function (S, Index) {
      var Result = false;
      var L = 0;
      var R = 0;
      var I = 0;
      var CompareRes = 0;
      Result = false;
      Index.set(-1);
      if (!this.GetSorted()) throw $mod.EListError.$create("Create$1",[rtl.getResStr(pas.RTLConsts,"SErrFindNeedsSortedList")]);
      L = 0;
      R = this.GetCount() - 1;
      while (L <= R) {
        I = L + rtl.trunc((R - L) / 2);
        CompareRes = this.DoCompareText(S,this.FList[I].FString);
        if (CompareRes > 0) {
          L = I + 1}
         else {
          R = I - 1;
          if (CompareRes === 0) {
            Result = true;
            if (this.FDuplicates !== pas.Types.TDuplicates.dupAccept) L = I;
          };
        };
      };
      Index.set(L);
      return Result;
    };
    this.IndexOf = function (S) {
      var Result = 0;
      if (!this.GetSorted()) {
        Result = $mod.TStrings.IndexOf.call(this,S)}
       else if (!this.Find(S,{get: function () {
          return Result;
        }, set: function (v) {
          Result = v;
        }})) Result = -1;
      return Result;
    };
    this.Insert = function (Index, S) {
      if (this.FSortStyle === $mod.TStringsSortStyle.sslAuto) {
        this.Error(rtl.getResStr(pas.RTLConsts,"SSortedListError"),0)}
       else {
        if ((Index < 0) || (Index > this.FCount)) this.Error(rtl.getResStr(pas.RTLConsts,"SListIndexError"),Index);
        this.InsertItem(Index,S);
      };
    };
  });
  this.TOperation = {"0": "opInsert", opInsert: 0, "1": "opRemove", opRemove: 1};
  this.TComponentStateItem = {"0": "csLoading", csLoading: 0, "1": "csReading", csReading: 1, "2": "csWriting", csWriting: 2, "3": "csDestroying", csDestroying: 3, "4": "csDesigning", csDesigning: 4, "5": "csAncestor", csAncestor: 5, "6": "csUpdating", csUpdating: 6, "7": "csFixups", csFixups: 7, "8": "csFreeNotification", csFreeNotification: 8, "9": "csInline", csInline: 9, "10": "csDesignInstance", csDesignInstance: 10};
  this.TComponentStyleItem = {"0": "csInheritable", csInheritable: 0, "1": "csCheckPropAvail", csCheckPropAvail: 1, "2": "csSubComponent", csSubComponent: 2, "3": "csTransient", csTransient: 3};
  rtl.createClass(this,"TComponent",this.TPersistent,function () {
    this.$init = function () {
      $mod.TPersistent.$init.call(this);
      this.FOwner = null;
      this.FName = "";
      this.FTag = 0;
      this.FComponents = null;
      this.FFreeNotifies = null;
      this.FComponentState = {};
      this.FComponentStyle = {};
    };
    this.$final = function () {
      this.FOwner = undefined;
      this.FComponents = undefined;
      this.FFreeNotifies = undefined;
      this.FComponentState = undefined;
      this.FComponentStyle = undefined;
      $mod.TPersistent.$final.call(this);
    };
    this.GetComponent = function (AIndex) {
      var Result = null;
      if (!(this.FComponents != null)) {
        Result = null}
       else Result = rtl.getObject(this.FComponents.Get(AIndex));
      return Result;
    };
    this.GetComponentCount = function () {
      var Result = 0;
      if (!(this.FComponents != null)) {
        Result = 0}
       else Result = this.FComponents.FCount;
      return Result;
    };
    this.Insert = function (AComponent) {
      if (!(this.FComponents != null)) this.FComponents = $mod.TFPList.$create("Create");
      this.FComponents.Add(AComponent);
      AComponent.FOwner = this;
    };
    this.Remove = function (AComponent) {
      AComponent.FOwner = null;
      if (this.FComponents != null) {
        this.FComponents.Remove(AComponent);
        if (this.FComponents.FCount === 0) {
          this.FComponents.$destroy("Destroy");
          this.FComponents = null;
        };
      };
    };
    this.RemoveNotification = function (AComponent) {
      if (this.FFreeNotifies !== null) {
        this.FFreeNotifies.Remove(AComponent);
        if (this.FFreeNotifies.FCount === 0) {
          this.FFreeNotifies.$destroy("Destroy");
          this.FFreeNotifies = null;
          this.FComponentState = rtl.excludeSet(this.FComponentState,$mod.TComponentStateItem.csFreeNotification);
        };
      };
    };
    this.SetReference = function (Enable) {
      var aField = null;
      var aValue = null;
      var aOwner = null;
      if (this.FName === "") return;
      if (this.FOwner != null) {
        aOwner = this.FOwner;
        aField = this.FOwner.$class.FieldAddress(this.FName);
        if (aField != null) {
          if (Enable) {
            aValue = this}
           else aValue = null;
          aOwner["" + aField["name"]] = aValue;
        };
      };
    };
    this.ChangeName = function (NewName) {
      this.FName = NewName;
    };
    this.Loaded = function () {
      this.FComponentState = rtl.excludeSet(this.FComponentState,$mod.TComponentStateItem.csLoading);
    };
    this.Notification = function (AComponent, Operation) {
      var C = 0;
      if (Operation === $mod.TOperation.opRemove) this.RemoveFreeNotification(AComponent);
      if (!(this.FComponents != null)) return;
      C = this.FComponents.FCount - 1;
      while (C >= 0) {
        rtl.getObject(this.FComponents.Get(C)).Notification(AComponent,Operation);
        C -= 1;
        if (C >= this.FComponents.FCount) C = this.FComponents.FCount - 1;
      };
    };
    this.SetDesigning = function (Value, SetChildren) {
      var Runner = 0;
      if (Value) {
        this.FComponentState = rtl.includeSet(this.FComponentState,$mod.TComponentStateItem.csDesigning)}
       else this.FComponentState = rtl.excludeSet(this.FComponentState,$mod.TComponentStateItem.csDesigning);
      if ((this.FComponents != null) && SetChildren) for (var $l = 0, $end = this.FComponents.FCount - 1; $l <= $end; $l++) {
        Runner = $l;
        rtl.getObject(this.FComponents.Get(Runner)).SetDesigning(Value,true);
      };
    };
    this.SetName = function (NewName) {
      if (this.FName === NewName) return;
      if ((NewName !== "") && !pas.SysUtils.IsValidIdent(NewName,false,false)) throw $mod.EComponentError.$create("CreateFmt",[rtl.getResStr(pas.RTLConsts,"SInvalidName"),pas.System.VarRecs(18,NewName)]);
      if (this.FOwner != null) {
        this.FOwner.ValidateRename(this,this.FName,NewName)}
       else this.ValidateRename(null,this.FName,NewName);
      this.SetReference(false);
      this.ChangeName(NewName);
      this.SetReference(true);
    };
    this.ValidateRename = function (AComponent, CurName, NewName) {
      if ((AComponent !== null) && (pas.SysUtils.CompareText(CurName,NewName) !== 0) && (AComponent.FOwner === this) && (this.FindComponent(NewName) !== null)) throw $mod.EComponentError.$create("CreateFmt",[rtl.getResStr(pas.RTLConsts,"SDuplicateName"),pas.System.VarRecs(18,NewName)]);
      if (($mod.TComponentStateItem.csDesigning in this.FComponentState) && (this.FOwner !== null)) this.FOwner.ValidateRename(AComponent,CurName,NewName);
    };
    this.ValidateContainer = function (AComponent) {
      AComponent.ValidateInsert(this);
    };
    this.ValidateInsert = function (AComponent) {
      if (AComponent === null) ;
    };
    this.Create$1 = function (AOwner) {
      this.FComponentStyle = rtl.createSet($mod.TComponentStyleItem.csInheritable);
      if (AOwner != null) AOwner.InsertComponent(this);
      return this;
    };
    this.Destroy = function () {
      var I = 0;
      var C = null;
      this.Destroying();
      if (this.FFreeNotifies != null) {
        I = this.FFreeNotifies.FCount - 1;
        while (I >= 0) {
          C = rtl.getObject(this.FFreeNotifies.Get(I));
          this.FFreeNotifies.Delete(I);
          C.Notification(this,$mod.TOperation.opRemove);
          if (this.FFreeNotifies === null) {
            I = 0}
           else if (I > this.FFreeNotifies.FCount) I = this.FFreeNotifies.FCount;
          I -= 1;
        };
        pas.SysUtils.FreeAndNil({p: this, get: function () {
            return this.p.FFreeNotifies;
          }, set: function (v) {
            this.p.FFreeNotifies = v;
          }});
      };
      this.DestroyComponents();
      if (this.FOwner !== null) this.FOwner.RemoveComponent(this);
      pas.System.TObject.Destroy.call(this);
    };
    this.BeforeDestruction = function () {
      if (!($mod.TComponentStateItem.csDestroying in this.FComponentState)) this.Destroying();
    };
    this.DestroyComponents = function () {
      var acomponent = null;
      while (this.FComponents != null) {
        acomponent = rtl.getObject(this.FComponents.Last());
        this.Remove(acomponent);
        acomponent.$destroy("Destroy");
      };
    };
    this.Destroying = function () {
      var Runner = 0;
      if ($mod.TComponentStateItem.csDestroying in this.FComponentState) return;
      this.FComponentState = rtl.includeSet(this.FComponentState,$mod.TComponentStateItem.csDestroying);
      if (this.FComponents != null) for (var $l = 0, $end = this.FComponents.FCount - 1; $l <= $end; $l++) {
        Runner = $l;
        rtl.getObject(this.FComponents.Get(Runner)).Destroying();
      };
    };
    this.FindComponent = function (AName) {
      var Result = null;
      var I = 0;
      Result = null;
      if ((AName === "") || !(this.FComponents != null)) return Result;
      for (var $l = 0, $end = this.FComponents.FCount - 1; $l <= $end; $l++) {
        I = $l;
        if (pas.SysUtils.CompareText(rtl.getObject(this.FComponents.Get(I)).FName,AName) === 0) {
          Result = rtl.getObject(this.FComponents.Get(I));
          return Result;
        };
      };
      return Result;
    };
    this.RemoveFreeNotification = function (AComponent) {
      this.RemoveNotification(AComponent);
      AComponent.RemoveNotification(this);
    };
    this.InsertComponent = function (AComponent) {
      AComponent.ValidateContainer(this);
      this.ValidateRename(AComponent,"",AComponent.FName);
      if (AComponent.FOwner !== null) AComponent.FOwner.RemoveComponent(AComponent);
      this.Insert(AComponent);
      if ($mod.TComponentStateItem.csDesigning in this.FComponentState) AComponent.SetDesigning(true,true);
      this.Notification(AComponent,$mod.TOperation.opInsert);
    };
    this.RemoveComponent = function (AComponent) {
      this.Notification(AComponent,$mod.TOperation.opRemove);
      this.Remove(AComponent);
      AComponent.SetDesigning(false,true);
      this.ValidateRename(AComponent,AComponent.FName,"");
    };
    var $r = this.$rtti;
    $r.addProperty("Name",6,rtl.string,"FName","SetName");
    $r.addProperty("Tag",0,rtl.nativeint,"FTag","FTag",{Default: 0});
  });
  $mod.$implcode = function () {
    $impl.ClassList = null;
  };
  $mod.$init = function () {
    $impl.ClassList = new Object();
  };
},[]);
rtl.module("Web",["System","Types","JS"],function () {
  "use strict";
  var $mod = this;
  this.$rtti.$ExtClass("TJSHTMLElement",{ancestor: this.$rtti["TJSElement"], jsclass: "HTMLElement"});
  this.$rtti.$ExtClass("TJSHTMLInputElement",{ancestor: this.$rtti["TJSHTMLElement"], jsclass: "HTMLInputElement"});
});
rtl.module("Graphics",["System","Classes","SysUtils","Types","Web"],function () {
  "use strict";
  var $mod = this;
  this.$rtti.$Int("TFontCharSet",{minvalue: 0, maxvalue: 255, ordtype: 3});
  this.TFontStyle = {"0": "fsBold", fsBold: 0, "1": "fsItalic", fsItalic: 1, "2": "fsUnderline", fsUnderline: 2, "3": "fsStrikeOut", fsStrikeOut: 3};
  this.$rtti.$Enum("TFontStyle",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TFontStyle});
  this.$rtti.$Set("TFontStyles",{comptype: this.$rtti["TFontStyle"]});
  this.TTextLayout = {"0": "tlTop", tlTop: 0, "1": "tlCenter", tlCenter: 1, "2": "tlBottom", tlBottom: 2, "3": "tlTitle", tlTitle: 3};
  this.$rtti.$Enum("TTextLayout",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TTextLayout});
  this.TPenStyle = {"0": "psSolid", psSolid: 0, "1": "psDash", psDash: 1, "2": "psDot", psDot: 2, "3": "psDashDot", psDashDot: 3, "4": "psDashDotDot", psDashDotDot: 4, "5": "psInsideFrame", psInsideFrame: 5, "6": "psPattern", psPattern: 6, "7": "psClear", psClear: 7};
  this.$rtti.$Enum("TPenStyle",{minvalue: 0, maxvalue: 7, ordtype: 1, enumtype: this.TPenStyle});
  this.TBrushStyle = {"0": "bsSolid", bsSolid: 0, "1": "bsClear", bsClear: 1, "2": "bsHorizontal", bsHorizontal: 2, "3": "bsVertical", bsVertical: 3, "4": "bsFDiagonal", bsFDiagonal: 4, "5": "bsBDiagonal", bsBDiagonal: 5, "6": "bsCross", bsCross: 6, "7": "bsDiagCross", bsDiagCross: 7, "8": "bsImage", bsImage: 8, "9": "bsPattern", bsPattern: 9};
  this.$rtti.$Enum("TBrushStyle",{minvalue: 0, maxvalue: 9, ordtype: 1, enumtype: this.TBrushStyle});
  rtl.createClass(this,"TFont",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FCharSet = 0;
      this.FColor = 0;
      this.FName = "";
      this.FSize = 0;
      this.FStyle = {};
      this.FUpdateCount = 0;
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FStyle = undefined;
      this.FOnChange = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.GetHeight = function () {
      var Result = 0;
      Result = Math.round((-this.FSize * 72) / 96);
      return Result;
    };
    this.SetCharSet = function (AValue) {
      if (this.FCharSet !== AValue) {
        this.FCharSet = AValue;
        this.Changed();
      };
    };
    this.SetColor = function (AValue) {
      if (this.FColor !== AValue) {
        this.FColor = AValue;
        this.Changed();
      };
    };
    this.SetHeight = function (AValue) {
      this.SetSize(Math.round((-AValue * 96) / 72));
    };
    this.SetName = function (AValue) {
      if (this.FName !== AValue) {
        this.FName = AValue;
        this.Changed();
      };
    };
    this.SetSize = function (AValue) {
      if (this.FSize !== AValue) {
        this.FSize = AValue;
        this.Changed();
      };
    };
    this.SetStyle = function (AValue) {
      if (rtl.neSet(this.FStyle,AValue)) {
        this.FStyle = rtl.refSet(AValue);
        this.Changed();
      };
    };
    this.Changed = function () {
      if ((this.FUpdateCount === 0) && (this.FOnChange != null)) {
        this.FOnChange(this);
      };
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FColor = 0;
      this.FName = $mod.ffSans;
      this.FSize = 10;
      this.FStyle = {};
      this.FUpdateCount = 0;
      return this;
    };
    this.Assign = function (Source) {
      var VFont = null;
      if ((Source != null) && $mod.TFont.isPrototypeOf(Source)) {
        this.BeginUpdate();
        try {
          VFont = Source;
          this.FCharSet = VFont.FCharSet;
          this.FColor = VFont.FColor;
          this.FName = VFont.FName;
          this.FSize = VFont.FSize;
          this.FStyle = rtl.refSet(VFont.FStyle);
        } finally {
          this.EndUpdate();
        };
      } else {
        pas.Classes.TPersistent.Assign.call(this,Source);
      };
    };
    this.BeginUpdate = function () {
      this.FUpdateCount += 1;
    };
    this.EndUpdate = function () {
      if (this.FUpdateCount > 0) {
        this.FUpdateCount -= 1;
        if (this.FUpdateCount === 0) {
          this.Changed();
        };
      };
    };
    this.IsEqual = function (AFont) {
      var Result = false;
      if (AFont != null) {
        if ((this.FCharSet !== AFont.FCharSet) || (this.FColor !== AFont.FColor) || (this.FName !== AFont.FName) || (this.FSize !== AFont.FSize) || rtl.neSet(this.FStyle,AFont.FStyle)) {
          Result = false;
        } else {
          Result = true;
        };
      } else {
        Result = false;
      };
      return Result;
    };
    this.TextExtent = function (AText) {
      var Result = pas.Types.TSize.$new();
      Result.$assign($mod.JSMeasureText(AText,this.FName,this.FSize,0));
      return Result;
    };
    var $r = this.$rtti;
    $r.addProperty("CharSet",2,$mod.$rtti["TFontCharSet"],"FCharSet","SetCharSet");
    $r.addProperty("Color",2,rtl.longint,"FColor","SetColor");
    $r.addProperty("Height",3,rtl.nativeint,"GetHeight","SetHeight");
    $r.addProperty("Name",2,rtl.string,"FName","SetName");
    $r.addProperty("Size",2,rtl.nativeint,"FSize","SetSize");
    $r.addProperty("Style",2,$mod.$rtti["TFontStyles"],"FStyle","SetStyle");
    $r.addProperty("OnChange",0,pas.Classes.$rtti["TNotifyEvent"],"FOnChange","FOnChange");
  });
  rtl.createClass(this,"TPen",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FColor = 0;
      this.FStyle = 0;
      this.FWidth = 0;
      this.FUpdateCount = 0;
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetColor = function (AValue) {
      if (this.FColor !== AValue) {
        this.FColor = AValue;
        this.Changed();
      };
    };
    this.SetStyle = function (AValue) {
      if (this.FStyle !== AValue) {
        this.FStyle = AValue;
        this.Changed();
      };
    };
    this.SetWidth = function (AValue) {
      if (this.FWidth !== AValue) {
        this.FWidth = AValue;
        this.Changed();
      };
    };
    this.Changed = function () {
      if ((this.FUpdateCount === 0) && (this.FOnChange != null)) {
        this.FOnChange(this);
      };
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FColor = 0;
      this.FStyle = $mod.TPenStyle.psSolid;
      this.FWidth = 1;
      this.FUpdateCount = 0;
      return this;
    };
    this.Assign = function (Source) {
      var VPen = null;
      if ((Source != null) && $mod.TPen.isPrototypeOf(Source)) {
        this.BeginUpdate();
        try {
          VPen = Source;
          this.FColor = VPen.FColor;
          this.FStyle = VPen.FStyle;
          this.FWidth = VPen.FWidth;
        } finally {
          this.EndUpdate();
        };
      } else {
        pas.Classes.TPersistent.Assign.call(this,Source);
      };
    };
    this.BeginUpdate = function () {
      this.FUpdateCount += 1;
    };
    this.EndUpdate = function () {
      if (this.FUpdateCount > 0) {
        this.FUpdateCount -= 1;
        if (this.FUpdateCount === 0) {
          this.Changed();
        };
      };
    };
    var $r = this.$rtti;
    $r.addProperty("Color",2,rtl.longint,"FColor","SetColor");
    $r.addProperty("Style",2,$mod.$rtti["TPenStyle"],"FStyle","SetStyle");
    $r.addProperty("Width",2,rtl.nativeint,"FWidth","SetWidth");
    $r.addProperty("OnChange",0,pas.Classes.$rtti["TNotifyEvent"],"FOnChange","FOnChange");
  });
  rtl.createClass(this,"TBrush",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FColor = 0;
      this.FStyle = 0;
      this.FUpdateCount = 0;
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetColor = function (AValue) {
      if (this.FColor !== AValue) {
        this.FColor = AValue;
        this.Changed();
      };
    };
    this.SetStyle = function (AValue) {
      if (this.FStyle === AValue) {
        this.FStyle = AValue;
        this.Changed();
      };
    };
    this.Changed = function () {
      if ((this.FUpdateCount === 0) && (this.FOnChange != null)) {
        this.FOnChange(this);
      };
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FColor = 16777215;
      this.FStyle = $mod.TBrushStyle.bsSolid;
      this.FUpdateCount = 0;
      return this;
    };
    this.Assign = function (Source) {
      var VBrush = null;
      if ((Source != null) && $mod.TBrush.isPrototypeOf(Source)) {
        this.BeginUpdate();
        try {
          VBrush = Source;
          this.FColor = VBrush.FColor;
          this.FStyle = VBrush.FStyle;
        } finally {
          this.EndUpdate();
        };
      } else {
        pas.Classes.TPersistent.Assign.call(this,Source);
      };
    };
    this.BeginUpdate = function () {
      this.FUpdateCount += 1;
    };
    this.EndUpdate = function () {
      if (this.FUpdateCount > 0) {
        this.FUpdateCount -= 1;
        if (this.FUpdateCount === 0) {
          this.Changed();
        };
      };
    };
    var $r = this.$rtti;
    $r.addProperty("Color",2,rtl.longint,"FColor","SetColor");
    $r.addProperty("Style",2,$mod.$rtti["TBrushStyle"],"FStyle","SetStyle");
    $r.addProperty("OnChange",0,pas.Classes.$rtti["TNotifyEvent"],"FOnChange","FOnChange");
  });
  rtl.createClass(this,"TPicture",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FData = "";
      this.FUpdateCount = 0;
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetData = function (AValue) {
      if (this.FData !== AValue) {
        this.FData = AValue;
        this.Changed();
      };
    };
    this.Changed = function () {
      if ((this.FUpdateCount === 0) && (this.FOnChange != null)) {
        this.FOnChange(this);
      };
    };
    this.Create$1 = function () {
      this.FData = "";
      this.FUpdateCount = 0;
      this.FOnChange = null;
      return this;
    };
    this.Assign = function (Source) {
      var VPicture = null;
      if ((Source != null) && $mod.TPicture.isPrototypeOf(Source)) {
        this.BeginUpdate();
        try {
          VPicture = Source;
          this.FData = VPicture.FData;
        } finally {
          this.EndUpdate();
        };
      } else {
        pas.Classes.TPersistent.Assign.call(this,Source);
      };
    };
    this.BeginUpdate = function () {
      this.FUpdateCount += 1;
    };
    this.EndUpdate = function () {
      if (this.FUpdateCount > 0) {
        this.FUpdateCount -= 1;
        if (this.FUpdateCount === 0) {
          this.Changed();
        };
      };
    };
    var $r = this.$rtti;
    $r.addProperty("Data",2,rtl.string,"FData","SetData");
    $r.addProperty("OnChange",0,pas.Classes.$rtti["TNotifyEvent"],"FOnChange","FOnChange");
  });
  rtl.createClass(this,"TCanvas",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FBrush = null;
      this.FFont = null;
      this.FPen = null;
      this.FUpdateCount = 0;
      this.FOnChange = null;
      this.FCanvasElement = null;
      this.FContextElement = null;
    };
    this.$final = function () {
      this.FBrush = undefined;
      this.FFont = undefined;
      this.FPen = undefined;
      this.FOnChange = undefined;
      this.FCanvasElement = undefined;
      this.FContextElement = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.PrepareStyle = function () {
      this.FContextElement.fillStyle = $mod.JSColor(this.FBrush.FColor);
      this.FContextElement.lineWidth = this.FPen.FWidth;
      this.FContextElement.strokeStyle = $mod.JSColor(this.FPen.FColor);
      var $tmp = this.FPen.FStyle;
      if ($tmp === $mod.TPenStyle.psDash) {
        this.FContextElement.setLineDash([8,2])}
       else if ($tmp === $mod.TPenStyle.psDot) {
        this.FContextElement.setLineDash([1,2])}
       else {
        this.FContextElement.setLineDash([]);
      };
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FCanvasElement = document.createElement("canvas");
      this.FContextElement = this.FCanvasElement.getContext("2d");
      this.FBrush = $mod.TBrush.$create("Create$1");
      this.FFont = $mod.TFont.$create("Create$1");
      this.FPen = $mod.TPen.$create("Create$1");
      this.FUpdateCount = 0;
      return this;
    };
    this.Destroy = function () {
      this.FBrush.$destroy("Destroy");
      this.FFont.$destroy("Destroy");
      this.FPen.$destroy("Destroy");
      this.FBrush = null;
      this.FFont = null;
      this.FPen = null;
      pas.System.TObject.Destroy.call(this);
    };
    this.Clear = function () {
      this.FContextElement.clearRect(0,0,this.FCanvasElement.width,this.FCanvasElement.height);
    };
    this.FillRect$1 = function (ALeft, ATop, AWidth, AHeight) {
      this.PrepareStyle();
      if (this.FBrush.FStyle !== $mod.TBrushStyle.bsClear) {
        this.FContextElement.fillRect(ALeft,ATop,AWidth,AHeight);
      };
    };
    this.LineTo = function (X, Y) {
      this.PrepareStyle();
      this.FContextElement.lineTo(X,Y);
      if (this.FPen.FStyle !== $mod.TPenStyle.psClear) {
        this.FContextElement.stroke();
      };
    };
    this.MoveTo = function (X, Y) {
      this.FContextElement.beginPath();
      this.FContextElement.moveTo(X,Y);
    };
    this.Rectangle$1 = function (ALeft, ATop, AWidth, AHeight) {
      this.FContextElement.beginPath();
      this.PrepareStyle();
      this.FContextElement.rect(ALeft,ATop,AWidth,AHeight);
      if (this.FBrush.FStyle !== $mod.TBrushStyle.bsClear) {
        this.FContextElement.fill();
      };
      if (this.FPen.FStyle !== $mod.TPenStyle.psClear) {
        this.FContextElement.stroke();
      };
    };
    var $r = this.$rtti;
    $r.addProperty("Brush",0,$mod.$rtti["TBrush"],"FBrush","FBrush");
    $r.addProperty("Font",0,$mod.$rtti["TFont"],"FFont","FFont");
    $r.addProperty("Pen",0,$mod.$rtti["TPen"],"FPen","FPen");
    $r.addProperty("OnChange",0,pas.Classes.$rtti["TNotifyEvent"],"FOnChange","FOnChange");
  });
  this.clBlack = 0x0;
  this.clGreen = 0x8000;
  this.clGray = 0x808080;
  this.clSilver = 0xC0C0C0;
  this.clBlue = 0xFF0000;
  this.clWhite = 0xFFFFFF;
  this.clNone = 0x1FFFFFFF;
  this.clDefault = 0x20000000;
  this.clBase = 0x80000000;
  this.clScrollBar = -2147483648 + 0;
  this.clBackground = -2147483648 + 1;
  this.clActiveCaption = -2147483648 + 2;
  this.clInactiveCaption = -2147483648 + 3;
  this.clMenu = -2147483648 + 4;
  this.clWindow = -2147483648 + 5;
  this.clWindowFrame = -2147483648 + 6;
  this.clMenuText = -2147483648 + 7;
  this.clWindowText = -2147483648 + 8;
  this.clCaptionText = -2147483648 + 9;
  this.clActiveBorder = -2147483648 + 10;
  this.clInactiveBorder = -2147483648 + 11;
  this.clAppWorkspace = -2147483648 + 12;
  this.clHighlight = -2147483648 + 13;
  this.clHighlightText = -2147483648 + 14;
  this.clBtnFace = -2147483648 + 15;
  this.clBtnShadow = -2147483648 + 16;
  this.clGrayText = -2147483648 + 17;
  this.clBtnText = -2147483648 + 18;
  this.clInactiveCaptionText = -2147483648 + 19;
  this.clBtnHighlight = -2147483648 + 20;
  this.cl3DDkShadow = -2147483648 + 21;
  this.cl3DLight = -2147483648 + 22;
  this.clInfoText = -2147483648 + 23;
  this.clInfoBk = -2147483648 + 24;
  this.ffSans = '"Arial Narrow", Arial, "Helvetica Condensed", Helvetica, sans-serif';
  this.JSColor = function (AColor) {
    var Result = "";
    var R = 0;
    var G = 0;
    var B = 0;
    var $tmp = AColor;
    if ($tmp === -2147483648) {
      Result = "Scrollbar"}
     else if ($tmp === -2147483647) {
      Result = "Background"}
     else if ($tmp === -2147483646) {
      Result = "ActiveCaption"}
     else if ($tmp === -2147483645) {
      Result = "InactiveCaption"}
     else if ($tmp === -2147483644) {
      Result = "Menu"}
     else if ($tmp === -2147483643) {
      Result = "Window"}
     else if ($tmp === -2147483642) {
      Result = "WindowFrame"}
     else if ($tmp === -2147483641) {
      Result = "MenuText"}
     else if ($tmp === -2147483640) {
      Result = "WindowText"}
     else if ($tmp === -2147483639) {
      Result = "CaptionText"}
     else if ($tmp === -2147483638) {
      Result = "ActiveBorder"}
     else if ($tmp === -2147483637) {
      Result = "InactiveBorder"}
     else if ($tmp === -2147483636) {
      Result = "AppWorkspace"}
     else if ($tmp === -2147483635) {
      Result = "Highlight"}
     else if ($tmp === -2147483634) {
      Result = "HighlightText"}
     else if ($tmp === -2147483633) {
      Result = "ButtonFace"}
     else if ($tmp === -2147483632) {
      Result = "ButtonShadow"}
     else if ($tmp === -2147483631) {
      Result = "GrayText"}
     else if ($tmp === -2147483630) {
      Result = "ButtonText"}
     else if ($tmp === -2147483629) {
      Result = "InactiveCaptionText"}
     else if ($tmp === -2147483628) {
      Result = "ButtonHighlight"}
     else if ($tmp === -2147483627) {
      Result = "ThreeDDarkShadow"}
     else if ($tmp === -2147483626) {
      Result = "ThreeDHighlight"}
     else if ($tmp === -2147483625) {
      Result = "InfoText"}
     else if ($tmp === -2147483624) {
      Result = "InfoBackground"}
     else {
      R = AColor & 0xFF;
      G = (AColor >>> 8) & 0xFF;
      B = (AColor >>> 16) & 0xFF;
      Result = "#" + pas.SysUtils.IntToHex(R,2) + pas.SysUtils.IntToHex(G,2) + pas.SysUtils.IntToHex(B,2);
    };
    return Result;
  };
  this.JSMeasureText = function (AText, AFontName, AFontSize, AFixedWidth) {
    var Result = pas.Types.TSize.$new();
    var VDiv = null;
    Result.$assign(pas.Types.Size(0,0));
    if (AText !== "") {
      VDiv = document.createElement("div");
      VDiv.style.setProperty("font-family",AFontName);
      VDiv.style.setProperty("font-size",pas.SysUtils.IntToStr(AFontSize) + "px");
      VDiv.style.setProperty("overflow","scroll");
      if (AFixedWidth === 0) {
        VDiv.style.setProperty("display","inline-block");
        VDiv.style.setProperty("white-space","nowrap");
      } else {
        VDiv.style.setProperty("max-width",pas.SysUtils.IntToStr(AFixedWidth) + "px");
        VDiv.style.setProperty("width",pas.SysUtils.IntToStr(AFixedWidth) + "px");
      };
      VDiv.innerHTML = AText;
      document.body.appendChild(VDiv);
      Result.$assign(pas.Types.Size(VDiv.scrollWidth,VDiv.scrollHeight));
      document.body.removeChild(VDiv);
    };
    return Result;
  };
  $mod.$init = function () {
  };
});
rtl.module("LCLStrConsts",["System"],function () {
  "use strict";
  var $mod = this;
  $mod.$resourcestrings = {rsErrUncaughtException: {org: "Uncaught exception of type %s: \n\n%s"}, rsErrUncaughtObject: {org: "Uncaught exception of type %s."}, rsNoTimers: {org: "No more timers available."}};
});
rtl.module("p2jsres",["System","Types"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.TResourceSource = {"0": "rsJS", rsJS: 0, "1": "rsHTML", rsHTML: 1};
  this.SetResourceSource = function (aSource) {
    var Result = 0;
    Result = $impl.gMode;
    $impl.gMode = aSource;
    return Result;
  };
  $mod.$implcode = function () {
    $impl.gMode = 0;
  };
},["SysUtils","JS","Web"]);
rtl.module("Forms",["System","Classes","SysUtils","Types","JS","Web","Graphics","Controls"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.TFormType = {"0": "ftModalForm", ftModalForm: 0, "1": "ftWindow", ftWindow: 1, "2": "ftTop", ftTop: 2};
  this.TCloseAction = {"0": "caNone", caNone: 0, "1": "caHide", caHide: 1, "2": "caFree", caFree: 2};
  this.$rtti.$Enum("TCloseAction",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TCloseAction});
  this.$rtti.$MethodVar("TCloseEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["CloseAction",this.$rtti["TCloseAction"],1]]), methodkind: 0});
  this.$rtti.$MethodVar("TCloseQueryEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["CanClose",rtl.boolean,1]]), methodkind: 0});
  this.$rtti.$Int("TModalResult",{minvalue: -2147483648, maxvalue: 2147483647, ordtype: 4});
  rtl.createClass(this,"TCustomForm",pas.Controls.TCustomControl,function () {
    this.$init = function () {
      pas.Controls.TCustomControl.$init.call(this);
      this.FActiveControl = null;
      this.FAlphaBlend = false;
      this.FAlphaBlendValue = 0;
      this.FChildForm = null;
      this.FDesignTimePPI = 0;
      this.FFormType = 0;
      this.FKeyPreview = false;
      this.FModalResult = 0;
      this.FModalResultProc = null;
      this.FOverlay = null;
      this.FOnActivate = null;
      this.FOnClose = null;
      this.FOnCloseQuery = null;
      this.FOnCreate = null;
      this.FOnDeactivate = null;
      this.FOnDestroy = null;
      this.FOnHide = null;
      this.FOnResize$1 = null;
      this.FOnScroll$1 = null;
      this.FOnShow = null;
    };
    this.$final = function () {
      this.FActiveControl = undefined;
      this.FChildForm = undefined;
      this.FModalResultProc = undefined;
      this.FOverlay = undefined;
      this.FOnActivate = undefined;
      this.FOnClose = undefined;
      this.FOnCloseQuery = undefined;
      this.FOnCreate = undefined;
      this.FOnDeactivate = undefined;
      this.FOnDestroy = undefined;
      this.FOnHide = undefined;
      this.FOnResize$1 = undefined;
      this.FOnScroll$1 = undefined;
      this.FOnShow = undefined;
      pas.Controls.TCustomControl.$final.call(this);
    };
    this.SetActiveControl = function (AValue) {
      if (this.FActiveControl !== AValue) {
        this.FActiveControl = AValue;
      };
    };
    this.SetAlphaBlend = function (AValue) {
      if (this.FAlphaBlend !== AValue) {
        this.FAlphaBlend = AValue;
        this.Changed();
      };
    };
    this.SetAlphaBlendValue = function (AValue) {
      if (this.FAlphaBlendValue !== AValue) {
        this.FAlphaBlendValue = AValue;
        this.Changed();
      };
    };
    this.SetModalResult = function (AValue) {
      if (this.FModalResult !== AValue) {
        this.FModalResult = AValue;
        if ((this.FModalResult !== 0) && (this.FModalResultProc != null)) {
          this.Close();
        };
      };
    };
    this.Activate = function () {
      if (this.FOnActivate != null) {
        this.FOnActivate(this);
      };
    };
    this.Deactivate = function () {
      if (this.FOnDeactivate != null) {
        this.FOnDeactivate(this);
      };
    };
    this.DoClose = function (CloseAction) {
      if (this.FOnDeactivate != null) {
        this.FOnDeactivate(this);
      };
    };
    this.DoCreate = function () {
      if (this.FOnCreate != null) {
        this.FOnCreate(this);
      };
    };
    this.DoDestroy = function () {
      if (this.FOnDestroy != null) {
        this.FOnDestroy(this);
      };
    };
    this.DoHide = function () {
      if (this.FOnHide != null) {
        this.FOnHide(this);
      };
    };
    this.DoResize = function () {
      pas.Controls.TControl.DoResize.call(this);
      if (this.FOnResize$1 != null) {
        this.FOnResize$1(this);
      };
    };
    this.DoShow = function () {
      if (this.FOnShow != null) {
        this.FOnShow(this);
      };
    };
    this.HandleEnter = function (AEvent) {
      var Result = false;
      var VControl = null;
      Result = pas.Controls.TWinControl.HandleEnter.call(this,AEvent);
      if ((this.FChildForm != null) && (this.FChildForm.FFormType === $mod.TFormType.ftModalForm)) {
        this.FChildForm.Show();
      } else {
        if (this.FActiveControl != null) {
          VControl = this.FActiveControl;
        } else {
          VControl = this.FindFocusControl(null,pas.Controls.TFocusSearchDirection.fsdFirst);
        };
        this.FocusControl(VControl);
        this.Activate();
      };
      return Result;
    };
    this.HandleExit = function (AEvent) {
      var Result = false;
      Result = pas.Controls.TWinControl.HandleExit.call(this,AEvent);
      this.Deactivate();
      return Result;
    };
    this.Changed = function () {
      pas.Controls.TControl.Changed.call(this);
      if (!this.IsUpdating() && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) {
        var $with = this.FHandleElement;
        $with.style.setProperty("outline","none");
        if (this.FAlphaBlend) {
          $with.style.setProperty("opacity",pas.SysUtils.FloatToStr(rtl.trunc(this.FAlphaBlendValue / 255)));
        } else {
          $with.style.removeProperty("opacity");
        };
        $with.style.setProperty("overflow","auto");
      };
    };
    this.CreateHandleElement = function () {
      var Result = null;
      Result = document.createElement("div");
      return Result;
    };
    this.GetControlClassDefaultSize = function () {
      var Result = pas.Types.TSize.$new();
      Result.cx = 320;
      Result.cy = 240;
      return Result;
    };
    this.Create$1 = function (AOwner) {
      this.CreateNew(AOwner,1);
      return this;
    };
    this.CreateNew = function (AOwner, Num) {
      pas.Controls.TControl.Create$1.call(this,AOwner);
      this.FActiveControl = null;
      this.FAlphaBlend = false;
      this.FAlphaBlendValue = 255;
      this.FDesignTimePPI = 96;
      this.FChildForm = null;
      this.FFormType = $mod.TFormType.ftWindow;
      this.FKeyPreview = false;
      this.FModalResult = 0;
      this.FModalResultProc = null;
      this.FOverlay = null;
      this.BeginUpdate();
      try {
        this.SetColor(16777215);
        this.SetParentFont(false);
        this.SetParentShowHint(false);
        this.SetVisible(false);
        var $with = this.$class.GetControlClassDefaultSize();
        this.SetBounds(0,0,$with.cx,$with.cy);
      } finally {
        this.EndUpdate();
      };
      return this;
    };
    this.Destroy = function () {
      this.FActiveControl = null;
      this.FChildForm = null;
      pas.Controls.TCustomControl.Destroy.call(this);
    };
    this.AfterConstruction = function () {
      pas.System.TObject.AfterConstruction.call(this);
      $mod.Application().UpdateMainForm(this);
      $mod.Application().RegisterModule(this);
      this.Loaded();
      this.DoCreate();
    };
    this.BeforeDestruction = function () {
      pas.Classes.TComponent.BeforeDestruction.call(this);
      $mod.Application().UnRegisterModule(this);
      this.DoDestroy();
    };
    this.Close = function () {
      var VAction = 0;
      var VIndex = 0;
      var VOwnerForm = null;
      var VModule = null;
      if (this.CloseQuery()) {
        VAction = $mod.TCloseAction.caHide;
        this.DoClose({get: function () {
            return VAction;
          }, set: function (v) {
            VAction = v;
          }});
        if (VAction !== $mod.TCloseAction.caNone) {
          if ($mod.Application().FMainForm === this) {
            $mod.Application().Terminate();
          } else {
            this.Hide();
            if (this.FFormType === $mod.TFormType.ftModalForm) {
              if ((this.FOwner != null) && $mod.TCustomForm.isPrototypeOf(this.FOwner)) {
                VOwnerForm = this.FOwner;
                VOwnerForm.FChildForm = null;
                if (VOwnerForm.FOverlay != null) {
                  VOwnerForm.FOverlay.$destroy("Destroy");
                  VOwnerForm.FOverlay = null;
                };
                VOwnerForm.Show();
              };
              if (this.FModalResultProc != null) {
                this.FModalResultProc(this,this.FModalResult);
              };
            } else {
              for (var $l = $mod.Application().GetModuleCount() - 1; $l >= 0; $l--) {
                VIndex = $l;
                VModule = $mod.Application().GetModule(VIndex);
                if ((VModule != null) && VModule.FVisible && (VModule !== this) && VModule.$class.InheritsFrom($mod.TCustomForm)) {
                  VModule.Show();
                  return;
                };
              };
              if ($mod.Application().FMainForm != null) {
                $mod.Application().FMainForm.Show();
              };
            };
          };
        };
      };
    };
    this.CloseQuery = function () {
      var Result = false;
      Result = true;
      if (this.FOnCloseQuery != null) {
        this.FOnCloseQuery(this,{get: function () {
            return Result;
          }, set: function (v) {
            Result = v;
          }});
      };
      return Result;
    };
    this.FocusControl = function (AControl) {
      if ((AControl != null) && AControl.CanSetFocus()) {
        AControl.SetFocus();
      };
    };
    this.Hide = function () {
      this.SetVisible(false);
      this.DoHide();
    };
    this.Loaded = function () {
      pas.Controls.TControl.Loaded.call(this);
    };
    this.Resize = function () {
      var VHeight = 0;
      var VLeft = 0;
      var VTop = 0;
      var VWidth = 0;
      var VWindowHeight = 0;
      var VWindowWidth = 0;
      VWindowWidth = window.innerWidth;
      VWindowHeight = window.innerHeight;
      var $tmp = this.FFormType;
      if ($tmp === $mod.TFormType.ftModalForm) {
        VWidth = this.FWidth;
        VHeight = this.FHeight;
        VWindowWidth = window.innerWidth;
        VWindowHeight = window.innerHeight;
        VLeft = rtl.trunc((VWindowWidth - VWidth) / 2);
        VTop = rtl.trunc((VWindowHeight - VHeight) / 2);
        this.SetBounds(VLeft,VTop,VWidth,VHeight);
      } else if ($tmp === $mod.TFormType.ftWindow) {
        this.SetBounds(0,0,VWindowWidth,VWindowHeight);
      } else if ($tmp === $mod.TFormType.ftTop) {
        this.SetBounds(0,this.FTop,this.FWidth,this.FHeight);
      };
      this.DoResize();
    };
    this.Show = function () {
      $mod.Application().FActiveForm = this;
      $mod.Application().SetTitle(this.GetText());
      this.BeginUpdate();
      try {
        this.SetVisible(true);
        this.Resize();
      } finally {
        this.EndUpdate();
      };
      this.BringToFront();
      this.SetFocus();
      this.DoShow();
    };
    this.ShowModal = function (AModalResultProc) {
      var VForm = null;
      if (!(this.FOwner != null)) {
        throw new Error("Owner not found.");
      };
      if (!$mod.TCustomForm.isPrototypeOf(this.FOwner)) {
        throw new Error("Invalid owner.");
      };
      VForm = this.FOwner;
      if (VForm.FChildForm != null) {
        throw new Error("Modal form already exists.");
      };
      VForm.FChildForm = this;
      VForm.FOverlay = $impl.TOverlay.$create("Create$1",[VForm]);
      this.FFormType = $mod.TFormType.ftModalForm;
      this.FModalResult = 0;
      if (AModalResultProc != null) {
        this.FModalResultProc = AModalResultProc;
      } else {
        this.FModalResultProc = $impl.DefaultModalProc;
      };
      this.Show();
    };
  });
  rtl.createClass(this,"TApplication",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FModules = null;
      this.FActiveForm = null;
      this.FMainForm = null;
      this.FStopOnException = false;
      this.FTerminated = false;
      this.FTitle = "";
      this.FOnResize = null;
      this.FOnUnload = null;
    };
    this.$final = function () {
      this.FModules = undefined;
      this.FActiveForm = undefined;
      this.FMainForm = undefined;
      this.FOnResize = undefined;
      this.FOnUnload = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.GetApplicatioName = function () {
      var Result = "";
      Result = window.location.pathname;
      return Result;
    };
    this.GetModule = function (AIndex) {
      var Result = null;
      Result = rtl.getObject(this.FModules[AIndex]);
      return Result;
    };
    this.GetModuleCount = function () {
      var Result = 0;
      Result = this.FModules.length;
      return Result;
    };
    this.SetTitle = function (AValue) {
      if (this.FTitle !== AValue) {
        this.FTitle = AValue;
        document.title = this.FTitle;
      };
    };
    this.DoResize = function () {
      if (this.FOnResize != null) {
        this.FOnResize(this);
      };
    };
    this.DoUnload = function () {
      if (this.FOnUnload != null) {
        this.FOnUnload(this);
      };
    };
    this.LoadIcon = function () {
      var $with = document.head.appendChild(document.createElement("link"));
      $with.setAttribute("rel","icon");
      $with.setAttribute("type","image\/icon");
      $with.setAttribute("href",this.GetApplicatioName().replace("html","ico"));
    };
    this.RegisterHandleEvents = function () {
      window.addEventListener("error",rtl.createCallback(this,"HandleError"));
      window.addEventListener("resize",rtl.createSafeCallback(this,"HandleResize"));
      window.addEventListener("unload",rtl.createCallback(this,"HandleUnload"));
    };
    this.UnRegisterHandleEvents = function () {
      window.removeEventListener("error",rtl.createCallback(this,"HandleError"));
      window.removeEventListener("resize",rtl.createSafeCallback(this,"HandleResize"));
      window.removeEventListener("unload",rtl.createCallback(this,"HandleUnload"));
    };
    var CLE = pas.System.LineEnding;
    var CError = "Error Message: %s " + CLE + "Line Nro: %d " + CLE + "Column Nro: %d " + CLE;
    this.HandleError = function (AEvent) {
      var Result = false;
      if (AEvent.message.toLowerCase().indexOf("script error",0) > -1) {
        window.alert("Script Error: See Browser Console for Detail");
      } else {
        window.alert(pas.SysUtils.Format(CError,pas.System.VarRecs(18,AEvent.message,0,AEvent.lineno,0,AEvent.colno)));
      };
      if (this.FStopOnException) {
        this.Terminate();
      };
      AEvent.stopPropagation();
      Result = false;
      return Result;
    };
    this.HandleResize = function (AEvent) {
      var Result = false;
      var VControl = null;
      var VIndex = 0;
      AEvent.stopPropagation();
      this.DoResize();
      Result = true;
      for (var $l = 0, $end = this.FModules.length - 1; $l <= $end; $l++) {
        VIndex = $l;
        VControl = rtl.getObject(this.FModules[VIndex]);
        if ((VControl != null) && VControl.FVisible && VControl.$class.InheritsFrom($mod.TCustomForm)) {
          VControl.Resize();
        };
      };
      return Result;
    };
    this.HandleUnload = function (AEvent) {
      var Result = false;
      AEvent.stopPropagation();
      Result = true;
      try {
        this.DoUnload();
      } finally {
        this.Terminate();
      };
      return Result;
    };
    this.HandleException = function (AException) {
      if (pas.SysUtils.Exception.isPrototypeOf(AException)) {
        window.alert(pas.SysUtils.Format(rtl.getResStr(pas.LCLStrConsts,"rsErrUncaughtException"),pas.System.VarRecs(18,AException.$classname,18,AException.fMessage)));
      } else {
        window.alert(pas.SysUtils.Format(rtl.getResStr(pas.LCLStrConsts,"rsErrUncaughtObject"),pas.System.VarRecs(18,AException.$classname)));
      };
      if (this.FStopOnException) this.Terminate();
    };
    this.Create$1 = function (AOwner) {
      pas.Classes.TComponent.Create$1.call(this,AOwner);
      pas.p2jsres.SetResourceSource(pas.p2jsres.TResourceSource.rsJS);
      pas.SysUtils.SetOnUnCaughtExceptionHandler($impl.DoUncaughtPascalException);
      rtl.showUncaughtExceptions=true;
      this.FModules = new Array();
      this.FMainForm = null;
      this.FStopOnException = true;
      this.FTerminated = false;
      this.FTitle = "";
      return this;
    };
    this.Destroy = function () {
      this.FModules.length = 0;
      pas.Classes.TComponent.Destroy.call(this);
    };
    this.CreateForm = function (AInstanceClass, AReference) {
      try {
        AReference.set(AInstanceClass.$create("Create$1",[this]));
      } catch ($e) {
        AReference.set(null);
        throw $e;
      };
    };
    this.Initialize = function () {
    };
    this.Run = function () {
      this.RegisterHandleEvents();
      this.LoadIcon();
      if (this.FMainForm != null) {
        this.FMainForm.Show();
      };
    };
    this.Terminate = function () {
      var VModule = null;
      var VIndex = 0;
      if (!this.FTerminated) {
        this.UnRegisterHandleEvents();
        this.FTerminated = true;
        for (var $l = this.FModules.length - 1; $l >= 0; $l--) {
          VIndex = $l;
          VModule = rtl.getObject(this.FModules[VIndex]);
          if (VModule != null) {
            VModule.$destroy("Destroy");
            VModule = null;
          };
        };
      };
    };
    this.UpdateMainForm = function (AForm) {
      if (!(this.FMainForm != null)) {
        this.FMainForm = AForm;
        this.FActiveForm = AForm;
      };
    };
    this.RegisterModule = function (AModule) {
      if (AModule != null) {
        if (this.FModules.indexOf(AModule) === -1) {
          this.FModules.push(AModule);
          if (!document.body.contains(AModule.FHandleElement)) {
            document.body.appendChild(AModule.FHandleElement);
          };
        };
      };
    };
    this.UnRegisterModule = function (AModule) {
      var VIndex = 0;
      if (AModule != null) {
        VIndex = this.FModules.indexOf(AModule);
        if (VIndex >= 0) {
          this.FModules.splice(VIndex,1);
          if (document.body.contains(AModule.FHandleElement)) {
            document.body.removeChild(AModule.FHandleElement);
          };
        };
      };
    };
  });
  rtl.createClass(this,"TForm",this.TCustomForm,function () {
    var $r = this.$rtti;
    $r.addProperty("ActiveControl",2,pas.Controls.$rtti["TWinControl"],"FActiveControl","SetActiveControl");
    $r.addProperty("Align",2,pas.Controls.$rtti["TAlign"],"FAlign","SetAlign");
    $r.addProperty("AlphaBlend",2,rtl.boolean,"FAlphaBlend","SetAlphaBlend");
    $r.addProperty("AlphaBlendValue",2,rtl.byte,"FAlphaBlendValue","SetAlphaBlendValue");
    $r.addProperty("Caption",3,pas.Controls.$rtti["TCaption"],"GetText","SetText");
    $r.addProperty("ClientHeight",3,rtl.nativeint,"GetClientHeight","SetClientHeight");
    $r.addProperty("ClientWidth",3,rtl.nativeint,"GetClientWidth","SetClientWidth");
    $r.addProperty("Color",2,rtl.longint,"FColor","SetColor");
    $r.addProperty("DesignTimePPI",0,rtl.longint,"FDesignTimePPI","FDesignTimePPI");
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled");
    $r.addProperty("Font",2,pas.Graphics.$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("HandleClass",2,rtl.string,"FHandleClass","SetHandleClass");
    $r.addProperty("HandleId",2,rtl.string,"FHandleId","SetHandleId");
    $r.addProperty("KeyPreview",0,rtl.boolean,"FKeyPreview","FKeyPreview");
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible");
    $r.addProperty("OnActivate",0,pas.Classes.$rtti["TNotifyEvent"],"FOnActivate","FOnActivate");
    $r.addProperty("OnClick",0,pas.Classes.$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnClose",0,$mod.$rtti["TCloseEvent"],"FOnClose","FOnClose");
    $r.addProperty("OnCloseQuery",0,$mod.$rtti["TCloseQueryEvent"],"FOnCloseQuery","FOnCloseQuery");
    $r.addProperty("OnCreate",0,pas.Classes.$rtti["TNotifyEvent"],"FOnCreate","FOnCreate");
    $r.addProperty("OnDblClick",0,pas.Classes.$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnDeactivate",0,pas.Classes.$rtti["TNotifyEvent"],"FOnDeactivate","FOnDeactivate");
    $r.addProperty("OnDestroy",0,pas.Classes.$rtti["TNotifyEvent"],"FOnDestroy","FOnDestroy");
    $r.addProperty("OnHide",0,pas.Classes.$rtti["TNotifyEvent"],"FOnHide","FOnHide");
    $r.addProperty("OnKeyDown",0,pas.Controls.$rtti["TKeyEvent"],"FOnKeyDown","FOnKeyDown");
    $r.addProperty("OnKeyPress",0,pas.Controls.$rtti["TKeyPressEvent"],"FOnKeyPress","FOnKeyPress");
    $r.addProperty("OnKeyUp",0,pas.Controls.$rtti["TKeyEvent"],"FOnKeyUp","FOnKeyUp");
    $r.addProperty("OnMouseDown",0,pas.Controls.$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseEnter",0,pas.Classes.$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
    $r.addProperty("OnMouseLeave",0,pas.Classes.$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnMouseMove",0,pas.Controls.$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseUp",0,pas.Controls.$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseWheel",0,pas.Controls.$rtti["TMouseWheelEvent"],"FOnMouseWheel","FOnMouseWheel");
    $r.addProperty("OnResize",0,pas.Classes.$rtti["TNotifyEvent"],"FOnResize$1","FOnResize$1");
    $r.addProperty("OnScroll",0,pas.Classes.$rtti["TNotifyEvent"],"FOnScroll$1","FOnScroll$1");
    $r.addProperty("OnShow",0,pas.Classes.$rtti["TNotifyEvent"],"FOnShow","FOnShow");
  });
  this.Application = function () {
    var Result = null;
    if (!($impl.VAppInstance != null)) {
      $impl.VAppInstance = $mod.TApplication.$create("Create$1",[null]);
    };
    Result = $impl.VAppInstance;
    return Result;
  };
  $mod.$implcode = function () {
    $impl.DefaultModalProc = function (Sender, ModalResult) {
      if (Sender != null) {
        Sender.$destroy("Destroy");
        Sender = null;
      };
    };
    $impl.VAppInstance = null;
    rtl.createClass($impl,"TOverlay",pas.System.TObject,function () {
      this.$init = function () {
        pas.System.TObject.$init.call(this);
        this.FForm = null;
        this.FHandleElement = null;
      };
      this.$final = function () {
        this.FForm = undefined;
        this.FHandleElement = undefined;
        pas.System.TObject.$final.call(this);
      };
      this.Create$1 = function (AForm) {
        this.FForm = AForm;
        if (this.FForm != null) {
          this.FHandleElement = document.createElement("div");
          var $with = this.FHandleElement;
          $with.setAttribute("class","TOverlay");
          $with.style.setProperty("left","0px");
          $with.style.setProperty("top","0px");
          $with.style.setProperty("height","100%");
          $with.style.setProperty("width","100%");
          $with.style.setProperty("background","rgba(0, 0, 0, 0.6)");
          $with.style.setProperty("position","absolute");
          $with.style.setProperty("overflow","hidden");
          document.body.appendChild(this.FHandleElement);
        };
        return this;
      };
      this.Destroy = function () {
        document.body.removeChild(this.FHandleElement);
        if (this.FForm != null) ;
        pas.System.TObject.Destroy.call(this);
      };
    });
    $impl.DoUncaughtPascalException = function (E) {
      $mod.Application().HandleException(E);
    };
  };
},["LCLStrConsts","p2jsres"]);
rtl.module("Controls",["System","Classes","SysUtils","Types","JS","Web","Graphics"],function () {
  "use strict";
  var $mod = this;
  this.mrNone = 0;
  this.mrOk = 0 + 1;
  this.mrCancel = 0 + 2;
  this.mrAbort = 0 + 3;
  this.mrRetry = 0 + 4;
  this.mrIgnore = 0 + 5;
  this.mrYes = 0 + 6;
  this.mrNo = 0 + 7;
  this.mrAll = 0 + 8;
  this.mrNoToAll = 0 + 9;
  this.mrYesToAll = 0 + 10;
  this.mrClose = 0 + 11;
  this.crDefault = 0;
  this.crNone = -1;
  this.crCross = -3;
  this.crIBeam = -4;
  this.crSize = -22;
  this.crSizeNESW = -6;
  this.crSizeNS = -7;
  this.crSizeNWSE = -8;
  this.crSizeWE = -9;
  this.crSizeNW = -23;
  this.crSizeN = -24;
  this.crSizeNE = -25;
  this.crSizeW = -26;
  this.crSizeE = -27;
  this.crSizeSW = -28;
  this.crSizeS = -29;
  this.crSizeSE = -30;
  this.crHourGlass = -11;
  this.crNoDrop = -13;
  this.crHSplit = -14;
  this.crVSplit = -15;
  this.crSQLWait = -17;
  this.crNo = -18;
  this.crAppStart = -19;
  this.crHelp = -20;
  this.crHandPoint = -21;
  this.$rtti.$Class("TWinControl");
  this.$rtti.$Class("TControl");
  this.TAlign = {"0": "alNone", alNone: 0, "1": "alTop", alTop: 1, "2": "alBottom", alBottom: 2, "3": "alLeft", alLeft: 3, "4": "alRight", alRight: 4, "5": "alClient", alClient: 5, "6": "alCustom", alCustom: 6};
  this.$rtti.$Enum("TAlign",{minvalue: 0, maxvalue: 6, ordtype: 1, enumtype: this.TAlign});
  this.TAnchorKind = {"0": "akTop", akTop: 0, "1": "akLeft", akLeft: 1, "2": "akRight", akRight: 2, "3": "akBottom", akBottom: 3};
  this.$rtti.$Enum("TAnchorKind",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TAnchorKind});
  this.$rtti.$Set("TAnchors",{comptype: this.$rtti["TAnchorKind"]});
  this.TBevelCut = {"0": "bvNone", bvNone: 0, "1": "bvLowered", bvLowered: 1, "2": "bvRaised", bvRaised: 2, "3": "bvSpace", bvSpace: 3};
  this.$rtti.$Enum("TBevelCut",{minvalue: 0, maxvalue: 3, ordtype: 1, enumtype: this.TBevelCut});
  this.TFormBorderStyle = {"0": "bsNone", bsNone: 0, "1": "bsSingle", bsSingle: 1, "2": "bsSizeable", bsSizeable: 2, "3": "bsDialog", bsDialog: 3, "4": "bsToolWindow", bsToolWindow: 4, "5": "bsSizeToolWin", bsSizeToolWin: 5};
  this.$rtti.$Enum("TBorderStyle",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TFormBorderStyle});
  this.$rtti.$inherited("TCaption",rtl.string,{});
  this.$rtti.$Int("TCursor",{minvalue: -32768, maxvalue: 32767, ordtype: 2});
  rtl.createClass(this,"TControlCanvas",pas.Graphics.TCanvas,function () {
    this.$init = function () {
      pas.Graphics.TCanvas.$init.call(this);
      this.FControl = null;
      this.FHeight = 0;
      this.FWidth = 0;
    };
    this.$final = function () {
      this.FControl = undefined;
      pas.Graphics.TCanvas.$final.call(this);
    };
    this.SetHeight = function (AValue) {
      if (this.FHeight !== AValue) {
        this.FHeight = AValue;
        this.FCanvasElement.height = this.FHeight;
      };
    };
    this.SetWidth = function (AValue) {
      if (this.FWidth !== AValue) {
        this.FWidth = AValue;
        this.FCanvasElement.width = this.FWidth;
      };
    };
    this.Create$2 = function (AControl) {
      pas.Graphics.TCanvas.Create$1.call(this);
      if (AControl != null) {
        this.SetHeight(AControl.FHeight);
        this.SetWidth(AControl.FWidth);
        this.FFont.Assign(AControl.FFont);
        this.FBrush.SetColor(AControl.FColor);
        this.FPen.SetColor(AControl.FFont.FColor);
        this.FControl = AControl;
        this.FControl.FHandleElement.insertBefore(this.FCanvasElement,AControl.FHandleElement.firstChild);
      };
      return this;
    };
  });
  this.TShiftStateEnum = {"0": "ssShift", ssShift: 0, "1": "ssAlt", ssAlt: 1, "2": "ssCtrl", ssCtrl: 2, "3": "ssLeft", ssLeft: 3, "4": "ssRight", ssRight: 4, "5": "ssMIDdle", ssMIDdle: 5, "6": "ssDouble", ssDouble: 6};
  this.$rtti.$Enum("TShiftStateEnum",{minvalue: 0, maxvalue: 6, ordtype: 1, enumtype: this.TShiftStateEnum});
  this.$rtti.$Set("TShiftState",{comptype: this.$rtti["TShiftStateEnum"]});
  this.$rtti.$MethodVar("TKeyEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Key",rtl.longint,1],["Shift",this.$rtti["TShiftState"]]]), methodkind: 0});
  this.$rtti.$MethodVar("TKeyPressEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Key",rtl.char,1]]), methodkind: 0});
  this.TMouseButton = {"0": "mbLeft", mbLeft: 0, "1": "mbRight", mbRight: 1, "2": "mbMiddle", mbMiddle: 2};
  this.$rtti.$Enum("TMouseButton",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TMouseButton});
  this.$rtti.$MethodVar("TMouseEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Button",this.$rtti["TMouseButton"]],["Shift",this.$rtti["TShiftState"]],["X",rtl.longint],["Y",rtl.longint]]), methodkind: 0});
  this.$rtti.$MethodVar("TMouseMoveEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Shift",this.$rtti["TShiftState"]],["X",rtl.longint],["Y",rtl.longint]]), methodkind: 0});
  this.$rtti.$MethodVar("TMouseWheelEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["Shift",this.$rtti["TShiftState"]],["WheelDelta",rtl.nativeint],["MousePos",pas.Types.$rtti["TPoint"]],["Handled",rtl.boolean,1]]), methodkind: 0});
  this.TFocusSearchDirection = {"0": "fsdFirst", fsdFirst: 0, "1": "fsdLast", fsdLast: 1, "2": "fsdNext", fsdNext: 2, "3": "fsdPrev", fsdPrev: 3};
  this.TControlFlag = {"0": "cfInAlignControls", cfInAlignControls: 0};
  rtl.createClass(this,"TControlBorderSpacing",pas.Classes.TPersistent,function () {
    this.$init = function () {
      pas.Classes.TPersistent.$init.call(this);
      this.FAround = 0;
      this.FBottom = 0;
      this.FLeft = 0;
      this.FRight = 0;
      this.FTop = 0;
      this.FUpdateCount = 0;
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Classes.TPersistent.$final.call(this);
    };
    this.SetAround = function (AValue) {
      if (this.FAround !== AValue) {
        this.FAround = AValue;
        this.Changed();
      };
    };
    this.Changed = function () {
      if ((this.FUpdateCount === 0) && (this.FOnChange != null)) {
        this.FOnChange(this);
      };
    };
    this.Create$1 = function () {
      pas.System.TObject.Create.call(this);
      this.FBottom = 0;
      this.FLeft = 0;
      this.FRight = 0;
      this.FTop = 0;
      this.FUpdateCount = 0;
      return this;
    };
    this.Assign = function (Source) {
      var VSpacing = null;
      if ((Source != null) && $mod.TControlBorderSpacing.isPrototypeOf(Source)) {
        this.BeginUpdate();
        try {
          VSpacing = Source;
          this.FAround = VSpacing.FAround;
          this.FBottom = VSpacing.FBottom;
          this.FLeft = VSpacing.FLeft;
          this.FRight = VSpacing.FRight;
          this.FTop = VSpacing.FTop;
        } finally {
          this.EndUpdate();
        };
      } else {
        pas.Classes.TPersistent.Assign.call(this,Source);
      };
    };
    this.BeginUpdate = function () {
      this.FUpdateCount += 1;
    };
    this.EndUpdate = function () {
      if (this.FUpdateCount > 0) {
        this.FUpdateCount -= 1;
        if (this.FUpdateCount === 0) {
          this.Changed();
        };
      };
    };
  });
  rtl.createClass(this,"TControl",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FAlign = 0;
      this.FAnchors = {};
      this.FAutoSize = false;
      this.FBorderSpacing = null;
      this.FBorderStyle = $mod.TFormBorderStyle.bsNone;
      this.FCaption = "";
      this.FColor = 0;
      this.FControlFlags = {};
      this.FControls = null;
      this.FCursor = 0;
      this.FDesignRect = pas.Types.TRect.$new();
      this.FEnabled = false;
      this.FFont = null;
      this.FHandleClass = "";
      this.FHandleElement = null;
      this.FHandleId = "";
      this.FHeight = 0;
      this.FHint = "";
      this.FLeft = 0;
      this.FParent = null;
      this.FParentColor = false;
      this.FParentFont = false;
      this.FParentShowHint = false;
      this.FShowHint = false;
      this.FTabOrder = 0;
      this.FTabStop = false;
      this.FTop = 0;
      this.FUpdateCount = 0;
      this.FVisible = false;
      this.FWidth = 0;
      this.FOnClick = null;
      this.FOnDblClick = null;
      this.FOnMouseDown = null;
      this.FOnMouseEnter = null;
      this.FOnMouseLeave = null;
      this.FOnMouseMove = null;
      this.FOnMouseUp = null;
      this.FOnMouseWheel = null;
      this.FOnResize = null;
      this.FOnScroll = null;
    };
    this.$final = function () {
      this.FAnchors = undefined;
      this.FBorderSpacing = undefined;
      this.FControlFlags = undefined;
      this.FControls = undefined;
      this.FDesignRect = undefined;
      this.FFont = undefined;
      this.FHandleElement = undefined;
      this.FParent = undefined;
      this.FOnClick = undefined;
      this.FOnDblClick = undefined;
      this.FOnMouseDown = undefined;
      this.FOnMouseEnter = undefined;
      this.FOnMouseLeave = undefined;
      this.FOnMouseMove = undefined;
      this.FOnMouseUp = undefined;
      this.FOnMouseWheel = undefined;
      this.FOnResize = undefined;
      this.FOnScroll = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.GetClientHeight = function () {
      var Result = 0;
      Result = this.GetClientRect().Bottom;
      return Result;
    };
    this.GetClientRect = function () {
      var Result = pas.Types.TRect.$new();
      Result.$assign(pas.Types.Rect(0,0,this.FWidth - 1,this.FHeight - 1));
      return Result;
    };
    this.GetClientWidth = function () {
      var Result = 0;
      Result = this.GetClientRect().Right;
      return Result;
    };
    this.GetText = function () {
      var Result = "";
      Result = this.RealGetText();
      return Result;
    };
    this.SetAlign = function (AValue) {
      if (this.FAlign !== AValue) {
        this.FAlign = AValue;
        if (this.FParent != null) {
          this.FParent.ReAlign()}
         else this.ReAlign();
      };
    };
    this.SetAnchors = function (AValue) {
      if (rtl.eqSet(this.FAnchors,AValue)) return;
      this.FAnchors = rtl.refSet(AValue);
    };
    this.SetAutoSize = function (AValue) {
      if (this.FAutoSize !== AValue) {
        this.FAutoSize = AValue;
        if (this.FAutoSize) {
          this.AdjustSize();
        };
      };
    };
    this.SetBorderSpacing = function (AValue) {
      this.FBorderSpacing.Assign(AValue);
    };
    this.SetBorderStyle = function (AValue) {
      if (this.FBorderStyle !== AValue) {
        this.FBorderStyle = AValue;
        this.Changed();
      };
    };
    this.SetClientSize = function (AValue) {
      var VClient = pas.Types.TRect.$new();
      VClient.$assign(this.GetClientRect());
      this.SetBounds(this.FLeft,this.FTop,(this.FWidth - VClient.Right) + AValue.x,(this.FHeight - VClient.Bottom) + AValue.y);
    };
    this.SetClientHeight = function (AValue) {
      this.SetClientSize(pas.Types.TPoint.$clone(pas.Types.Point(this.GetClientWidth(),AValue)));
    };
    this.SetClientWidth = function (AValue) {
      this.SetClientSize(pas.Types.TPoint.$clone(pas.Types.Point(AValue,this.GetClientHeight())));
    };
    this.SetColor = function (AValue) {
      if (this.FColor !== AValue) {
        this.FColor = AValue;
        this.FParentColor = false;
        this.ColorChanged(this);
      };
    };
    this.SetCursor = function (AValue) {
      if (this.FCursor !== AValue) {
        this.FCursor = AValue;
        this.Changed();
      };
    };
    this.SetEnabled = function (AValue) {
      if (this.FEnabled !== AValue) {
        this.FEnabled = AValue;
        this.Changed();
      };
    };
    this.SetFont = function (AValue) {
      if (!this.FFont.IsEqual(AValue)) {
        this.FFont.Assign(AValue);
      };
    };
    this.SetHandleClass = function (AValue) {
      if (this.FHandleClass !== AValue) {
        this.FHandleClass = AValue;
        this.Changed();
      };
    };
    this.SetHandleId = function (AValue) {
      if (this.FHandleId !== AValue) {
        this.FHandleId = AValue;
        this.Changed();
      };
    };
    this.SetHeight = function (AValue) {
      this.SetBounds(this.FLeft,this.FTop,this.FWidth,AValue);
    };
    this.SetHint = function (AValue) {
      if (this.FHint !== AValue) {
        this.FHint = AValue;
        this.Changed();
      };
    };
    this.SetLeft = function (AValue) {
      this.SetBounds(AValue,this.FTop,this.FWidth,this.FHeight);
    };
    this.SetParent = function (AValue) {
      if (this.FParent != null) {
        this.FParent.UnRegisterChild(this);
      };
      this.CheckNewParent(AValue);
      this.FParent = AValue;
      if (this.FParent != null) {
        this.FParent.RegisterChild(this);
        this.BeginUpdate();
        try {
          if (this.FParentColor) {
            this.FColor = this.FParent.FColor;
          };
          if (this.FParentFont) {
            this.FFont.Assign(this.FParent.FFont);
          };
          if (this.FParentShowHint) {
            this.FShowHint = this.FParent.FShowHint;
          };
        } finally {
          this.EndUpdate();
        };
      };
    };
    this.SetParentColor = function (AValue) {
      if (this.FParentColor !== AValue) {
        this.FParentColor = AValue;
        if (this.FParentColor && (this.FParent != null)) {
          this.FColor = this.FParent.FColor;
          this.Changed();
        };
      };
    };
    this.SetParentFont = function (AValue) {
      if (this.FParentFont !== AValue) {
        this.FParentFont = AValue;
        if (this.FParentFont && (this.FParent != null) && !this.FFont.IsEqual(this.FParent.FFont)) {
          this.FFont.Assign(this.FParent.FFont);
        };
      };
    };
    this.SetParentShowHint = function (AValue) {
      if (this.FParentShowHint !== AValue) {
        this.FParentShowHint = AValue;
        if (this.FParentShowHint && (this.FParent != null)) {
          this.FShowHint = this.FParent.FShowHint;
          this.Changed();
        };
      };
    };
    this.SetShowHint = function (AValue) {
      if (this.FShowHint !== AValue) {
        this.FShowHint = AValue;
        this.FParentShowHint = false;
        this.Changed();
      };
    };
    this.SetTabOrder = function (AValue) {
      if (this.FTabOrder !== AValue) {
        this.FTabOrder = AValue;
        if (this.FParent != null) {
          this.FParent.UpdateTabOrder(this);
        };
      };
    };
    this.SetTabStop = function (AValue) {
      if (this.FTabStop !== AValue) {
        this.FTabStop = AValue;
        this.Changed();
      };
    };
    this.SetText = function (AValue) {
      this.RealSetText(AValue);
    };
    this.SetTop = function (AValue) {
      this.SetBounds(this.FLeft,AValue,this.FWidth,this.FHeight);
    };
    this.SetVisible = function (AValue) {
      if (this.FVisible !== AValue) {
        this.FVisible = AValue;
        this.ReAlign();
      };
    };
    this.SetWidth = function (AValue) {
      this.SetBounds(this.FLeft,this.FTop,AValue,this.FHeight);
    };
    this.Click = function () {
      if (this.FOnClick != null) {
        this.FOnClick(this);
      };
    };
    this.DblClick = function () {
      if (this.FOnDblClick != null) {
        this.FOnDblClick(this);
      };
    };
    this.DoResize = function () {
      if (this.FOnResize != null) {
        this.FOnResize(this);
      };
    };
    this.DoScroll = function () {
      if (this.FOnScroll != null) {
        this.FOnScroll(this);
      };
    };
    this.MouseDown = function (Button, Shift, X, Y) {
      if (this.FOnMouseDown != null) {
        this.FOnMouseDown(this,Button,rtl.refSet(Shift),X,Y);
      };
    };
    this.MouseEnter = function () {
      if (this.FOnMouseEnter != null) {
        this.FOnMouseEnter(this);
      };
    };
    this.MouseLeave = function () {
      if (this.FOnMouseLeave != null) {
        this.FOnMouseLeave(this);
      };
    };
    this.MouseMove = function (Shift, X, Y) {
      if (this.FOnMouseMove != null) {
        this.FOnMouseMove(this,rtl.refSet(Shift),X,Y);
      };
    };
    this.MouseUp = function (Button, Shift, X, Y) {
      if (this.FOnMouseUp != null) {
        this.FOnMouseUp(this,Button,rtl.refSet(Shift),X,Y);
      };
    };
    this.MouseWeel = function (Shift, WheelDelta, MousePos, Handled) {
      if (this.FOnMouseWheel != null) {
        this.FOnMouseWheel(this,rtl.refSet(Shift),WheelDelta,pas.Types.TPoint.$clone(MousePos),Handled);
      };
    };
    this.HandleClick = function (AEvent) {
      var Result = false;
      AEvent.stopPropagation();
      this.Click();
      Result = true;
      return Result;
    };
    this.HandleDblClick = function (AEvent) {
      var Result = false;
      AEvent.stopPropagation();
      this.DblClick();
      Result = true;
      return Result;
    };
    this.HandleMouseDown = function (AEvent) {
      var Result = false;
      var VButton = 0;
      var VOffSets = pas.Types.TRect.$new();
      var VShift = {};
      var X = 0;
      var Y = 0;
      VButton = $mod.ExtractMouseButton(AEvent);
      VOffSets.$assign($mod.OffSets(this.FHandleElement));
      VShift = rtl.refSet($mod.ExtractShiftState$1(AEvent));
      X = pas.System.Trunc(AEvent.clientX - VOffSets.Left);
      Y = pas.System.Trunc(AEvent.clientY - VOffSets.Top);
      AEvent.stopPropagation();
      this.MouseDown(VButton,rtl.refSet(VShift),X,Y);
      Result = true;
      return Result;
    };
    this.HandleMouseEnter = function (AEvent) {
      var Result = false;
      AEvent.stopPropagation();
      this.MouseEnter();
      Result = true;
      return Result;
    };
    this.HandleMouseLeave = function (AEvent) {
      var Result = false;
      AEvent.stopPropagation();
      this.MouseLeave();
      Result = true;
      return Result;
    };
    this.HandleMouseMove = function (AEvent) {
      var Result = false;
      var VOffSets = pas.Types.TRect.$new();
      var VShift = {};
      var X = 0;
      var Y = 0;
      VOffSets.$assign($mod.OffSets(this.FHandleElement));
      VShift = rtl.refSet($mod.ExtractShiftState$1(AEvent));
      X = pas.System.Trunc(AEvent.clientX - VOffSets.Left);
      Y = pas.System.Trunc(AEvent.clientY - VOffSets.Left);
      AEvent.stopPropagation();
      this.MouseMove(rtl.refSet(VShift),X,Y);
      Result = true;
      return Result;
    };
    this.HandleMouseUp = function (AEvent) {
      var Result = false;
      var VButton = 0;
      var VOffSets = pas.Types.TRect.$new();
      var VShift = {};
      var X = 0;
      var Y = 0;
      VButton = $mod.ExtractMouseButton(AEvent);
      VOffSets.$assign($mod.OffSets(this.FHandleElement));
      VShift = rtl.refSet($mod.ExtractShiftState$1(AEvent));
      X = pas.System.Trunc(AEvent.clientX - VOffSets.Left);
      Y = pas.System.Trunc(AEvent.clientY - VOffSets.Top);
      AEvent.stopPropagation();
      this.MouseUp(VButton,rtl.refSet(VShift),X,Y);
      Result = true;
      return Result;
    };
    this.HandleMouseWheel = function (AEvent) {
      var Result = false;
      var VDelta = 0;
      var VHandled = false;
      var VMousePos = pas.Types.TPoint.$new();
      var VShift = {};
      var VOffSets = pas.Types.TRect.$new();
      VDelta = pas.System.Trunc(-AEvent.deltaY);
      VHandled = false;
      VOffSets.$assign($mod.OffSets(this.FHandleElement));
      VMousePos.$assign(pas.Types.Point(VOffSets.Left,VOffSets.Top));
      VShift = rtl.refSet($mod.ExtractShiftState$1(AEvent));
      AEvent.stopPropagation();
      this.MouseWeel(rtl.refSet(VShift),VDelta,pas.Types.TPoint.$clone(VMousePos),{get: function () {
          return VHandled;
        }, set: function (v) {
          VHandled = v;
        }});
      Result = true;
      return Result;
    };
    this.HandleResize = function (AEvent) {
      var Result = false;
      AEvent.stopPropagation();
      this.DoResize();
      Result = true;
      return Result;
    };
    this.HandleScroll = function (AEvent) {
      var Result = false;
      AEvent.stopPropagation();
      this.DoScroll();
      Result = true;
      return Result;
    };
    this.Loaded = function () {
      pas.Classes.TComponent.Loaded.call(this);
      this.FDesignRect.$assign(pas.Types.Rect(this.FLeft,this.FTop,(this.FLeft + this.FWidth) - 1,(this.FTop + this.FHeight) - 1));
      this.Changed();
    };
    this.Changed = function () {
      var $Self = this;
      var form = null;
      function AdjustWithPPI(aValue) {
        var Result = 0;
        if (form != null) {
          Result = pas.System.Trunc((96 * aValue) / form.FDesignTimePPI)}
         else Result = aValue;
        return Result;
      };
      function FindParentForm() {
        var Result = null;
        var p = null;
        p = $Self.FParent;
        while ((p != null) && !pas.Forms.TCustomForm.isPrototypeOf(p)) p = p.FParent;
        if (pas.Forms.TCustomForm.isPrototypeOf(p)) {
          Result = p}
         else Result = null;
        return Result;
      };
      if (!this.IsUpdating() && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) {
        form = FindParentForm();
        var $with = this.FHandleElement;
        if (this.FHandleId !== "") {
          $with.setAttribute("id",this.FHandleId);
        } else {
          $with.removeAttribute("id");
        };
        if (this.FHandleClass !== "") {
          $with.setAttribute("class",this.FHandleClass);
        } else {
          $with.removeAttribute("class");
        };
        if ((this.FHandleClass === "") && (this.FHandleId === "")) {
          if (this.FColor in rtl.createSet(536870912,536870911)) {
            $with.style.removeProperty("background-color");
          } else {
            $with.style.setProperty("background-color",pas.Graphics.JSColor(this.FColor));
          };
        };
        $with.style.setProperty("left",pas.SysUtils.IntToStr(AdjustWithPPI(this.FLeft)) + "px");
        $with.style.setProperty("top",pas.SysUtils.IntToStr(AdjustWithPPI(this.FTop)) + "px");
        $with.style.setProperty("width",pas.SysUtils.IntToStr(AdjustWithPPI(this.FWidth)) + "px");
        $with.style.setProperty("height",pas.SysUtils.IntToStr(AdjustWithPPI(this.FHeight)) + "px");
        $with.style.setProperty("cursor",$mod.JSCursor(this.FCursor));
        if (this.FEnabled) {
          $with.removeAttribute("disabled");
          $with.style.removeProperty("opacity");
        } else {
          $with.setAttribute("disabled","true");
          $with.style.setProperty("opacity","0.5");
        };
        if (this.FVisible) {
          $with.style.setProperty("display","block");
        } else {
          $with.style.setProperty("display","none");
        };
        if ((this.FHint !== "") && this.FShowHint) {
          $with.setAttribute("title",this.FHint);
        } else {
          $with.removeAttribute("title");
        };
        if (this.FBorderStyle === $mod.TFormBorderStyle.bsNone) {
          $with.style.setProperty("border-style","none");
        } else {
          $with.style.removeProperty("border-style");
        };
        $with.style.setProperty("position","absolute");
      };
    };
    this.CreateHandleElement = function () {
      var Result = null;
      throw new Error(pas.SysUtils.Format("%s.CreateHandleElement=nil",pas.System.VarRecs(18,this.$classname)));
      return Result;
    };
    this.RegisterHandleEvents = function () {
      var $with = this.FHandleElement;
      $with.addEventListener("click",rtl.createCallback(this,"HandleClick"));
      $with.addEventListener("dblclick",rtl.createCallback(this,"HandleDblClick"));
      $with.addEventListener("mousedown",rtl.createCallback(this,"HandleMouseDown"));
      $with.addEventListener("mouseenter",rtl.createCallback(this,"HandleMouseEnter"));
      $with.addEventListener("mouseleave",rtl.createCallback(this,"HandleMouseLeave"));
      $with.addEventListener("mousemove",rtl.createCallback(this,"HandleMouseMove"));
      $with.addEventListener("mouseup",rtl.createCallback(this,"HandleMouseUp"));
      $with.addEventListener("scroll",rtl.createSafeCallback(this,"HandleScroll"));
      $with.addEventListener("resize",rtl.createSafeCallback(this,"HandleResize"));
      $with.addEventListener("wheel",rtl.createCallback(this,"HandleMouseWheel"));
    };
    this.UnRegisterHandleEvents = function () {
      var $with = this.FHandleElement;
      $with.removeEventListener("click",rtl.createCallback(this,"HandleClick"));
      $with.removeEventListener("dblclick",rtl.createCallback(this,"HandleDblClick"));
      $with.removeEventListener("mousedown",rtl.createCallback(this,"HandleMouseDown"));
      $with.removeEventListener("mouseenter",rtl.createCallback(this,"HandleMouseEnter"));
      $with.removeEventListener("mouseleave",rtl.createCallback(this,"HandleMouseLeave"));
      $with.removeEventListener("mousemove",rtl.createCallback(this,"HandleMouseMove"));
      $with.removeEventListener("mouseup",rtl.createCallback(this,"HandleMouseUp"));
      $with.removeEventListener("scroll",rtl.createSafeCallback(this,"HandleScroll"));
      $with.removeEventListener("resize",rtl.createSafeCallback(this,"HandleResize"));
      $with.removeEventListener("wheel",rtl.createCallback(this,"HandleMouseWheel"));
    };
    this.CheckNewParent = function (AParent) {
      if ((AParent != null) && !AParent.CheckChildClassAllowed(this.$class.ClassType())) {
        throw new Error(pas.SysUtils.Format("Control of class '%s' can't have control of class '%s' as a child",pas.System.VarRecs(8,AParent.$class.ClassType(),18,this.$classname)));
      };
      if (pas.Forms.TCustomForm.isPrototypeOf(this) && pas.Forms.TCustomForm.isPrototypeOf(AParent)) {
        throw new Error('A "Form" can\'t have another "Form" as parent');
      };
      if (this === AParent) {
        throw new Error('A "Control" can\'t have itself as a Parent');
      };
    };
    this.RegisterChild = function (AControl) {
      var VIndex = 0;
      if (AControl != null) {
        VIndex = this.FControls.indexOf(AControl);
        if (VIndex < 0) {
          this.FControls.push(AControl);
          if (!this.FHandleElement.contains(AControl.FHandleElement)) {
            this.FHandleElement.appendChild(AControl.FHandleElement);
          };
          this.ReAlign();
          AControl.SetTabOrder(this.FControls.length);
        };
      };
    };
    this.UnRegisterChild = function (AControl) {
      var VIndex = 0;
      if (AControl != null) {
        VIndex = this.FControls.indexOf(AControl);
        if (VIndex >= 0) {
          this.FControls.splice(VIndex,1);
          if (this.FHandleElement.contains(AControl.FHandleElement)) {
            this.FHandleElement.removeChild(AControl.FHandleElement);
          };
          this.ReAlign();
          this.UpdateTabOrder(null);
        };
      };
    };
    this.AlignControls = function () {
      var $Self = this;
      var VControl = null;
      var VSpacing = null;
      var VIndex = 0;
      var VLeft = 0;
      var VTop = 0;
      var VRight = 0;
      var VBotton = 0;
      var VWidth = 0;
      var newleft = 0;
      var newtop = 0;
      var newright = 0;
      var newbottom = 0;
      if ($mod.TControlFlag.cfInAlignControls in this.FControlFlags) return;
      this.FControlFlags = rtl.includeSet(this.FControlFlags,$mod.TControlFlag.cfInAlignControls);
      this.BeginUpdate();
      try {
        VLeft = 0;
        VTop = 0;
        VRight = this.FWidth;
        VBotton = this.FHeight;
        VWidth = this.FWidth;
        for (var $l = 0, $end = this.FControls.length - 1; $l <= $end; $l++) {
          VIndex = $l;
          VControl = rtl.getObject(this.FControls[VIndex]);
          if ((VControl != null) && (VControl.FAlign === $mod.TAlign.alTop) && VControl.FVisible) {
            VControl.BeginUpdate();
            try {
              VSpacing = VControl.FBorderSpacing;
              VControl.SetLeft(VLeft + VSpacing.FLeft + VSpacing.FAround);
              VControl.SetTop(VTop + VSpacing.FTop + VSpacing.FAround);
              VControl.SetWidth(VWidth - VSpacing.FLeft - VSpacing.FRight - (VSpacing.FAround * 2));
              VControl.SetHeight(VControl.FHeight);
            } finally {
              VControl.EndUpdate();
            };
            VTop = VTop + VControl.FHeight + VSpacing.FTop + VSpacing.FBottom + (VSpacing.FAround * 2);
          };
        };
        if (VTop < 0) {
          VTop = 0;
        };
        for (var $l1 = 0, $end1 = this.FControls.length - 1; $l1 <= $end1; $l1++) {
          VIndex = $l1;
          VControl = rtl.getObject(this.FControls[VIndex]);
          if ((VControl != null) && (VControl.FAlign === $mod.TAlign.alBottom) && VControl.FVisible) {
            VControl.BeginUpdate();
            try {
              VSpacing = VControl.FBorderSpacing;
              VControl.SetLeft(VLeft + VSpacing.FLeft + VSpacing.FAround);
              if (!($mod.TAnchorKind.akBottom in VControl.FAnchors)) VControl.SetTop(VBotton - VControl.FHeight - VSpacing.FBottom - VSpacing.FAround);
              VControl.SetWidth(VWidth - VSpacing.FLeft - VSpacing.FRight - (VSpacing.FAround * 2));
              VControl.SetHeight(VControl.FHeight);
            } finally {
              VControl.EndUpdate();
            };
            VBotton = VBotton - VControl.FHeight - VSpacing.FTop - VSpacing.FBottom - (VSpacing.FAround * 2);
          };
        };
        if (VBotton < 0) {
          VBotton = 0;
        };
        for (var $l2 = 0, $end2 = this.FControls.length - 1; $l2 <= $end2; $l2++) {
          VIndex = $l2;
          VControl = rtl.getObject(this.FControls[VIndex]);
          if ((VControl != null) && (VControl.FAlign === $mod.TAlign.alLeft) && VControl.FVisible) {
            VControl.BeginUpdate();
            try {
              VSpacing = VControl.FBorderSpacing;
              VControl.SetLeft(VLeft + VSpacing.FLeft + VSpacing.FAround);
              VControl.SetTop(VTop + VSpacing.FTop + VSpacing.FAround);
              VControl.SetWidth(VControl.FWidth);
              VControl.SetHeight(VBotton - VTop - VSpacing.FTop - VSpacing.FBottom - (VSpacing.FAround * 2));
            } finally {
              VControl.EndUpdate();
            };
            VLeft = VLeft + VControl.FWidth + VSpacing.FLeft + VSpacing.FRight + (VSpacing.FAround * 2);
          };
        };
        if (VLeft < 0) {
          VLeft = 0;
        };
        for (var $l3 = 0, $end3 = this.FControls.length - 1; $l3 <= $end3; $l3++) {
          VIndex = $l3;
          VControl = rtl.getObject(this.FControls[VIndex]);
          if ((VControl != null) && (VControl.FAlign === $mod.TAlign.alRight) && VControl.FVisible) {
            VControl.BeginUpdate();
            try {
              VSpacing = VControl.FBorderSpacing;
              if (!($mod.TAnchorKind.akLeft in VControl.FAnchors)) VControl.SetLeft(VRight - VControl.FWidth - VSpacing.FRight - VSpacing.FAround);
              VControl.SetTop(VTop + VSpacing.FTop + VSpacing.FAround);
              VControl.SetWidth(VControl.FWidth);
              VControl.SetHeight(VBotton - VTop - VSpacing.FTop - VSpacing.FBottom - (VSpacing.FAround * 2));
            } finally {
              VControl.EndUpdate();
            };
            VRight = VRight - VControl.FWidth - VSpacing.FLeft - VSpacing.FRight - (VSpacing.FAround * 2);
          };
        };
        if (VRight < 0) {
          VRight = 0;
        };
        for (var $l4 = 0, $end4 = this.FControls.length - 1; $l4 <= $end4; $l4++) {
          VIndex = $l4;
          VControl = rtl.getObject(this.FControls[VIndex]);
          if ((VControl != null) && (VControl.FAlign === $mod.TAlign.alClient) && VControl.FVisible) {
            VControl.BeginUpdate();
            try {
              VSpacing = VControl.FBorderSpacing;
              VControl.SetLeft(VLeft + VSpacing.FLeft + VSpacing.FAround);
              VControl.SetTop(VTop + VSpacing.FTop + VSpacing.FAround);
              VControl.SetWidth(VRight - VLeft - VSpacing.FLeft - VSpacing.FRight - (VSpacing.FAround * 2));
              VControl.SetHeight(VBotton - VTop - VSpacing.FTop - VSpacing.FBottom - (VSpacing.FAround * 2));
            } finally {
              VControl.EndUpdate();
            };
          };
        };
        for (var $l5 = 0, $end5 = this.FControls.length - 1; $l5 <= $end5; $l5++) {
          VIndex = $l5;
          VControl = rtl.getObject(this.FControls[VIndex]);
          if ((VControl != null) && (VControl.FAlign === $mod.TAlign.alNone) && VControl.FVisible && rtl.neSet(VControl.FAnchors,{})) {
            VControl.BeginUpdate();
            try {
              if ($mod.TAnchorKind.akLeft in VControl.FAnchors) newleft = VControl.FLeft;
              if ($mod.TAnchorKind.akTop in VControl.FAnchors) newtop = VControl.FTop;
              if ($mod.TAnchorKind.akBottom in VControl.FAnchors) newbottom = this.FHeight - (this.FDesignRect.Bottom - VControl.FDesignRect.Bottom);
              if ($mod.TAnchorKind.akRight in VControl.FAnchors) newright = this.FWidth - (this.FDesignRect.Right - VControl.FDesignRect.Right);
              if (rtl.leSet(rtl.createSet($mod.TAnchorKind.akLeft,$mod.TAnchorKind.akRight),VControl.FAnchors)) {
                VControl.SetLeft(newleft);
                VControl.SetWidth((newright - newleft) + 1);
              } else if ($mod.TAnchorKind.akLeft in VControl.FAnchors) {
                VControl.SetLeft(newleft)}
               else if ($mod.TAnchorKind.akRight in VControl.FAnchors) VControl.SetLeft(newright - VControl.FWidth);
              if (rtl.leSet(rtl.createSet($mod.TAnchorKind.akTop,$mod.TAnchorKind.akBottom),VControl.FAnchors)) {
                VControl.SetTop(newtop);
                VControl.SetHeight((newbottom - newtop) + 1);
              } else if ($mod.TAnchorKind.akTop in VControl.FAnchors) {
                VControl.SetTop(newtop)}
               else if ($mod.TAnchorKind.akBottom in VControl.FAnchors) VControl.SetTop(newbottom - VControl.FHeight);
            } finally {
              VControl.EndUpdate();
            };
          };
        };
      } finally {
        this.FControlFlags = rtl.excludeSet(this.FControlFlags,$mod.TControlFlag.cfInAlignControls);
        this.EndUpdate();
      };
    };
    this.RealGetText = function () {
      var Result = "";
      Result = this.FCaption;
      return Result;
    };
    this.RealSetText = function (AValue) {
      if (this.FCaption !== AValue) {
        this.FCaption = AValue;
        this.Changed();
      };
    };
    this.BorderSpacingChanged = function (Sender) {
      if (this.FParent != null) {
        this.FParent.AlignControls();
      };
    };
    this.ColorChanged = function (Sender) {
      this.Changed();
    };
    this.FontChanged = function (Sender) {
      this.Changed();
    };
    this.TabOrderArray = function () {
      var Result = null;
      Result = this.FControls.slice(0).sort(rtl.createCallback(this,"CompareTabOrder"));
      return Result;
    };
    this.CompareTabOrder = function (A, B) {
      var Result = 0;
      if (pas.System.Assigned(A) && pas.System.Assigned(B) && rtl.isExt(A,$mod.TControl,1) && rtl.isExt(B,$mod.TControl,1)) {
        Result = rtl.getObject(A).FTabOrder - rtl.getObject(B).FTabOrder;
      } else {
        Result = 0;
      };
      return Result;
    };
    this.UpdateTabOrder = function (AValue) {
      var VControl = null;
      var VArray = null;
      var VIndex = 0;
      if (AValue != null) {
        for (var $l = 0, $end = this.FControls.length - 1; $l <= $end; $l++) {
          VIndex = $l;
          VControl = rtl.getObject(this.FControls[VIndex]);
          if ((VControl != null) && (VControl !== AValue) && (VControl.FTabOrder >= AValue.FTabOrder)) {
            VControl.FTabOrder += 1;
          };
        };
      };
      VArray = this.TabOrderArray();
      try {
        for (var $l1 = 0, $end1 = VArray.length - 1; $l1 <= $end1; $l1++) {
          VIndex = $l1;
          VControl = rtl.getObject(VArray[VIndex]);
          if (VControl != null) {
            VControl.BeginUpdate();
            try {
              VControl.FTabOrder = VIndex;
            } finally {
              VControl.EndUpdate();
            };
          };
        };
      } finally {
        VArray.length = 0;
      };
    };
    this.GetControlClassDefaultSize = function () {
      var Result = pas.Types.TSize.$new();
      Result.cx = 75;
      Result.cy = 50;
      return Result;
    };
    this.Create$1 = function (AOwner) {
      var sz = pas.Types.TSize.$new();
      pas.Classes.TComponent.Create$1.call(this,AOwner);
      this.FHandleElement = this.CreateHandleElement();
      this.FHandleClass = this.$classname;
      this.FHandleId = "";
      this.RegisterHandleEvents();
      this.FControls = new Array();
      this.FBorderSpacing = $mod.TControlBorderSpacing.$create("Create$1");
      this.FBorderSpacing.FOnChange = rtl.createCallback(this,"BorderSpacingChanged");
      this.FBorderStyle = $mod.TFormBorderStyle.bsSingle;
      this.FFont = pas.Graphics.TFont.$create("Create$1");
      this.FFont.FOnChange = rtl.createCallback(this,"FontChanged");
      this.FAlign = $mod.TAlign.alNone;
      this.FAnchors = rtl.createSet($mod.TAnchorKind.akLeft,$mod.TAnchorKind.akTop);
      this.FAutoSize = false;
      this.FCaption = "";
      this.FColor = 536870912;
      this.FCursor = 0;
      sz.$assign(this.$class.GetControlClassDefaultSize());
      this.FDesignRect.$assign(pas.Types.Rect(0,0,sz.cx - 1,sz.cy - 1));
      this.FEnabled = true;
      this.FLeft = 0;
      this.FParent = null;
      this.FParentColor = false;
      this.FParentFont = true;
      this.FParentShowHint = true;
      this.FShowHint = false;
      this.FTabOrder = 0;
      this.FTabStop = true;
      this.FTop = 0;
      this.FUpdateCount = 0;
      this.FVisible = true;
      return this;
    };
    this.Destroy = function () {
      this.DestroyComponents();
      if (this.FHandleElement != null) this.UnRegisterHandleEvents();
      if (this.FParent != null) {
        this.FParent.UnRegisterChild(this);
      };
      this.FControls.length = 0;
      this.FBorderSpacing.$destroy("Destroy");
      this.FBorderSpacing = null;
      this.FFont.$destroy("Destroy");
      this.FFont = null;
      pas.Classes.TComponent.Destroy.call(this);
    };
    this.BeginUpdate = function () {
      this.FUpdateCount += 1;
    };
    this.EndUpdate = function () {
      if (this.FUpdateCount > 0) {
        this.FUpdateCount -= 1;
        if (this.FUpdateCount === 0) {
          this.Changed();
        };
      };
    };
    this.AdjustSize = function () {
    };
    this.IsUpdating = function () {
      var Result = false;
      Result = this.FUpdateCount > 0;
      return Result;
    };
    this.Invalidate = function () {
    };
    this.ReAlign = function () {
      this.AlignControls();
      if (this.FParent != null) {
        this.FParent.ReAlign();
      };
      this.Invalidate();
    };
    this.BringToFront = function () {
      var VParentElement = null;
      VParentElement = this.FHandleElement.parentElement;
      if (VParentElement != null) {
        VParentElement.removeChild(this.FHandleElement);
        VParentElement.appendChild(this.FHandleElement);
      };
    };
    this.SetBounds = function (ALeft, ATop, AWidth, AHeight) {
      if ((this.FLeft !== ALeft) || (this.FTop !== ATop) || (this.FWidth !== AWidth) || (this.FHeight !== AHeight)) {
        this.FLeft = ALeft;
        this.FTop = ATop;
        if (AWidth > 0) {
          this.FWidth = AWidth;
        } else {
          this.FWidth = 0;
        };
        if (AHeight > 0) {
          this.FHeight = AHeight;
        } else {
          this.FHeight = 0;
        };
        this.Changed();
        this.ReAlign();
      };
    };
    var $r = this.$rtti;
    $r.addProperty("Cursor",2,$mod.$rtti["TCursor"],"FCursor","SetCursor");
    $r.addProperty("Left",2,rtl.nativeint,"FLeft","SetLeft");
    $r.addProperty("Height",2,rtl.nativeint,"FHeight","SetHeight");
    $r.addProperty("Hint",2,rtl.string,"FHint","SetHint");
    $r.addProperty("Top",2,rtl.nativeint,"FTop","SetTop");
    $r.addProperty("Width",2,rtl.nativeint,"FWidth","SetWidth");
  });
  rtl.createClass(this,"TWinControl",this.TControl,function () {
    this.$init = function () {
      $mod.TControl.$init.call(this);
      this.FOnEnter = null;
      this.FOnExit = null;
      this.FOnKeyDown = null;
      this.FOnKeyPress = null;
      this.FOnKeyUp = null;
    };
    this.$final = function () {
      this.FOnEnter = undefined;
      this.FOnExit = undefined;
      this.FOnKeyDown = undefined;
      this.FOnKeyPress = undefined;
      this.FOnKeyUp = undefined;
      $mod.TControl.$final.call(this);
    };
    this.DoEnter = function () {
      if (this.FOnEnter != null) {
        this.FOnEnter(this);
      };
    };
    this.DoExit = function () {
      if (this.FOnExit != null) {
        this.FOnExit(this);
      };
    };
    this.KeyDown = function (Key, Shift) {
      if (this.FOnKeyDown != null) {
        this.FOnKeyDown(this,Key,rtl.refSet(Shift));
      };
    };
    this.KeyPress = function (Key) {
      if (this.FOnKeyPress != null) {
        this.FOnKeyPress(this,Key);
      };
    };
    this.KeyUp = function (Key, Shift) {
      if (this.FOnKeyUp != null) {
        this.FOnKeyUp(this,Key,rtl.refSet(Shift));
      };
    };
    this.HandleEnter = function (AEvent) {
      var Result = false;
      var VParent = null;
      VParent = this.FParent;
      while (VParent != null) {
        if (pas.Forms.TCustomForm.isPrototypeOf(VParent)) {
          VParent.SetActiveControl(this);
          break;
        };
        VParent = VParent.FParent;
      };
      AEvent.stopPropagation();
      this.DoEnter();
      Result = true;
      return Result;
    };
    this.HandleExit = function (AEvent) {
      var Result = false;
      AEvent.stopPropagation();
      this.DoExit();
      Result = true;
      return Result;
    };
    this.HandleKeyDown = function (AEvent) {
      var Result = false;
      var VControl = null;
      var VForm = null;
      var VKey = 0;
      var VParent = null;
      var VShift = {};
      VParent = this.FParent;
      while (VParent != null) {
        if (pas.Forms.TCustomForm.isPrototypeOf(VParent)) {
          VForm = VParent;
          if (VForm.FKeyPreview && VForm.HandleKeyDown(AEvent)) {
            Result = true;
            return Result;
          };
        };
        VParent = VParent.FParent;
      };
      VKey = $mod.ExtractKeyCode(AEvent);
      VShift = rtl.refSet($mod.ExtractShiftState(AEvent));
      AEvent.stopPropagation();
      this.KeyDown({get: function () {
          return VKey;
        }, set: function (v) {
          VKey = v;
        }},rtl.refSet(VShift));
      if (VKey === 0) {
        AEvent.preventDefault();
      } else {
        var $tmp = VKey;
        if ($tmp === 9) {
          if (this.FParent != null) {
            if ($mod.TShiftStateEnum.ssShift in VShift) {
              VControl = this.FParent.FindFocusControl(this,$mod.TFocusSearchDirection.fsdPrev);
              if (!(VControl != null)) {
                VControl = this.FParent.FindFocusControl(null,$mod.TFocusSearchDirection.fsdLast);
              };
            } else {
              VControl = this.FParent.FindFocusControl(this,$mod.TFocusSearchDirection.fsdNext);
              if (!(VControl != null)) {
                VControl = this.FParent.FindFocusControl(null,$mod.TFocusSearchDirection.fsdFirst);
              };
            };
            if ((VControl != null) && VControl.CanSetFocus()) {
              VControl.SetFocus();
            };
            AEvent.preventDefault();
          };
        };
      };
      Result = true;
      return Result;
    };
    this.HandleKeyUp = function (AEvent) {
      var Result = false;
      var VForm = null;
      var VKey = 0;
      var VParent = null;
      var VShift = {};
      VParent = this.FParent;
      while (VParent != null) {
        if (pas.Forms.TCustomForm.isPrototypeOf(VParent)) {
          VForm = VParent;
          if (VForm.FKeyPreview && VForm.HandleKeyUp(AEvent)) {
            Result = true;
            return Result;
          };
        };
        VParent = VParent.FParent;
      };
      VKey = $mod.ExtractKeyCode(AEvent);
      VShift = rtl.refSet($mod.ExtractShiftState(AEvent));
      AEvent.stopPropagation();
      this.KeyUp({get: function () {
          return VKey;
        }, set: function (v) {
          VKey = v;
        }},rtl.refSet(VShift));
      if (VKey === 0) {
        AEvent.preventDefault();
      };
      Result = true;
      return Result;
    };
    this.HandleKeyPress = function (AEvent) {
      var Result = false;
      var VForm = null;
      var VKey = "";
      var VParent = null;
      VParent = this.FParent;
      while (VParent != null) {
        if (pas.Forms.TCustomForm.isPrototypeOf(VParent)) {
          VForm = VParent;
          if (VForm.FKeyPreview && VForm.HandleKeyPress(AEvent)) {
            Result = true;
            return Result;
          };
        };
        VParent = VParent.FParent;
      };
      AEvent.stopPropagation();
      VKey = $mod.ExtractKeyChar(AEvent);
      if (VKey === "\x00") {
        AEvent.preventDefault();
      } else {
        this.KeyPress({get: function () {
            return VKey;
          }, set: function (v) {
            VKey = v;
          }});
        if (VKey === "\x00") {
          AEvent.preventDefault();
        };
      };
      Result = true;
      return Result;
    };
    this.RegisterHandleEvents = function () {
      $mod.TControl.RegisterHandleEvents.call(this);
      var $with = this.FHandleElement;
      $with.addEventListener("focus",rtl.createSafeCallback(this,"HandleEnter"));
      $with.addEventListener("blur",rtl.createSafeCallback(this,"HandleExit"));
      $with.addEventListener("keydown",rtl.createCallback(this,"HandleKeyDown"));
      $with.addEventListener("keypress",rtl.createCallback(this,"HandleKeyPress"));
      $with.addEventListener("keyup",rtl.createCallback(this,"HandleKeyUp"));
    };
    this.UnRegisterHandleEvents = function () {
      $mod.TControl.UnRegisterHandleEvents.call(this);
      var $with = this.FHandleElement;
      $with.removeEventListener("focus",rtl.createSafeCallback(this,"HandleEnter"));
      $with.removeEventListener("blur",rtl.createSafeCallback(this,"HandleExit"));
      $with.removeEventListener("keydown",rtl.createCallback(this,"HandleKeyDown"));
      $with.removeEventListener("keypress",rtl.createCallback(this,"HandleKeyPress"));
      $with.removeEventListener("keyup",rtl.createCallback(this,"HandleKeyUp"));
    };
    this.CheckChildClassAllowed = function (AChildClass) {
      var Result = false;
      Result = (AChildClass != null) && AChildClass.InheritsFrom($mod.TControl);
      return Result;
    };
    this.FindFocusControl = function (AStartControl, ADirection) {
      var Result = null;
      var VControl = null;
      var VArray = null;
      var VIndex = 0;
      var VTabOrder = 0;
      Result = null;
      VArray = this.TabOrderArray();
      if (VArray.length === 0) {
        return Result;
      };
      try {
        VTabOrder = VArray.indexOf(AStartControl);
        if (VTabOrder < 0) {
          if (ADirection in rtl.createSet($mod.TFocusSearchDirection.fsdFirst)) {
            VTabOrder = VArray.length - 1;
          } else {
            VTabOrder = 0;
          };
        };
        var $tmp = ADirection;
        if ($tmp === $mod.TFocusSearchDirection.fsdFirst) {
          VControl = rtl.getObject(VArray[0]);
          if ((VControl != null) && $mod.TWinControl.isPrototypeOf(VControl) && VControl.FEnabled && VControl.FVisible && VControl.FTabStop) {
            return VControl;
          };
        } else if ($tmp === $mod.TFocusSearchDirection.fsdLast) {
          VControl = rtl.getObject(VArray[VArray.length - 1]);
          if ((VControl != null) && $mod.TWinControl.isPrototypeOf(VControl) && VControl.FEnabled && VControl.FVisible && VControl.FTabStop) {
            return VControl;
          };
        } else if ($tmp === $mod.TFocusSearchDirection.fsdNext) {
          if (VTabOrder < (VArray.length - 1)) {
            for (var $l = VTabOrder + 1, $end = VArray.length - 1; $l <= $end; $l++) {
              VIndex = $l;
              VControl = rtl.getObject(VArray[VIndex]);
              if ((VControl != null) && $mod.TWinControl.isPrototypeOf(VControl) && VControl.FEnabled && VControl.FVisible && VControl.FTabStop) {
                return VControl;
              };
            };
          };
        } else if ($tmp === $mod.TFocusSearchDirection.fsdPrev) {
          if (VTabOrder > 0) {
            for (var $l1 = VTabOrder - 1; $l1 >= 0; $l1--) {
              VIndex = $l1;
              VControl = rtl.getObject(VArray[VIndex]);
              if ((VControl != null) && $mod.TWinControl.isPrototypeOf(VControl) && VControl.FEnabled && VControl.FVisible && VControl.FTabStop) {
                return VControl;
              };
            };
          };
        };
      } finally {
        VArray.length = 0;
      };
      return Result;
    };
    this.CanSetFocus = function () {
      var Result = false;
      var VControl = null;
      VControl = this;
      while (true) {
        if (!VControl.FVisible && VControl.FEnabled) {
          Result = false;
          return Result;
        };
        if (VControl.FParent != null) {
          VControl = VControl.FParent;
        } else {
          break;
        };
      };
      Result = (VControl != null) && pas.Forms.TCustomForm.isPrototypeOf(VControl);
      return Result;
    };
    this.SetFocus = function () {
      this.FHandleElement.focus();
    };
  });
  rtl.createClass(this,"TCustomControl",this.TWinControl,function () {
    this.$init = function () {
      $mod.TWinControl.$init.call(this);
      this.FCanvas = null;
      this.FOnPaint = null;
    };
    this.$final = function () {
      this.FCanvas = undefined;
      this.FOnPaint = undefined;
      $mod.TWinControl.$final.call(this);
    };
    this.GetCanvas = function () {
      var Result = null;
      if (!(this.FCanvas != null)) {
        this.FCanvas = $mod.TControlCanvas.$create("Create$2",[this]);
      };
      Result = this.FCanvas;
      return Result;
    };
    this.ColorChanged = function (Sender) {
      if (this.FCanvas != null) {
        this.FCanvas.FBrush.SetColor(this.FColor);
      };
      $mod.TControl.ColorChanged.call(this,Sender);
    };
    this.FontChanged = function (Sender) {
      if (this.FCanvas != null) {
        this.FCanvas.FFont.Assign(this.FFont);
      };
      $mod.TControl.FontChanged.call(this,Sender);
    };
    this.Paint = function () {
      if (this.FOnPaint != null) {
        this.FOnPaint(this);
      };
    };
    this.Destroy = function () {
      if (this.FCanvas != null) {
        this.FCanvas.$destroy("Destroy");
        this.FCanvas = null;
      };
      $mod.TControl.Destroy.call(this);
    };
    this.Invalidate = function () {
      $mod.TControl.Invalidate.call(this);
      this.Paint();
    };
  });
  this.IfThen$3 = function (AExpression, AConsequence, AAlternative) {
    var Result = "";
    if (AExpression) {
      Result = AConsequence;
    } else {
      Result = AAlternative;
    };
    return Result;
  };
  this.OffSets = function (AElement) {
    var Result = pas.Types.TRect.$new();
    Result.$assign(pas.Types.Rect(0,0,0,0));
    if (AElement != null) {
      var $with = AElement.getBoundingClientRect();
      Result.Left = pas.System.Trunc($with.left + window.scrollX);
      Result.Top = pas.System.Trunc($with.top + window.screenY);
    };
    return Result;
  };
  this.ExtractKeyCode = function (AEvent) {
    var Result = 0;
    var VLocation = 0;
    var VKey = "";
    VLocation = AEvent.location;
    VKey = pas.SysUtils.LowerCase(AEvent.key);
    Result = -1;
    var $tmp = VKey;
    if ($tmp === "backspace") {
      Result = 8}
     else if ($tmp === "tab") {
      Result = 9}
     else if ($tmp === "enter") {
      Result = 13}
     else if ($tmp === "shift") {
      Result = 16}
     else if ($tmp === "control") {
      Result = 17}
     else if ($tmp === "alt") {
      Result = 18}
     else if ($tmp === "altgraph") {
      Result = 18}
     else if ($tmp === "pause") {
      Result = 19}
     else if ($tmp === "capslock") {
      Result = 20}
     else if ($tmp === "escape") {
      Result = 27}
     else if ($tmp === "pageup") {
      Result = 33}
     else if ($tmp === "pagedown") {
      Result = 34}
     else if ($tmp === "end") {
      Result = 35}
     else if ($tmp === "home") {
      Result = 36}
     else if ($tmp === "arrowleft") {
      Result = 37}
     else if ($tmp === "arrowup") {
      Result = 38}
     else if ($tmp === "arrowright") {
      Result = 39}
     else if ($tmp === "arrowdown") {
      Result = 40}
     else if ($tmp === "insert") {
      Result = 45}
     else if ($tmp === "delete") {
      Result = 46}
     else if ($tmp === "f1") {
      Result = 112}
     else if ($tmp === "f2") {
      Result = 113}
     else if ($tmp === "f3") {
      Result = 114}
     else if ($tmp === "f4") {
      Result = 115}
     else if ($tmp === "f5") {
      Result = 116}
     else if ($tmp === "f6") {
      Result = 117}
     else if ($tmp === "f7") {
      Result = 118}
     else if ($tmp === "f8") {
      Result = 119}
     else if ($tmp === "f9") {
      Result = 120}
     else if ($tmp === "f10") {
      Result = 121}
     else if ($tmp === "f11") {
      Result = 122}
     else if ($tmp === "f12") {
      Result = 123}
     else if ($tmp === "f13") {
      Result = 124}
     else if ($tmp === "f14") {
      Result = 125}
     else if ($tmp === "f15") {
      Result = 126}
     else if ($tmp === "f16") {
      Result = 127}
     else if ($tmp === "f17") {
      Result = 128}
     else if ($tmp === "f18") {
      Result = 129}
     else if ($tmp === "f19") {
      Result = 130}
     else if ($tmp === "f20") {
      Result = 131}
     else if ($tmp === "numlock") {
      Result = 144}
     else if ($tmp === "scrolllock") Result = 145;
    if (VLocation === 3) {
      var $tmp1 = VKey;
      if ($tmp1 === "0") {
        Result = 96}
       else if ($tmp1 === "1") {
        Result = 97}
       else if ($tmp1 === "2") {
        Result = 98}
       else if ($tmp1 === "3") {
        Result = 99}
       else if ($tmp1 === "4") {
        Result = 100}
       else if ($tmp1 === "5") {
        Result = 101}
       else if ($tmp1 === "6") {
        Result = 102}
       else if ($tmp1 === "7") {
        Result = 103}
       else if ($tmp1 === "8") {
        Result = 104}
       else if ($tmp1 === "9") {
        Result = 105}
       else if ($tmp1 === "*") {
        Result = 106}
       else if ($tmp1 === "+") {
        Result = 107}
       else if ($tmp1 === "-") {
        Result = 109}
       else if ($tmp1 === ",") {
        Result = 110}
       else if ($tmp1 === "\/") {
        Result = 111}
       else if ($tmp1 === ".") Result = 194;
    } else {
      var $tmp2 = VKey;
      if ($tmp2 === "0") {
        Result = 48}
       else if ($tmp2 === "1") {
        Result = 49}
       else if ($tmp2 === "2") {
        Result = 50}
       else if ($tmp2 === "3") {
        Result = 51}
       else if ($tmp2 === "4") {
        Result = 52}
       else if ($tmp2 === "5") {
        Result = 53}
       else if ($tmp2 === "6") {
        Result = 54}
       else if ($tmp2 === "7") {
        Result = 55}
       else if ($tmp2 === "8") {
        Result = 56}
       else if ($tmp2 === "9") {
        Result = 57}
       else if ($tmp2 === "ç") {
        Result = 63}
       else if ($tmp2 === "a") {
        Result = 65}
       else if ($tmp2 === "b") {
        Result = 66}
       else if ($tmp2 === "c") {
        Result = 67}
       else if ($tmp2 === "d") {
        Result = 68}
       else if ($tmp2 === "e") {
        Result = 69}
       else if ($tmp2 === "f") {
        Result = 70}
       else if ($tmp2 === "g") {
        Result = 71}
       else if ($tmp2 === "h") {
        Result = 72}
       else if ($tmp2 === "i") {
        Result = 73}
       else if ($tmp2 === "j") {
        Result = 74}
       else if ($tmp2 === "k") {
        Result = 75}
       else if ($tmp2 === "l") {
        Result = 76}
       else if ($tmp2 === "m") {
        Result = 77}
       else if ($tmp2 === "n") {
        Result = 78}
       else if ($tmp2 === "o") {
        Result = 79}
       else if ($tmp2 === "p") {
        Result = 80}
       else if ($tmp2 === "q") {
        Result = 81}
       else if ($tmp2 === "r") {
        Result = 82}
       else if ($tmp2 === "s") {
        Result = 83}
       else if ($tmp2 === "t") {
        Result = 84}
       else if ($tmp2 === "u") {
        Result = 85}
       else if ($tmp2 === "v") {
        Result = 86}
       else if ($tmp2 === "w") {
        Result = 87}
       else if ($tmp2 === "x") {
        Result = 88}
       else if ($tmp2 === "y") {
        Result = 89}
       else if ($tmp2 === "z") {
        Result = 90}
       else if ($tmp2 === "=") {
        Result = 187}
       else if ($tmp2 === ",") {
        Result = 188}
       else if ($tmp2 === "-") {
        Result = 189}
       else if ($tmp2 === ".") {
        Result = 190}
       else if ($tmp2 === "'") {
        Result = 192}
       else if ($tmp2 === "\/") {
        Result = 193}
       else if ($tmp2 === "]") {
        Result = 220}
       else if ($tmp2 === "[") Result = 221;
    };
    return Result;
  };
  this.ExtractKeyChar = function (AEvent) {
    var Result = "";
    var VKey = "";
    VKey = pas.SysUtils.LowerCase(AEvent.key);
    Result = "\x00";
    if (VKey.length === 1) {
      Result = VKey.charAt(0);
    } else {
      var $tmp = VKey;
      if ($tmp === "backspace") {
        Result = "\b"}
       else if ($tmp === "tab") {
        Result = "\t"}
       else if ($tmp === "enter") {
        Result = "\r"}
       else if ($tmp === "escape") Result = "\x1B";
    };
    return Result;
  };
  this.ExtractShiftState = function (AEvent) {
    var Result = {};
    Result = {};
    if (AEvent.altKey) {
      Result = rtl.unionSet(Result,rtl.createSet($mod.TShiftStateEnum.ssAlt));
    };
    if (AEvent.ctrlKey) {
      Result = rtl.unionSet(Result,rtl.createSet($mod.TShiftStateEnum.ssCtrl));
    };
    if (AEvent.shiftKey) {
      Result = rtl.unionSet(Result,rtl.createSet($mod.TShiftStateEnum.ssShift));
    };
    return Result;
  };
  this.ExtractShiftState$1 = function (AEvent) {
    var Result = {};
    Result = {};
    if (AEvent.altKey) {
      Result = rtl.unionSet(Result,rtl.createSet($mod.TShiftStateEnum.ssAlt));
    };
    if (AEvent.ctrlKey) {
      Result = rtl.unionSet(Result,rtl.createSet($mod.TShiftStateEnum.ssCtrl));
    };
    if (AEvent.shiftKey) {
      Result = rtl.unionSet(Result,rtl.createSet($mod.TShiftStateEnum.ssShift));
    };
    return Result;
  };
  this.ExtractMouseButton = function (AEvent) {
    var Result = 0;
    var $tmp = AEvent.button;
    if ($tmp === 1) {
      Result = $mod.TMouseButton.mbMiddle}
     else if ($tmp === 2) {
      Result = $mod.TMouseButton.mbRight}
     else {
      Result = $mod.TMouseButton.mbMiddle;
    };
    return Result;
  };
  this.JSCursor = function (ACursor) {
    var Result = "";
    var $tmp = ACursor;
    if ($tmp === -1) {
      Result = "none"}
     else if ($tmp === -3) {
      Result = "crosshair"}
     else if ($tmp === -4) {
      Result = "text"}
     else if ($tmp === -22) {
      Result = "move"}
     else if ($tmp === -6) {
      Result = "nesw-resize"}
     else if ($tmp === -7) {
      Result = "ns-resize"}
     else if ($tmp === -8) {
      Result = "nwse-resize"}
     else if ($tmp === -9) {
      Result = "ew-resize"}
     else if ($tmp === -23) {
      Result = "nwse-resize"}
     else if ($tmp === -24) {
      Result = "ns-resize"}
     else if ($tmp === -25) {
      Result = "nesw-resize"}
     else if ($tmp === -26) {
      Result = "col-resize"}
     else if ($tmp === -27) {
      Result = "col-resize"}
     else if ($tmp === -28) {
      Result = "nesw-resize"}
     else if ($tmp === -29) {
      Result = "ns-resize"}
     else if ($tmp === -30) {
      Result = "nwse-resize"}
     else if ($tmp === -11) {
      Result = "wait"}
     else if ($tmp === -13) {
      Result = "no-drop"}
     else if ($tmp === -14) {
      Result = "col-resize"}
     else if ($tmp === -15) {
      Result = "row-resize"}
     else if ($tmp === -17) {
      Result = "progress"}
     else if ($tmp === -18) {
      Result = "not-allowed"}
     else if ($tmp === -19) {
      Result = "wait"}
     else if ($tmp === -20) {
      Result = "help"}
     else if ($tmp === -21) {
      Result = "pointer"}
     else {
      Result = "";
    };
    return Result;
  };
},["Forms"]);
rtl.module("WebExtra",["System","SysUtils","Web"],function () {
  "use strict";
  var $mod = this;
});
rtl.module("StdCtrls",["System","Classes","SysUtils","Types","Web","WebExtra","Graphics","Controls","Forms"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.TEditCharCase = {"0": "ecNormal", ecNormal: 0, "1": "ecUppercase", ecUppercase: 1, "2": "ecLowerCase", ecLowerCase: 2};
  this.$rtti.$Enum("TEditCharCase",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TEditCharCase});
  this.TComboBoxStyle = {"0": "csDropDown", csDropDown: 0, "1": "csSimple", csSimple: 1, "2": "csDropDownList", csDropDownList: 2, "3": "csOwnerDrawFixed", csOwnerDrawFixed: 3, "4": "csOwnerDrawVariable", csOwnerDrawVariable: 4};
  rtl.createClass(this,"TCustomComboBox",pas.Controls.TWinControl,function () {
    this.$init = function () {
      pas.Controls.TWinControl.$init.call(this);
      this.fStyle = 0;
      this.EditElement = null;
      this.SelectElement = null;
      this.FDropDownCount = 0;
      this.FItemHeight = 0;
      this.FItemIndex = 0;
      this.FItems = null;
      this.FOnChange = null;
      this.FSorted = false;
    };
    this.$final = function () {
      this.EditElement = undefined;
      this.SelectElement = undefined;
      this.FItems = undefined;
      this.FOnChange = undefined;
      pas.Controls.TWinControl.$final.call(this);
    };
    this.SetItemHeight = function (AValue) {
      if (this.FItemHeight !== AValue) {
        this.FItemHeight = AValue;
        this.Change();
      };
    };
    this.SetItemIndex = function (AValue) {
      if ((AValue > -1) && (AValue < this.FItems.GetCount())) {
        this.FItemIndex = AValue;
        this.Changed();
      };
    };
    this.SetItems = function (AValue) {
      this.FItems.Assign(AValue);
      this.Changed();
    };
    this.ItemsChange = function (ASender) {
      this.Changed();
    };
    this.Change = function () {
      if (this.FOnChange != null) {
        this.FOnChange(this);
      };
    };
    this.HandleChange = function (AEvent) {
      var Result = false;
      AEvent.stopPropagation();
      this.FItemIndex = this.FHandleElement.selectedIndex;
      this.Change();
      Result = true;
      return Result;
    };
    this.Changed = function () {
      var VIndex = 0;
      var VOptionElement = null;
      var VValue = "";
      pas.Controls.TControl.Changed.call(this);
      if (!this.IsUpdating() && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) {
        for (var $l = this.SelectElement.length - 1; $l >= 0; $l--) {
          VIndex = $l;
          this.SelectElement.remove(VIndex);
        };
        if (this.fStyle === $mod.TComboBoxStyle.csSimple) {
          this.SelectElement.size = 2;
          if (this.EditElement === null) {
            this.EditElement = document.createElement("input");
            this.EditElement.style.setProperty("width",pas.SysUtils.IntToStr(pas.SysUtils.StrToIntDef(pas.SysUtils.StringReplace(this.FHandleElement.style.getPropertyValue("width"),"px","",{}),0) - 8) + "px");
            this.SelectElement.style.setProperty("height",pas.SysUtils.IntToStr(pas.SysUtils.StrToIntDef(pas.SysUtils.StringReplace(this.FHandleElement.style.getPropertyValue("height"),"px","",{}),0) - 22) + "px");
            this.FHandleElement.removeChild(this.SelectElement);
            this.FHandleElement.appendChild(this.EditElement);
            this.FHandleElement.appendChild(this.SelectElement);
          };
        };
        for (var $l1 = 0, $end = this.FItems.GetCount() - 1; $l1 <= $end; $l1++) {
          VIndex = $l1;
          VValue = this.FItems.Get(VIndex);
          VOptionElement = document.createElement("option");
          VOptionElement.value = VValue;
          VOptionElement.text = VValue;
          VOptionElement.selected = VIndex === this.FItemIndex;
          this.SelectElement.add(VOptionElement);
        };
        if (this.FItemIndex < 0) {
          VOptionElement = document.createElement("option");
          VOptionElement.value = "";
          VOptionElement.text = "";
          VOptionElement.selected = true;
          VOptionElement.disabled = true;
          VOptionElement.style.setProperty("display","none");
          this.SelectElement.add(VOptionElement);
        };
        this.SelectElement.style.setProperty("width","100%");
        this.SelectElement.style.setProperty("overflow","hidden");
      };
    };
    this.CreateHandleElement = function () {
      var Result = null;
      Result = document.createElement("div");
      this.SelectElement = document.createElement("select");
      Result.appendChild(this.SelectElement);
      return Result;
    };
    this.RegisterHandleEvents = function () {
      pas.Controls.TWinControl.RegisterHandleEvents.call(this);
      var $with = this.FHandleElement;
      $with.addEventListener("change",rtl.createSafeCallback(this,"HandleChange"));
    };
    this.UnRegisterHandleEvents = function () {
      pas.Controls.TWinControl.UnRegisterHandleEvents.call(this);
      var $with = this.FHandleElement;
      $with.removeEventListener("change",rtl.createSafeCallback(this,"HandleChange"));
    };
    this.CheckChildClassAllowed = function (AChildClass) {
      var Result = false;
      Result = false;
      return Result;
    };
    this.RealGetText = function () {
      var Result = "";
      Result = this.FItems.Get(this.FItemIndex);
      return Result;
    };
    this.RealSetText = function (AValue) {
      var VIndex = 0;
      VIndex = this.FItems.IndexOf(AValue);
      if ((VIndex > -1) && (VIndex < this.FItems.GetCount())) {
        this.FItemIndex = VIndex;
        this.Changed();
      };
    };
    this.GetControlClassDefaultSize = function () {
      var Result = pas.Types.TSize.$new();
      Result.cx = 100;
      Result.cy = 25;
      return Result;
    };
    this.Create$1 = function (AOwner) {
      pas.Controls.TControl.Create$1.call(this,AOwner);
      this.FDropDownCount = 8;
      this.FItemHeight = 0;
      this.FItemIndex = -1;
      this.FItems = pas.Classes.TStringList.$create("Create$1");
      this.FItems.FOnChange = rtl.createCallback(this,"ItemsChange");
      this.FSorted = false;
      this.BeginUpdate();
      try {
        var $with = this.$class.GetControlClassDefaultSize();
        this.SetBounds(0,0,$with.cx,$with.cy);
      } finally {
        this.EndUpdate();
      };
      return this;
    };
    this.Destroy = function () {
      this.FItems.$destroy("Destroy");
      this.FItems = null;
      pas.Controls.TControl.Destroy.call(this);
    };
  });
  this.$rtti.$MethodVar("TSelectionChangeEvent",{procsig: rtl.newTIProcSig([["Sender",pas.System.$rtti["TObject"]],["User",rtl.boolean]]), methodkind: 0});
  rtl.createClass(this,"TCustomListBox",pas.Controls.TWinControl,function () {
    this.$init = function () {
      pas.Controls.TWinControl.$init.call(this);
      this.FItemHeight = 0;
      this.FItemIndex = 0;
      this.FItems = null;
      this.FMultiSelect = false;
      this.FSelectionChanged = false;
      this.FSelected = [];
      this.FSorted = false;
      this.FOnSelectionChange = null;
    };
    this.$final = function () {
      this.FItems = undefined;
      this.FSelected = undefined;
      this.FOnSelectionChange = undefined;
      pas.Controls.TWinControl.$final.call(this);
    };
    this.SetItemHeight = function (AValue) {
      if (this.FItemHeight !== AValue) {
        this.FItemHeight = AValue;
        this.Changed();
      };
    };
    this.SetItemIndex = function (AValue) {
      if ((AValue > -1) && (AValue < this.FItems.GetCount())) {
        this.BeginUpdate();
        try {
          if (this.FMultiSelect) this.ClearSelection();
          this.FItemIndex = AValue;
          this.Changed();
        } finally {
          this.EndUpdate();
        };
      };
    };
    this.SetItems = function (AValue) {
      this.FItems.Assign(AValue);
      this.Changed();
    };
    this.SetMultiSelect = function (AValue) {
      if (this.FMultiSelect !== AValue) {
        this.ClearSelection();
        this.FMultiSelect = AValue;
        if (!(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) this.FSelectionChanged = true;
        this.Changed();
      };
    };
    this.SetSelected = function (Index, AValue) {
      var i = 0;
      if (Index > (rtl.length(this.FSelected) - 1)) throw pas.Classes.EListError.$create("CreateFmt",[rtl.getResStr(pas.RTLConsts,"SListIndexError"),pas.System.VarRecs(0,Index)]);
      if (AValue && !this.FMultiSelect) {
        for (var $l = 0, $end = rtl.length(this.FSelected) - 1; $l <= $end; $l++) {
          i = $l;
          if (this.FSelected[i]) this.FSelected[i] = false;
        };
      };
      this.FSelected[Index] = AValue;
      if (AValue) {
        this.FItemIndex = Index}
       else {
        this.FItemIndex = -1;
        if (this.FMultiSelect) {
          for (var $l1 = 0, $end1 = rtl.length(this.FSelected) - 1; $l1 <= $end1; $l1++) {
            i = $l1;
            if (this.FSelected[i]) {
              this.FItemIndex = i;
              break;
            };
          };
        };
      };
      if (!(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) this.FSelectionChanged = true;
      this.Changed();
    };
    this.ItemsChanged = function (ASender) {
      if (rtl.length(this.FSelected) !== this.FItems.GetCount()) this.FSelected = rtl.arraySetLength(this.FSelected,false,this.FItems.GetCount());
      this.Changed();
    };
    this.SelectionChange = function (AUser) {
      if (this.FOnSelectionChange != null) this.FOnSelectionChange(this,AUser);
    };
    this.HandleChange = function (AEvent) {
      var Result = false;
      var i = 0;
      AEvent.stopPropagation();
      var $with = this.FHandleElement;
      this.FItemIndex = $with.selectedIndex;
      for (var $l = 0, $end = $with.length - 1; $l <= $end; $l++) {
        i = $l;
        this.FSelected[i] = $with.item(i).selected;
      };
      this.SelectionChange(true);
      Result = true;
      return Result;
    };
    this.Changed = function () {
      var idx = 0;
      var v = "";
      var opt = null;
      pas.Controls.TControl.Changed.call(this);
      if (!this.IsUpdating() && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) {
        if (this.FSelectionChanged) {
          this.SelectionChange(false);
          this.FSelectionChanged = false;
        };
        var $with = this.FHandleElement;
        $with.style.setProperty("overflow-y","scroll");
        $with.multiple = this.FMultiSelect;
        $with.size = 2;
        for (var $l = this.FHandleElement.length - 1; $l >= 0; $l--) {
          idx = $l;
          $with.remove(idx);
        };
        for (var $l1 = 0, $end = this.FItems.GetCount() - 1; $l1 <= $end; $l1++) {
          idx = $l1;
          v = this.FItems.Get(idx);
          opt = document.createElement("option");
          opt.value = v;
          opt.text = v;
          if (this.FMultiSelect) {
            opt.selected = this.FSelected[idx]}
           else opt.selected = idx === this.FItemIndex;
          $with.add(opt);
        };
      };
    };
    this.CreateHandleElement = function () {
      var Result = null;
      Result = document.createElement("select");
      return Result;
    };
    this.RegisterHandleEvents = function () {
      pas.Controls.TWinControl.RegisterHandleEvents.call(this);
      var $with = this.FHandleElement;
      $with.addEventListener("change",rtl.createSafeCallback(this,"HandleChange"));
    };
    this.UnRegisterHandleEvents = function () {
      pas.Controls.TWinControl.UnRegisterHandleEvents.call(this);
      var $with = this.FHandleElement;
      $with.removeEventListener("change",rtl.createSafeCallback(this,"HandleChange"));
    };
    this.CheckChildClassAllowed = function (AChildClass) {
      var Result = false;
      Result = false;
      return Result;
    };
    this.GetControlClassDefaultSize = function () {
      var Result = pas.Types.TSize.$new();
      Result.cx = 100;
      Result.cy = 70;
      return Result;
    };
    this.Create$1 = function (AOwner) {
      pas.Controls.TControl.Create$1.call(this,AOwner);
      this.FItemHeight = 0;
      this.FItemIndex = -1;
      this.FItems = pas.Classes.TStringList.$create("Create$1");
      this.FItems.FOnChange = rtl.createCallback(this,"ItemsChanged");
      this.FMultiSelect = false;
      this.FSorted = false;
      this.BeginUpdate();
      try {
        var $with = this.$class.GetControlClassDefaultSize();
        this.SetBounds(0,0,$with.cx,$with.cy);
      } finally {
        this.EndUpdate();
      };
      return this;
    };
    this.Destroy = function () {
      rtl.free(this,"FItems");
      pas.Controls.TControl.Destroy.call(this);
    };
    this.Clear = function () {
      this.FItems.Clear();
      this.FItemIndex = -1;
      this.FSelected = [];
      this.Changed();
    };
    this.ClearSelection = function () {
      var i = 0;
      if (this.FMultiSelect) {
        this.BeginUpdate();
        try {
          for (var $l = 0, $end = this.FItems.GetCount() - 1; $l <= $end; $l++) {
            i = $l;
            this.SetSelected(i,false);
          };
        } finally {
          this.EndUpdate();
        };
      } else this.SetItemIndex(-1);
    };
  });
  rtl.createClass(this,"TCustomEdit",pas.Controls.TWinControl,function () {
    this.$init = function () {
      pas.Controls.TWinControl.$init.call(this);
      this.FAlignment = 0;
      this.FCharCase = 0;
      this.FMaxLength = 0;
      this.FModified = false;
      this.FPasswordChar = "";
      this.FPattern = "";
      this.FReadOnly = false;
      this.FRequired = false;
      this.FSelLength = 0;
      this.FSelStart = 0;
      this.FText = "";
      this.FTextHint = "";
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Controls.TWinControl.$final.call(this);
    };
    this.SetAlignment = function (AValue) {
      if (this.FAlignment !== AValue) {
        this.FAlignment = AValue;
        this.Changed();
      };
    };
    this.SetCharCase = function (AValue) {
      if (this.FCharCase !== AValue) {
        this.FCharCase = AValue;
        this.Changed();
      };
    };
    this.SetMaxLength = function (AValue) {
      if (this.FMaxLength !== AValue) {
        this.FMaxLength = AValue;
        this.Changed();
      };
    };
    this.SetPasswordChar = function (AValue) {
      if (this.FPasswordChar !== AValue) {
        this.FPasswordChar = AValue;
        this.Changed();
      };
    };
    this.SetReadOnly = function (AValue) {
      if (this.FReadOnly !== AValue) {
        this.FReadOnly = AValue;
        this.Changed();
      };
    };
    this.SetSelLength = function (AValue) {
      if (AValue < 0) {
        AValue = 0;
      };
      if (this.FSelLength !== AValue) {
        this.FSelLength = AValue;
        this.Changed();
      };
    };
    this.SetSelStart = function (AValue) {
      if (this.FSelStart !== AValue) {
        this.FSelStart = AValue;
        this.Changed();
      };
    };
    this.SetTextHint = function (AValue) {
      if (this.FTextHint !== AValue) {
        this.FTextHint = AValue;
        this.Changed();
      };
    };
    this.Change = function () {
      if (this.FOnChange != null) {
        this.FOnChange(this);
      };
    };
    this.DoEnter = function () {
      pas.Controls.TWinControl.DoEnter.call(this);
      this.SelectAll();
    };
    this.DoInput = function (ANewValue) {
      if (ANewValue !== this.RealGetText()) {
        this.FText = ANewValue;
        this.FModified = true;
        this.Change();
      };
    };
    this.HandleInput = function (AEvent) {
      var Result = false;
      AEvent.stopPropagation();
      this.DoInput(this.FHandleElement.value);
      Result = true;
      return Result;
    };
    this.Changed = function () {
      pas.Controls.TControl.Changed.call(this);
      if (!this.IsUpdating() && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) {
        var $with = this.FHandleElement;
        var $tmp = this.FAlignment;
        if ($tmp === pas.Classes.TAlignment.taRightJustify) {
          $with.style.setProperty("text-align","right")}
         else if ($tmp === pas.Classes.TAlignment.taCenter) {
          $with.style.setProperty("text-align","center")}
         else {
          $with.style.removeProperty("text-align");
        };
        var $tmp1 = this.FCharCase;
        if ($tmp1 === $mod.TEditCharCase.ecLowerCase) {
          $with.style.setProperty("text-transform","lowercase")}
         else if ($tmp1 === $mod.TEditCharCase.ecUppercase) {
          $with.style.setProperty("text-transform","uppercase")}
         else {
          $with.style.removeProperty("text-transform");
        };
        if (this.FMaxLength > 0) {
          $with.maxLength = this.FMaxLength;
        } else {
          $with.removeAttribute("maxlength");
        };
        if (this.FPattern !== "") {
          $with.pattern = this.FPattern;
        } else {
          $with.removeAttribute("pattern");
        };
        if (this.FTextHint !== "") {
          $with.placeholder = this.FTextHint;
        } else {
          $with.removeAttribute("placeholder");
        };
        $with.readOnly = this.FReadOnly;
        $with.required = this.FRequired;
        var $tmp2 = this.InputType();
        if (($tmp2 === "text") || ($tmp2 === "search") || ($tmp2 === "URL") || ($tmp2 === "tel") || ($tmp2 === "password")) {
          $with.setSelectionRange(this.FSelStart,this.FSelStart + this.FSelLength);
        };
        $with.type = this.InputType();
        $with.value = this.RealGetText();
      };
    };
    this.CreateHandleElement = function () {
      var Result = null;
      Result = document.createElement("input");
      return Result;
    };
    this.RegisterHandleEvents = function () {
      pas.Controls.TWinControl.RegisterHandleEvents.call(this);
      var $with = this.FHandleElement;
      $with.addEventListener("input",rtl.createSafeCallback(this,"HandleInput"));
    };
    this.UnRegisterHandleEvents = function () {
      pas.Controls.TWinControl.UnRegisterHandleEvents.call(this);
      var $with = this.FHandleElement;
      $with.removeEventListener("input",rtl.createSafeCallback(this,"HandleInput"));
    };
    this.CheckChildClassAllowed = function (AChildClass) {
      var Result = false;
      Result = pas.Controls.TWinControl.CheckChildClassAllowed.call(this,AChildClass);
      return Result;
    };
    this.RealGetText = function () {
      var Result = "";
      Result = this.FText;
      return Result;
    };
    this.RealSetText = function (AValue) {
      this.FText = AValue;
      this.FModified = false;
      this.Changed();
    };
    this.InputType = function () {
      var Result = "";
      Result = pas.Controls.IfThen$3(this.FPasswordChar !== "\x00","password","text");
      return Result;
    };
    this.GetControlClassDefaultSize = function () {
      var Result = pas.Types.TSize.$new();
      Result.cx = 80;
      Result.cy = 25;
      return Result;
    };
    this.Create$1 = function (AOwner) {
      pas.Controls.TControl.Create$1.call(this,AOwner);
      this.FMaxLength = 0;
      this.FModified = false;
      this.FPasswordChar = "\x00";
      this.FPattern = "";
      this.FReadOnly = false;
      this.FTextHint = "";
      this.FText = "";
      this.BeginUpdate();
      try {
        var $with = this.$class.GetControlClassDefaultSize();
        this.SetBounds(0,0,$with.cx,$with.cy);
      } finally {
        this.EndUpdate();
      };
      return this;
    };
    this.SelectAll = function () {
      if (this.RealGetText() !== "") {
        this.BeginUpdate();
        try {
          this.SetSelStart(0);
          this.SetSelLength(this.RealGetText().length);
        } finally {
          this.EndUpdate();
        };
      };
    };
  });
  rtl.createClass(this,"TCustomMemo",pas.Controls.TWinControl,function () {
    this.$init = function () {
      pas.Controls.TWinControl.$init.call(this);
      this.FAlignment = 0;
      this.FCharCase = 0;
      this.FLines = null;
      this.FMaxLength = 0;
      this.FModified = false;
      this.FReadOnly = false;
      this.FTextHint = "";
      this.FWantReturns = false;
      this.FWantTabs = false;
      this.FWordWrap = false;
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FLines = undefined;
      this.FOnChange = undefined;
      pas.Controls.TWinControl.$final.call(this);
    };
    this.SetAlignment = function (AValue) {
      if (this.FAlignment !== AValue) {
        this.FAlignment = AValue;
        this.Changed();
      };
    };
    this.SetCharCase = function (AValue) {
      if (this.FCharCase !== AValue) {
        this.FCharCase = AValue;
        this.Changed();
      };
    };
    this.SetLines = function (AValue) {
      this.FLines.Assign(AValue);
      this.Changed();
    };
    this.SetMaxLength = function (AValue) {
      if (this.FMaxLength !== AValue) {
        this.FMaxLength = AValue;
        this.Changed();
      };
    };
    this.SetReadOnly = function (AValue) {
      if (this.FReadOnly !== AValue) {
        this.FReadOnly = AValue;
        this.Changed();
      };
    };
    this.SetTextHint = function (AValue) {
      if (this.FTextHint !== AValue) {
        this.FTextHint = AValue;
      };
    };
    this.SetWantReturns = function (AValue) {
      if (this.FWantReturns !== AValue) {
        this.FWantReturns = AValue;
      };
    };
    this.SetWantTabs = function (AValue) {
      if (this.FWantTabs !== AValue) {
        this.FWantTabs = AValue;
      };
    };
    this.SetWordWrap = function (AValue) {
      if (this.FWordWrap !== AValue) {
        this.FWordWrap = AValue;
        this.Changed();
      };
    };
    this.Change = function () {
      if (this.FOnChange != null) {
        this.FOnChange(this);
      };
    };
    this.KeyDown = function (Key, Shift) {
      pas.Controls.TWinControl.KeyDown.call(this,Key,rtl.refSet(Shift));
      if (!this.FWantReturns && (Key.get() === 13)) {
        Key.set(0);
      };
    };
    this.HandleChange = function (AEvent) {
      var Result = false;
      var VNewText = "";
      var VOldText = "";
      AEvent.stopPropagation();
      VNewText = this.FHandleElement.value;
      VOldText = this.RealGetText();
      if (VNewText !== VOldText) {
        this.FLines.SetTextStr(VNewText);
        this.FModified = true;
        this.Change();
      };
      Result = true;
      return Result;
    };
    this.Changed = function () {
      pas.Controls.TControl.Changed.call(this);
      if (!this.IsUpdating() && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) {
        var $with = this.FHandleElement;
        var $tmp = this.FAlignment;
        if ($tmp === pas.Classes.TAlignment.taRightJustify) {
          $with.style.setProperty("text-align","right")}
         else if ($tmp === pas.Classes.TAlignment.taCenter) {
          $with.style.setProperty("text-align","center")}
         else {
          $with.style.removeProperty("text-align");
        };
        var $tmp1 = this.FCharCase;
        if ($tmp1 === $mod.TEditCharCase.ecLowerCase) {
          $with.style.setProperty("text-transform","lowercase")}
         else if ($tmp1 === $mod.TEditCharCase.ecUppercase) {
          $with.style.setProperty("text-transform","uppercase")}
         else {
          $with.style.removeProperty("text-transform");
        };
        if (this.FMaxLength > 0) {
          $with.maxLength = this.FMaxLength;
        } else {
          $with.removeAttribute("maxlength");
        };
        if (this.FTextHint !== "") {
          $with.placeholder = this.FTextHint;
        } else {
          $with.removeAttribute("placeholder");
        };
        $with.readOnly = this.FReadOnly;
        $with.style.setProperty("resize","none");
        if (this.FWordWrap) {
          $with.removeAttribute("wrap");
        } else {
          $with.wrap = "off";
        };
        $with.style.setProperty("overflow","auto");
        $with.value = this.RealGetText();
      };
    };
    this.CreateHandleElement = function () {
      var Result = null;
      Result = document.createElement("textarea");
      return Result;
    };
    this.RegisterHandleEvents = function () {
      pas.Controls.TWinControl.RegisterHandleEvents.call(this);
      var $with = this.FHandleElement;
      $with.addEventListener("input",rtl.createSafeCallback(this,"HandleChange"));
    };
    this.UnRegisterHandleEvents = function () {
      pas.Controls.TWinControl.UnRegisterHandleEvents.call(this);
      var $with = this.FHandleElement;
      $with.removeEventListener("input",rtl.createSafeCallback(this,"HandleChange"));
    };
    this.CheckChildClassAllowed = function (AChildClass) {
      var Result = false;
      Result = false;
      return Result;
    };
    this.RealGetText = function () {
      var Result = "";
      Result = this.FLines.GetTextStr();
      return Result;
    };
    this.RealSetText = function (AValue) {
      this.FLines.SetTextStr(AValue);
      this.FModified = false;
      this.Changed();
    };
    this.GetControlClassDefaultSize = function () {
      var Result = pas.Types.TSize.$new();
      Result.cx = 150;
      Result.cy = 90;
      return Result;
    };
    this.Create$1 = function (AOwner) {
      pas.Controls.TControl.Create$1.call(this,AOwner);
      this.FLines = $impl.TCustomMemoStrings.$create("Create$1");
      this.FMaxLength = 0;
      this.FModified = false;
      this.FReadOnly = false;
      this.FTextHint = "";
      this.FWantReturns = true;
      this.FWantTabs = false;
      this.FWordWrap = true;
      this.BeginUpdate();
      try {
        var $with = this.$class.GetControlClassDefaultSize();
        this.SetBounds(0,0,$with.cx,$with.cy);
      } finally {
        this.EndUpdate();
      };
      return this;
    };
    this.Destroy = function () {
      this.FLines.$destroy("Destroy");
      this.FLines = null;
      pas.Controls.TControl.Destroy.call(this);
    };
    this.Append = function (AValue) {
      this.FLines.Append(AValue);
      this.Changed();
    };
  });
  rtl.createClass(this,"TCustomButton",pas.Controls.TWinControl,function () {
    this.$init = function () {
      pas.Controls.TWinControl.$init.call(this);
      this.FCancel = false;
      this.FDefault = false;
      this.FModalResult = 0;
    };
    this.SetCancel = function (AValue) {
      if (this.FCancel !== AValue) {
        this.FCancel = AValue;
      };
    };
    this.SetDefault = function (AValue) {
      if (this.FDefault !== AValue) {
        this.FDefault = AValue;
      };
    };
    this.Changed = function () {
      pas.Controls.TControl.Changed.call(this);
      if (!this.IsUpdating() && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) {
        var $with = this.FHandleElement;
        $with.style.setProperty("padding","0");
        $with.innerHTML = this.GetText();
      };
    };
    this.CreateHandleElement = function () {
      var Result = null;
      Result = document.createElement("button");
      return Result;
    };
    this.CheckChildClassAllowed = function (AChildClass) {
      var Result = false;
      Result = false;
      return Result;
    };
    this.GetControlClassDefaultSize = function () {
      var Result = pas.Types.TSize.$new();
      Result.cx = 80;
      Result.cy = 25;
      return Result;
    };
    this.Create$1 = function (AOwner) {
      pas.Controls.TControl.Create$1.call(this,AOwner);
      this.FModalResult = 0;
      this.BeginUpdate();
      try {
        var $with = this.$class.GetControlClassDefaultSize();
        this.SetBounds(0,0,$with.cx,$with.cy);
      } finally {
        this.EndUpdate();
      };
      return this;
    };
    this.AdjustSize = function () {
      var VSize = pas.Types.TSize.$new();
      pas.Controls.TControl.AdjustSize.call(this);
      VSize.$assign(this.FFont.TextExtent(this.GetText()));
      this.SetBounds(this.FLeft,this.FTop,VSize.cx,VSize.cy);
    };
    this.Click = function () {
      var VParent = null;
      if (this.FModalResult !== 0) {
        VParent = this.FParent;
        while (VParent != null) {
          if (pas.Forms.TCustomForm.isPrototypeOf(VParent)) {
            VParent.SetModalResult(this.FModalResult);
            break;
          };
          VParent = VParent.FParent;
        };
      };
      pas.Controls.TControl.Click.call(this);
    };
  });
  this.TCheckBoxState = {"0": "cbUnchecked", cbUnchecked: 0, "1": "cbChecked", cbChecked: 1, "2": "cbGrayed", cbGrayed: 2};
  this.$rtti.$Enum("TCheckBoxState",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TCheckBoxState});
  this.$rtti.$Enum("TLeftRight",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TAlignment});
  rtl.createClass(this,"TCustomCheckbox",pas.Controls.TWinControl,function () {
    this.$init = function () {
      pas.Controls.TWinControl.$init.call(this);
      this.FAlignment = pas.Classes.TAlignment.taLeftJustify;
      this.FLabelElement = null;
      this.FMarkElement = null;
      this.FState = 0;
      this.FOnChange = null;
      this.FAllowGrayed = false;
    };
    this.$final = function () {
      this.FLabelElement = undefined;
      this.FMarkElement = undefined;
      this.FOnChange = undefined;
      pas.Controls.TWinControl.$final.call(this);
    };
    this.GetChecked = function () {
      var Result = false;
      Result = this.GetState() === $mod.TCheckBoxState.cbChecked;
      return Result;
    };
    this.GetState = function () {
      var Result = 0;
      Result = this.FState;
      return Result;
    };
    this.SetAlignment = function (AValue) {
      if (this.FAlignment !== AValue) {
        this.FAlignment = AValue;
        this.Changed();
      };
    };
    this.SetChecked = function (AValue) {
      if (AValue) {
        this.SetState($mod.TCheckBoxState.cbChecked);
      } else {
        this.SetState($mod.TCheckBoxState.cbUnchecked);
      };
    };
    this.SetState = function (AValue) {
      if (this.FState !== AValue) {
        this.FState = AValue;
        this.Changed();
        this.DoOnChange();
      };
    };
    this.DoOnChange = function () {
      if (this.FOnChange != null) {
        this.FOnChange(this);
      };
    };
    this.HandleClick = function (AEvent) {
      var Result = false;
      this.SetChecked(this.FState !== $mod.TCheckBoxState.cbChecked);
      Result = pas.Controls.TControl.HandleClick.call(this,AEvent);
      return Result;
    };
    this.Changed = function () {
      pas.Controls.TControl.Changed.call(this);
      if (!this.IsUpdating() && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) {
        if (this.FAlignment === pas.Classes.TAlignment.taLeftJustify) {
          this.FHandleElement.removeChild(this.FMarkElement);
          this.FHandleElement.removeChild(this.FLabelElement);
          this.FLabelElement = this.CreateLabelElement();
          this.FMarkElement = this.CreateMarkElement();
        };
        var $with = this.FHandleElement;
        $with.style.setProperty("user-select","none");
        $with.style.setProperty("-moz-user-select","none");
        $with.style.setProperty("-ms-user-select","none");
        $with.style.setProperty("-khtml-user-select","none");
        $with.style.setProperty("-webkit-user-select","none");
        $with.style.setProperty("display","flex");
        $with.style.setProperty("align-items","center");
        var $with1 = this.FMarkElement;
        $with1.checked = this.FState === $mod.TCheckBoxState.cbChecked;
        $with1.indeterminate = this.FState === $mod.TCheckBoxState.cbGrayed;
        $with1.type = "checkbox";
        var $with2 = this.FLabelElement;
        if (pas.Graphics.TFontStyle.fsItalic in this.FFont.FStyle) $with2.style.setProperty("font-style","italic");
        if (pas.Graphics.TFontStyle.fsBold in this.FFont.FStyle) $with2.style.setProperty("font-weight","bold");
        $with2.innerHTML = this.GetText();
      };
    };
    this.CreateHandleElement = function () {
      var Result = null;
      Result = document.createElement("div");
      return Result;
    };
    this.CreateMarkElement = function () {
      var Result = null;
      Result = this.FHandleElement.appendChild(document.createElement("input"));
      return Result;
    };
    this.CreateLabelElement = function () {
      var Result = null;
      Result = this.FHandleElement.appendChild(document.createElement("span"));
      return Result;
    };
    this.CheckChildClassAllowed = function (AChildClass) {
      var Result = false;
      Result = false;
      return Result;
    };
    this.GetControlClassDefaultSize = function () {
      var Result = pas.Types.TSize.$new();
      Result.cx = 90;
      Result.cy = 23;
      return Result;
    };
    this.Create$1 = function (AOwner) {
      pas.Controls.TControl.Create$1.call(this,AOwner);
      this.FMarkElement = this.CreateMarkElement();
      this.FLabelElement = this.CreateLabelElement();
      this.FAlignment = pas.Classes.TAlignment.taRightJustify;
      this.FState = $mod.TCheckBoxState.cbUnchecked;
      try {
        var $with = this.$class.GetControlClassDefaultSize();
        this.SetBounds(0,0,$with.cx,$with.cy);
      } finally {
        this.EndUpdate();
      };
      return this;
    };
  });
  rtl.createClass(this,"TCustomLabel",pas.Controls.TWinControl,function () {
    this.$init = function () {
      pas.Controls.TWinControl.$init.call(this);
      this.FAlignment = 0;
      this.FContentElement = null;
      this.FFocusControl = null;
      this.FLayout = 0;
      this.FTransparent = false;
      this.FWordWrap = false;
    };
    this.$final = function () {
      this.FContentElement = undefined;
      this.FFocusControl = undefined;
      pas.Controls.TWinControl.$final.call(this);
    };
    this.SetAlignment = function (AValue) {
      if (this.FAlignment !== AValue) {
        this.FAlignment = AValue;
        this.Changed();
      };
    };
    this.SetLayout = function (AValue) {
      if (this.FLayout !== AValue) {
        this.FLayout = AValue;
        this.Changed();
      };
    };
    this.SetTransparent = function (AValue) {
      if (this.FTransparent !== AValue) {
        this.FTransparent = AValue;
        this.BeginUpdate();
        try {
          if (this.FTransparent) {
            this.SetColor(536870911);
          } else if (this.FColor === 536870911) {
            this.SetColor(-2147483647);
          };
        } finally {
          this.EndUpdate();
        };
      };
    };
    this.SetWordWrap = function (AValue) {
      if (this.FWordWrap !== AValue) {
        this.FWordWrap = AValue;
        this.Changed();
      };
    };
    this.DoEnter = function () {
      pas.Controls.TWinControl.DoEnter.call(this);
      if ((this.FFocusControl != null) && this.FFocusControl.CanSetFocus()) {
        this.FFocusControl.SetFocus();
      };
    };
    this.Changed = function () {
      pas.Controls.TControl.Changed.call(this);
      if (!this.IsUpdating() && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) {
        var $with = this.FHandleElement;
        if (this.FTransparent) {
          $with.style.setProperty("background-color","transparent");
        };
        $with.style.setProperty("outline","none");
        $with.style.setProperty("user-select","none");
        $with.style.setProperty("-moz-user-select","none");
        $with.style.setProperty("-ms-user-select","none");
        $with.style.setProperty("-khtml-user-select","none");
        $with.style.setProperty("-webkit-user-select","none");
        if (this.FAutoSize) {
          $with.style.removeProperty("height");
          $with.style.removeProperty("width");
        };
        var $with1 = this.FContentElement;
        $with1.innerHTML = "";
        var $tmp = this.FAlignment;
        if ($tmp === pas.Classes.TAlignment.taCenter) {
          $with1.style.setProperty("text-align","center")}
         else if ($tmp === pas.Classes.TAlignment.taLeftJustify) {
          $with1.style.setProperty("text-align","left")}
         else if ($tmp === pas.Classes.TAlignment.taRightJustify) $with1.style.setProperty("text-align","right");
        var $tmp1 = this.FLayout;
        if ($tmp1 === pas.Graphics.TTextLayout.tlBottom) {
          $with1.style.setProperty("vertical-align","bottom")}
         else if ($tmp1 === pas.Graphics.TTextLayout.tlCenter) {
          $with1.style.setProperty("vertical-align","middle")}
         else if ($tmp1 === pas.Graphics.TTextLayout.tlTop) $with1.style.setProperty("vertical-align","top");
        if (this.FWordWrap) {
          $with1.style.setProperty("word-wrap","break-word");
        } else {
          $with1.style.removeProperty("word-wrap");
        };
        $with1.style.setProperty("overflow","hidden");
        $with1.style.setProperty("text-overflow","ellipsis");
        $with1.innerHTML = this.GetText();
      };
    };
    this.CreateHandleElement = function () {
      var Result = null;
      Result = document.createElement("div");
      return Result;
    };
    this.CreateContentElement = function () {
      var Result = null;
      Result = this.FHandleElement.appendChild(document.createElement("label"));
      return Result;
    };
    this.CheckChildClassAllowed = function (AChildClass) {
      var Result = false;
      Result = false;
      return Result;
    };
    this.GetControlClassDefaultSize = function () {
      var Result = pas.Types.TSize.$new();
      Result.cx = 65;
      Result.cy = 17;
      return Result;
    };
    this.Create$1 = function (AOwner) {
      pas.Controls.TControl.Create$1.call(this,AOwner);
      this.FContentElement = this.CreateContentElement();
      this.FAlignment = pas.Classes.TAlignment.taLeftJustify;
      this.FFocusControl = null;
      this.FLayout = pas.Graphics.TTextLayout.tlTop;
      this.FTransparent = true;
      this.FWordWrap = false;
      this.BeginUpdate();
      try {
        this.SetTabStop(false);
        this.SetAutoSize(true);
        var $with = this.$class.GetControlClassDefaultSize();
        this.SetBounds(0,0,$with.cx,$with.cy);
      } finally {
        this.EndUpdate();
      };
      return this;
    };
    this.AdjustSize = function () {
      pas.Controls.TControl.AdjustSize.call(this);
      this.Changed();
    };
  });
  $mod.$implcode = function () {
    rtl.createClass($impl,"TCustomMemoStrings",pas.Classes.TStringList,function () {
    });
  };
},["RTLConsts"]);
rtl.module("TopTypes",["System","Classes","SysUtils"],function () {
  "use strict";
  var $mod = this;
  this.TStaticBorderStyle = {"0": "sbsNone", sbsNone: 0, "1": "sbsSingle", sbsSingle: 1, "2": "sbsSunken", sbsSunken: 2};
  this.$rtti.$Enum("TStaticBorderStyle",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TStaticBorderStyle});
  this.TOrientation = {"0": "trHorizontal", trHorizontal: 0, "1": "trVertical", trVertical: 1};
  this.$rtti.$Enum("TOrientation",{minvalue: 0, maxvalue: 1, ordtype: 1, enumtype: this.TOrientation});
  this.TTickStyle = {"0": "tsAuto", tsAuto: 0, "1": "tsManual", tsManual: 1, "2": "tsNone", tsNone: 2};
  this.$rtti.$Enum("TTickStyle",{minvalue: 0, maxvalue: 2, ordtype: 1, enumtype: this.TTickStyle});
  this.MenuItemHeight = 30;
});
rtl.module("ExtCtrls",["System","Classes","SysUtils","Types","Web","Graphics","Controls"],function () {
  "use strict";
  var $mod = this;
  rtl.createClass(this,"TCustomImage",pas.Controls.TCustomControl,function () {
    this.$init = function () {
      pas.Controls.TCustomControl.$init.call(this);
      this.FCenter = false;
      this.FPicture = null;
      this.FProportional = false;
      this.FStretch = false;
      this.FOnPictureChanged = null;
      this.FStretchInEnabled = false;
      this.FStretchOutEnabled = false;
      this.FTransparent = false;
      this.FURL = "";
    };
    this.$final = function () {
      this.FPicture = undefined;
      this.FOnPictureChanged = undefined;
      pas.Controls.TCustomControl.$final.call(this);
    };
    this.SetCenter = function (AValue) {
      if (this.FCenter !== AValue) {
        this.FCenter = AValue;
        this.PictureChanged(this);
      };
    };
    this.SetProportional = function (AValue) {
      if (this.FProportional !== AValue) {
        this.FProportional = AValue;
        this.PictureChanged(this);
      };
    };
    this.SetStretch = function (AValue) {
      if (this.FStretch !== AValue) {
        this.FStretch = AValue;
        this.PictureChanged(this);
      };
    };
    this.SetStretchInEnabled = function (AValue) {
      if (this.FStretchInEnabled !== AValue) ;
      this.FStretchInEnabled = AValue;
      this.PictureChanged(this);
    };
    this.SetStretchOutEnabled = function (AValue) {
      if (this.FStretchOutEnabled !== AValue) {
        this.FStretchOutEnabled = AValue;
        this.PictureChanged(this);
      };
    };
    this.SetTransparent = function (AValue) {
      if (this.FTransparent === AValue) {
        this.FTransparent = AValue;
      };
    };
    this.SetURL = function (AValue) {
      if (this.FURL === AValue) return;
      this.FURL = AValue;
      this.PictureChanged(this);
    };
    this.Changed = function () {
      pas.Controls.TControl.Changed.call(this);
      if (!this.IsUpdating() && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) {
        var $with = this.FHandleElement;
        $with.style.setProperty("outline","none");
        $with.style.setProperty("background-image",pas.SysUtils.Format("url('%s')",pas.System.VarRecs(18,this.FURL)));
        $with.style.setProperty("background-repeat","no-repeat");
        if (this.FCenter) {
          $with.style.setProperty("background-position","center  center");
        } else {
          $with.style.removeProperty("background-position");
        };
        if (this.FProportional) {
          $with.style.setProperty("background-size","contain");
        } else if (this.FStretch) {
          if (this.FStretchInEnabled && this.FStretchOutEnabled) {
            $with.style.setProperty("background-size","100% 100%");
          } else if (this.FStretchInEnabled) {
            $with.style.setProperty("background-size","auto 100%");
          } else if (this.FStretchOutEnabled) {
            $with.style.setProperty("background-size","100% auto");
          };
        } else {
          $with.style.setProperty("background-size","auto");
        };
      };
    };
    this.CreateHandleElement = function () {
      var Result = null;
      Result = document.createElement("div");
      return Result;
    };
    this.CheckChildClassAllowed = function (AChildClass) {
      var Result = false;
      Result = false;
      return Result;
    };
    this.PictureChanged = function (Sender) {
      this.Changed();
      if (this.FOnPictureChanged != null) {
        this.FOnPictureChanged(this);
      };
    };
    this.GetControlClassDefaultSize = function () {
      var Result = pas.Types.TSize.$new();
      Result.cx = 90;
      Result.cy = 90;
      return Result;
    };
    this.Create$1 = function (AOwner) {
      pas.Controls.TControl.Create$1.call(this,AOwner);
      this.FPicture = pas.Graphics.TPicture.$create("Create$1");
      this.FPicture.FOnChange = rtl.createCallback(this,"PictureChanged");
      this.FCenter = false;
      this.FProportional = false;
      this.FStretch = false;
      this.FStretchOutEnabled = true;
      this.FStretchInEnabled = true;
      this.FTransparent = false;
      this.BeginUpdate();
      try {
        var $with = this.$class.GetControlClassDefaultSize();
        this.SetBounds(0,0,$with.cx,$with.cy);
      } finally {
        this.EndUpdate();
      };
      return this;
    };
  });
  this.$rtti.$Int("TBevelWidth",{minvalue: 1, maxvalue: 2147483647, ordtype: 5});
  rtl.createClass(this,"TCustomPanel",pas.Controls.TCustomControl,function () {
    this.$init = function () {
      pas.Controls.TCustomControl.$init.call(this);
      this.FContentElement = null;
      this.FAlignment = 0;
      this.FBevelColor = 0;
      this.FBevelInner = 0;
      this.FBevelOuter = 0;
      this.FBevelWidth = 0;
      this.FLayout = 0;
      this.FWordWrap = false;
    };
    this.$final = function () {
      this.FContentElement = undefined;
      pas.Controls.TCustomControl.$final.call(this);
    };
    this.SetAlignment = function (AValue) {
      if (this.FAlignment !== AValue) {
        this.FAlignment = AValue;
        this.Changed();
      };
    };
    this.SetBevelColor = function (AValue) {
      if (this.FBevelColor !== AValue) {
        this.FBevelColor = AValue;
        this.Changed();
      };
    };
    this.SetBevelInner = function (AValue) {
      if (this.FBevelInner !== AValue) {
        this.FBevelInner = AValue;
        this.Changed();
      };
    };
    this.SetBevelOuter = function (AValue) {
      if (this.FBevelOuter !== AValue) {
        this.FBevelOuter = AValue;
        this.Changed();
      };
    };
    this.SetBevelWidth = function (AValue) {
      if (this.FBevelWidth !== AValue) {
        this.FBevelWidth = AValue;
        this.Changed();
      };
    };
    this.SetLayout = function (AValue) {
      if (this.FLayout !== AValue) {
        this.FLayout = AValue;
        this.Changed();
      };
    };
    this.SetWordWrap = function (AValue) {
      if (this.FWordWrap !== AValue) {
        this.FWordWrap = AValue;
        this.Changed();
      };
    };
    this.Changed = function () {
      var VTopColor = 0;
      var VBottomColor = 0;
      pas.Controls.TControl.Changed.call(this);
      if (!this.IsUpdating() && !(pas.Classes.TComponentStateItem.csLoading in this.FComponentState)) {
        var $with = this.FHandleElement;
        if (this.FBevelOuter === pas.Controls.TBevelCut.bvNone) {
          $with.style.removeProperty("border-width");
          $with.style.removeProperty("border-left-color");
          $with.style.removeProperty("border-left-style");
          $with.style.removeProperty("border-top-color");
          $with.style.removeProperty("border-top-style");
          $with.style.removeProperty("border-right-color");
          $with.style.removeProperty("border-right-style");
          $with.style.removeProperty("border-bottom-color");
          $with.style.removeProperty("border-bottom-style");
        } else {
          if (this.FBevelColor === 536870912) {
            var $tmp = this.FBevelOuter;
            if ($tmp === pas.Controls.TBevelCut.bvLowered) {
              VTopColor = 8421504;
              VBottomColor = 16777215;
            } else if ($tmp === pas.Controls.TBevelCut.bvRaised) {
              VTopColor = 16777215;
              VBottomColor = 8421504;
            } else {
              VTopColor = this.FColor;
              VBottomColor = this.FColor;
            };
          } else {
            VTopColor = this.FBevelColor;
            VBottomColor = this.FBevelColor;
          };
          $with.style.setProperty("border-width",pas.SysUtils.IntToStr(this.FBevelWidth) + "px");
          $with.style.setProperty("border-style","solid");
          $with.style.setProperty("border-left-color",pas.Graphics.JSColor(VTopColor));
          $with.style.setProperty("border-top-color",pas.Graphics.JSColor(VTopColor));
          $with.style.setProperty("border-right-color",pas.Graphics.JSColor(VBottomColor));
          $with.style.setProperty("border-bottom-color",pas.Graphics.JSColor(VBottomColor));
        };
        $with.style.setProperty("outline","none");
        $with.style.setProperty("user-select","none");
        $with.style.setProperty("-moz-user-select","none");
        $with.style.setProperty("-ms-user-select","none");
        $with.style.setProperty("-khtml-user-select","none");
        $with.style.setProperty("-webkit-user-select","none");
        if (this.GetText() > "") {
          var $with1 = this.FContentElement;
          $with1.setAttribute("class","Caption");
          $with1.innerHTML = "";
          var $tmp1 = this.FAlignment;
          if ($tmp1 === pas.Classes.TAlignment.taCenter) {
            $with1.style.setProperty("text-align","center")}
           else if ($tmp1 === pas.Classes.TAlignment.taLeftJustify) {
            $with1.style.setProperty("text-align","left")}
           else if ($tmp1 === pas.Classes.TAlignment.taRightJustify) $with1.style.setProperty("text-align","right");
          var $tmp2 = this.FLayout;
          if ($tmp2 === pas.Graphics.TTextLayout.tlBottom) {
            $with1.style.setProperty("vertical-align","bottom")}
           else if ($tmp2 === pas.Graphics.TTextLayout.tlCenter) {
            $with1.style.setProperty("vertical-align","middle")}
           else if ($tmp2 === pas.Graphics.TTextLayout.tlTop) {
            $with1.style.setProperty("vertical-align","top")}
           else if ($tmp2 === pas.Graphics.TTextLayout.tlTitle) {
            $with1.style.setProperty("position","absolute");
            $with1.style.setProperty("top","-8px");
            $with1.style.setProperty("left","5px");
            $with1.style.setProperty("padding-left","5px");
            $with1.style.setProperty("padding-right","5px");
          };
          if (this.FWordWrap) {
            $with1.style.setProperty("word-wrap","break-word");
          } else {
            $with1.style.removeProperty("word-wrap");
          };
          $with1.style.setProperty("overflow","hidden");
          $with1.style.setProperty("text-overflow","ellipsis");
          $with1.innerHTML = this.GetText();
        };
      };
    };
    this.CreateHandleElement = function () {
      var Result = null;
      Result = document.createElement("div");
      return Result;
    };
    this.GetControlClassDefaultSize = function () {
      var Result = pas.Types.TSize.$new();
      Result.cx = 1;
      Result.cy = 1;
      return Result;
    };
    this.Create$1 = function (AOwner) {
      pas.Controls.TControl.Create$1.call(this,AOwner);
      this.FContentElement = this.FHandleElement.appendChild(document.createElement("label"));
      this.FAlignment = pas.Classes.TAlignment.taCenter;
      this.FBevelColor = 536870912;
      this.FBevelOuter = pas.Controls.TBevelCut.bvNone;
      this.FBevelInner = pas.Controls.TBevelCut.bvNone;
      this.FBevelWidth = 1;
      this.FLayout = pas.Graphics.TTextLayout.tlCenter;
      this.FWordWrap = false;
      this.BeginUpdate();
      try {
        this.SetTabStop(false);
        var $with = this.$class.GetControlClassDefaultSize();
        this.SetBounds(0,0,$with.cx,$with.cy);
      } finally {
        this.EndUpdate();
      };
      return this;
    };
  });
  rtl.createClass(this,"TCustomTimer",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FEnabled = false;
      this.FInterval = 0;
      this.FTimerHandle = 0;
      this.FOnStartTimer = null;
      this.FOnStopTimer = null;
      this.FOnTimer = null;
    };
    this.$final = function () {
      this.FOnStartTimer = undefined;
      this.FOnStopTimer = undefined;
      this.FOnTimer = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.SetEnabled = function (AValue) {
      if (this.FEnabled === AValue) return;
      this.FEnabled = AValue;
      this.UpdateTimer();
    };
    this.SetInterval = function (AValue) {
      if (this.FInterval === AValue) return;
      this.FInterval = AValue;
      this.UpdateTimer();
    };
    this.SetOnTimer = function (AValue) {
      if (rtl.eqCallback(this.FOnTimer,AValue)) return;
      this.FOnTimer = AValue;
      this.UpdateTimer();
    };
    this.UpdateTimer = function () {
      var $Self = this;
      this.KillTimer();
      if (this.FEnabled && (this.FInterval > 0) && rtl.eqSet(rtl.intersectSet(rtl.createSet(pas.Classes.TComponentStateItem.csLoading,pas.Classes.TComponentStateItem.csDestroying),this.FComponentState),{}) && (this.FOnTimer != null)) {
        this.FTimerHandle = window.setInterval(function () {
          $Self.FOnTimer($Self);
        },this.FInterval);
        if (this.FTimerHandle === 0) throw pas.Classes.EOutOfResources.$create("Create$1",[rtl.getResStr(pas.LCLStrConsts,"rsNoTimers")]);
        if (this.FOnStartTimer != null) this.FOnStartTimer($Self);
      };
    };
    this.KillTimer = function () {
      if (this.FTimerHandle !== 0) {
        window.clearInterval(this.FTimerHandle);
        if (this.FOnStopTimer != null) this.FOnStopTimer(this);
      };
    };
    this.Loaded = function () {
      pas.Classes.TComponent.Loaded.call(this);
      this.UpdateTimer();
    };
    this.Create$1 = function (AOwner) {
      pas.Classes.TComponent.Create$1.call(this,AOwner);
      this.FEnabled = true;
      this.FInterval = 1000;
      this.FTimerHandle = 0;
      return this;
    };
    this.Destroy = function () {
      this.KillTimer();
      pas.Classes.TComponent.Destroy.call(this);
    };
  });
},["LCLStrConsts"]);
rtl.module("WebCtrls",["System","Classes","SysUtils","Types","Graphics","Controls","Forms","StdCtrls","ExtCtrls"],function () {
  "use strict";
  var $mod = this;
  rtl.createClass(this,"TComboBox",pas.StdCtrls.TCustomComboBox,function () {
    this.$init = function () {
      pas.StdCtrls.TCustomComboBox.$init.call(this);
      this.DroppedDown = false;
    };
    var $r = this.$rtti;
    $r.addField("DroppedDown",rtl.boolean);
    $r.addProperty("Align",2,pas.Controls.$rtti["TAlign"],"FAlign","SetAlign");
    $r.addProperty("Anchors",2,pas.Controls.$rtti["TAnchors"],"FAnchors","SetAnchors");
    $r.addProperty("AutoSize",2,rtl.boolean,"FAutoSize","SetAutoSize",{Default: false});
    $r.addProperty("BorderSpacing",2,pas.Controls.$rtti["TControlBorderSpacing"],"FBorderSpacing","SetBorderSpacing");
    $r.addProperty("BorderStyle",2,pas.Controls.$rtti["TBorderStyle"],"FBorderStyle","SetBorderStyle");
    $r.addProperty("Color",2,rtl.longint,"FColor","SetColor");
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled");
    $r.addProperty("Font",2,pas.Graphics.$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("HandleClass",2,rtl.string,"FHandleClass","SetHandleClass");
    $r.addProperty("HandleId",2,rtl.string,"FHandleId","SetHandleId");
    $r.addProperty("ItemHeight",2,rtl.nativeint,"FItemHeight","SetItemHeight");
    $r.addProperty("ItemIndex",2,rtl.nativeint,"FItemIndex","SetItemIndex");
    $r.addProperty("Items",2,pas.Classes.$rtti["TStrings"],"FItems","SetItems");
    $r.addProperty("ParentColor",2,rtl.boolean,"FParentColor","SetParentColor");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont");
    $r.addProperty("ParentShowHint",2,rtl.boolean,"FParentShowHint","SetParentShowHint");
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint");
    $r.addProperty("TabOrder",2,rtl.nativeint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop");
    $r.addProperty("Text",3,pas.Controls.$rtti["TCaption"],"GetText","SetText");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible");
    $r.addProperty("OnChange",0,pas.Classes.$rtti["TNotifyEvent"],"FOnChange","FOnChange");
    $r.addProperty("OnClick",0,pas.Classes.$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas.Classes.$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnEnter",0,pas.Classes.$rtti["TNotifyEvent"],"FOnEnter","FOnEnter");
    $r.addProperty("OnExit",0,pas.Classes.$rtti["TNotifyEvent"],"FOnExit","FOnExit");
    $r.addProperty("OnKeyDown",0,pas.Controls.$rtti["TKeyEvent"],"FOnKeyDown","FOnKeyDown");
    $r.addProperty("OnKeyPress",0,pas.Controls.$rtti["TKeyPressEvent"],"FOnKeyPress","FOnKeyPress");
    $r.addProperty("OnKeyUp",0,pas.Controls.$rtti["TKeyEvent"],"FOnKeyUp","FOnKeyUp");
    $r.addProperty("OnMouseDown",0,pas.Controls.$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseEnter",0,pas.Classes.$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
    $r.addProperty("OnMouseLeave",0,pas.Classes.$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnMouseMove",0,pas.Controls.$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseUp",0,pas.Controls.$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseWheel",0,pas.Controls.$rtti["TMouseWheelEvent"],"FOnMouseWheel","FOnMouseWheel");
  });
  rtl.createClass(this,"TListBox",pas.StdCtrls.TCustomListBox,function () {
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas.Controls.$rtti["TAlign"],"FAlign","SetAlign");
    $r.addProperty("Anchors",2,pas.Controls.$rtti["TAnchors"],"FAnchors","SetAnchors");
    $r.addProperty("AutoSize",2,rtl.boolean,"FAutoSize","SetAutoSize",{Default: false});
    $r.addProperty("BorderSpacing",2,pas.Controls.$rtti["TControlBorderSpacing"],"FBorderSpacing","SetBorderSpacing");
    $r.addProperty("BorderStyle",2,pas.Controls.$rtti["TBorderStyle"],"FBorderStyle","SetBorderStyle");
    $r.addProperty("Color",2,rtl.longint,"FColor","SetColor");
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled");
    $r.addProperty("Font",2,pas.Graphics.$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("HandleClass",2,rtl.string,"FHandleClass","SetHandleClass");
    $r.addProperty("HandleId",2,rtl.string,"FHandleId","SetHandleId");
    $r.addProperty("ItemHeight",2,rtl.nativeint,"FItemHeight","SetItemHeight");
    $r.addProperty("ItemIndex",2,rtl.nativeint,"FItemIndex","SetItemIndex");
    $r.addProperty("Items",2,pas.Classes.$rtti["TStrings"],"FItems","SetItems");
    $r.addProperty("MultiSelect",2,rtl.boolean,"FMultiSelect","SetMultiSelect",{Default: false});
    $r.addProperty("ParentColor",2,rtl.boolean,"FParentColor","SetParentColor");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont");
    $r.addProperty("ParentShowHint",2,rtl.boolean,"FParentShowHint","SetParentShowHint");
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint");
    $r.addProperty("TabOrder",2,rtl.nativeint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible");
    $r.addProperty("OnClick",0,pas.Classes.$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas.Classes.$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnEnter",0,pas.Classes.$rtti["TNotifyEvent"],"FOnEnter","FOnEnter");
    $r.addProperty("OnExit",0,pas.Classes.$rtti["TNotifyEvent"],"FOnExit","FOnExit");
    $r.addProperty("OnKeyDown",0,pas.Controls.$rtti["TKeyEvent"],"FOnKeyDown","FOnKeyDown");
    $r.addProperty("OnKeyPress",0,pas.Controls.$rtti["TKeyPressEvent"],"FOnKeyPress","FOnKeyPress");
    $r.addProperty("OnKeyUp",0,pas.Controls.$rtti["TKeyEvent"],"FOnKeyUp","FOnKeyUp");
    $r.addProperty("OnMouseDown",0,pas.Controls.$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseEnter",0,pas.Classes.$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
    $r.addProperty("OnMouseLeave",0,pas.Classes.$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnMouseMove",0,pas.Controls.$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseUp",0,pas.Controls.$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseWheel",0,pas.Controls.$rtti["TMouseWheelEvent"],"FOnMouseWheel","FOnMouseWheel");
    $r.addProperty("OnSelectionChange",0,pas.StdCtrls.$rtti["TSelectionChangeEvent"],"FOnSelectionChange","FOnSelectionChange");
  });
  rtl.createClass(this,"TEdit",pas.StdCtrls.TCustomEdit,function () {
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas.Controls.$rtti["TAlign"],"FAlign","SetAlign");
    $r.addProperty("Anchors",2,pas.Controls.$rtti["TAnchors"],"FAnchors","SetAnchors");
    $r.addProperty("Alignment",2,pas.Classes.$rtti["TAlignment"],"FAlignment","SetAlignment");
    $r.addProperty("AutoSize",2,rtl.boolean,"FAutoSize","SetAutoSize",{Default: false});
    $r.addProperty("BorderSpacing",2,pas.Controls.$rtti["TControlBorderSpacing"],"FBorderSpacing","SetBorderSpacing");
    $r.addProperty("BorderStyle",2,pas.Controls.$rtti["TBorderStyle"],"FBorderStyle","SetBorderStyle");
    $r.addProperty("CharCase",2,pas.StdCtrls.$rtti["TEditCharCase"],"FCharCase","SetCharCase");
    $r.addProperty("Color",2,rtl.longint,"FColor","SetColor");
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled");
    $r.addProperty("Font",2,pas.Graphics.$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("HandleClass",2,rtl.string,"FHandleClass","SetHandleClass");
    $r.addProperty("HandleId",2,rtl.string,"FHandleId","SetHandleId");
    $r.addProperty("MaxLength",2,rtl.nativeint,"FMaxLength","SetMaxLength");
    $r.addProperty("ParentColor",2,rtl.boolean,"FParentColor","SetParentColor");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont");
    $r.addProperty("ParentShowHint",2,rtl.boolean,"FParentShowHint","SetParentShowHint");
    $r.addProperty("PasswordChar",2,rtl.char,"FPasswordChar","SetPasswordChar");
    $r.addProperty("ReadOnly",2,rtl.boolean,"FReadOnly","SetReadOnly");
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop");
    $r.addProperty("TabOrder",2,rtl.nativeint,"FTabOrder","SetTabOrder");
    $r.addProperty("Text",3,pas.Controls.$rtti["TCaption"],"GetText","SetText");
    $r.addProperty("TextHint",2,rtl.string,"FTextHint","SetTextHint");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible");
    $r.addProperty("OnChange",0,pas.Classes.$rtti["TNotifyEvent"],"FOnChange","FOnChange");
    $r.addProperty("OnClick",0,pas.Classes.$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas.Classes.$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnEnter",0,pas.Classes.$rtti["TNotifyEvent"],"FOnEnter","FOnEnter");
    $r.addProperty("OnExit",0,pas.Classes.$rtti["TNotifyEvent"],"FOnExit","FOnExit");
    $r.addProperty("OnKeyDown",0,pas.Controls.$rtti["TKeyEvent"],"FOnKeyDown","FOnKeyDown");
    $r.addProperty("OnKeyPress",0,pas.Controls.$rtti["TKeyPressEvent"],"FOnKeyPress","FOnKeyPress");
    $r.addProperty("OnKeyUp",0,pas.Controls.$rtti["TKeyEvent"],"FOnKeyUp","FOnKeyUp");
    $r.addProperty("OnMouseDown",0,pas.Controls.$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseEnter",0,pas.Classes.$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
    $r.addProperty("OnMouseLeave",0,pas.Classes.$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnMouseMove",0,pas.Controls.$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseUp",0,pas.Controls.$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseWheel",0,pas.Controls.$rtti["TMouseWheelEvent"],"FOnMouseWheel","FOnMouseWheel");
    $r.addProperty("OnResize",0,pas.Classes.$rtti["TNotifyEvent"],"FOnResize","FOnResize");
  });
  rtl.createClass(this,"TMemo",pas.StdCtrls.TCustomMemo,function () {
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas.Controls.$rtti["TAlign"],"FAlign","SetAlign");
    $r.addProperty("Anchors",2,pas.Controls.$rtti["TAnchors"],"FAnchors","SetAnchors");
    $r.addProperty("Alignment",2,pas.Classes.$rtti["TAlignment"],"FAlignment","SetAlignment");
    $r.addProperty("BorderSpacing",2,pas.Controls.$rtti["TControlBorderSpacing"],"FBorderSpacing","SetBorderSpacing");
    $r.addProperty("BorderStyle",2,pas.Controls.$rtti["TBorderStyle"],"FBorderStyle","SetBorderStyle");
    $r.addProperty("CharCase",2,pas.StdCtrls.$rtti["TEditCharCase"],"FCharCase","SetCharCase");
    $r.addProperty("Color",2,rtl.longint,"FColor","SetColor");
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled");
    $r.addProperty("Font",2,pas.Graphics.$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("HandleClass",2,rtl.string,"FHandleClass","SetHandleClass");
    $r.addProperty("HandleId",2,rtl.string,"FHandleId","SetHandleId");
    $r.addProperty("Lines",2,pas.Classes.$rtti["TStrings"],"FLines","SetLines");
    $r.addProperty("Text",3,pas.Controls.$rtti["TCaption"],"GetText","SetText");
    $r.addProperty("MaxLength",2,rtl.nativeint,"FMaxLength","SetMaxLength");
    $r.addProperty("ParentColor",2,rtl.boolean,"FParentColor","SetParentColor");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont");
    $r.addProperty("ParentShowHint",2,rtl.boolean,"FParentShowHint","SetParentShowHint");
    $r.addProperty("ReadOnly",2,rtl.boolean,"FReadOnly","SetReadOnly");
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint");
    $r.addProperty("TabOrder",2,rtl.nativeint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop");
    $r.addProperty("TextHint",2,rtl.string,"FTextHint","SetTextHint");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible");
    $r.addProperty("WantReturns",2,rtl.boolean,"FWantReturns","SetWantReturns");
    $r.addProperty("WantTabs",2,rtl.boolean,"FWantTabs","SetWantTabs");
    $r.addProperty("WordWrap",2,rtl.boolean,"FWordWrap","SetWordWrap");
    $r.addProperty("OnChange",0,pas.Classes.$rtti["TNotifyEvent"],"FOnChange","FOnChange");
    $r.addProperty("OnClick",0,pas.Classes.$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas.Classes.$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnEnter",0,pas.Classes.$rtti["TNotifyEvent"],"FOnEnter","FOnEnter");
    $r.addProperty("OnExit",0,pas.Classes.$rtti["TNotifyEvent"],"FOnExit","FOnExit");
    $r.addProperty("OnKeyDown",0,pas.Controls.$rtti["TKeyEvent"],"FOnKeyDown","FOnKeyDown");
    $r.addProperty("OnKeyPress",0,pas.Controls.$rtti["TKeyPressEvent"],"FOnKeyPress","FOnKeyPress");
    $r.addProperty("OnKeyUp",0,pas.Controls.$rtti["TKeyEvent"],"FOnKeyUp","FOnKeyUp");
    $r.addProperty("OnMouseDown",0,pas.Controls.$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseEnter",0,pas.Classes.$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
    $r.addProperty("OnMouseLeave",0,pas.Classes.$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnMouseMove",0,pas.Controls.$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseUp",0,pas.Controls.$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseWheel",0,pas.Controls.$rtti["TMouseWheelEvent"],"FOnMouseWheel","FOnMouseWheel");
    $r.addProperty("OnResize",0,pas.Classes.$rtti["TNotifyEvent"],"FOnResize","FOnResize");
  });
  rtl.createClass(this,"TButton",pas.StdCtrls.TCustomButton,function () {
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas.Controls.$rtti["TAlign"],"FAlign","SetAlign");
    $r.addProperty("Anchors",2,pas.Controls.$rtti["TAnchors"],"FAnchors","SetAnchors");
    $r.addProperty("AutoSize",2,rtl.boolean,"FAutoSize","SetAutoSize",{Default: false});
    $r.addProperty("BorderSpacing",2,pas.Controls.$rtti["TControlBorderSpacing"],"FBorderSpacing","SetBorderSpacing");
    $r.addProperty("Caption",3,pas.Controls.$rtti["TCaption"],"GetText","SetText");
    $r.addProperty("Color",2,rtl.longint,"FColor","SetColor");
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled");
    $r.addProperty("Font",2,pas.Graphics.$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("HandleClass",2,rtl.string,"FHandleClass","SetHandleClass");
    $r.addProperty("HandleId",2,rtl.string,"FHandleId","SetHandleId");
    $r.addProperty("Hint",2,rtl.string,"FHint","SetHint");
    $r.addProperty("ModalResult",0,pas.Forms.$rtti["TModalResult"],"FModalResult","FModalResult");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont");
    $r.addProperty("ParentShowHint",2,rtl.boolean,"FParentShowHint","SetParentShowHint");
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint");
    $r.addProperty("TabOrder",2,rtl.nativeint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible");
    $r.addProperty("OnClick",0,pas.Classes.$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnEnter",0,pas.Classes.$rtti["TNotifyEvent"],"FOnEnter","FOnEnter");
    $r.addProperty("OnExit",0,pas.Classes.$rtti["TNotifyEvent"],"FOnExit","FOnExit");
    $r.addProperty("OnKeyDown",0,pas.Controls.$rtti["TKeyEvent"],"FOnKeyDown","FOnKeyDown");
    $r.addProperty("OnKeyPress",0,pas.Controls.$rtti["TKeyPressEvent"],"FOnKeyPress","FOnKeyPress");
    $r.addProperty("OnKeyUp",0,pas.Controls.$rtti["TKeyEvent"],"FOnKeyUp","FOnKeyUp");
    $r.addProperty("OnMouseDown",0,pas.Controls.$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseEnter",0,pas.Classes.$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
    $r.addProperty("OnMouseLeave",0,pas.Classes.$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnMouseMove",0,pas.Controls.$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseUp",0,pas.Controls.$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseWheel",0,pas.Controls.$rtti["TMouseWheelEvent"],"FOnMouseWheel","FOnMouseWheel");
    $r.addProperty("OnResize",0,pas.Classes.$rtti["TNotifyEvent"],"FOnResize","FOnResize");
  });
  rtl.createClass(this,"TCheckbox",pas.StdCtrls.TCustomCheckbox,function () {
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas.Controls.$rtti["TAlign"],"FAlign","SetAlign");
    $r.addProperty("Alignment",2,pas.StdCtrls.$rtti["TLeftRight"],"FAlignment","SetAlignment",{Default: pas.Classes.TAlignment.taRightJustify});
    $r.addProperty("AllowGrayed",0,rtl.boolean,"FAllowGrayed","FAllowGrayed",{Default: true});
    $r.addProperty("Anchors",2,pas.Controls.$rtti["TAnchors"],"FAnchors","SetAnchors");
    $r.addProperty("AutoSize",2,rtl.boolean,"FAutoSize","SetAutoSize",{Default: false});
    $r.addProperty("BorderSpacing",2,pas.Controls.$rtti["TControlBorderSpacing"],"FBorderSpacing","SetBorderSpacing");
    $r.addProperty("Caption",3,pas.Controls.$rtti["TCaption"],"GetText","SetText");
    $r.addProperty("Checked",3,rtl.boolean,"GetChecked","SetChecked");
    $r.addProperty("Color",2,rtl.longint,"FColor","SetColor");
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled");
    $r.addProperty("Font",2,pas.Graphics.$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("HandleClass",2,rtl.string,"FHandleClass","SetHandleClass");
    $r.addProperty("HandleId",2,rtl.string,"FHandleId","SetHandleId");
    $r.addProperty("ParentColor",2,rtl.boolean,"FParentColor","SetParentColor");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont");
    $r.addProperty("ParentShowHint",2,rtl.boolean,"FParentShowHint","SetParentShowHint");
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint");
    $r.addProperty("State",3,pas.StdCtrls.$rtti["TCheckBoxState"],"GetState","SetState",{Default: pas.StdCtrls.TCheckBoxState.cbUnchecked});
    $r.addProperty("TabOrder",2,rtl.nativeint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible");
    $r.addProperty("OnChange",0,pas.Classes.$rtti["TNotifyEvent"],"FOnChange","FOnChange");
    $r.addProperty("OnClick",0,pas.Classes.$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnEnter",0,pas.Classes.$rtti["TNotifyEvent"],"FOnEnter","FOnEnter");
    $r.addProperty("OnExit",0,pas.Classes.$rtti["TNotifyEvent"],"FOnExit","FOnExit");
    $r.addProperty("OnKeyPress",0,pas.Controls.$rtti["TKeyPressEvent"],"FOnKeyPress","FOnKeyPress");
    $r.addProperty("OnKeyDown",0,pas.Controls.$rtti["TKeyEvent"],"FOnKeyDown","FOnKeyDown");
    $r.addProperty("OnKeyUp",0,pas.Controls.$rtti["TKeyEvent"],"FOnKeyUp","FOnKeyUp");
    $r.addProperty("OnMouseDown",0,pas.Controls.$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseEnter",0,pas.Classes.$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
    $r.addProperty("OnMouseLeave",0,pas.Classes.$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnMouseMove",0,pas.Controls.$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseUp",0,pas.Controls.$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseWheel",0,pas.Controls.$rtti["TMouseWheelEvent"],"FOnMouseWheel","FOnMouseWheel");
    $r.addProperty("OnResize",0,pas.Classes.$rtti["TNotifyEvent"],"FOnResize","FOnResize");
  });
  rtl.createClass(this,"TLabel",pas.StdCtrls.TCustomLabel,function () {
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas.Controls.$rtti["TAlign"],"FAlign","SetAlign");
    $r.addProperty("Alignment",2,pas.Classes.$rtti["TAlignment"],"FAlignment","SetAlignment");
    $r.addProperty("Anchors",2,pas.Controls.$rtti["TAnchors"],"FAnchors","SetAnchors");
    $r.addProperty("AutoSize",2,rtl.boolean,"FAutoSize","SetAutoSize",{Default: true});
    $r.addProperty("BorderSpacing",2,pas.Controls.$rtti["TControlBorderSpacing"],"FBorderSpacing","SetBorderSpacing");
    $r.addProperty("Caption",3,pas.Controls.$rtti["TCaption"],"GetText","SetText");
    $r.addProperty("Color",2,rtl.longint,"FColor","SetColor");
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled");
    $r.addProperty("FocusControl",0,pas.Controls.$rtti["TWinControl"],"FFocusControl","FFocusControl");
    $r.addProperty("Font",2,pas.Graphics.$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("HandleClass",2,rtl.string,"FHandleClass","SetHandleClass");
    $r.addProperty("HandleId",2,rtl.string,"FHandleId","SetHandleId");
    $r.addProperty("Layout",2,pas.Graphics.$rtti["TTextLayout"],"FLayout","SetLayout");
    $r.addProperty("ParentColor",2,rtl.boolean,"FParentColor","SetParentColor");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont");
    $r.addProperty("ParentShowHint",2,rtl.boolean,"FParentShowHint","SetParentShowHint");
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint");
    $r.addProperty("Transparent",2,rtl.boolean,"FTransparent","SetTransparent");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible");
    $r.addProperty("WordWrap",2,rtl.boolean,"FWordWrap","SetWordWrap");
    $r.addProperty("OnClick",0,pas.Classes.$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas.Classes.$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnMouseDown",0,pas.Controls.$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseEnter",0,pas.Classes.$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
    $r.addProperty("OnMouseLeave",0,pas.Classes.$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnMouseMove",0,pas.Controls.$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseUp",0,pas.Controls.$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseWheel",0,pas.Controls.$rtti["TMouseWheelEvent"],"FOnMouseWheel","FOnMouseWheel");
    $r.addProperty("OnResize",0,pas.Classes.$rtti["TNotifyEvent"],"FOnResize","FOnResize");
  });
  rtl.createClass(this,"TImage",pas.ExtCtrls.TCustomImage,function () {
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas.Controls.$rtti["TAlign"],"FAlign","SetAlign");
    $r.addProperty("Anchors",2,pas.Controls.$rtti["TAnchors"],"FAnchors","SetAnchors");
    $r.addProperty("AutoSize",2,rtl.boolean,"FAutoSize","SetAutoSize",{Default: false});
    $r.addProperty("BorderSpacing",2,pas.Controls.$rtti["TControlBorderSpacing"],"FBorderSpacing","SetBorderSpacing");
    $r.addProperty("Center",2,rtl.boolean,"FCenter","SetCenter",{Default: false});
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled");
    $r.addProperty("HandleClass",2,rtl.string,"FHandleClass","SetHandleClass");
    $r.addProperty("HandleId",2,rtl.string,"FHandleId","SetHandleId");
    $r.addProperty("ParentShowHint",2,rtl.boolean,"FParentShowHint","SetParentShowHint");
    $r.addProperty("Proportional",2,rtl.boolean,"FProportional","SetProportional",{Default: false});
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint");
    $r.addProperty("Stretch",2,rtl.boolean,"FStretch","SetStretch",{Default: false});
    $r.addProperty("StretchOutEnabled",2,rtl.boolean,"FStretchOutEnabled","SetStretchOutEnabled",{Default: true});
    $r.addProperty("StretchInEnabled",2,rtl.boolean,"FStretchInEnabled","SetStretchInEnabled",{Default: true});
    $r.addProperty("Transparent",2,rtl.boolean,"FTransparent","SetTransparent",{Default: false});
    $r.addProperty("URL",2,rtl.string,"FURL","SetURL");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible");
    $r.addProperty("OnClick",0,pas.Classes.$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas.Classes.$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnMouseDown",0,pas.Controls.$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseEnter",0,pas.Classes.$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
    $r.addProperty("OnMouseLeave",0,pas.Classes.$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnMouseMove",0,pas.Controls.$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseUp",0,pas.Controls.$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseWheel",0,pas.Controls.$rtti["TMouseWheelEvent"],"FOnMouseWheel","FOnMouseWheel");
    $r.addProperty("OnPaint",0,pas.Classes.$rtti["TNotifyEvent"],"FOnPaint","FOnPaint");
    $r.addProperty("OnPictureChanged",0,pas.Classes.$rtti["TNotifyEvent"],"FOnPictureChanged","FOnPictureChanged");
    $r.addProperty("OnResize",0,pas.Classes.$rtti["TNotifyEvent"],"FOnResize","FOnResize");
  });
  rtl.createClass(this,"TPanel",pas.ExtCtrls.TCustomPanel,function () {
    var $r = this.$rtti;
    $r.addProperty("Align",2,pas.Controls.$rtti["TAlign"],"FAlign","SetAlign");
    $r.addProperty("Alignment",2,pas.Classes.$rtti["TAlignment"],"FAlignment","SetAlignment",{Default: pas.Classes.TAlignment.taCenter});
    $r.addProperty("Anchors",2,pas.Controls.$rtti["TAnchors"],"FAnchors","SetAnchors");
    $r.addProperty("AutoSize",2,rtl.boolean,"FAutoSize","SetAutoSize",{Default: false});
    $r.addProperty("BevelColor",2,rtl.longint,"FBevelColor","SetBevelColor",{Default: 536870912});
    $r.addProperty("BevelInner",2,pas.Controls.$rtti["TBevelCut"],"FBevelInner","SetBevelInner",{Default: pas.Controls.TBevelCut.bvNone});
    $r.addProperty("BevelOuter",2,pas.Controls.$rtti["TBevelCut"],"FBevelOuter","SetBevelOuter",{Default: pas.Controls.TBevelCut.bvRaised});
    $r.addProperty("BevelWidth",2,pas.ExtCtrls.$rtti["TBevelWidth"],"FBevelWidth","SetBevelWidth",{Default: 1});
    $r.addProperty("BorderSpacing",2,pas.Controls.$rtti["TControlBorderSpacing"],"FBorderSpacing","SetBorderSpacing");
    $r.addProperty("Caption",3,pas.Controls.$rtti["TCaption"],"GetText","SetText");
    $r.addProperty("ClientHeight",3,rtl.nativeint,"GetClientHeight","SetClientHeight");
    $r.addProperty("ClientWidth",3,rtl.nativeint,"GetClientWidth","SetClientWidth");
    $r.addProperty("Color",2,rtl.longint,"FColor","SetColor");
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled");
    $r.addProperty("Font",2,pas.Graphics.$rtti["TFont"],"FFont","SetFont");
    $r.addProperty("HandleClass",2,rtl.string,"FHandleClass","SetHandleClass");
    $r.addProperty("HandleId",2,rtl.string,"FHandleId","SetHandleId");
    $r.addProperty("ParentColor",2,rtl.boolean,"FParentColor","SetParentColor");
    $r.addProperty("ParentFont",2,rtl.boolean,"FParentFont","SetParentFont");
    $r.addProperty("ParentShowHint",2,rtl.boolean,"FParentShowHint","SetParentShowHint");
    $r.addProperty("ShowHint",2,rtl.boolean,"FShowHint","SetShowHint");
    $r.addProperty("TabOrder",2,rtl.nativeint,"FTabOrder","SetTabOrder");
    $r.addProperty("TabStop",2,rtl.boolean,"FTabStop","SetTabStop");
    $r.addProperty("Visible",2,rtl.boolean,"FVisible","SetVisible");
    $r.addProperty("WordWrap",2,rtl.boolean,"FWordWrap","SetWordWrap");
    $r.addProperty("OnClick",0,pas.Classes.$rtti["TNotifyEvent"],"FOnClick","FOnClick");
    $r.addProperty("OnDblClick",0,pas.Classes.$rtti["TNotifyEvent"],"FOnDblClick","FOnDblClick");
    $r.addProperty("OnEnter",0,pas.Classes.$rtti["TNotifyEvent"],"FOnEnter","FOnEnter");
    $r.addProperty("OnExit",0,pas.Classes.$rtti["TNotifyEvent"],"FOnExit","FOnExit");
    $r.addProperty("OnMouseDown",0,pas.Controls.$rtti["TMouseEvent"],"FOnMouseDown","FOnMouseDown");
    $r.addProperty("OnMouseEnter",0,pas.Classes.$rtti["TNotifyEvent"],"FOnMouseEnter","FOnMouseEnter");
    $r.addProperty("OnMouseLeave",0,pas.Classes.$rtti["TNotifyEvent"],"FOnMouseLeave","FOnMouseLeave");
    $r.addProperty("OnMouseMove",0,pas.Controls.$rtti["TMouseMoveEvent"],"FOnMouseMove","FOnMouseMove");
    $r.addProperty("OnMouseUp",0,pas.Controls.$rtti["TMouseEvent"],"FOnMouseUp","FOnMouseUp");
    $r.addProperty("OnMouseWheel",0,pas.Controls.$rtti["TMouseWheelEvent"],"FOnMouseWheel","FOnMouseWheel");
    $r.addProperty("OnPaint",0,pas.Classes.$rtti["TNotifyEvent"],"FOnPaint","FOnPaint");
    $r.addProperty("OnResize",0,pas.Classes.$rtti["TNotifyEvent"],"FOnResize","FOnResize");
  });
  rtl.createClass(this,"TTimer",pas.ExtCtrls.TCustomTimer,function () {
    var $r = this.$rtti;
    $r.addProperty("Enabled",2,rtl.boolean,"FEnabled","SetEnabled",{Default: true});
    $r.addProperty("Interval",2,rtl.longword,"FInterval","SetInterval",{Default: 1000});
    $r.addProperty("OnTimer",2,pas.Classes.$rtti["TNotifyEvent"],"FOnTimer","SetOnTimer");
    $r.addProperty("OnStartTimer",0,pas.Classes.$rtti["TNotifyEvent"],"FOnStartTimer","FOnStartTimer");
    $r.addProperty("OnStopTimer",0,pas.Classes.$rtti["TNotifyEvent"],"FOnStopTimer","FOnStopTimer");
  });
});
rtl.module("browserapp",["System","Classes","SysUtils","Types","JS","Web"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.ReloadEnvironmentStrings = function () {
    var I = 0;
    var S = "";
    var N = "";
    var A = [];
    var P = [];
    if ($impl.EnvNames != null) pas.SysUtils.FreeAndNil({p: $impl, get: function () {
        return this.p.EnvNames;
      }, set: function (v) {
        this.p.EnvNames = v;
      }});
    $impl.EnvNames = new Object();
    S = window.location.search;
    S = pas.System.Copy(S,2,S.length - 1);
    A = S.split("&");
    for (var $l = 0, $end = rtl.length(A) - 1; $l <= $end; $l++) {
      I = $l;
      P = A[I].split("=");
      N = pas.SysUtils.LowerCase(decodeURIComponent(P[0]));
      if (rtl.length(P) === 2) {
        $impl.EnvNames[N] = decodeURIComponent(P[1])}
       else if (rtl.length(P) === 1) $impl.EnvNames[N] = "";
    };
  };
  $mod.$implcode = function () {
    $impl.EnvNames = null;
    $impl.Params = [];
    $impl.ReloadParamStrings = function () {
      $impl.Params = rtl.arraySetLength($impl.Params,"",1);
      $impl.Params[0] = window.location.pathname;
    };
    $impl.GetParamCount = function () {
      var Result = 0;
      Result = rtl.length($impl.Params) - 1;
      return Result;
    };
    $impl.GetParamStr = function (Index) {
      var Result = "";
      Result = $impl.Params[Index];
      return Result;
    };
    $impl.MyGetEnvironmentVariable = function (EnvVar) {
      var Result = "";
      var aName = "";
      aName = pas.SysUtils.LowerCase(EnvVar);
      if ($impl.EnvNames.hasOwnProperty(aName)) {
        Result = "" + $impl.EnvNames[aName]}
       else Result = "";
      return Result;
    };
    $impl.MyGetEnvironmentVariableCount = function () {
      var Result = 0;
      Result = rtl.length(Object.getOwnPropertyNames($impl.EnvNames));
      return Result;
    };
    $impl.MyGetEnvironmentString = function (Index) {
      var Result = "";
      Result = "" + $impl.EnvNames[Object.getOwnPropertyNames($impl.EnvNames)[Index]];
      return Result;
    };
  };
  $mod.$init = function () {
    pas.System.IsConsole = true;
    pas.System.OnParamCount = $impl.GetParamCount;
    pas.System.OnParamStr = $impl.GetParamStr;
    $mod.ReloadEnvironmentStrings();
    $impl.ReloadParamStrings();
    pas.SysUtils.OnGetEnvironmentVariable = $impl.MyGetEnvironmentVariable;
    pas.SysUtils.OnGetEnvironmentVariableCount = $impl.MyGetEnvironmentVariableCount;
    pas.SysUtils.OnGetEnvironmentString = $impl.MyGetEnvironmentString;
  };
},[]);
rtl.module("TopCtrls",["System","TopTypes","Classes","SysUtils","Types","Graphics","Controls","StdCtrls","ExtCtrls","WebCtrls","Forms","Web","browserapp"],function () {
  "use strict";
  var $mod = this;
  rtl.createClass(this,"TCustomTrackBar",pas.Controls.TCustomControl,function () {
    this.$init = function () {
      pas.Controls.TCustomControl.$init.call(this);
      this.fMin = 0;
      this.fMax = 0;
      this.fPosition = 0;
      this.fFrequency = 0;
      this.fLineSize = 0;
      this.fPageSize = 0;
      this.fOrientation = 0;
      this.fTickStyle = 0;
      this.FOnChange = null;
    };
    this.$final = function () {
      this.FOnChange = undefined;
      pas.Controls.TCustomControl.$final.call(this);
    };
    this.SetMin = function (Value) {
      this.SetRange(Value,this.fMax);
    };
    this.SetMax = function (Value) {
      this.SetRange(this.fMin,Value);
    };
    this.SetRange = function (ValueMin, ValueMax) {
      this.fMin = ValueMin;
      this.fMax = ValueMax;
    };
    this.GetPosition = function () {
      var Result = 0;
      Result = this.fPosition;
      return Result;
    };
    this.SetPosition = function (Value) {
      this.fPosition = Value;
    };
    this.SetFrequency = function (Value) {
      this.fFrequency = Value;
    };
    this.SetLineSize = function (Value) {
      this.fLineSize = Value;
    };
    this.SetPageSize = function (Value) {
      this.fPageSize = Value;
    };
    this.Changed = function () {
      this.GetCanvas().SetWidth(this.FWidth);
      this.GetCanvas().SetHeight(this.FHeight);
      pas.Controls.TControl.Changed.call(this);
    };
    this.Paint = function () {
      var i = 0;
      var x = 0;
      this.GetCanvas().Clear();
      this.GetCanvas().FBrush.SetColor(12632256);
      this.GetCanvas().FBrush.SetStyle(pas.Graphics.TBrushStyle.bsSolid);
      this.GetCanvas().FPen.SetColor(8421504);
      this.GetCanvas().FPen.SetStyle(pas.Graphics.TPenStyle.psSolid);
      this.GetCanvas().FPen.SetWidth(this.fLineSize);
      this.GetCanvas().Rectangle$1(0,Math.round((this.FHeight / 2) - 4),this.FWidth,8);
      for (var $l = this.fMin, $end = this.fMax; $l <= $end; $l++) {
        i = $l;
        x = Math.round(((i - this.fMin) / (this.fMax - this.fMin)) * this.FWidth);
        this.GetCanvas().MoveTo(x,Math.round((this.FHeight / 2) + 6));
        this.GetCanvas().LineTo(x,this.FHeight - 2);
      };
      this.GetCanvas().FBrush.SetColor(16711680);
      x = Math.round(((this.fPosition - this.fMin) / (this.fMax - this.fMin)) * this.FWidth);
      this.GetCanvas().FillRect$1(x - 4,4,8,16);
    };
    this.MouseUp = function (Button, Shift, X, Y) {
      this.fPosition = this.fMin + Math.round((X / this.FWidth) * (this.fMax - this.fMin));
      this.Invalidate();
      pas.Controls.TControl.MouseUp.call(this,Button,rtl.refSet(Shift),X,Y);
      if (this.FOnChange != null) this.FOnChange(this);
    };
    this.CreateHandleElement = function () {
      var Result = null;
      Result = document.createElement("div");
      return Result;
    };
    this.Create$1 = function (AOwner) {
      pas.Controls.TControl.Create$1.call(this,AOwner);
      this.fMax = 10;
      this.fFrequency = 1;
      this.fLineSize = 1;
      this.fPageSize = 2;
      this.fTickStyle = pas.TopTypes.TTickStyle.tsAuto;
      return this;
    };
  });
  rtl.createClass(this,"TCustomProgressBar",pas.Controls.TControl,function () {
    this.$init = function () {
      pas.Controls.TControl.$init.call(this);
      this.fMin = 0;
      this.fMax = 0;
      this.fPosition = 0;
      this.fStep = 0;
      this.BarElement = null;
    };
    this.$final = function () {
      this.BarElement = undefined;
      pas.Controls.TControl.$final.call(this);
    };
    this.GetPosition = function () {
      var Result = 0;
      Result = this.fPosition;
      return Result;
    };
    this.Changed = function () {
      pas.Controls.TControl.Changed.call(this);
      this.FHandleElement.style["background-color"] = pas.Graphics.JSColor(12632256);
      this.BarElement.style["width"] = pas.SysUtils.IntToStr(Math.round((this.GetPosition() / this.fMax) * 100)) + "%";
    };
    this.CreateHandleElement = function () {
      var Result = null;
      Result = document.createElement("div");
      this.BarElement = document.createElement("div");
      this.BarElement.style["height"] = "100%";
      this.BarElement.style["background-color"] = pas.Graphics.JSColor(32768);
      Result.appendChild(this.BarElement);
      return Result;
    };
    this.SetPosition = function (Value) {
      this.fPosition = Value;
      this.Changed();
    };
    this.Create$1 = function (AOwner) {
      pas.Controls.TControl.Create$1.call(this,AOwner);
      this.fMax = 100;
      this.fMin = 0;
      this.fStep = 10;
      return this;
    };
    this.StepIt = function () {
      this.fPosition = this.fPosition + this.fStep;
      this.Changed();
    };
  });
  rtl.createClass(this,"TProgressBar",this.TCustomProgressBar,function () {
  });
  rtl.createClass(this,"TTrackBar",this.TCustomTrackBar,function () {
    var $r = this.$rtti;
    $r.addProperty("Min",2,rtl.longint,"fMin","SetMin");
    $r.addProperty("Max",2,rtl.longint,"fMax","SetMax");
    $r.addProperty("Position",3,rtl.longint,"GetPosition","SetPosition");
    $r.addProperty("Frequency",2,rtl.longint,"fFrequency","SetFrequency");
    $r.addProperty("LineSize",2,rtl.longint,"fLineSize","SetLineSize");
    $r.addProperty("PageSize",2,rtl.longint,"fPageSize","SetPageSize");
    $r.addProperty("Orientation",0,pas.TopTypes.$rtti["TOrientation"],"fOrientation","fOrientation");
    $r.addProperty("TickStyle",0,pas.TopTypes.$rtti["TTickStyle"],"fTickStyle","fTickStyle");
    $r.addProperty("OnChange",0,pas.Classes.$rtti["TNotifyEvent"],"FOnChange","FOnChange");
  });
  rtl.createClass(this,"TMenuItem",pas.Controls.TWinControl,function () {
    this.$init = function () {
      pas.Controls.TWinControl.$init.call(this);
      this.AutoCheck = false;
      this.Checked = false;
      this.Findex = 0;
      this.FUpIndex = 0;
      this.LabelElement = null;
      this.SubMenuElement = null;
    };
    this.$final = function () {
      this.LabelElement = undefined;
      this.SubMenuElement = undefined;
      pas.Controls.TWinControl.$final.call(this);
    };
    this.Changed = function () {
      var i = 0;
      var m = null;
      pas.Controls.TControl.Changed.call(this);
      if (this.GetComponentCount() > 0) {
        if (this.SubMenuElement === null) {
          this.SubMenuElement = document.createElement("ul");
          this.SubMenuElement.style.setProperty("display","none");
          this.FHandleElement.appendChild(this.SubMenuElement);
        };
      };
      for (var $l = 0, $end = this.GetComponentCount() - 1; $l <= $end; $l++) {
        i = $l;
        m = this.GetComponent(i);
        this.SubMenuElement.appendChild(m.FHandleElement);
      };
      this.FHandleElement.style.removeProperty("left");
      this.FHandleElement.style.removeProperty("top");
      this.FHandleElement.style.removeProperty("width");
      this.FHandleElement.style.removeProperty("height");
      this.FHandleElement.style.removeProperty("display");
      this.FHandleElement.style.removeProperty("position");
      if (this.GetText() === "-") {
        this.SetText("_______________");
      };
      if (this.LabelElement !== null) this.LabelElement.innerHTML = this.GetText();
    };
    this.Click = function () {
      if ($mod.TPopupMenu.isPrototypeOf(this.FOwner)) this.FOwner.SetVisible(false);
      pas.Controls.TControl.Click.call(this);
    };
    this.MouseEnter = function () {
      if (this.FHandleId === "MainMenu") return;
      if (this.SubMenuElement !== null) {
        this.SubMenuElement.style.setProperty("display","block");
        if (this.FHeight === pas.TopTypes.MenuItemHeight) ;
      };
      pas.Controls.TControl.MouseEnter.call(this);
    };
    this.MouseLeave = function () {
      if (this.FHandleId === "MainMenu") return;
      if (this.SubMenuElement !== null) {
        this.SubMenuElement.style.setProperty("display","none");
      };
      pas.Controls.TControl.MouseLeave.call(this);
    };
    this.CreateHandleElement = function () {
      var Result = null;
      Result = document.createElement("li");
      this.LabelElement = document.createElement("div");
      Result.appendChild(this.LabelElement);
      return Result;
    };
    var $r = this.$rtti;
    $r.addField("AutoCheck",rtl.boolean);
    $r.addField("Checked",rtl.boolean);
    $r.addField("Findex",rtl.longint);
    $r.addField("FUpIndex",rtl.longint);
    $r.addField("LabelElement",pas.Web.$rtti["TJSHTMLElement"]);
    $r.addField("SubMenuElement",pas.Web.$rtti["TJSHTMLElement"]);
  });
  rtl.createClass(this,"TMainMenu",this.TMenuItem,function () {
    this.$init = function () {
      $mod.TMenuItem.$init.call(this);
      this.FMenuForm = null;
    };
    this.$final = function () {
      this.FMenuForm = undefined;
      $mod.TMenuItem.$final.call(this);
    };
    this.Changed = function () {
      var i = 0;
      var m = null;
      $mod.TMenuItem.Changed.call(this);
      if (this.SubMenuElement === null) {
        this.SubMenuElement = document.createElement("ul");
        this.FHandleElement.appendChild(this.SubMenuElement);
      };
      this.FOwner.SetTop(this.FHeight);
      for (var $l = 0, $end = this.GetComponentCount() - 1; $l <= $end; $l++) {
        i = $l;
        m = this.GetComponent(i);
        m.SetHandleId("MainMenuItem" + pas.SysUtils.IntToStr(i));
        m.SetHandleClass("MainMenuItem");
      };
      if (this.FMenuForm !== null) this.FMenuForm.appendChild(this.FHandleElement);
    };
    this.CreateHandleElement = function () {
      var Result = null;
      Result = document.createElement("div");
      return Result;
    };
    this.Create$1 = function (AOwner) {
      pas.Controls.TControl.Create$1.call(this,AOwner);
      this.SetLeft(0);
      this.SetTop(0);
      this.SetHeight(pas.TopTypes.MenuItemHeight + 5);
      this.SetVisible(true);
      this.SetHandleId("MainMenu");
      this.FMenuForm = document.createElement("div");
      this.FMenuForm.style.setProperty("width","100%");
      this.FMenuForm.id = this.FOwner.FHandleId;
      this.FOwner.SetHandleId(this.FOwner.FHandleId + "FORM");
      this.FMenuForm.appendChild(this.FOwner.FHandleElement);
      document.body.appendChild(this.FMenuForm);
      return this;
    };
  });
  rtl.createClass(this,"TPopupMenu",this.TMenuItem,function () {
    this.Changed = function () {
      $mod.TMenuItem.Changed.call(this);
      this.FHandleElement.style.setProperty("display","none");
    };
    this.Create$1 = function (AOwner) {
      pas.Controls.TControl.Create$1.call(this,AOwner);
      return this;
    };
    this.Popup = function (X, Y) {
      var r = null;
      r = this.FOwner.FHandleElement.getBoundingClientRect();
      this.SetLeft(pas.System.Trunc((X - r.left) + window.scrollX));
      this.SetTop(pas.System.Trunc((Y - r.top) + window.screenY) + pas.TopTypes.MenuItemHeight);
      this.SubMenuElement.style.setProperty("display","block");
      this.SubMenuElement.style.setProperty("position","absolute");
      this.SubMenuElement.style.setProperty("left",pas.SysUtils.IntToStr(this.FLeft) + "px");
      this.SubMenuElement.style.setProperty("top",pas.SysUtils.IntToStr(this.FTop) + "px");
      this.FHandleElement.style.setProperty("display","block");
    };
    this.OnContextMenu = function (Event) {
      var Result = false;
      this.Popup(Math.round(rtl.asExt(Event,MouseEvent).clientX) - this.FOwner.FLeft,Math.round(rtl.asExt(Event,MouseEvent).clientY) - this.FOwner.FTop);
      Result = false;
      return Result;
    };
  });
});
rtl.module("Dialogs",["System","Classes","SysUtils","Types","Graphics","Controls","StdCtrls","ExtCtrls","Forms","WebCtrls"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  this.TMsgDlgType = {"0": "mtWarning", mtWarning: 0, "1": "mtError", mtError: 1, "2": "mtInformation", mtInformation: 2, "3": "mtConfirmation", mtConfirmation: 3, "4": "mtCustom", mtCustom: 4};
  this.$rtti.$Enum("TMsgDlgType",{minvalue: 0, maxvalue: 4, ordtype: 1, enumtype: this.TMsgDlgType});
  this.TMsgDlgBtn = {"0": "mbYes", mbYes: 0, "1": "mbNo", mbNo: 1, "2": "mbOK", mbOK: 2, "3": "mbCancel", mbCancel: 3, "4": "mbAbort", mbAbort: 4, "5": "mbRetry", mbRetry: 5, "6": "mbIgnore", mbIgnore: 6, "7": "mbAll", mbAll: 7, "8": "mbNoToAll", mbNoToAll: 8, "9": "mbYesToAll", mbYesToAll: 9, "10": "mbHelp", mbHelp: 10, "11": "mbClose", mbClose: 11};
  this.$rtti.$Enum("TMsgDlgBtn",{minvalue: 0, maxvalue: 11, ordtype: 1, enumtype: this.TMsgDlgBtn});
  this.$rtti.$Set("TMsgDlgButtons",{comptype: this.$rtti["TMsgDlgBtn"]});
  this.MessageDlg = function (AOwner, ACaption, AMessage, ADlgType, AButtons, ADefaultButton, AModalResultProc) {
    var VMessageDialog = null;
    if (!(AOwner != null)) AOwner = pas.Forms.Application().FActiveForm;
    VMessageDialog = $impl.TMessageDialog.$create("Create$1",[AOwner]);
    VMessageDialog.FButtons = rtl.refSet(AButtons);
    VMessageDialog.SetText(ACaption);
    VMessageDialog.FDefaultButton = ADefaultButton;
    VMessageDialog.FDialogType = ADlgType;
    VMessageDialog.FMessage = AMessage;
    VMessageDialog.PrepareLayout();
    VMessageDialog.ShowModal(AModalResultProc);
  };
  this.MessageDlg$2 = function (AOwner, ACaption, AMessage, ADlgType, AButtons, AModalResultProc) {
    $mod.MessageDlg(AOwner,ACaption,AMessage,ADlgType,rtl.refSet(AButtons),$impl.ModalDefaultButton(AButtons),AModalResultProc);
  };
  this.ShowMessage$1 = function (AMessage) {
    $mod.MessageDlg$2(pas.Forms.Application().FActiveForm,"",AMessage,$mod.TMsgDlgType.mtInformation,rtl.createSet($mod.TMsgDlgBtn.mbOK),null);
  };
  $mod.$implcode = function () {
    $impl.DialogCaption = ["Warning","Error","Information","Confirmation",""];
    $impl.ButtonCaption = ["Yes","No","Ok","Cancel","Abort","Retry","Ignore","All","No to All","Yes to All","Help","Close"];
    $impl.DialogIcon = ["data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAJCElEQVR42u2aA3gk2dfGaxFzES\/Hth3bNoc7GRvB2LY9X8YzsW11x7ZtVON8t7PeSofdM0n\/5z7PL6jqe85939JzTjX2eXz08Xl8Hu9ssR9DnKT2Rp8a5x57atyH4P2SO97bYdL\/E+LfO3DPSL2zJLaj4AbQmwIRAdCedwVINxeGv7LBxnO0+Lc2mGjCxel+lJq3ADU3AYq3AJRsQ3\/fAbzSDWJOjn\/9whDj41gDAnd9a9tMPoRD3UOAovX\/YANAvRvUxu5o894mpMWR4p+twb5PubUoht7gCVC8HaBw3b8p3Qu0uveQeHFqgJc5JsxxBgTtFdvUknqMSq+6DvSCtb1Tcw8akvZ1+e0SteQo8e5WmEzq\/aVkWv07oBdtQmLX9E7xNnQWvAXSzXmRL2wxMY4xIHifxP62rFN0esV5oOev6Zuqq9BCdqYE7xHbyBHiX1hg47KeymfR616io7wBiVzdN4WOwPhs+t2lSa8dsB9GtXjAsC\/CXKRPtuecAXrZMaDnOQyM8jPQmnaYHnJQ0mlUG\/DKGpua90ojn17z5PfTO89+YOSvA3rtM8h+Ip\/x2g4bMyrFu7hgX0Yd+fF6Zz667oudgZ5rPzhKDkN75jEId5U5wziTRp0BH1ZzzS\/6oFdGr777hyi7wcG4FKofQP5rjeI39ti00XXXd8G+jj7205OugnNAL9wD9BzboVF0ALryzkDkkR9uvjDEvho1Bniu5V1R5m1aS6+4+ocYmyGC5lZehyJ33Yq39lwLRoV4L0eMJ\/rUmDfdheeBlr8VaNk2BBpCDOGJ8s\/gKsDVw2OFn6DaR5exj0jBTugqOAtRx39+lrAG4xr5R38Dj0pVoGUjvewsEmBNoCHEAA6L8MA+DPsXaFvPPuIcdCaUnYcyH6N6j028siNa\/CNLTAA1OHzxQiQ+9zegZVkReKL86x+iiTxV+ZU4h0GeI+AFZyD65Bj3F1tHcLnstUXQoCbEpo1WfAQt3LJXXAW4mRrgKsjDdB695BhUB1m0+mwV0h6xzY6k85NCKEWngJazBmiZFr3izMvF1ABnPi6m8xgxKYUnIf7sxIAXazCREWeA\/zZRu\/oIu25a4UHmIhAnJISZGnBSSqTPubRCJ6gNten02z7CymV31OwgX54WTS08jk5XW6BlmDPl4kQJpgZcmizZ11wU2w6ohccg+fLUiBFVLgft+m5TY5QDhZa\/Ey3UrE\/uLBnD1IA7y8b2O5+WvwsaIu0pgbu\/cxwxzQ7yzZnJ1AJXtEBLoKWb9skbkzlMDXhrPre\/+SiHFdAKD0Hq9dmJI6JcDtwrdqApbg2NmrsZqGiB\/RG6R5apAWF7ZQcUg5GrKdaBFrRf3OmTNzvS787PpOUfRAszB2qaSb+kXtNgakDadc0BxejJlX8AMu4tSH9rjY39dM0OZ\/GTzfFrgJq1Di3MeEBUeBgxNaDS02jAcRg5m+NWQ5iTxDkA7ItP0uzIfrgol5a7C6ipxgijAdFNsoQDX39JEI+2oX0WA47DyEnL2QXZj5cUMcrlj97siHCVutGa4ADUDDugphgOAiM4+8v3BAPOjRFj7BtcLJS7LdEBNU2kbhHLZTY3O\/KfLS2hZm8Z\/KIRD+UnEgx4pDBp0HF6cmdvhgK3lZWea7gWfrxmx2HpJ+2JduhatAQq2WDQeDksJBjgs3bRkGIx1tCe5ADRR2Weo7OA+6M0O4pfylZTM9f\/sQj9QRN3TIFgQPxxRca+oZGxFkreyNZ+2Mgrx\/5mx\/Ef33Qk2aDTzxSoJL0hkf9Yi2BA4VPtIcZDpJhAZ7IdxB7\/8YP7GoyffQas51EteyNXT0l3AApKPFQaggwJBjSGGA0rJmNNpe\/lW3w2CWmzrdkRc+Inn44kO6CQ0WKTdYcMTjICF\/6\/+wLobyRieDEZ87tI9hB36md\/tpTLvo6CBuXuCq2UVBuUUGfYXJwk+a8qkBUxKanWUOmp1Om\/TdiK5c2O+FO\/hnST7FAifaAkaQ+bx4p\/PwqfKE9iSUxKsh7gZDtIOjeGteWy\/zYhu2pv5S5KiiVKpMUSvOzn\/2WAt8N8lsWlpJhDra8KJWS3qCPLmh2kc2OjcZItSoCutUQtlhDtvOovA2JcVrEsLiVJB5lgC6RLk1hTLgfsEt1U56eKU8hmKIEm60i1B2re4R7Q36yNTTKBhgANWvCeb52H3ewgXZ6YjJOsf3c3QWOUgEwgW0PGzSlpwyqXUdvpAMNJSrIRCqo+ukg2hMZgLYhw+n5o5TKj2ZF6bUoGhWQJeLwGQn2UoQGMtWffnVX4zgabPvhmx8HvTjYEawKepI+CqbGUOg85eCwnCa78X\/fwaJUEVL5ayfI8eKIetEToQoSz2O1BlcuMZkfmrWk5eJI54HFqCFWWUecuC4eFCW+H0DYuxj6W5upZe7Ip5D2aSyyX+2x2OInfaA5FRz9BBwVRYSmP5aSYtsSeKEizPB+eoAWtUXoQfUiCUC4zbXbk3p9ZgieZAh6rilBhKX2\/G+QmzmEFicZQ\/H8Lar2I5TKx2RHpKv6kNVwL8HhNNFmZ1fRpwCEhHrbkxOM0oD1GH2KPSvddLnuu\/XpF4ZO51XiiIeAxSmzhscJEpgY8U53Mtrx4ggEUv1iCymX+3svl+zYYb9QhibdtEdrINTXAoxXZQpW7ORwW5iWIPyLKB3X+VmzLi8eoQmeMHsQek+n97bLnWh7FYrf5jXi8HpqgwD7iNKEu+Dd4qjK55\/sACHTkp\/RsQ8azN3e8DlS8Wdrht1nQkGBAhJPYndZQdfRBFcCjFNhLjDpQyOuBkrGvB\/Q32qbG\/rxIW1uEDkS6iD8iGIBufn7dCWbQHaWAkOdQkLZEC4hyEfclGBDtIva8IwYZgFzqjpTjTNBZ1h5pis4AsXsEA3w2CRqVv5XtwJNt\/jBBlnP4QzxOcoASt6X1Hut5FXptevpsF71f9k6xsz3OAXDyRsBTNnEGSEt7jC0Uua1ocd8ifOEmk+8b8kz9ARt3So9v1+vN3wR57vouxWv39xmcgAfS8mLTt35O6lyOv4hivzC0YkzGt4gxiKmIGRzG1D+0IY19j68RAggRDkOgR9u\/xufxefw\/CzT7sU6iahAAAAAASUVORK5CYII=","data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAMV0lEQVR42uxaBXQbxxbdz2QHZDnM5drl1iSOLTRzmJmZmZmZ+fMPlRvGsimKJGMSRSaRUaE30p9X+FBJIe+U95x7zpyZt3PfvQtvdiTu5+Png+0xh+N+O4Xjnpz561\/LNgkEg3a2bLl6d5s2BymO7GnT5j0EtrFvR8uWqzAGY2dw3BNbOe43P1TRAVSEaEeLFksOduhw8kRUVGFOaurt\/AEDiGXKFGJdsIA4V64kNevXI7CNfV+MYUw2jf0gKqrgQPv2J7Y3b754zq9\/HYVzfu+F0yvdYYNQOPFQp05nP9LpHDfGjCHVq1aRmsWLSdXkyaRq5Ehw9u8Pju7dwZ6ZCfa0tC+AbezDMYzBWDynhp6Lc1ymc+GcGwWCCdM5rv33Tji9XTuuFwrnHH3hhWxT\/\/6kevlyUj1rFnEOGgS29HSwpaQ8FvBc5+DBgHPhnKZ+\/cixl17Sbw4OXjCHmv2dC5\/EcYFrGjcefDg0NLdw0CBSs2wZcYweTWwZGWBNTuYVOKcD7yjKUTBwIDkSEpKztnHjQZjDd\/Wch+5p2+5Ydkqqy7FoEXGOHAXW1DSwJiUzBXIgl5Nyfp6U7NrTtu3RmRwX8m0K\/\/XygIAuR0ND9ZYJE4hz6lRipc9wZVLStwrkRO6b48eToyEhV1YGBGRibkzFr+O4361t2nTqObnCZp8zl9jo81mRmPSdAnPAXM7KZFaa25SRNEcm4idw3J\/WBwUt+lijrXbOmUMqu3SFioTE7wWsXbuBY\/Ycclmlrt0sFC7FXHm\/8huCgpZ8npDockyfQSroc1gen\/C9QkVaOjhmzCSfxse7aK6L8E7g7ZnH2\/4jtbrGPnU6KU9KgbK4hAahvE9fcF246CYulwfhunzZXTF4SIPnxdzs06aTSzGqGnwc\/sZxv2qwAfjCOyuRWHHi8pRUShTfMPTuA6SmxvPNg9TWenCsofNjjrap08gZkbhySUBARoNL3eHnnsurmDiJlNFbrDQ2rkG4qYuF+vMX3B4\/R925c26MaShPeXoGYM40dz3V8PxjL3J2t259rGTQEFLeqw9YdHENxnW1Fkh9vcffQerqPRjDBxfmXDxwMNnVqtWRx\/qOWBnQePAnak19xdDhxKKNBT5wTaUB9927\/g24c8eDMXzxVQwbQT5WqepXBQb2f+S1\/T+efjqnbOxYYqG19qZWxwtKlCq453T6NeCuze7BGL74LLREltPl89+feirrkT6iNgiC5l9JSyelPXqBWaPjDcVKNdw2m\/0acPv6dQ\/G8MlZ1rM3XElJI+sFgjkP++Lr8M+nnskrGzGKmOltZFZreUNxjApcRqPfl6DLYHBjDJ+cX5gwYiTBO\/qh7oJ1TZtOzIlPJJZu3eGGSsMriqKVUHP5sl8DqunaoJjG8M2LWrLjE8i6Jk3G37\/m0yXk\/rZtz94cPJTc0MTCdaWGV6A4+9Fjfg2wHTniRpP45kUtqIluv52+b0WYR7exzkRE2Cy9+tAT1bwDDajYuZP4M6Bi+w6CMSy4UdOZ8Agb3aqL9GvApqDgJYakVLiRmALXYtS8o6izEixLlvo1wLJoMSmmMSy4b1BdV5NSYHNQ0AKf4nEHdneLVifMffpDCT2hJFrFO4pQ3PgJfg24NnYcwRiM5R30UbhJte1q2eoDn7vNuHV9\/PmQfHP3noBXgQWKFDFQ2KM3+DOgqEcvjGHGb+7eC44\/F2LCLXcvA3Av\/kKU+Nb15HQoViiZoEgeAyalxrcBbrcHxzCGFT9qOx8pctFtdqmXAWvo0vfTaCUpiU3Aq8AEhRQGqRzuOhzeq0C73WOUKjCGGX9JXCJ8qoghqwIb9\/d+AQqDV+tj46BIpYVCeTQzGCVyqNPrvUph3RW9G8dYcqM2vS4ONgqEK7wM2C5sdig\/MRWKOqugUBbNDEaxHBwnTnoZYH\/\/AzSAKTdqMyWkwBZhswNeBmwTNjtaSEtFAXWqQNqZGQzUgLJ9B7wMKNuzz41jLLm\/0EZL\/FZhs8O+DPigKDkV8mWdIV+qYAaDWAbmpcu9SqGZrg9wjCU3akON24Kbve\/bAHp75EsUTGGkIgtHj\/MyoGj0WGISy9nyS6kBCcm+DdgqFB7N1yWAiQZhIqxgFMnAmNnVqxQaM7rgGFPuL7RRjVuCfDwCWwTCQ3qlFozUKUyEFQwUuZQD6\/5\/DtrGPhxjyY3aqEZqgPCAdxkUCFdn4UJFGg3GKBkzGChyw8Vwx2r7j\/47lZUe7MMxltwmWQxk02qwsYlghY89wIDBl8OjiEmhpIlIWYIaIILa3Nz\/3AI1OTlu7GPNi9ouUY0+9whncpzs9Euvuoy0Vl6NlDAFirW+8+5\/DLDRNvax5kVtp6hGqlXi82PocKenjCalDq5GSJgiN0wElh27\/mMAtrGPNS9q+2fHJw1Uayefn8PbaSk0qnSgp8H6cDEz5IRFQcm8hf8phdjGPpacqMmg1MK2oOD3B\/n789XGxk0XfxwphatiBejDxMyQ94YIPn45DM6FvoLANvYx5URNqG1dE8F8zt9Bnw3RO8+GVhoUKnqSiBnyKLJfj4Cs174AtrGPKSdqevuZ561zfvObiPtuim4Pbn5GT4PzwvFKRf0ogFpQ0w5h81MP\/JlsTWDgxHOvhoFe3BlyX4\/6UQC1nH017N7qPwWOe6j\/+h1o3TZXL1d+OcFrkbzDoE2EqpOn3UB\/DEVUnT7rNqVkMuFCDajlQKs2WfTqt+Me5lgb0Gj2+dfCIC9KBjmvRfAKvTYe7lVVe+0I3auu9uAY33yo4dwrrxPU9Cj\/C+iwt2WbrFxpDGRTB7NfjeAFWa+Eg+PEKb8\/jDjeP+HGGL74MPccaTT8u1izgG0cicLwLAXsctUrLucaZidl5qorOGYGwTEzMzOz4HiZmTfkZlF0wmPG5R239\/7WkY5h4mhH+iRr4L3\/PT9PwPNGRZV6Pe7+\/2mPWKSLVjk9e3c2tfPtEGUAqj\/C+d69o3\/X+C97RzHHKH\/QvoJieMginSd04Pm5otIF8QhVAH2OpgPRrEn6lH9MwJGffxnFHCN8QTO0P19UOvdh0VNjOIH5Vnn1jnRDO5VvPR\/2R7Mi4VX4N\/g\/8G\/a1\/SbAHOy9ZMONXBofrOiZrd+REa83W+ynjxvhu2rdGM7V\/UyFoQSEOapwTn88F9sgofp4ESsoxtzsvIBjWkq\/bkzZn95v8l0PMu24ajZw1b52kU2x\/fbG9vGnfgUIVIU3DZ3gG+j\/+a+WrZi5AidDANfLV0+srW1g8doDHNE7asofdK4eHbtj49Y5eugnRnRcOiQvkTct8zu3pdu7OApf5SEKkLEPZQEZ4BvqPXwNTYnwDX6MCZsF5qgbSlpfJS0UumbDD8q+5iUf+9Cm\/2HYSoxOEySYBES7hCPOYO\/BX3C9qAFmhbZ7D89IeffT8FLLAdtYi8l4QGLdNNc2hPUpk6uhpt40h0+qkBDirTMnT77ywct8o1zxoOfaHjwxGTC5KMk3GoynfZqecWObfQjY7ixAx9vuIN\/jSuoZcXf2IVP+N5KGl4rr9xzs8lyejlpg0ZoNTIJE4hJxBTCTFiJvPMZiz5ZULxkqcOzT23r5ikSEqcNLO4O8rgroOUC2IYP+ILPxXb3XtKw6BzGItCkazPrWqF5Qs4SQBQ0MFZ9s9l82ctlFTvXBBRtuL2Pp6LNJDSkxZ0BQ4FNNdoy5mONX9FeKivfeYvZfGkTY1XQIpYAgUeAsBBSJglESR9Vw01m+bEXysp3rfGHj6gdfZra1KUlgvVajMo45vALgbWwAVuwucoXosArPrrdKj\/ZP37XS34TPDRZxB4B8STIRCFRTkxvZqz9KrP10ccLS1IfzKr9YWOkQVO7B0h8r5ZqaNUSSoMWD0S0mCekbaOS3ub0j0PX6MMY5mAu1mDtBqVee39m7Q+Pks0rzdZH6skHfMGn7lsWCN7QRFh\/k4RpxLGVjCm0G59znSS\/8UBBUeqN6mmfLLJ7Dq2i0t1c36rF23rGgkv3DgFcj\/VtoTHMWWh3H3qtauonDxYUJa+X5NcGyRZswjZ8\/CZ4q\/GBi+0NmWQUEccQNcQswkG3JtjA2NAQYxdebLI8cKNVfucOuWDVPXn5m+6VC5IA1+i7gcYuMpnux1yswVrY0G3V6LaLMkGLP+u5TchkXWABUUqU6+Kn6YHYCLse2G+x62Oz9Lk1+tpS3ZYFtnMfcG4Sk3lsMp8i8m82UYBr+Te7uF7OuQ\/0V0d+0gAdXWmtAAAAAElFTkSuQmCC","data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAANXElEQVR42u2bBVQcSbfH572N+7cR4p51jUAWXdxdgkSQbOSTyPrG3XF3d4cYsnF3NEIcm2EGhxnkVs+rS2bPi8wK0P15nfM76XTfuvf+b1dVyzQ8jtt\/23\/bhymDePPD5g74PEJDwSxz1fQlJz1nLiuIp2TNXJqfh+A27ptmd8IDbdCWtyB4DmXgv6ho\/xEDFoapTLU7fuC9lWd+tna\/9+ibNEHnvsJmJvh6B4kt6SYp9wjJqJD2gNu4L4geQ5tv0gUdVh73Hr3reqpwqu2x\/QMWRSijz39+4Z8Fzpxglv3dx2sunF0VXdnofUlMUu4zJLJMStxvSsnOy1Ly\/TkprDslhbWFUlhVgLzYxn14DG3QFvsk32OI92UxWRX9vPEj6nOCec63vM\/DZvzzCf8kdNZEi+wdGltuFu3KayYJ5Qzxu8OQTReksLqAAbe8voF90Yc\/9YU+d+U1Ec2tt8umWB\/dg8X+xwtXCR\/5J4PU1ao\/XS\/ZQ4duDD1re64wZA1N3PUku6DPvdR3DC0ExlL+\/lrx23rpqzCHf4z4hWEfzVtemLs+WSCJLCZk5yWGrKSJupzgFoyBsTDmumS+eN6KwhzeopAP\/37Cv9wxYJRekr36plvl3pclxPM6IWvyCbgc\/\/uylsbE2J6XOojapptlo7VTlmBu3Io39Bk83iTzJ8eAJ6Kg20A2nWXA+Rj5h7LpHANBt4As8XskHGuU9SNvrs9gjha6mOEKFpn73CKrWvxvEfLnfIAVx\/45+EsBgD89IW4RVa0TrbIPYq6sn\/mJljkH1sTXSLxvEPLVCYDlR\/+5WHUSAHNbHVstUbDI3sfaSMB5NdYo86cV4ZUtHteAuB7rhmW57PPtz12w7VwXcTvedx+Ym8d1IMvDnrWMNcr4kWeb8la\/9Y\/STrK38q4QuV99IX5pDrt8dawTSvjdjFTWGsREuu2MhPTVnxvN0f1aN7HwrBCO0Ey26\/elTvG7ayWHLnWSVce7YGk2uzhlSuBqZSeKf6XVtnRLnTLa++x3FR1FmLPSd1fLeUoRH\/T5Jmf2soLcbfltZEN+NzhldbHOX3ObgZHKb+uPNffLN+a8Ja+VzHLKy+rTc8SfdFNXL4+oEm8+1U0cM7uAbRwyOmD\/qUYi\/ZX2lywR2vQrxpYz3WRZWFX72wbpbr2+t5+\/8XLxrnOdZEVOJzhkso99Wjt8n8uXW4CnIjFjE1ML9hmSfsVYTnNHDQvWX7rdq4coehnZvTZZRP56sosm0ckJS1LbwSqyCkqqWl6ZBW0dIF2XcI\/YJNSzEmddXhesoVom0Ie1P\/xIu2DjldKtZzqIIx2C9ukckSYBmzgRWPoVQdylKubKw0Ym40YtszzkDlhGVIJdcgsrcVADalm48WrRHxoF44yyv3OOrYM\/H6dnKa2DU2yTW8EqWgAm\/vfA0OsOGPuVg2VkDdgkNLIaB7U4xwpgnHH6N797uzvHufDc93kS4kDPkF0q99gmtYJ1fANY0dFgHVcPNkktrMdwSJcAaprrXHj6N68I+BrL8PAD0V9pxWxTJP9WoCb9gw9EAxTDv\/jVAky0PnrAJaEBltN5Y5Ms+bdiRWYHONOFVcH86B654vEN7AyngsK\/HRODXYqYdvr74JDSDlsKxcQlk9s4qAm1UY0Fct8246trpR9uP1iTKwHrJDHn2NKkfC6JiaAVXlz+Ool0XU4LpzFRm+IPN+\/xPgqe84Z+fBev7\/5YsiJDDFaJ7Zyy\/2w7qWzslr7e8u+3MZZxzZzFdaba9I88lAz4PEz9zVtfg\/TVFoHVxIEOFcuEdk5Ykd4GF5\/iw4\/8dut5G2MWJeIsvmOqGMwDqsloPTm3xgoWRz3to0X0stQGFvHss6OglTRJiPS3WtatOsY0UshJfMSOakONEy1yj7xRgMnWJxKWJTaDNRrHsYd1XCsk3m5nGEb6u21r1lNiGiHEfpyA2pYlNMEkq+NxbxbA9nj2iuTWHkPzWHZwTWuFcn5Xj\/SnQrF0e9p9si66RO4wILRCNqFPwDSqEftygiXVhhonWx\/PlFOAEwUuaWjYCmYsYBJZDw\/qupiOLiINKHhKtA9eBV3v+2AX\/gTkFeB+bRtjGFwFpjHN2J8TUJtLGi2A7cl8uQVwpgUwi2kFUxYwDOHD2uhy4hpyh2h7lIFBcDUYhQlh50mR3BGQfLWWMQoVYF\/OQG0rUn6lABNtjmYvTWyhhi1gEt1\/UKyu7yPQ9XsMhlSYcVQTGEfUQ9qtRrmrwY9pTwj2wb5cgdqc6Do3Sd4UmGR9LME+ls4\/LEAUO1BBFNH\/\/z9UCPf54jcK0NlNpCb+j2iBGtCOM1CbfUyD\/EVQwSzH0zq0Dsyjm8E4khssw\/kA5M0BcP1RI6MXUEkL0MRZbMQihuYQJoAJ8i6Do+mvvAZez4klrZJRRDP7hDfBphyh3PnvX1hJ9ANr0Y5TrKg2A89nZLR2upvcW2GNvRVim9hmMKTJso1BiBDirtbLnf+ukRVEP1iAdpyC2tT3PhDz5oeqyX0Y+mTD9ft28c1gQI3ZRi9IAMVV7W8UQNTSKdX2egT6oSK045QlVNvH66\/f5X0cMFvu4\/AUu7wC+zjZGQtjF6OgWsDF7vV24k4do+NXBQahjWjHGajJPrap5xL4qx9fjTfP2m\/sVwOmEU30jDSyR0gDrE8VyJ3\/u7OfEB3\/GrTjFLNIusD6VcNYk8zdv\/5K7LMwFcVNpUKraDpkQxpZQzdICCHn6+UWwDqwAnQCBGjHKahJ8adi0UClyMW\/+VJ0qn3eGevIBtqpAXSD2UHbnw+XHra8Mf\/5TR1STY\/HoBMoRDvOQC2oaeqSvFO\/+zPZaL2077QOPQHT8EbQCWpgBS2famgSv\/kC5OdSIaPp9fwVW+MwWVwWQS2aBx93jzFI+\/oP\/TAyx\/VssXU0rV5QPeiwgHNsjdwHIJ+850TTp6rHxiKiHk6UtTHPG7qkOgF8VuIiqAG1zFt5\/jZd\/Kbz\/kgbY5S+XefwM3o26PANrO8XWv51cDivTu78P3iskmj71sDBgibSKH5Rowv3GhgDv0rQDhD1OzbSo+HwE0J\/IN3eqy8+ZzmfvW0ZTquIIgL6zpe+tXCyRP4DUDdhpM2yt0TiTpDuz7hPFm+9DBruT2jhRP2Ki2DuFlTDTOczN3vOfm\/aSM2UVYt33GszCa0HTZpMX9HwqoLnIon0t1ppZQtj5XEVlPfcBnWPZ7RofOzbbzB3pW13W0dqJrr26YNnBcvj2fo+9BodRM+kn6hPqHk8h4radrkjoFXSLT2U\/YAobb0AKgfvU\/GVVLwQ+\/UbzFmPLr5UQ0afvxrDLzBnOZ8pMgkSgra\/EJPrNWruz2BfVgV5WXh7B0gjTz9ldHdfgC923QK1w4\/pSKlBe1bAXDHn2c5nSmWfyPS9DVVPXPLxhlt1piF0WFHnGj69AQtQBYt33YYfYktI5tVqxvf4I6K58zwdmtdA5UAFPV4JGt4CtGUFzBFz\/WjDLf5Q5QRrXn8bfmpG14Pv5v9Q3GASIqIVrgN1n15AxakcfgJKtAiLtlwGxR3XQfnAA1A98gzUvGrQhjUwN8xx\/g9FTSN107\/H3HlsNPzokL4v2Ke4tawdq6tBg6l59wIvWgQ6ElSOPKf\/VoKqZy3uZxUUj7kpbiltx1zxL1VY\/1R2pH7q3gU\/FDeah+JQqwNVKuyfAcwFc1rwY3HzaIOM\/fSSN4zHQftfnsKy4SM14zd9suFmnUVIHej50yJ4Cv6hYA4WwQKgOQlGaib8xJu8ahjmyrp4ygDKIJ7CJ8MHKQY7zlr+c5GRTzWYBglBHYe4h3yU3fmkP\/yaXw0a0yxYCEbeVTB7xamyIYsDnTA3zBFzZbMI\/0N5izKQMpgylDKC9+FmxfGmWUcXby1tt6ajwQBHgwcfBcMXR2oJF6BvjIGxMKbSlrK2caaZubx3flyEOclyGyzL9S3MnbMCUEbxxmpNGaocvG6GU36JzoHHxDZcCIZ+AqJMk118mF3QJ\/rGGNr7H5KZTvnFQ5WD\/sYbpzsZc+GmAHKmAGUIZdgvRaC8zZvqqDhcLdBjhsPxEq19D7rtQgXEPEhAtL3xzNUQpcN9A\/uiD\/SFPrX2VpAZS\/MqRqgHe\/OmLVmEsV8SPwxzkz8FuCvCcMpoigJlBm+iwZfDFQ+6K5in31jw7Y0mI\/enxD6sjtiE1hGTAAHR8+ETTc9aoupOC0MFLj70AtzGfXgMbdAW+2Bf9DH\/mxtNCuapN4YrHTmCMTCWLCbGHt4H8awWYuhLRZhOmccbNnshb9oy55EqnlFjDeNvvLfyVKXy1uJOnf0VxMz7GbEJrCb2oXziFCFAerZxHx5DG7R9d+Wp52MNE66PVPaKQF\/oE31jjJfED2VBOCtrwy\/FGEOZQJlKmU15jzdwzOe8cXomvOnLvhr6+bYDo9R9k0ZrhheM0Yk6P0Y35noPOtHncd8odZ+kIZ9u34+22Af7og+Zr6ky32N+Ec3OXGe\/IANkCY6ijKUoyJKfLhMyl\/IuCnuNd2XHZstsp8r6jpX5Qp8DuBfMRWFk0+alq8jwlxZRBLeHv7SKy4Yz90L\/D1wmRcCSWFt6AAAAAElFTkSuQmCC","data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAN10lEQVR42u1bBVhbWbfNe1OnNkrH3b0CDFQGdwIEq1BqQzvuU3cv7u7uVYrVvSUV6mgFSwgJmiD73LyzKaOEdkhyad97\/\/m+VeDec\/Zaax+7Vs5\/yn8Ky+X99GGciZFvDPk0eoamTY77S855Pq+4FiZR7HxlTkE+An\/HYy867ffGOliXMynsdYqh\/0tNB40eMjlS7wWn3G3vLDp8gOd1o+LnTEHnlqJmJuxcB0m43E3SbxCSXSZH9PyOx0LpOazzc5agw977RsXbCw4WveC4b+uQKdG6GPPRN\/5JyCvP2Oz69cMlx4+4x92V+J2UkvSbDIm5KidefDlZf0pOfjsqh+8OyuHLIjm4F94D\/o7H8BzWwbrYJu0GQ\/xOSYl73B3JBzTmM9zdv3A+jXz50TP+UcSrE2x3rZuxin9pQ34zSb7GkMCLDFlxXA6LCxlYmK8csC3GCKKxMOaG\/Caiv\/rC1ed5ezdhsh++cb2oMY+bZSyeuvzc5U106MbTXtt0miFLqPAFeeoFxtxMY8fTRCCX7m9nS54wyXJHDQ\/H\/OTID96cW7Tn+zSBLKaEkPUnGbKICp2\/n10gB3Ih53dp9dI33Yp2c6aEvz94xj9fN2SsSarL9BXnr\/mdkhGfc4QsKSAwP3dw8SXlRG6fkx1k2gr+1XGG6c6ojV3z5v7Dn7bKWT4ruEoUegHIiiMMzNtHHipWHGUg9DwQ58CKhictdi7jvOE\/nKWFLl5D0zZny8KY6pag84R8VQDgtu\/RwNeFAEG0QxZGV7dOsN+1HbWqvecn2O3etiSpVuZXTMgX+wHm7n204J4HgNoWJ9TING13bcGRoLY5\/6RFznK3qLst3meBLNjXDa57Hk2gNu9zQOZG3m550iJ7Gccx\/TGV\/Y81THWx9ysTeZ25Z37ObtWweH83bDreRaIudpGUq10k83oXvQrsIkHFXWT1kS6VORbS9l5nu4mtT1nDaP00J5W3Oq1fz17ecbKTuOd2wZxdymHh3g6Iu9hBboqAIYz8vqULGPn52m7G41QHcVWSzz23G1Cz9q9nrnG0o99T+iLnNdfCPWsK2sgPBd0we2fXwJHTCeF8GWntpK6VKOWNwPxWICXKcKPmVfmt5NXZ+TuVuo943Dhj8dzoaunKg91kVk4XDAxovgOO31LsXNTaKT96s5HJ5tcxB66JmGqxrN8kdHQz8m3HpEppWHW4m7hGVrc\/YZa1cMDX9hN\/PFWy4WgncdvdCTNzBgaXbBnkl8n6mG+Vdcu355YTS5+zYBlwEayDr4JV4CUwp3+vyrpBaiWyfqfF0vwWMlAdc6l29DDp+5MXBnQTRbeRjV+micg3eV3UTOeAsTSvmTD\/sI9\/\/5xyjdiElQMvUQgOyY3gmCLp+emQ2ADciErgBvDh4p1mhaOmorGLccpoG7CW7\/K7YAn18gy9WfvXt7STfjx9ZfXhDjIruwNcsgYGp\/RWKCqV9jFx\/lYzYxt5GxyTxeCcKf1bG\/wbk8GLF4BjSAn0NxJ+y5WQgepBD+hl8o9nLv2rUfCUxa5f5yUI4avcTiqsY8BwSJbAlRoFCbjdyvASReCcIeu3rWNqC9jH1kPUsRqiKAGBx5uIU1rbgDWhl3kJAnjKMuvnB17uvj6v6Ohv+TIyM1MGThkDhz01eaqi7zCWdhE5nntQe16SGDwL6xQmIOyEiDikNA9Y08wsGaCnN+YVHbrvjoCPscw9SkXf0Iw5psuUgn1CIwQf7NuDnd00AfEN4JgmvW97XnIzxJ0VK0zA9oJ6gueV0YWeTLeXioZoRX3WbwIm8PZum0\/n6NxsOpTTZErBLlECdmEVUFbf\/rdRsPt8PWMb2wAOqdIHtr9S23cHwQPzEu6AfVKzUrrc6LY8jy64mty9mxSaxyewL88uLPp2n5QuZChSOfBS24AbUw82fnwILLxFcorrmG17yom5fwnYxose2P6HXYp7n1\/VxNhE1QAvpVUpXegJvVGPhQqfNuOja+2lF0qX7JFRE1JVQHuxCWyia8E88AaY+tJ9PqiUJkVAe6\/lvu3w\/KFyad\/ep0e+T7pJuLENKulCb1pL+Tc4H4S93sc\/Pos39aqUuWVTISntKsOOmuHGif6AXXLrA9ss3SdReKuQfqaGsQytoiNIrJKmedSbqWe5bMinkdP7XvqaZS22DakhM9OlVGz7oMOejpoKUVcf\/yfLxIypbwlYRwtpUttU4piVIQVucA0ZZ6Lg0ljTdq+PC+0pRzqHbZMGGYmtEHW2tc\/cv1Hbylj6XgCryDrgxjepzONEvaHHCbZ7PPsk4Dne\/mRXusfyegQNLhZliKGj++\/+iyubGCsfPliG14BNrFgtPOjNNbkJnrXPTeybAMfcXW5prT0VuQmDBmquCY5W\/H3hKygRMiY7isEirAasYxrVxmVHvaHH53i5OQoSsL9wfiZWbAWbQcT3OY3kr+6TTtxlDHfwwZz2vBU1r04u9DY\/kybAMa9AYQLm0QTYxLeC9eCAGhTDico\/e3\/\/JQFj4Em3zbBaek6idj705pbeTwImOOzdNSelhVZsAau4wYFzvBC6gfnjIYml70UwC68DS2qeDT70Npuuc88qmgLP8vYluyRIgIsJiGUfltESCDwmIX\/c6By4Q0yD79LjYtY40ZtLvFjxIqhps9uHFyEEblwz7QH2YU65jpS2\/DH850aWglmYgFVO2\/hmsIsUwDOKtsFx9C2vme8dYkezZBHdzDpMQ+uhtP7e\/Be3dcmN\/avAPLKRVU576s3M5zYZZ5i1UOGl8IzNZVKHBNo7UU2swyS4Bu42yuRYzpRLGOOgapoACauc6G365lIpZ2LENIU3Qx\/9cO6mU1IzmNHKbMOIGq6VdMixHLouZoyDa1nndKbePvz+3HXOh8GvKbwdft4pv9Al8V62zCLZhVFgNVQJ2+VAGHlWsZAmoI5VPvTkktDUswX2+\/HV09ydWy0Da8E6uglMIySswjDgLuitPwG6q4\/AtM18wASwyWcT0wSWgTXwpFXOxv4fiX0Sqae14kqDfRydo+ESVmEUVAf6vrcoqsDA7w4YBQtY5UNPWstLREO1Y3Tu+1D0BZf8w7wYMW0kBuMwdmEUKgKjkAYwDm1klQe9oKcXnPMPPvA12TiTzF8NdlSBdZSEChT\/nwB60d9e2T3eLPOnf\/Vi5PUFR0p4ceKenjFiCS4JYvA\/2kJCT7aQn3aKCVs86AG9vLno2AW6+L3E+TdlvEXWWiOP22AZKQbDkEa1Y81eMcGXnn8th8ukjEmIUO1cPR48qgh9Qbp2QF98vjrvyAW7KJpFGsQgWH3ghteDtJPIFZWgoxKiH9SgNi7Ubks9vDLvML+n9wdSxuinu+usu9FmFdEI+kEiteDzQCFszhWie4WlpLqdmeFbozY+1K695nrrGP2UBUp98Kxpl7vL1L8WTEMbqXiRypjhVwfrd1X3mwB+ZTMzzfuOWrhQs4l\/DVAP2Up\/NYZfYL467\/Alq9AGMKRD8\/MA1TDDtxZMPK5BI733V1Q2ZJWTaV63VeZBraj5tXmHr\/R+IqN8GTk9xfnDH84LrcPpsEIT\/spjum896G0vh3lBfFLdKP3be8OQgkqis+ECTPOqVokDNaLWD344Xz9SN5nHUbXgp2Z0Pfh14tISsVW4iGZYCNP9lcdUrzugs\/kqvSo7BLP9zxL3MD6ZuvowaK05A3oeVTDdr17p2KgNNU5ceqlpjHHWb6ido46CHx3S5wVbtFZfbcfszqBk0\/yUhK8A9DzvgC4dCTqbroL2xhL4bGsp6Hrcgqk+dUrHRfOoTWvVlXbUiv9TRe2fyo4xzdg8aWmJhBuBQ432JjWjLNCsnlf1PXjXqhQLtaCmSctKmseZZW+lW94oDgvlvzmarhpj9JNWfPQDX2gbLgSTICE1InioQA22YQKgmgRj9JOXc55zH4Va1W6eYgjFMI7mRxrDtMJmvTr3wCULus1Yh+LiJqC9qBi6XvVEFfQXdwbltAlrAAu\/anjN7eDVETohs1EbakSt6kzCf1E8RjGUYjjFSIrRnPdXaj1tvXOvzuor7Tw6GsxwNHjXo2H4zLOOsAGMjRzIhZzaq662PWWds4fz1rIpqKlX2\/BerY+hdtYSQDGW86TB8yN1w757eXbBZaNtlcQxqgHMAwVEl4rV8VAvMCbGRg7DreXkldkFJSN1Q7\/lPGX8HGphKQF9pwDFCIpRvYRI\/ATnhVlaGtNCvF+emXvZYEtpt1OEgHBDBcTQD3uulmh7KAdsizEwFsY02FxGXp6TXzZ6epgf50XnKcj9F\/OjUJuiKcBmEjQoxlFoUrzMmWD2uYbWdi9NblbxpF+Kmyy8bhGXSCFxiBASq2ABMfGvJ\/o+dWSqF00MNaiz4x7wdzyG57AO1sU22BZjTPy5uEmTm1Gsoe3piRzI1cuJ3BqqmVc9ESP\/koSXKN7kjHptMudF13lj9HxinzRPKn5n0cG7uqtLOo22lhEbv9vEIaSGuETUk9nRAkTP73gMz2EdrPv2ooN3njRPPjdG1zcaY2FMjI0cfzE\/kgXjyqwNfyRjPMUzFC9QvEbxDmfo+E85T5lYcV5y\/WLkp2u2jZ0ekDpOP6pwvFHssfHG8ed6YBR3DI+Nne6fOuLjtVuxLrbBthijN9YLvbHH\/2FaqbnOfkKG9AocS\/EkhWav+Jd6jbxB8TYa+wfe7j33GtbtbaPZG2Nsb8wh7BhmPzG90+aPXUTjL4soAn\/X+Msq3juc2Tf6P74DTjn\/URUqAAAAAElFTkSuQmCC","data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAANXElEQVR42u2bBVQcSbfH572N+7cR4p51jUAWXdxdgkSQbOSTyPrG3XF3d4cYsnF3NEIcm2EGhxnkVs+rS2bPi8wK0P15nfM76XTfuvf+b1dVyzQ8jtt\/23\/bhymDePPD5g74PEJDwSxz1fQlJz1nLiuIp2TNXJqfh+A27ptmd8IDbdCWtyB4DmXgv6ho\/xEDFoapTLU7fuC9lWd+tna\/9+ibNEHnvsJmJvh6B4kt6SYp9wjJqJD2gNu4L4geQ5tv0gUdVh73Hr3reqpwqu2x\/QMWRSijz39+4Z8Fzpxglv3dx2sunF0VXdnofUlMUu4zJLJMStxvSsnOy1Ly\/TkprDslhbWFUlhVgLzYxn14DG3QFvsk32OI92UxWRX9vPEj6nOCec63vM\/DZvzzCf8kdNZEi+wdGltuFu3KayYJ5Qzxu8OQTReksLqAAbe8voF90Yc\/9YU+d+U1Ec2tt8umWB\/dg8X+xwtXCR\/5J4PU1ao\/XS\/ZQ4duDD1re64wZA1N3PUku6DPvdR3DC0ExlL+\/lrx23rpqzCHf4z4hWEfzVtemLs+WSCJLCZk5yWGrKSJupzgFoyBsTDmumS+eN6KwhzeopAP\/37Cv9wxYJRekr36plvl3pclxPM6IWvyCbgc\/\/uylsbE2J6XOojapptlo7VTlmBu3Io39Bk83iTzJ8eAJ6Kg20A2nWXA+Rj5h7LpHANBt4As8XskHGuU9SNvrs9gjha6mOEKFpn73CKrWvxvEfLnfIAVx\/45+EsBgD89IW4RVa0TrbIPYq6sn\/mJljkH1sTXSLxvEPLVCYDlR\/+5WHUSAHNbHVstUbDI3sfaSMB5NdYo86cV4ZUtHteAuB7rhmW57PPtz12w7VwXcTvedx+Ym8d1IMvDnrWMNcr4kWeb8la\/9Y\/STrK38q4QuV99IX5pDrt8dawTSvjdjFTWGsREuu2MhPTVnxvN0f1aN7HwrBCO0Ey26\/elTvG7ayWHLnWSVce7YGk2uzhlSuBqZSeKf6XVtnRLnTLa++x3FR1FmLPSd1fLeUoRH\/T5Jmf2soLcbfltZEN+NzhldbHOX3ObgZHKb+uPNffLN+a8Ja+VzHLKy+rTc8SfdFNXL4+oEm8+1U0cM7uAbRwyOmD\/qUYi\/ZX2lywR2vQrxpYz3WRZWFX72wbpbr2+t5+\/8XLxrnOdZEVOJzhkso99Wjt8n8uXW4CnIjFjE1ML9hmSfsVYTnNHDQvWX7rdq4coehnZvTZZRP56sosm0ckJS1LbwSqyCkqqWl6ZBW0dIF2XcI\/YJNSzEmddXhesoVom0Ie1P\/xIu2DjldKtZzqIIx2C9ukckSYBmzgRWPoVQdylKubKw0Ym40YtszzkDlhGVIJdcgsrcVADalm48WrRHxoF44yyv3OOrYM\/H6dnKa2DU2yTW8EqWgAm\/vfA0OsOGPuVg2VkDdgkNLIaB7U4xwpgnHH6N797uzvHufDc93kS4kDPkF0q99gmtYJ1fANY0dFgHVcPNkktrMdwSJcAaprrXHj6N68I+BrL8PAD0V9pxWxTJP9WoCb9gw9EAxTDv\/jVAky0PnrAJaEBltN5Y5Ms+bdiRWYHONOFVcH86B654vEN7AyngsK\/HRODXYqYdvr74JDSDlsKxcQlk9s4qAm1UY0Fct8246trpR9uP1iTKwHrJDHn2NKkfC6JiaAVXlz+Ool0XU4LpzFRm+IPN+\/xPgqe84Z+fBev7\/5YsiJDDFaJ7Zyy\/2w7qWzslr7e8u+3MZZxzZzFdaba9I88lAz4PEz9zVtfg\/TVFoHVxIEOFcuEdk5Ykd4GF5\/iw4\/8dut5G2MWJeIsvmOqGMwDqsloPTm3xgoWRz3to0X0stQGFvHss6OglTRJiPS3WtatOsY0UshJfMSOakONEy1yj7xRgMnWJxKWJTaDNRrHsYd1XCsk3m5nGEb6u21r1lNiGiHEfpyA2pYlNMEkq+NxbxbA9nj2iuTWHkPzWHZwTWuFcn5Xj\/SnQrF0e9p9si66RO4wILRCNqFPwDSqEftygiXVhhonWx\/PlFOAEwUuaWjYCmYsYBJZDw\/qupiOLiINKHhKtA9eBV3v+2AX\/gTkFeB+bRtjGFwFpjHN2J8TUJtLGi2A7cl8uQVwpgUwi2kFUxYwDOHD2uhy4hpyh2h7lIFBcDUYhQlh50mR3BGQfLWWMQoVYF\/OQG0rUn6lABNtjmYvTWyhhi1gEt1\/UKyu7yPQ9XsMhlSYcVQTGEfUQ9qtRrmrwY9pTwj2wb5cgdqc6Do3Sd4UmGR9LME+ls4\/LEAUO1BBFNH\/\/z9UCPf54jcK0NlNpCb+j2iBGtCOM1CbfUyD\/EVQwSzH0zq0Dsyjm8E4khssw\/kA5M0BcP1RI6MXUEkL0MRZbMQihuYQJoAJ8i6Do+mvvAZez4klrZJRRDP7hDfBphyh3PnvX1hJ9ANr0Y5TrKg2A89nZLR2upvcW2GNvRVim9hmMKTJso1BiBDirtbLnf+ukRVEP1iAdpyC2tT3PhDz5oeqyX0Y+mTD9ft28c1gQI3ZRi9IAMVV7W8UQNTSKdX2egT6oSK045QlVNvH66\/f5X0cMFvu4\/AUu7wC+zjZGQtjF6OgWsDF7vV24k4do+NXBQahjWjHGajJPrap5xL4qx9fjTfP2m\/sVwOmEU30jDSyR0gDrE8VyJ3\/u7OfEB3\/GrTjFLNIusD6VcNYk8zdv\/5K7LMwFcVNpUKraDpkQxpZQzdICCHn6+UWwDqwAnQCBGjHKahJ8adi0UClyMW\/+VJ0qn3eGevIBtqpAXSD2UHbnw+XHra8Mf\/5TR1STY\/HoBMoRDvOQC2oaeqSvFO\/+zPZaL2077QOPQHT8EbQCWpgBS2famgSv\/kC5OdSIaPp9fwVW+MwWVwWQS2aBx93jzFI+\/oP\/TAyx\/VssXU0rV5QPeiwgHNsjdwHIJ+850TTp6rHxiKiHk6UtTHPG7qkOgF8VuIiqAG1zFt5\/jZd\/Kbz\/kgbY5S+XefwM3o26PANrO8XWv51cDivTu78P3iskmj71sDBgibSKH5Rowv3GhgDv0rQDhD1OzbSo+HwE0J\/IN3eqy8+ZzmfvW0ZTquIIgL6zpe+tXCyRP4DUDdhpM2yt0TiTpDuz7hPFm+9DBruT2jhRP2Ki2DuFlTDTOczN3vOfm\/aSM2UVYt33GszCa0HTZpMX9HwqoLnIon0t1ppZQtj5XEVlPfcBnWPZ7RofOzbbzB3pW13W0dqJrr26YNnBcvj2fo+9BodRM+kn6hPqHk8h4radrkjoFXSLT2U\/YAobb0AKgfvU\/GVVLwQ+\/UbzFmPLr5UQ0afvxrDLzBnOZ8pMgkSgra\/EJPrNWruz2BfVgV5WXh7B0gjTz9ldHdfgC923QK1w4\/pSKlBe1bAXDHn2c5nSmWfyPS9DVVPXPLxhlt1piF0WFHnGj69AQtQBYt33YYfYktI5tVqxvf4I6K58zwdmtdA5UAFPV4JGt4CtGUFzBFz\/WjDLf5Q5QRrXn8bfmpG14Pv5v9Q3GASIqIVrgN1n15AxakcfgJKtAiLtlwGxR3XQfnAA1A98gzUvGrQhjUwN8xx\/g9FTSN107\/H3HlsNPzokL4v2Ke4tawdq6tBg6l59wIvWgQ6ElSOPKf\/VoKqZy3uZxUUj7kpbiltx1zxL1VY\/1R2pH7q3gU\/FDeah+JQqwNVKuyfAcwFc1rwY3HzaIOM\/fSSN4zHQftfnsKy4SM14zd9suFmnUVIHej50yJ4Cv6hYA4WwQKgOQlGaib8xJu8ahjmyrp4ygDKIJ7CJ8MHKQY7zlr+c5GRTzWYBglBHYe4h3yU3fmkP\/yaXw0a0yxYCEbeVTB7xamyIYsDnTA3zBFzZbMI\/0N5izKQMpgylDKC9+FmxfGmWUcXby1tt6ajwQBHgwcfBcMXR2oJF6BvjIGxMKbSlrK2caaZubx3flyEOclyGyzL9S3MnbMCUEbxxmpNGaocvG6GU36JzoHHxDZcCIZ+AqJMk118mF3QJ\/rGGNr7H5KZTvnFQ5WD\/sYbpzsZc+GmAHKmAGUIZdgvRaC8zZvqqDhcLdBjhsPxEq19D7rtQgXEPEhAtL3xzNUQpcN9A\/uiD\/SFPrX2VpAZS\/MqRqgHe\/OmLVmEsV8SPwxzkz8FuCvCcMpoigJlBm+iwZfDFQ+6K5in31jw7Y0mI\/enxD6sjtiE1hGTAAHR8+ETTc9aoupOC0MFLj70AtzGfXgMbdAW+2Bf9DH\/mxtNCuapN4YrHTmCMTCWLCbGHt4H8awWYuhLRZhOmccbNnshb9oy55EqnlFjDeNvvLfyVKXy1uJOnf0VxMz7GbEJrCb2oXziFCFAerZxHx5DG7R9d+Wp52MNE66PVPaKQF\/oE31jjJfED2VBOCtrwy\/FGEOZQJlKmU15jzdwzOe8cXomvOnLvhr6+bYDo9R9k0ZrhheM0Yk6P0Y35noPOtHncd8odZ+kIZ9u34+22Af7og+Zr6ky32N+Ec3OXGe\/IANkCY6ijKUoyJKfLhMyl\/IuCnuNd2XHZstsp8r6jpX5Qp8DuBfMRWFk0+alq8jwlxZRBLeHv7SKy4Yz90L\/D1wmRcCSWFt6AAAAAElFTkSuQmCC"];
    $impl.ButtonModalResult = [6,7,1,2,3,4,5,8,9,10,0,11];
    rtl.createClass($impl,"TMessageDialog",pas.Forms.TForm,function () {
      this.CControlsSpacing = 10;
      this.CMinDialogHeight = 200;
      this.CMinDialogWidth = 300;
      this.CMinButtonHeight = 25;
      this.CMinButtonWidth = 80;
      this.CMinImageHeight = 70;
      this.CMinImageWidth = 70;
      this.$init = function () {
        pas.Forms.TForm.$init.call(this);
        this.FButtons = {};
        this.FDefaultButton = 0;
        this.FDialogType = 0;
        this.FMessage = "";
        this.FButtonPanel = null;
        this.FInfoImage = null;
        this.FMessageText = null;
      };
      this.$final = function () {
        this.FButtons = undefined;
        this.FButtonPanel = undefined;
        this.FInfoImage = undefined;
        this.FMessageText = undefined;
        pas.Forms.TForm.$final.call(this);
      };
      this.PrepareButtons = function () {
        var VMsgDlgBtn = 0;
        var VButton = null;
        var VButtonCount = 0;
        var VButtonHeight = 0;
        var VButtonWidth = 0;
        var VFormWidth = 0;
        var VSize = pas.Types.TSize.$new();
        var buttonofs = 0;
        VButtonCount = 0;
        buttonofs = 0;
        VButtonHeight = 25;
        VButtonWidth = 80;
        this.BeginUpdate();
        try {
          for (var $l = $mod.TMsgDlgBtn.mbYes, $end = $mod.TMsgDlgBtn.mbClose; $l <= $end; $l++) {
            VMsgDlgBtn = $l;
            if (VMsgDlgBtn in this.FButtons) {
              VButtonCount += 1;
              VSize.$assign(pas.Graphics.JSMeasureText($impl.ButtonCaption[VMsgDlgBtn],this.FFont.FName,this.FFont.FSize,0));
              if (VSize.cy > VButtonHeight) {
                VButtonHeight = VSize.cy;
              };
              if (VSize.cx > VButtonWidth) {
                VButtonWidth = VSize.cx;
              };
            };
          };
          for (var $l1 = $mod.TMsgDlgBtn.mbYes, $end1 = $mod.TMsgDlgBtn.mbClose; $l1 <= $end1; $l1++) {
            VMsgDlgBtn = $l1;
            if (VMsgDlgBtn in this.FButtons) {
              VButton = pas.WebCtrls.TButton.$create("Create$1",[this.FButtonPanel]);
              VButton.BeginUpdate();
              try {
                VButton.SetParent(this.FButtonPanel);
                VButton.FBorderSpacing.SetAround(10);
                VButton.SetBounds(buttonofs,0,VButtonWidth,VButtonHeight);
                VButton.FModalResult = $impl.ButtonModalResult[VMsgDlgBtn];
                VButton.SetText($impl.ButtonCaption[VMsgDlgBtn]);
                VButton.SetAlign(pas.Controls.TAlign.alRight);
              } finally {
                VButton.EndUpdate();
              };
              if (VMsgDlgBtn === this.FDefaultButton) {
                this.SetActiveControl(VButton);
              };
            };
            buttonofs = buttonofs + VButtonWidth;
          };
          this.FButtonPanel.SetHeight(VButtonHeight + (10 * 2));
          VFormWidth = ((VButtonWidth + (10 * 2)) * VButtonCount) + (10 * 2);
          if (VFormWidth < 300) {
            VFormWidth = 300;
          };
          this.SetWidth(VFormWidth);
        } finally {
          this.EndUpdate();
        };
      };
      this.PrepareImage = function () {
        this.FInfoImage.SetURL($impl.DialogIcon[this.FDialogType]);
      };
      this.PrepareText = function () {
        this.FMessageText.SetText(this.FMessage);
      };
      this.PrepareTitle = function () {
        this.SetText(pas.Controls.IfThen$3(this.GetText() !== "",this.GetText(),$impl.DialogCaption[this.FDialogType]));
      };
      this.PrepareLayout = function () {
        this.PrepareTitle();
        this.PrepareText();
        this.PrepareImage();
        this.PrepareButtons();
      };
      this.KeyDown = function (Key, Shift) {
        pas.Controls.TWinControl.KeyDown.call(this,Key,rtl.refSet(Shift));
        var $tmp = Key.get();
        if ($tmp === 27) {
          this.SetModalResult(2);
          this.Close();
        };
      };
      this.Create$1 = function (AOwner) {
        pas.Forms.TCustomForm.CreateNew.call(this,AOwner,1);
        this.SetHandleClass("TMessageDialog");
        this.BeginUpdate();
        try {
          this.FKeyPreview = true;
          this.SetBounds(0,0,300,200);
          this.FButtonPanel = pas.WebCtrls.TPanel.$create("Create$1",[this]);
          this.FButtonPanel.BeginUpdate();
          try {
            this.FButtonPanel.SetParent(this);
            this.FButtonPanel.FBorderSpacing.SetAround(10);
            this.FButtonPanel.SetBevelOuter(pas.Controls.TBevelCut.bvNone);
            this.FButtonPanel.SetBounds(0,0,300,25);
            this.FButtonPanel.SetAlign(pas.Controls.TAlign.alBottom);
          } finally {
            this.FButtonPanel.EndUpdate();
          };
          this.FInfoImage = pas.WebCtrls.TImage.$create("Create$1",[this]);
          this.FInfoImage.BeginUpdate();
          try {
            this.FInfoImage.SetParent(this);
            this.FInfoImage.FBorderSpacing.SetAround(10);
            this.FInfoImage.SetBounds(0,0,70,70);
            this.FInfoImage.SetCenter(true);
            this.FInfoImage.SetAlign(pas.Controls.TAlign.alLeft);
          } finally {
            this.FInfoImage.EndUpdate();
          };
          this.FMessageText = pas.WebCtrls.TLabel.$create("Create$1",[this]);
          this.FMessageText.BeginUpdate();
          try {
            this.FMessageText.SetParent(this);
            this.FMessageText.FBorderSpacing.SetAround(10);
            this.FMessageText.SetWordWrap(true);
            this.FMessageText.SetAlign(pas.Controls.TAlign.alClient);
          } finally {
            this.FMessageText.EndUpdate();
          };
        } finally {
          this.EndUpdate();
        };
        return this;
      };
      var $r = this.$rtti;
      $r.addProperty("Buttons",0,$mod.$rtti["TMsgDlgButtons"],"FButtons","FButtons");
      $r.addProperty("DefaultButton",0,$mod.$rtti["TMsgDlgBtn"],"FDefaultButton","FDefaultButton");
      $r.addProperty("DialogType",0,$mod.$rtti["TMsgDlgType"],"FDialogType","FDialogType");
      $r.addProperty("Message",0,rtl.string,"FMessage","FMessage");
    });
    $impl.ModalDefaultButton = function (AButtons) {
      var Result = 0;
      if ($mod.TMsgDlgBtn.mbYes in AButtons) {
        Result = $mod.TMsgDlgBtn.mbYes;
      } else if ($mod.TMsgDlgBtn.mbOK in AButtons) {
        Result = $mod.TMsgDlgBtn.mbOK;
      } else if ($mod.TMsgDlgBtn.mbYesToAll in AButtons) {
        Result = $mod.TMsgDlgBtn.mbYesToAll;
      } else if ($mod.TMsgDlgBtn.mbAll in AButtons) {
        Result = $mod.TMsgDlgBtn.mbAll;
      } else if ($mod.TMsgDlgBtn.mbRetry in AButtons) {
        Result = $mod.TMsgDlgBtn.mbRetry;
      } else if ($mod.TMsgDlgBtn.mbHelp in AButtons) {
        Result = $mod.TMsgDlgBtn.mbHelp;
      } else if ($mod.TMsgDlgBtn.mbCancel in AButtons) {
        Result = $mod.TMsgDlgBtn.mbCancel;
      } else if ($mod.TMsgDlgBtn.mbNo in AButtons) {
        Result = $mod.TMsgDlgBtn.mbNo;
      } else if ($mod.TMsgDlgBtn.mbNoToAll in AButtons) {
        Result = $mod.TMsgDlgBtn.mbNoToAll;
      } else if ($mod.TMsgDlgBtn.mbAbort in AButtons) {
        Result = $mod.TMsgDlgBtn.mbAbort;
      } else if ($mod.TMsgDlgBtn.mbIgnore in AButtons) {
        Result = $mod.TMsgDlgBtn.mbIgnore;
      } else if ($mod.TMsgDlgBtn.mbClose in AButtons) {
        Result = $mod.TMsgDlgBtn.mbClose;
      } else {
        Result = $mod.TMsgDlgBtn.mbOK;
      };
      return Result;
    };
  };
},[]);
rtl.module("WebCtrlsMore",["System","TopTypes","TopCtrls","Classes","SysUtils","Types","Graphics","Controls","StdCtrls","ExtCtrls","WebCtrls","Forms","Web","browserapp"],function () {
  "use strict";
  var $mod = this;
  rtl.createClass(this,"TGroupBox",pas.ExtCtrls.TCustomPanel,function () {
    this.Changed = function () {
      this.SetBevelWidth(1);
      this.SetBevelColor(12632256);
      this.SetBevelOuter(pas.Controls.TBevelCut.bvSpace);
      this.SetLayout(pas.Graphics.TTextLayout.tlTitle);
      pas.ExtCtrls.TCustomPanel.Changed.call(this);
      this.FHandleElement.style.removeProperty("overflow");
    };
  });
  this.TOpenOption = {"0": "ofReadOnly", ofReadOnly: 0, "1": "ofOverwritePrompt", ofOverwritePrompt: 1, "2": "ofHideReadOnly", ofHideReadOnly: 2, "3": "ofNoChangeDir", ofNoChangeDir: 3, "4": "ofShowHelp", ofShowHelp: 4, "5": "ofNoValidate", ofNoValidate: 5, "6": "ofAllowMultiSelect", ofAllowMultiSelect: 6, "7": "ofExtensionDifferent", ofExtensionDifferent: 7, "8": "ofPathMustExist", ofPathMustExist: 8, "9": "ofFileMustExist", ofFileMustExist: 9, "10": "ofCreatePrompt", ofCreatePrompt: 10, "11": "ofShareAware", ofShareAware: 11, "12": "ofNoReadOnlyReturn", ofNoReadOnlyReturn: 12, "13": "ofNoTestFileCreate", ofNoTestFileCreate: 13, "14": "ofNoNetworkButton", ofNoNetworkButton: 14, "15": "ofNoLongNames", ofNoLongNames: 15, "16": "ofOldStyleDialog", ofOldStyleDialog: 16, "17": "ofNoDereferenceLinks", ofNoDereferenceLinks: 17, "18": "ofEnableIncludeNotify", ofEnableIncludeNotify: 18, "19": "ofEnableSizing", ofEnableSizing: 19, "20": "ofDontAddToRecent", ofDontAddToRecent: 20, "21": "ofForceShowHidden", ofForceShowHidden: 21, "22": "ofViewDetail", ofViewDetail: 22, "23": "ofAutoPreview", ofAutoPreview: 23};
  this.$rtti.$Enum("TOpenOption",{minvalue: 0, maxvalue: 23, ordtype: 1, enumtype: this.TOpenOption});
  this.$rtti.$Set("TOpenOptions",{comptype: this.$rtti["TOpenOption"]});
  rtl.createClass(this,"TOpenDialog",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FInputElement = null;
      this.FOnChange = null;
      this.FProcChange = null;
      this.FileName = "";
      this.Filter = "";
      this.FilterIndex = 0;
      this.InitialDir = "";
      this.Options = {};
      this.Title = "";
    };
    this.$final = function () {
      this.FInputElement = undefined;
      this.FOnChange = undefined;
      this.FProcChange = undefined;
      this.Options = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.Create$1 = function (AOwner) {
      pas.Classes.TComponent.Create$1.call(this,AOwner);
      this.FInputElement = document.createElement("input");
      this.FInputElement.type = "file";
      return this;
    };
    this.Execute$1 = function (Proc) {
      var $Self = this;
      var Result = false;
      this.FInputElement.onchange = function (Event) {
        var Result = false;
        if ($Self.FInputElement.files.length > 0) $Self.FileName = $Self.FInputElement.files.item(0).name;
        if ($Self.FProcChange != null) $Self.FProcChange();
        return Result;
      };
      this.FProcChange = Proc;
      this.FInputElement.click();
      return Result;
    };
    var $r = this.$rtti;
    $r.addField("FInputElement",pas.Web.$rtti["TJSHTMLInputElement"]);
    $r.addField("FOnChange",pas.Classes.$rtti["TNotifyEvent"]);
    $r.addField("FProcChange",pas.Types.$rtti["TProc"]);
    $r.addField("FileName",rtl.string);
    $r.addField("Filter",rtl.string);
    $r.addField("FilterIndex",rtl.longint);
    $r.addField("InitialDir",rtl.string);
    $r.addField("Options",$mod.$rtti["TOpenOptions"]);
    $r.addField("Title",rtl.string);
  });
  rtl.createClass(this,"TSaveDialog",pas.Classes.TComponent,function () {
    this.$init = function () {
      pas.Classes.TComponent.$init.call(this);
      this.FInputElement = null;
      this.FOnChange = null;
      this.FileName = "";
      this.Filter = "";
      this.FilterIndex = 0;
      this.InitialDir = "";
      this.Options = {};
      this.Title = "";
    };
    this.$final = function () {
      this.FInputElement = undefined;
      this.FOnChange = undefined;
      this.Options = undefined;
      pas.Classes.TComponent.$final.call(this);
    };
    this.Create$1 = function (AOwner) {
      pas.Classes.TComponent.Create$1.call(this,AOwner);
      this.FInputElement = document.createElement("input");
      this.FInputElement.type = "file";
      return this;
    };
    this.Execute = function () {
      var $Self = this;
      var Result = false;
      this.FInputElement.onchange = function (Event) {
        var Result = false;
        if ($Self.FInputElement.files.length > 0) $Self.FileName = $Self.FInputElement.files.item(0).name;
        if ($Self.FOnChange != null) $Self.FOnChange($Self);
        return Result;
      };
      this.FInputElement.click();
      return Result;
    };
    var $r = this.$rtti;
    $r.addField("FInputElement",pas.Web.$rtti["TJSHTMLInputElement"]);
    $r.addField("FOnChange",pas.Classes.$rtti["TNotifyEvent"]);
    $r.addField("FileName",rtl.string);
    $r.addField("Filter",rtl.string);
    $r.addField("FilterIndex",rtl.longint);
    $r.addField("InitialDir",rtl.string);
    $r.addField("Options",$mod.$rtti["TOpenOptions"]);
    $r.addField("Title",rtl.string);
  });
  rtl.createClass(this,"TRadioButton",pas.WebCtrls.TCheckbox,function () {
    this.Changed = function () {
      pas.StdCtrls.TCustomCheckbox.Changed.call(this);
      var $with = this.FMarkElement;
      $with.type = "radio";
      this.FMarkElement.setAttribute("name",this.FOwner.FName);
    };
  });
  rtl.createClass(this,"TStaticText",pas.ExtCtrls.TCustomPanel,function () {
    this.$init = function () {
      pas.ExtCtrls.TCustomPanel.$init.call(this);
      this.BorderStyle = 0;
    };
    this.Changed = function () {
      var $tmp = this.BorderStyle;
      if ($tmp === pas.TopTypes.TStaticBorderStyle.sbsNone) {
        this.SetBevelWidth(0);
        this.SetBevelOuter(pas.Controls.TBevelCut.bvNone);
      } else if ($tmp === pas.TopTypes.TStaticBorderStyle.sbsSingle) {
        this.SetBevelWidth(1);
        this.SetBevelColor(0);
        this.SetBevelOuter(pas.Controls.TBevelCut.bvSpace);
      } else if ($tmp === pas.TopTypes.TStaticBorderStyle.sbsSunken) {
        this.SetBevelWidth(1);
        this.SetBevelOuter(pas.Controls.TBevelCut.bvLowered);
      };
      pas.ExtCtrls.TCustomPanel.Changed.call(this);
    };
    var $r = this.$rtti;
    $r.addField("BorderStyle",pas.TopTypes.$rtti["TStaticBorderStyle"]);
  });
  rtl.createClass(this,"TXPManifest",pas.Classes.TComponent,function () {
  });
  rtl.createClass(this,"TMouse",pas.Controls.TWinControl,function () {
    this.$init = function () {
      pas.Controls.TWinControl.$init.call(this);
      this.CursorPos = pas.Types.TPoint.$new();
    };
    this.$final = function () {
      this.CursorPos = undefined;
      pas.Controls.TWinControl.$final.call(this);
    };
    var $r = this.$rtti;
    $r.addField("CursorPos",pas.Types.$rtti["TPoint"]);
  });
  this.Mouse = null;
  $mod.$init = function () {
    $mod.Mouse = $mod.TMouse.$create("Create");
  };
});
rtl.module("Unit1",["System","SysUtils","Classes","Controls","StdCtrls","Forms","TopCtrls","WebCtrls","Dialogs","Web","WebCtrlsMore"],function () {
  "use strict";
  var $mod = this;
  var $impl = $mod.$impl;
  rtl.createClass(this,"TForm1",pas.Forms.TForm,function () {
    this.$init = function () {
      pas.Forms.TForm.$init.call(this);
      this.Button1 = null;
      this.Button2 = null;
      this.Button3 = null;
      this.Button4 = null;
      this.Button5 = null;
      this.Button6 = null;
      this.Button7 = null;
      this.Button8 = null;
      this.Button9 = null;
      this.Button10 = null;
      this.Button11 = null;
      this.Edit1 = null;
      this.ComboBox1 = null;
      this.ListBox1 = null;
      this.Memo1 = null;
      this.CheckBox1 = null;
      this.CheckBox2 = null;
      this.CheckBox3 = null;
      this.GroupBox1 = null;
      this.OpenDialog1 = null;
      this.RadioButton1 = null;
      this.RadioButton2 = null;
      this.ComboBox2 = null;
      this.Label1 = null;
      this.SaveDialog1 = null;
      this.StaticText1 = null;
      this.ProgressBar1 = null;
      this.StaticText2 = null;
      this.Timer1 = null;
      this.MainMenu1 = null;
      this.MenuItem1 = null;
      this.MenuItem2 = null;
      this.MenuItem3 = null;
      this.MenuItem4 = null;
      this.MenuItem5 = null;
      this.MenuItem6 = null;
      this.MenuItem7 = null;
      this.MenuItem8 = null;
      this.MenuItem9 = null;
      this.MenuItem10 = null;
      this.MenuItem11 = null;
      this.MenuItem12 = null;
      this.MenuItem13 = null;
      this.PopupMenu1 = null;
      this.XPManifest1 = null;
      this.TrackBar1 = null;
    };
    this.$final = function () {
      this.Button1 = undefined;
      this.Button2 = undefined;
      this.Button3 = undefined;
      this.Button4 = undefined;
      this.Button5 = undefined;
      this.Button6 = undefined;
      this.Button7 = undefined;
      this.Button8 = undefined;
      this.Button9 = undefined;
      this.Button10 = undefined;
      this.Button11 = undefined;
      this.Edit1 = undefined;
      this.ComboBox1 = undefined;
      this.ListBox1 = undefined;
      this.Memo1 = undefined;
      this.CheckBox1 = undefined;
      this.CheckBox2 = undefined;
      this.CheckBox3 = undefined;
      this.GroupBox1 = undefined;
      this.OpenDialog1 = undefined;
      this.RadioButton1 = undefined;
      this.RadioButton2 = undefined;
      this.ComboBox2 = undefined;
      this.Label1 = undefined;
      this.SaveDialog1 = undefined;
      this.StaticText1 = undefined;
      this.ProgressBar1 = undefined;
      this.StaticText2 = undefined;
      this.Timer1 = undefined;
      this.MainMenu1 = undefined;
      this.MenuItem1 = undefined;
      this.MenuItem2 = undefined;
      this.MenuItem3 = undefined;
      this.MenuItem4 = undefined;
      this.MenuItem5 = undefined;
      this.MenuItem6 = undefined;
      this.MenuItem7 = undefined;
      this.MenuItem8 = undefined;
      this.MenuItem9 = undefined;
      this.MenuItem10 = undefined;
      this.MenuItem11 = undefined;
      this.MenuItem12 = undefined;
      this.MenuItem13 = undefined;
      this.PopupMenu1 = undefined;
      this.XPManifest1 = undefined;
      this.TrackBar1 = undefined;
      pas.Forms.TForm.$final.call(this);
    };
    this.Button10Click = function (Sender) {
      pas.Dialogs.ShowMessage$1("Impossible: invisible control.");
    };
    this.Button8Click = function (Sender) {
      pas.Dialogs.ShowMessage$1("Impossible: disabled control.");
    };
    this.FormCreate = function (Sender) {
      this.Timer1.SetEnabled(false);
      this.TrackBar1 = pas.TopCtrls.TTrackBar.$create("Create$1",[this]);
      var $with = this.TrackBar1;
      $with.SetName("TrackBar1");
      $with.SetLeft(200);
      $with.SetHeight(26);
      $with.SetTop(184);
      $with.SetWidth(200);
      $with.FOnChange = rtl.createCallback(this,"TrackBar1Change");
      $with.SetParent(this);
      $with.SetVisible(true);
      $with.SetTabOrder(this.ListBox1.FTabOrder + 1);
      $mod.Form1.CheckBox1.SetAlignment(pas.Classes.TAlignment.taLeftJustify);
      $mod.Form1.CheckBox3.SetAlignment(pas.Classes.TAlignment.taLeftJustify);
      $mod.Form1.RadioButton2.SetAlignment(pas.Classes.TAlignment.taLeftJustify);
    };
    this.Button1Click = function (Sender) {
      this.ComboBox1.FItems.Add(this.Edit1.GetText());
      this.ListBox1.FItems.Add(this.Edit1.GetText());
      this.ComboBox1.SetText(this.Edit1.GetText());
    };
    this.Button2Click = function (Sender) {
      this.Edit1.SetText(this.ComboBox1.GetText());
    };
    this.Button3Click = function (Sender) {
      this.ComboBox1.FItems.Clear();
      this.ListBox1.Clear();
      this.ComboBox1.SetText("");
    };
    this.Button4Click = function (Sender) {
      this.ComboBox1.SetText(this.Edit1.GetText());
    };
    this.Button5Click = function (Sender) {
      this.Memo1.FLines.Add("Escape\/Cancel");
      if (this.Timer1.FEnabled) {
        this.Timer1.SetEnabled(false);
        this.ProgressBar1.SetPosition(0);
        pas.Dialogs.ShowMessage$1("Timer is now stopped.");
      };
    };
    this.Button6Click = function (Sender) {
      this.CheckBox1.SetState(pas.StdCtrls.TCheckBoxState.cbGrayed);
      this.CheckBox2.SetState(pas.StdCtrls.TCheckBoxState.cbGrayed);
      this.CheckBox3.SetState(pas.StdCtrls.TCheckBoxState.cbGrayed);
    };
    this.Button7Click = function (Sender) {
      this.ComboBox1.DroppedDown = !this.ComboBox1.DroppedDown;
    };
    this.Button9Click = function (Sender) {
      this.Memo1.FLines.Add("Button9Click");
      this.GroupBox1.SetVisible(!this.GroupBox1.FVisible);
    };
    this.Button11Click = function (Sender) {
      this.Memo1.FLines.Add("Return\/Default");
      if (!this.Timer1.FEnabled) {
        this.Timer1.SetEnabled(true);
        pas.Dialogs.ShowMessage$1("Timer is started. See progress bar..." + pas.System.sLineBreak + pas.System.sLineBreak + "Escape (Cancel button) to stop it.");
      };
    };
    this.Edit1Change = function (Sender) {
      this.Memo1.FLines.Add("Edit1: " + this.Edit1.GetText());
    };
    this.Edit1DblClick = function (Sender) {
      this.Memo1.FLines.Add("Edit1DblClick");
    };
    this.ComboBox1Change = function (Sender) {
      this.Memo1.FLines.Add("ComboBox1Change " + pas.SysUtils.IntToStr(this.ComboBox1.FItemIndex));
    };
    this.ListBox1DblClick = function (Sender) {
      this.Memo1.FLines.Add("ListBox1DblClick " + pas.SysUtils.IntToStr(this.ListBox1.FItemIndex));
    };
    this.FormMouseDown = function (Sender, Button, Shift, X, Y) {
      var s = "";
      if (pas.Controls.TShiftStateEnum.ssDouble in Shift) {
        s = " (Double click)"}
       else s = "";
      $impl.MemoAddLineFmt(this.Memo1,"FormMouseDown at %d %d" + s,pas.System.VarRecs(0,X,0,Y));
    };
    this.FormMouseUp = function (Sender, Button, Shift, X, Y) {
      $impl.MemoAddLineFmt(this.Memo1,"FormMouseUp at %d %d",pas.System.VarRecs(0,X,0,Y));
      if (Button === pas.Controls.TMouseButton.mbRight) {
        document.oncontextmenu = rtl.createSafeCallback(this.PopupMenu1,"OnContextMenu");
        this.PopupMenu1.Popup(X,Y);
      };
    };
    this.FormKeyDown = function (Sender, Key, Shift) {
      $impl.MemoAddLineFmt(this.Memo1,"FormKeyDown %d",pas.System.VarRecs(0,Key.get()));
    };
    this.FormKeyUp = function (Sender, Key, Shift) {
      $impl.MemoAddLineFmt(this.Memo1,"FormKeyUp %d",pas.System.VarRecs(0,Key.get()));
    };
    this.FormKeyPress = function (Sender, Key) {
      $impl.MemoAddLineFmt(this.Memo1,"FormKeyPress #%d '%s'",pas.System.VarRecs(0,Key.get().charCodeAt(),9,Key.get()));
    };
    this.Timer1Timer = function (Sender) {
      this.ProgressBar1.StepIt();
      $impl.MemoAddLineFmt(this.Memo1,"Timer Tick: ProgressBar=" + pas.SysUtils.IntToStr(this.ProgressBar1.GetPosition()),{});
    };
    this.TrackBar1Change = function (Sender) {
      $impl.MemoAddLineFmt(this.Memo1,"TrackBar: New value=" + pas.SysUtils.IntToStr(Sender.GetPosition()) + "\/" + pas.SysUtils.IntToStr(Sender.fMax),{});
    };
    this.MenuItem6Click = function (Sender) {
      pas.Forms.Application().Terminate();
    };
    this.MenuItem7Click = function (Sender) {
      this.Memo1.FLines.Add("Menu21");
    };
    this.MenuItem8Click = function (Sender) {
      this.Memo1.FLines.Add("Menu22");
    };
    this.MenuItem9Click = function (Sender) {
      $impl.MemoAddLineFmt(this.Memo1,"Popup1",{});
    };
    this.MenuItem10Click = function (Sender) {
      $impl.MemoAddLineFmt(this.Memo1,"Popup2",{});
    };
    this.MenuItem11Click = function (Sender) {
      var $Self = this;
      this.OpenDialog1.Options = rtl.unionSet(this.OpenDialog1.Options,rtl.createSet(pas.WebCtrlsMore.TOpenOption.ofPathMustExist,pas.WebCtrlsMore.TOpenOption.ofFileMustExist));
      this.OpenDialog1.Filter = "Text files (*.txt)|*.txt|All files|*.*";
      this.OpenDialog1.FilterIndex = 1;
      this.OpenDialog1.Title = "File to open";
      this.OpenDialog1.Execute$1(function () {
        pas.Dialogs.ShowMessage$1("File to open: " + $Self.OpenDialog1.FileName);
      });
    };
    this.MenuItem12Click = function (Sender) {
      this.SaveDialog1.Options = rtl.unionSet(this.SaveDialog1.Options,rtl.createSet(pas.WebCtrlsMore.TOpenOption.ofPathMustExist,pas.WebCtrlsMore.TOpenOption.ofOverwritePrompt));
      this.SaveDialog1.Filter = "Text files (*.txt)|*.txt|Temporary files (*.tmp)|*.tmp|All files|*.*";
      this.SaveDialog1.FilterIndex = 2;
      this.SaveDialog1.FileName = "MyFile.tmp";
      if (this.SaveDialog1.Execute()) pas.Dialogs.ShowMessage$1("File to save: " + this.SaveDialog1.FileName);
    };
    var $r = this.$rtti;
    $r.addField("Button1",pas.WebCtrls.$rtti["TButton"]);
    $r.addField("Button2",pas.WebCtrls.$rtti["TButton"]);
    $r.addField("Button3",pas.WebCtrls.$rtti["TButton"]);
    $r.addField("Button4",pas.WebCtrls.$rtti["TButton"]);
    $r.addField("Button5",pas.WebCtrls.$rtti["TButton"]);
    $r.addField("Button6",pas.WebCtrls.$rtti["TButton"]);
    $r.addField("Button7",pas.WebCtrls.$rtti["TButton"]);
    $r.addField("Button8",pas.WebCtrls.$rtti["TButton"]);
    $r.addField("Button9",pas.WebCtrls.$rtti["TButton"]);
    $r.addField("Button10",pas.WebCtrls.$rtti["TButton"]);
    $r.addField("Button11",pas.WebCtrls.$rtti["TButton"]);
    $r.addField("Edit1",pas.WebCtrls.$rtti["TEdit"]);
    $r.addField("ComboBox1",pas.WebCtrls.$rtti["TComboBox"]);
    $r.addField("ListBox1",pas.WebCtrls.$rtti["TListBox"]);
    $r.addField("Memo1",pas.WebCtrls.$rtti["TMemo"]);
    $r.addField("CheckBox1",pas.WebCtrls.$rtti["TCheckbox"]);
    $r.addField("CheckBox2",pas.WebCtrls.$rtti["TCheckbox"]);
    $r.addField("CheckBox3",pas.WebCtrls.$rtti["TCheckbox"]);
    $r.addField("GroupBox1",pas.WebCtrlsMore.$rtti["TGroupBox"]);
    $r.addField("OpenDialog1",pas.WebCtrlsMore.$rtti["TOpenDialog"]);
    $r.addField("RadioButton1",pas.WebCtrlsMore.$rtti["TRadioButton"]);
    $r.addField("RadioButton2",pas.WebCtrlsMore.$rtti["TRadioButton"]);
    $r.addField("ComboBox2",pas.WebCtrls.$rtti["TComboBox"]);
    $r.addField("Label1",pas.WebCtrls.$rtti["TLabel"]);
    $r.addField("SaveDialog1",pas.WebCtrlsMore.$rtti["TSaveDialog"]);
    $r.addField("StaticText1",pas.WebCtrlsMore.$rtti["TStaticText"]);
    $r.addField("ProgressBar1",pas.TopCtrls.$rtti["TProgressBar"]);
    $r.addField("StaticText2",pas.WebCtrlsMore.$rtti["TStaticText"]);
    $r.addField("Timer1",pas.WebCtrls.$rtti["TTimer"]);
    $r.addField("MainMenu1",pas.TopCtrls.$rtti["TMainMenu"]);
    $r.addField("MenuItem1",pas.TopCtrls.$rtti["TMenuItem"]);
    $r.addField("MenuItem2",pas.TopCtrls.$rtti["TMenuItem"]);
    $r.addField("MenuItem3",pas.TopCtrls.$rtti["TMenuItem"]);
    $r.addField("MenuItem4",pas.TopCtrls.$rtti["TMenuItem"]);
    $r.addField("MenuItem5",pas.TopCtrls.$rtti["TMenuItem"]);
    $r.addField("MenuItem6",pas.TopCtrls.$rtti["TMenuItem"]);
    $r.addField("MenuItem7",pas.TopCtrls.$rtti["TMenuItem"]);
    $r.addField("MenuItem8",pas.TopCtrls.$rtti["TMenuItem"]);
    $r.addField("MenuItem9",pas.TopCtrls.$rtti["TMenuItem"]);
    $r.addField("MenuItem10",pas.TopCtrls.$rtti["TMenuItem"]);
    $r.addField("MenuItem11",pas.TopCtrls.$rtti["TMenuItem"]);
    $r.addField("MenuItem12",pas.TopCtrls.$rtti["TMenuItem"]);
    $r.addField("MenuItem13",pas.TopCtrls.$rtti["TMenuItem"]);
    $r.addField("PopupMenu1",pas.TopCtrls.$rtti["TPopupMenu"]);
    $r.addField("XPManifest1",pas.WebCtrlsMore.$rtti["TXPManifest"]);
    $r.addMethod("Button10Click",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("Button8Click",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("FormCreate",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("Button1Click",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("Button2Click",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("Button3Click",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("Button4Click",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("Button5Click",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("Button6Click",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("Button7Click",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("Button9Click",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("Button11Click",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("Edit1Change",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("Edit1DblClick",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("ComboBox1Change",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("ListBox1DblClick",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("FormMouseDown",0,[["Sender",pas.System.$rtti["TObject"]],["Button",pas.Controls.$rtti["TMouseButton"]],["Shift",pas.Controls.$rtti["TShiftState"]],["X",rtl.longint],["Y",rtl.longint]]);
    $r.addMethod("FormMouseUp",0,[["Sender",pas.System.$rtti["TObject"]],["Button",pas.Controls.$rtti["TMouseButton"]],["Shift",pas.Controls.$rtti["TShiftState"]],["X",rtl.longint],["Y",rtl.longint]]);
    $r.addMethod("FormKeyDown",0,[["Sender",pas.System.$rtti["TObject"]],["Key",rtl.longint,1],["Shift",pas.Controls.$rtti["TShiftState"]]]);
    $r.addMethod("FormKeyUp",0,[["Sender",pas.System.$rtti["TObject"]],["Key",rtl.longint,1],["Shift",pas.Controls.$rtti["TShiftState"]]]);
    $r.addMethod("FormKeyPress",0,[["Sender",pas.System.$rtti["TObject"]],["Key",rtl.char,1]]);
    $r.addMethod("Timer1Timer",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("TrackBar1Change",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("MenuItem6Click",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("MenuItem7Click",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("MenuItem8Click",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("MenuItem9Click",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("MenuItem10Click",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("MenuItem11Click",0,[["Sender",pas.System.$rtti["TObject"]]]);
    $r.addMethod("MenuItem12Click",0,[["Sender",pas.System.$rtti["TObject"]]]);
  });
  this.Form1 = null;
  $mod.$implcode = function () {
    $impl.MemoAddLineFmt = function (MemoCtrl, s, Args) {
      MemoCtrl.Append(pas.SysUtils.Format(s,Args));
    };
  };
},[]);
rtl.module("unit1frm",["System","SysUtils","Classes","Controls","Forms","Graphics","StdCtrls","TopTypes","WebCtrls","TopCtrls","WebCtrlsMore"],function () {
  "use strict";
  var $mod = this;
  this.Load_Form1 = function () {
    pas.Unit1.Form1.SetHandleId("form1");
    pas.Unit1.Form1.FFormType = pas.Forms.TFormType.ftTop;
    var $with = pas.Unit1.Form1;
    pas.Unit1.Form1.BeginUpdate();
    pas.Unit1.Form1.SetLeft(245);
    pas.Unit1.Form1.SetHeight(561);
    pas.Unit1.Form1.SetTop(114);
    pas.Unit1.Form1.SetWidth(408);
    pas.Unit1.Form1.SetText("LLCL - Just testing...");
    pas.Unit1.Form1.SetClientHeight(600);
    pas.Unit1.Form1.SetClientWidth(450);
    pas.Unit1.Form1.FFont.SetSize(9);
    pas.Unit1.Form1.FKeyPreview = true;
    pas.Unit1.Form1.FOnCreate = rtl.createCallback($with,"FormCreate");
    pas.Unit1.Form1.FOnKeyDown = rtl.createCallback($with,"FormKeyDown");
    pas.Unit1.Form1.FOnKeyPress = rtl.createCallback($with,"FormKeyPress");
    pas.Unit1.Form1.FOnKeyUp = rtl.createCallback($with,"FormKeyUp");
    pas.Unit1.Form1.FOnMouseDown = rtl.createCallback($with,"FormMouseDown");
    pas.Unit1.Form1.FOnMouseUp = rtl.createCallback($with,"FormMouseUp");
    $with.GroupBox1 = pas.WebCtrlsMore.TGroupBox.$create("Create$1",[pas.Unit1.Form1]);
    $with.GroupBox1.SetName("GroupBox1");
    $with.GroupBox1.BeginUpdate();
    $with.GroupBox1.SetParent(pas.Unit1.Form1);
    $with.GroupBox1.SetLeft(8);
    $with.GroupBox1.SetHeight(65);
    $with.GroupBox1.SetTop(140);
    $with.GroupBox1.SetWidth(129);
    $with.GroupBox1.SetText(" GroupBox1 ");
    $with.GroupBox1.SetColor(pas.Unit1.Form1.FColor);
    $with.GroupBox1.FFont.SetColor(0);
    $with.GroupBox1.FFont.SetName("Tahoma");
    $with.GroupBox1.SetParentFont(false);
    $with.RadioButton1 = pas.WebCtrlsMore.TRadioButton.$create("Create$1",[$with.GroupBox1]);
    $with.RadioButton1.BeginUpdate();
    $with.RadioButton1.SetParent($with.GroupBox1);
    $with.RadioButton1.SetLeft(10);
    $with.RadioButton1.SetHeight(21);
    $with.RadioButton1.SetTop(13);
    $with.RadioButton1.SetWidth(110);
    $with.RadioButton1.SetText("RadioButton1");
    $with.RadioButton1.FFont.SetColor(0);
    $with.RadioButton1.FFont.SetName("Tahoma");
    $with.RadioButton1.FFont.SetStyle(rtl.createSet(pas.Graphics.TFontStyle.fsItalic));
    $with.RadioButton1.SetParentFont(false);
    $with.RadioButton1.EndUpdate();
    $with.RadioButton2 = pas.WebCtrlsMore.TRadioButton.$create("Create$1",[$with.GroupBox1]);
    $with.RadioButton2.BeginUpdate();
    $with.RadioButton2.SetParent($with.GroupBox1);
    $with.RadioButton2.SetLeft(10);
    $with.RadioButton2.SetHeight(21);
    $with.RadioButton2.SetTop(32);
    $with.RadioButton2.SetWidth(110);
    $with.RadioButton2.SetText("RadioButton2");
    $with.RadioButton2.SetChecked(true);
    $with.RadioButton2.FFont.SetColor(0);
    $with.RadioButton2.FFont.SetName("Tahoma");
    $with.RadioButton2.SetParentFont(false);
    $with.RadioButton2.EndUpdate();
    $with.GroupBox1.EndUpdate();
    $with.ComboBox1 = pas.WebCtrls.TComboBox.$create("Create$1",[pas.Unit1.Form1]);
    $with.ComboBox1.BeginUpdate();
    $with.ComboBox1.SetParent(pas.Unit1.Form1);
    $with.ComboBox1.SetLeft(8);
    $with.ComboBox1.SetHeight(21);
    $with.ComboBox1.SetTop(12);
    $with.ComboBox1.SetWidth(133);
    $with.ComboBox1.FFont.SetColor(0);
    $with.ComboBox1.FFont.SetName("Tahoma");
    $with.ComboBox1.FFont.SetStyle(rtl.createSet(pas.Graphics.TFontStyle.fsBold));
    $with.ComboBox1.SetItemHeight(13);
    $with.ComboBox1.FItems.SetCommaText("11,22,44,33");
    $with.ComboBox1.SetItemIndex(0);
    $with.ComboBox1.FOnChange = rtl.createCallback($with,"ComboBox1Change");
    $with.ComboBox1.SetParentFont(false);
    $with.ComboBox1.SetText("sample text");
    $with.ComboBox1.EndUpdate();
    $with.Edit1 = pas.WebCtrls.TEdit.$create("Create$1",[pas.Unit1.Form1]);
    $with.Edit1.BeginUpdate();
    $with.Edit1.SetParent(pas.Unit1.Form1);
    $with.Edit1.SetLeft(276);
    $with.Edit1.SetHeight(16);
    $with.Edit1.SetTop(12);
    $with.Edit1.SetWidth(125);
    $with.Edit1.FOnChange = rtl.createCallback($with,"Edit1Change");
    $with.Edit1.FOnDblClick = rtl.createCallback($with,"Edit1DblClick");
    $with.Edit1.SetText("New item name");
    $with.Edit1.EndUpdate();
    $with.Button1 = pas.WebCtrls.TButton.$create("Create$1",[pas.Unit1.Form1]);
    $with.Button1.BeginUpdate();
    $with.Button1.SetParent(pas.Unit1.Form1);
    $with.Button1.SetLeft(184);
    $with.Button1.SetHeight(25);
    $with.Button1.SetTop(12);
    $with.Button1.SetWidth(75);
    $with.Button1.SetText("Add");
    $with.Button1.FFont.SetColor(0);
    $with.Button1.FFont.SetHeight(-10);
    $with.Button1.FFont.SetName("Tahoma");
    $with.Button1.FFont.SetStyle(rtl.createSet(pas.Graphics.TFontStyle.fsBold));
    $with.Button1.FOnClick = rtl.createCallback($with,"Button1Click");
    $with.Button1.SetParentFont(false);
    $with.Button1.EndUpdate();
    $with.Button3 = pas.WebCtrls.TButton.$create("Create$1",[pas.Unit1.Form1]);
    $with.Button3.BeginUpdate();
    $with.Button3.SetParent(pas.Unit1.Form1);
    $with.Button3.SetLeft(184);
    $with.Button3.SetHeight(25);
    $with.Button3.SetTop(44);
    $with.Button3.SetWidth(75);
    $with.Button3.SetText("Clear");
    $with.Button3.FOnClick = rtl.createCallback($with,"Button3Click");
    $with.Button3.EndUpdate();
    $with.ListBox1 = pas.WebCtrls.TListBox.$create("Create$1",[pas.Unit1.Form1]);
    $with.ListBox1.BeginUpdate();
    $with.ListBox1.SetParent(pas.Unit1.Form1);
    $with.ListBox1.SetLeft(184);
    $with.ListBox1.SetHeight(100);
    $with.ListBox1.SetTop(76);
    $with.ListBox1.SetWidth(217);
    $with.ListBox1.FFont.SetColor(0);
    $with.ListBox1.FFont.SetHeight(-10);
    $with.ListBox1.FFont.SetName("Tahoma");
    $with.ListBox1.FFont.SetStyle(rtl.createSet(pas.Graphics.TFontStyle.fsBold));
    $with.ListBox1.FItems.SetCommaText("444,111,333,222");
    $with.ListBox1.SetItemHeight(13);
    $with.ListBox1.FOnDblClick = rtl.createCallback($with,"ListBox1DblClick");
    $with.ListBox1.SetParentFont(false);
    $with.ListBox1.EndUpdate();
    $with.Memo1 = pas.WebCtrls.TMemo.$create("Create$1",[pas.Unit1.Form1]);
    $with.Memo1.BeginUpdate();
    $with.Memo1.SetParent(pas.Unit1.Form1);
    $with.Memo1.SetLeft(8);
    $with.Memo1.SetHeight(285);
    $with.Memo1.SetTop(216);
    $with.Memo1.SetWidth(393);
    $with.Memo1.FLines.SetCommaText("asd,zxc");
    $with.Memo1.EndUpdate();
    $with.Button2 = pas.WebCtrls.TButton.$create("Create$1",[pas.Unit1.Form1]);
    $with.Button2.BeginUpdate();
    $with.Button2.SetParent(pas.Unit1.Form1);
    $with.Button2.SetLeft(276);
    $with.Button2.SetHeight(25);
    $with.Button2.SetTop(44);
    $with.Button2.SetWidth(53);
    $with.Button2.SetText("GetText");
    $with.Button2.FOnClick = rtl.createCallback($with,"Button2Click");
    $with.Button2.EndUpdate();
    $with.Button4 = pas.WebCtrls.TButton.$create("Create$1",[pas.Unit1.Form1]);
    $with.Button4.BeginUpdate();
    $with.Button4.SetParent(pas.Unit1.Form1);
    $with.Button4.SetLeft(348);
    $with.Button4.SetHeight(25);
    $with.Button4.SetTop(44);
    $with.Button4.SetWidth(53);
    $with.Button4.SetText("SetText");
    $with.Button4.FOnClick = rtl.createCallback($with,"Button4Click");
    $with.Button4.EndUpdate();
    $with.CheckBox1 = pas.WebCtrls.TCheckbox.$create("Create$1",[pas.Unit1.Form1]);
    $with.CheckBox1.BeginUpdate();
    $with.CheckBox1.SetParent(pas.Unit1.Form1);
    $with.CheckBox1.SetLeft(8);
    $with.CheckBox1.SetHeight(21);
    $with.CheckBox1.SetTop(76);
    $with.CheckBox1.SetWidth(100);
    $with.CheckBox1.FAllowGrayed = true;
    $with.CheckBox1.SetText("CheckBox1");
    $with.CheckBox1.SetState(pas.StdCtrls.TCheckBoxState.cbGrayed);
    $with.CheckBox1.EndUpdate();
    $with.Button6 = pas.WebCtrls.TButton.$create("Create$1",[pas.Unit1.Form1]);
    $with.Button6.BeginUpdate();
    $with.Button6.SetParent(pas.Unit1.Form1);
    $with.Button6.SetLeft(95);
    $with.Button6.SetHeight(25);
    $with.Button6.SetTop(92);
    $with.Button6.SetWidth(50);
    $with.Button6.SetText("Grayed");
    $with.Button6.FOnClick = rtl.createCallback($with,"Button6Click");
    $with.Button6.EndUpdate();
    $with.Button7 = pas.WebCtrls.TButton.$create("Create$1",[pas.Unit1.Form1]);
    $with.Button7.BeginUpdate();
    $with.Button7.SetParent(pas.Unit1.Form1);
    $with.Button7.SetLeft(140);
    $with.Button7.SetHeight(25);
    $with.Button7.SetTop(12);
    $with.Button7.SetWidth(29);
    $with.Button7.SetText("DD");
    $with.Button7.FOnClick = rtl.createCallback($with,"Button7Click");
    $with.Button7.EndUpdate();
    $with.Button8 = pas.WebCtrls.TButton.$create("Create$1",[pas.Unit1.Form1]);
    $with.Button8.BeginUpdate();
    $with.Button8.SetParent(pas.Unit1.Form1);
    $with.Button8.SetLeft(80);
    $with.Button8.SetHeight(21);
    $with.Button8.SetTop(44);
    $with.Button8.SetWidth(55);
    $with.Button8.SetText("Disabled");
    $with.Button8.SetEnabled(false);
    $with.Button8.FOnClick = rtl.createCallback($with,"Button8Click");
    $with.Button8.EndUpdate();
    $with.Button9 = pas.WebCtrls.TButton.$create("Create$1",[pas.Unit1.Form1]);
    $with.Button9.BeginUpdate();
    $with.Button9.SetParent(pas.Unit1.Form1);
    $with.Button9.SetLeft(140);
    $with.Button9.SetHeight(25);
    $with.Button9.SetTop(180);
    $with.Button9.SetWidth(33);
    $with.Button9.SetText("Sh\/H");
    $with.Button9.FOnClick = rtl.createCallback($with,"Button9Click");
    $with.Button9.EndUpdate();
    $with.Button10 = pas.WebCtrls.TButton.$create("Create$1",[pas.Unit1.Form1]);
    $with.Button10.BeginUpdate();
    $with.Button10.SetParent(pas.Unit1.Form1);
    $with.Button10.SetLeft(8);
    $with.Button10.SetHeight(21);
    $with.Button10.SetTop(44);
    $with.Button10.SetWidth(69);
    $with.Button10.SetText("Invisible!!!");
    $with.Button10.FOnClick = rtl.createCallback($with,"Button10Click");
    $with.Button10.SetVisible(false);
    $with.Button10.EndUpdate();
    $with.CheckBox2 = pas.WebCtrls.TCheckbox.$create("Create$1",[pas.Unit1.Form1]);
    $with.CheckBox2.BeginUpdate();
    $with.CheckBox2.SetParent(pas.Unit1.Form1);
    $with.CheckBox2.SetLeft(8);
    $with.CheckBox2.SetHeight(21);
    $with.CheckBox2.SetTop(96);
    $with.CheckBox2.SetWidth(100);
    $with.CheckBox2.SetText("CheckBox2");
    $with.CheckBox2.SetChecked(true);
    $with.CheckBox2.SetState(pas.StdCtrls.TCheckBoxState.cbChecked);
    $with.CheckBox2.EndUpdate();
    $with.CheckBox3 = pas.WebCtrls.TCheckbox.$create("Create$1",[pas.Unit1.Form1]);
    $with.CheckBox3.BeginUpdate();
    $with.CheckBox3.SetParent(pas.Unit1.Form1);
    $with.CheckBox3.SetLeft(8);
    $with.CheckBox3.SetHeight(21);
    $with.CheckBox3.SetTop(116);
    $with.CheckBox3.SetWidth(100);
    $with.CheckBox3.SetText("CheckBox3");
    $with.CheckBox3.EndUpdate();
    $with.ComboBox2 = pas.WebCtrls.TComboBox.$create("Create$1",[pas.Unit1.Form1]);
    $with.ComboBox2.BeginUpdate();
    $with.ComboBox2.SetParent(pas.Unit1.Form1);
    $with.ComboBox2.SetLeft(148);
    $with.ComboBox2.SetHeight(129);
    $with.ComboBox2.SetTop(44);
    $with.ComboBox2.SetWidth(25);
    $with.ComboBox2.SetItemHeight(17);
    $with.ComboBox2.FItems.SetCommaText("5,4,3,2,1");
    $with.ComboBox2.fStyle = pas.StdCtrls.TComboBoxStyle.csSimple;
    $with.ComboBox2.SetText("10");
    $with.ComboBox2.EndUpdate();
    $with.StaticText1 = pas.WebCtrlsMore.TStaticText.$create("Create$1",[pas.Unit1.Form1]);
    $with.StaticText1.BeginUpdate();
    $with.StaticText1.SetParent(pas.Unit1.Form1);
    $with.StaticText1.SetLeft(44);
    $with.StaticText1.SetHeight(18);
    $with.StaticText1.SetTop(512);
    $with.StaticText1.SetWidth(70);
    $with.StaticText1.SetAlignment(pas.Classes.TAlignment.taCenter);
    $with.StaticText1.BorderStyle = pas.TopTypes.TStaticBorderStyle.sbsSunken;
    $with.StaticText1.SetText("StaticText");
    $with.StaticText1.EndUpdate();
    $with.Label1 = pas.WebCtrls.TLabel.$create("Create$1",[pas.Unit1.Form1]);
    $with.Label1.BeginUpdate();
    $with.Label1.SetParent(pas.Unit1.Form1);
    $with.Label1.SetLeft(8);
    $with.Label1.SetHeight(17);
    $with.Label1.SetTop(512);
    $with.Label1.SetWidth(31);
    $with.Label1.SetText("Label");
    $with.Label1.SetParentColor(false);
    $with.Label1.EndUpdate();
    $with.Button5 = pas.WebCtrls.TButton.$create("Create$1",[pas.Unit1.Form1]);
    $with.Button5.BeginUpdate();
    $with.Button5.SetParent(pas.Unit1.Form1);
    $with.Button5.SetLeft(120);
    $with.Button5.SetHeight(25);
    $with.Button5.SetTop(512);
    $with.Button5.SetWidth(90);
    $with.Button5.SetCancel(true);
    $with.Button5.SetText("Cancel Button");
    $with.Button5.FOnClick = rtl.createCallback($with,"Button5Click");
    $with.Button5.EndUpdate();
    $with.Button11 = pas.WebCtrls.TButton.$create("Create$1",[pas.Unit1.Form1]);
    $with.Button11.BeginUpdate();
    $with.Button11.SetParent(pas.Unit1.Form1);
    $with.Button11.SetLeft(216);
    $with.Button11.SetHeight(25);
    $with.Button11.SetTop(512);
    $with.Button11.SetWidth(90);
    $with.Button11.SetText("Default Button");
    $with.Button11.SetDefault(true);
    $with.Button11.FOnClick = rtl.createCallback($with,"Button11Click");
    $with.Button11.EndUpdate();
    $with.ProgressBar1 = pas.TopCtrls.TProgressBar.$create("Create$1",[pas.Unit1.Form1]);
    $with.ProgressBar1.BeginUpdate();
    $with.ProgressBar1.SetParent(pas.Unit1.Form1);
    $with.ProgressBar1.SetPosition(30);
    $with.ProgressBar1.SetLeft(320);
    $with.ProgressBar1.SetHeight(16);
    $with.ProgressBar1.SetTop(516);
    $with.ProgressBar1.SetWidth(81);
    $with.ProgressBar1.EndUpdate();
    $with.StaticText2 = pas.WebCtrlsMore.TStaticText.$create("Create$1",[pas.Unit1.Form1]);
    $with.StaticText2.BeginUpdate();
    $with.StaticText2.SetParent(pas.Unit1.Form1);
    $with.StaticText2.SetLeft(184);
    $with.StaticText2.SetHeight(17);
    $with.StaticText2.SetTop(184);
    $with.StaticText2.SetWidth(217);
    $with.StaticText2.SetAlignment(pas.Classes.TAlignment.taCenter);
    $with.StaticText2.SetText("(Reserved for dynamic control)");
    $with.StaticText2.SetVisible(false);
    $with.StaticText2.EndUpdate();
    $with.Timer1 = pas.WebCtrls.TTimer.$create("Create$1",[pas.Unit1.Form1]);
    $with.Timer1.SetInterval(1000);
    $with.Timer1.SetOnTimer(rtl.createCallback($with,"Timer1Timer"));
    $with.MainMenu1 = pas.TopCtrls.TMainMenu.$create("Create$1",[pas.Unit1.Form1]);
    $with.MainMenu1.BeginUpdate();
    $with.MainMenu1.SetParent(pas.Unit1.Form1);
    $with.MenuItem1 = pas.TopCtrls.TMenuItem.$create("Create$1",[$with.MainMenu1]);
    $with.MenuItem1.BeginUpdate();
    $with.MenuItem1.SetParent($with.MainMenu1);
    $with.MenuItem1.SetText("Menu1");
    $with.MenuItem3 = pas.TopCtrls.TMenuItem.$create("Create$1",[$with.MenuItem1]);
    $with.MenuItem3.BeginUpdate();
    $with.MenuItem3.SetParent($with.MenuItem1);
    $with.MenuItem3.AutoCheck = true;
    $with.MenuItem3.SetText("Menu11");
    $with.MenuItem3.Checked = true;
    $with.MenuItem3.EndUpdate();
    $with.MenuItem4 = pas.TopCtrls.TMenuItem.$create("Create$1",[$with.MenuItem1]);
    $with.MenuItem4.BeginUpdate();
    $with.MenuItem4.SetParent($with.MenuItem1);
    $with.MenuItem4.SetText("Menu12");
    $with.MenuItem4.SetEnabled(false);
    $with.MenuItem4.EndUpdate();
    $with.MenuItem13 = pas.TopCtrls.TMenuItem.$create("Create$1",[$with.MenuItem1]);
    $with.MenuItem13.BeginUpdate();
    $with.MenuItem13.SetParent($with.MenuItem1);
    $with.MenuItem13.SetText("-");
    $with.MenuItem13.EndUpdate();
    $with.MenuItem11 = pas.TopCtrls.TMenuItem.$create("Create$1",[$with.MenuItem1]);
    $with.MenuItem11.BeginUpdate();
    $with.MenuItem11.SetParent($with.MenuItem1);
    $with.MenuItem11.SetText("Open File...");
    $with.MenuItem11.FOnClick = rtl.createCallback($with,"MenuItem11Click");
    $with.MenuItem11.EndUpdate();
    $with.MenuItem12 = pas.TopCtrls.TMenuItem.$create("Create$1",[$with.MenuItem1]);
    $with.MenuItem12.BeginUpdate();
    $with.MenuItem12.SetParent($with.MenuItem1);
    $with.MenuItem12.SetText("Save File...");
    $with.MenuItem12.FOnClick = rtl.createCallback($with,"MenuItem12Click");
    $with.MenuItem12.EndUpdate();
    $with.MenuItem5 = pas.TopCtrls.TMenuItem.$create("Create$1",[$with.MenuItem1]);
    $with.MenuItem5.BeginUpdate();
    $with.MenuItem5.SetParent($with.MenuItem1);
    $with.MenuItem5.SetText("-");
    $with.MenuItem5.EndUpdate();
    $with.MenuItem6 = pas.TopCtrls.TMenuItem.$create("Create$1",[$with.MenuItem1]);
    $with.MenuItem6.BeginUpdate();
    $with.MenuItem6.SetParent($with.MenuItem1);
    $with.MenuItem6.SetText("Quit");
    $with.MenuItem6.FOnClick = rtl.createCallback($with,"MenuItem6Click");
    $with.MenuItem6.EndUpdate();
    $with.MenuItem1.EndUpdate();
    $with.MenuItem2 = pas.TopCtrls.TMenuItem.$create("Create$1",[$with.MainMenu1]);
    $with.MenuItem2.BeginUpdate();
    $with.MenuItem2.SetParent($with.MainMenu1);
    $with.MenuItem2.SetText("Menu2");
    $with.MenuItem7 = pas.TopCtrls.TMenuItem.$create("Create$1",[$with.MenuItem2]);
    $with.MenuItem7.BeginUpdate();
    $with.MenuItem7.SetParent($with.MenuItem2);
    $with.MenuItem7.SetText("Menu21");
    $with.MenuItem7.FOnClick = rtl.createCallback($with,"MenuItem7Click");
    $with.MenuItem7.EndUpdate();
    $with.MenuItem8 = pas.TopCtrls.TMenuItem.$create("Create$1",[$with.MenuItem2]);
    $with.MenuItem8.BeginUpdate();
    $with.MenuItem8.SetParent($with.MenuItem2);
    $with.MenuItem8.SetText("Menu22");
    $with.MenuItem8.FOnClick = rtl.createCallback($with,"MenuItem8Click");
    $with.MenuItem8.EndUpdate();
    $with.MenuItem2.EndUpdate();
    $with.MainMenu1.EndUpdate();
    $with.PopupMenu1 = pas.TopCtrls.TPopupMenu.$create("Create$1",[pas.Unit1.Form1]);
    $with.PopupMenu1.BeginUpdate();
    $with.PopupMenu1.SetParent(pas.Unit1.Form1);
    $with.PopupMenu1.SetLeft(304);
    $with.MenuItem9 = pas.TopCtrls.TMenuItem.$create("Create$1",[$with.PopupMenu1]);
    $with.MenuItem9.BeginUpdate();
    $with.MenuItem9.SetParent($with.PopupMenu1);
    $with.MenuItem9.SetText("Popup1");
    $with.MenuItem9.FOnClick = rtl.createCallback($with,"MenuItem9Click");
    $with.MenuItem9.EndUpdate();
    $with.MenuItem10 = pas.TopCtrls.TMenuItem.$create("Create$1",[$with.PopupMenu1]);
    $with.MenuItem10.BeginUpdate();
    $with.MenuItem10.SetParent($with.PopupMenu1);
    $with.MenuItem10.SetText("Popup2");
    $with.MenuItem10.FOnClick = rtl.createCallback($with,"MenuItem10Click");
    $with.MenuItem10.EndUpdate();
    $with.PopupMenu1.EndUpdate();
    $with.OpenDialog1 = pas.WebCtrlsMore.TOpenDialog.$create("Create$1",[pas.Unit1.Form1]);
    $with.SaveDialog1 = pas.WebCtrlsMore.TSaveDialog.$create("Create$1",[pas.Unit1.Form1]);
    pas.Unit1.Form1.EndUpdate();
    pas.Unit1.Form1.FormCreate(null);
  };
},["Unit1"]);
rtl.module("program",["System","Unit1","unit1frm","Forms","TopCtrls","TopTypes"],function () {
  "use strict";
  var $mod = this;
  $mod.$main = function () {
    pas.Forms.Application().Initialize();
    pas.Forms.Application().CreateForm(pas.Unit1.TForm1,{p: pas.Unit1, get: function () {
        return this.p.Form1;
      }, set: function (v) {
        this.p.Form1 = v;
      }});
    pas.unit1frm.Load_Form1();
    pas.Forms.Application().Run();
  };
});
//# sourceMappingURL=LLCLJS.js.map
