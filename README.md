# Atopas
Go top to pascal / delphi AS  javascript  ( dart / futter / python...)

## LLCL for Pas2JS
Delphi / FPC LLCL into Pas2JS Web / HTML

use LLCL / VCL / FMX Forms in JS / Web / Mobile  (and Native Code in Windows / Mac / Linux / Android / iOS ...)


no install extra web controls!

### Demo

https://wintops.github.io/llcljs/llcl.html

https://wintops.github.io/llcljs/llcljs.html

https://wintops.github.io/llcljs/MiniCalcJS.html

![image](https:///wintops.github.io/llcljs/image_llcl.png)

![image](https:///wintops.github.io/llcljs/image_web.png)



### Form to PAS
bin/form2pas [form filename(.dfm/.lfm)] [.pas filename]

[Form2PAS Source](https://github.com/wintops/DSDfmParser)

### PAS Code Define

```pascal
uses  SysUtils, Classes, Dialogs, Controls, StdCtrls, Forms,
 {$IFDEF PASJS}
   WebCtrls
 {$ELSE}

  {$IFDEF FPC}LazUTF8, LCLType,{$ELSE} Variants, XPMan,{$ENDIF}
  Graphics,    ExtCtrls,
  ComCtrls, Menus
{$ENDIF}
  ;
```

### Now
- [LLCL](https://github.com/FChrisF/LLCL)
- FPC [PAS2JS](https://wiki.lazarus.freepascal.org/pas2js)
- [Layui](https://github.com/layui/layui)

### Todo
- [Skia4Delphi](https://github.com/skia4delphi/skia4delphi)
- FPC [WASM](https://wiki.lazarus.freepascal.org/WebAssembly) Canvas
- [Qwik](https://github.com/BuilderIO/qwik)

 









