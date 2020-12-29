object Form1: TForm1
  Left = 198
  Top = 114
  BorderStyle = bsSingle
  Caption = 'Mini Calculator'
  ClientHeight = 191
  ClientWidth = 194
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'MS Sans Serif'
  Font.Style = []
  KeyPreview = True
  OldCreateOrder = False
  Position = poDesktopCenter
  OnCreate = FormCreate
  OnKeyPress = FormKeyPress
  PixelsPerInch = 96
  TextHeight = 13
  object Edit1: TEdit
    Left = 7
    Top = 7
    Width = 193
    Height = 21
    TabStop = False
    ReadOnly = True
    TabOrder = 1
    OnMouseDown = Edit1MouseDown
  end
  object Button1: TButton
    Left = 10
    Top = 120
    Width = 40
    Height = 32
    Caption = '1'
    TabOrder = 10
    TabStop = False
    OnClick = Button1Click
  end
  object Button2: TButton
    Left = 58
    Top = 120
    Width = 40
    Height = 32
    Caption = '2'
    TabOrder = 11
    TabStop = False
    OnClick = Button2Click
  end
  object Button3: TButton
    Left = 106
    Top = 120
    Width = 40
    Height = 32
    Caption = '3'
    TabOrder = 12
    TabStop = False
    OnClick = Button3Click
  end
  object Button4: TButton
    Left = 10
    Top = 80
    Width = 40
    Height = 32
    Caption = '4'
    TabOrder = 6
    TabStop = False
    OnClick = Button4Click
  end
  object Button5: TButton
    Left = 58
    Top = 80
    Width = 40
    Height = 32
    Caption = '5'
    TabOrder = 7
    TabStop = False
    OnClick = Button5Click
  end
  object Button6: TButton
    Left = 106
    Top = 80
    Width = 40
    Height = 32
    Caption = '6'
    TabOrder = 8
    TabStop = False
    OnClick = Button6Click
  end
  object Button7: TButton
    Left = 10
    Top = 40
    Width = 40
    Height = 32
    Caption = '7'
    TabOrder = 2
    TabStop = False
    OnClick = Button7Click
  end
  object Button8: TButton
    Left = 58
    Top = 40
    Width = 40
    Height = 32
    Caption = '8'
    TabOrder = 3
    TabStop = False
    OnClick = Button8Click
  end
  object Button9: TButton
    Left = 106
    Top = 40
    Width = 40
    Height = 32
    Caption = '9'
    TabOrder = 4
    TabStop = False
    OnClick = Button9Click
  end
  object Button10: TButton
    Left = 10
    Top = 160
    Width = 40
    Height = 32
    Caption = '0'
    TabOrder = 14
    TabStop = False
    OnClick = Button10Click
  end
  object Button11: TButton
    Left = 58
    Top = 160
    Width = 40
    Height = 32
    Caption = 'C'
    TabOrder = 15
    TabStop = False
    OnClick = Button11Click
  end
  object Button12: TButton
    Left = 106
    Top = 160
    Width = 40
    Height = 32
    Caption = '='
    TabOrder = 16
    TabStop = False
    OnClick = Button12Click
  end
  object Button13: TButton
    Left = 154
    Top = 40
    Width = 40
    Height = 32
    Caption = '/'
    TabOrder = 5
    TabStop = False
    OnClick = Button13Click
  end
  object Button14: TButton
    Left = 154
    Top = 80
    Width = 40
    Height = 32
    Caption = '*'
    TabOrder = 9
    TabStop = False
    OnClick = Button14Click
  end
  object Button15: TButton
    Left = 154
    Top = 120
    Width = 40
    Height = 32
    Caption = '-'
    TabOrder = 13
    TabStop = False
    OnClick = Button15Click
  end
  object Button16: TButton
    Left = 154
    Top = 160
    Width = 40
    Height = 32
    Caption = '+'
    TabOrder = 17
    TabStop = False
    OnClick = Button16Click
  end
  object HiddenButton: TButton
    Left = 106
    Top = 500
    Width = 88
    Height = 19
    Caption = 'Hidden Focus'
    Default = True
    TabOrder = 0
    OnClick = HiddenButtonClick
  end
  object XPManifest1: TXPManifest
    Left = 168
    Top = 8
  end
end
