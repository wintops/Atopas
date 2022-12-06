# Atopas
Go top to pascal / delphi AS  javascript  ( dart / flutter / python...)

## LLCL for Pas2JS
Delphi / FPC LLCL into Pas2JS Web / HTML

use LLCL / VCL / FMX Forms in JS / Web / Mobile  (and Native Code in Windows / Mac / Linux / Android / iOS ...)


no install extra web controls!

### Demo

Basic HTML： https://wintops.github.io/llcljs/llcl.html  

Layui ： https://wintops.github.io/llcljs/llcljs.html

Form unit loader ： https://wintops.github.io/llcljs/testloader.html

MiniCalc： https://wintops.github.io/llcljs/MiniCalcJS.html



### Form  from Windows to Web 
[![LLCL screenshot](https://wintops.github.io/llcljs/image_llcl.png)](https://wintops.github.io/llcljs/image_llcl.png)  [![LLCL Web screenshot](https://wintops.github.io/llcljs/image_web.png)](https://wintops.github.io/llcljs/image_web.png)

[![LLCL LayUI screenshot](https://wintops.github.io/llcljs/image_layui.png)](https://wintops.github.io/llcljs/image_layui.png)

[LLCL-samples](https://github.com/FChrisF/LLCL-samples)


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

### Lazarus pas2js Project Setting

MainMenu - Project - Project Options...

Complier Options - Path - Other unit files(-Fu) - add （pasjs_llcl_path）

Custom options
```
-Jeutf-8 -Jirtl.js -Jc -Jminclude -dPASJS -dFPC 
```
### Now
- [LLCL](https://github.com/FChrisF/LLCL)
- FPC [PAS2JS](https://wiki.lazarus.freepascal.org/pas2js)
- [Layui](https://github.com/layui/layui)

### Todo
- [Skia4Delphi](https://github.com/skia4delphi/skia4delphi)
- FPC [WASM](https://wiki.lazarus.freepascal.org/WebAssembly) Canvas
- [Qwik](https://github.com/BuilderIO/qwik)

 









