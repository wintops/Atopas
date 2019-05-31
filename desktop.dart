import 'dart:io' show Platform;

import 'package:flutter/foundation.dart'   show debugDefaultTargetPlatformOverride;


void main() {

  // See https://github.com/flutter/flutter/wiki/Desktop-shells#target-platform-override
  
  debugDefaultTargetPlatformOverride = TargetPlatform.fuchsia;

  runApp(new MyApp());
}
