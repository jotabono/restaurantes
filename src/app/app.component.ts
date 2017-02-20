import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { Push, PushToken } from '@ionic/cloud-angular';
import { Globals } from '../providers/globals';
import { Toast } from 'ionic-native';

@Component({
  templateUrl: 'app.html',
  providers: [Globals]
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, public push: Push, public globals: Globals) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      this.push.register().then((t: PushToken) => {
        return this.push.saveToken(t);
      }).then((t: PushToken) => {
        console.log('Token saved:', t.token);
        this.globals.deviceToken = t.token;

        // Toast provisional, para mostrar el Token del dispositivo.

        Toast.show(t.token, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      });
    });
  }
}
