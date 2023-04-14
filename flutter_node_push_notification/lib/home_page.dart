import 'package:flutter/material.dart';
import 'package:onesignal_flutter/onesignal_flutter.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  void initState() {
    super.initState();
    initPlatform();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("NodeJS - OneSignal"),
        elevation: 0,
      ),
      backgroundColor: Colors.grey[200],
      body: const Center(
        child: Text("Push Notification"),
      ),
    );
  }

  Future<void> initPlatform() async {
    //Remove this method to stop OneSignal Debugging
    OneSignal.shared.setLogLevel(OSLogLevel.verbose, OSLogLevel.none);
    OneSignal.shared.setAppId("3e2e02ee-9589-44b2-8eba-c03f11a6d25a");
    OneSignal.shared.setLanguage('English');

    // You will supply the external user id to the OneSignal SDK
    OneSignal.shared.setExternalUserId("321971");

    await OneSignal.shared.sendTag("App", "MiVenta");
// The promptForPushNotificationsWithUserResponse function will show the iOS or Android push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission
    OneSignal.shared.promptUserForPushNotificationPermission().then((accepted) {
      print("Accepted permission: $accepted");
    });
    await OneSignal.shared.getDeviceState().then((deviceState) {
      print("DeviceState: ${deviceState?.jsonRepresentation()}");
    });
  }
}
