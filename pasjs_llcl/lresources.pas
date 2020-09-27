{
  MIT License

  Copyright (c) 2019 Sven Barth

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
unit LResources;

{$mode objfpc}{$H+}

interface

uses
  Classes;

function InitResourceComponent(Instance: TComponent;
  RootAncestor: TClass):Boolean;

implementation

uses
  Web, SysUtils, p2jsres,
  LCLStrConsts;

function InitResourceComponent(Instance: TComponent; RootAncestor: TClass
  ): Boolean;

  function InitComponent(ClassType: TClass): Boolean;
  var
    data, ResName: String;
   // Stream: TStream;
   // BinStream: TMemoryStream;
   // Reader: TReader;
    script: TJSElement;
    info: TResourceInfo;
  begin
    Result := False;
    {
    if (ClassType = TComponent) or (ClassType = RootAncestor) then
      Exit;
    if Assigned(ClassType.ClassParent) then
      Result := InitComponent(ClassType.ClassParent);

    Stream := nil;
    //ResName := ClassType.ClassName;
    ResName := ClassType.UnitName;

    if not GetResourceInfo(ResName, info) then
      Exit;

    data := window.atob(info.data);
    if data <> '' then
      Stream := TStringStream.Create(data);

    if not Assigned(Stream) then
      Exit;

    try
      try
        BinStream := TMemoryStream.Create;
        try
          ObjectTextToBinary(Stream, BinStream);

          BinStream.Position := 0;

          Reader := TReader.Create(BinStream);
          try
            Reader.ReadRootComponent(Instance);
          finally
            Reader.Free;
          end;
        finally
          BinStream.Free;
        end;
      except
        on E: Exception do begin
          Writeln(Format(rsFormStreamingError,[ClassType.ClassName,E.Message]));
          raise;
        end;
      end;
    finally
      Stream.Free;
    end;
    Result := True;
   }
  end;

begin
  if Instance.ComponentState * [csLoading, csInline] <> [] then begin
    // global loading not needed
    Result := InitComponent(Instance.ClassType);
  end else
    try
      //BeginGlobalLoading;
      Result := InitComponent(Instance.ClassType);
      //NotifyGlobalLoading;
    finally
      //EndGlobalLoading;
    end;
end;

initialization
//  RegisterInitComponentHandler(TComponent, @InitResourceComponent);
end.

