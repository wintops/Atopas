
git clone -b master https://github.com/flutter/flutter.git
or
flutter channel master

flutter upgrade
flutter doctor 

set ENABLE_FLUTTER_DESKTOP=true
flutter devices

git clone https://github.com/google/flutter-desktop-embedding.git
cd example

flutter packages get
flutter run





import 'dart:io' show Platform;

import 'package:flutter/foundation.dart'
    show debugDefaultTargetPlatformOverride;


void main() {
  // See https://github.com/flutter/flutter/wiki/Desktop-shells#target-platform-override
  debugDefaultTargetPlatformOverride = TargetPlatform.fuchsia;

  runApp(new MyApp());
}
