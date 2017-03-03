import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
// import { TabsPage } from '../pages/tabs/tabs';
import { Push, PushToken } from '@ionic/cloud-angular';
import { Globals } from '../providers/globals';
import { Toast } from 'ionic-native';
import { TranslateService } from 'ng2-translate';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import { HomePage } from '../pages/home/home';
import { MenusPage } from '../pages/menus/menus';
import { PromosPage } from '../pages/promos/promos';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SocialNetworksPage } from '../pages/socialnetworks/socialnetworks';

@Component({
  templateUrl: 'app.html',
  providers: [Globals]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = HomePage;
  tab1Root: any = RestaurantPage;
  tab2Root: any = MenusPage;
  tab3Root: any = PromosPage;

  constructor(platform: Platform, public push: Push, public globals: Globals, translate: TranslateService) {
    platform.ready().then(() => {

      // Español como idioma inicial al inciiar la App.
      translate.setDefaultLang('es');

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      this.push.register().then((t: PushToken) => {
        return this.push.saveToken(t);
      }).then((t: PushToken) => {
        console.log('Token saved:', t.token);
        this.globals.postDevicetoken(t.token);

        // Toast provisional, para mostrar el Token del dispositivo.

        Toast.show(t.token, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      });
    });
  }

  goRtts() { this.nav.setRoot(RestaurantPage); }
  goMenus() { this.nav.setRoot(MenusPage); }
  goPromos() { this.nav.setRoot(PromosPage); }
  goNotifications()  { this.nav.push(NotificationsPage); }
  goSocialNetworks() { this.nav.push(SocialNetworksPage); }
}
