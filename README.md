# Atopas
Go top to pascal delphi AS  javascript   dart futter  python 

## LLCL for Pas2JS
Delphi/FPC LLCL into Pas2JS Web/HTML

use LLCL/VCL/FMX Forms in JS/Web/Mobile and Windows/Mac/Linux/Android/iOS!


no install extra web controls!

### Demo
  see https://wintops.github.io/llcljs/llcljs.html

![image](https:///wintops.github.io/llcljs/image_llcl.png)

![image](https:///wintops.github.io/llcljs/image_web.png)


### Code

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

### Links
https://github.com/FChrisF/LLCL
https://github.com/heliosroots/Pas2JS_Widget




