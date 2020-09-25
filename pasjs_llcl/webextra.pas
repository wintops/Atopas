{
  MIT License

  Copyright (c) 2018 Hélio S. Ribeiro and Anderson J. Gado da Silva

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
}
unit WebExtra;

{$I pas2js_widget.inc}

interface

uses
  JS,
  Classes,
  SysUtils,
  Web;

type

  { TJSFileReader }

  TJSFileReader = class external name 'FileReader'  (TJSEventTarget)
  public
    const
      EMPTY: NativeInt = 0;
      LOADING: NativeInt = 1;
      DONE: NativeInt = 2;
  public             
    error: TJSEventHandler; 
    readyState: NativeInt;   
    result: JSValue;     
    onabort: TJSEventHandler;
    onerror: TJSEventHandler;  
    onload: TJSEventHandler;  
    onloadstart: TJSEventHandler;  
    onloadend: TJSEventHandler;
    onprogress: TJSEventHandler;
    constructor New;
    procedure readAsArrayBuffer(blob: TJSBlob);  
    procedure readAsArrayBinaryString(blob: TJSBlob);
    procedure readAsText(blob: TJSBlob);
    procedure readAsDataURL(blob: TJSBlob);
    procedure abort;
  end;

  { TJSHTMLTextAreaElement }

  TJSHTMLTextAreaElement = class external name 'HTMLTextAreaElement' (TJSHTMLElement)
  private
    FForm: TJSHTMLFormElement; external name 'form';
    FLabels: TJSNodeList; external name 'labels';
    FValidationmMessage: string; external name 'validationMessage';
    FValidity: TJSValidityState; external name 'validity';
    FWillValidate: boolean; external name 'willValidate';
  Public
    function checkValidity : Boolean;
    procedure select;
    procedure setCustomValidity(aText : string);
    procedure setRangeText(aText : string; selectionStart, selectionEnd: NativeInt) ; overload;
    procedure setRangeText(aText : string; selectionStart, selectionEnd: NativeInt; Direction : string) ; overload;
    procedure setSelectionRange(selectionStart, selectionEnd: NativeInt) ; overload;
    procedure setSelectionRange(selectionStart, selectionEnd: NativeInt; Direction : string) ; overload;
  public
    autocapitalize : string;
    autocomplete : string;
    autofocus : boolean;
    cols: NativeInt;
    defaultValue : string;
    disabled : boolean;
    inputMode : string;
    maxLength : NativeInt;
    placeholder : string;
    readOnly : boolean;
    required : boolean;
    rows: NativeInt;
    selectionDirection : string;
    selectionEnd : NativeInt;
    selectionStart : NativeInt;
    textLength: NativeInt;
    _type : string; external name 'type';
    value : string;
    wrap: String;
    property form : TJSHTMLFormElement read FForm;
    property labels : TJSNodeList read FLabels;
    property validationMessage : string read FValidationmMessage;
    property validity : TJSValidityState read FValidity;
    property willValidate : boolean read FWillValidate;
  end;

implementation

end.
