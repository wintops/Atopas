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
unit LCLStrConsts;

{$mode objfpc}{$H+}

interface

resourcestring
  rsFormResourceSNotFoundForResourcelessFormsCreateNew = 'Form resource %s '
    +'not found. For resourceless forms CreateNew constructor must be used.';
  rsFormStreamingError = 'Form streaming "%s" error: %s';
  rsFileButtonNoFileSelected = 'No file selected';
  rsResourceNotFound = 'Resource not found: %s';
  rsErrUncaughtException = 'Uncaught exception of type %s: ' + LineEnding + LineEnding + '%s';
  rsErrUncaughtObject = 'Uncaught exception of type %s.';
  rsNoTimers = 'No more timers available.';

implementation

end.

