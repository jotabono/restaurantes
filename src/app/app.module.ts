import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PromosPage } from '../pages/promos/promos';
import { PromoDetail } from '../pages/promos/promo.detail';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import { MenusPage } from '../pages/menus/menus';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuPipe } from '../pipes/menu-pipe';
import { Http } from "@angular/http";
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { TranslateLoader, TranslateModule, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'ad5ac44f'
  },
  'push': {
    'sender_id': '283096001817',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
}
@NgModule({
  declarations: [
    MyApp,
    PromosPage,
    RestaurantPage,
    MenusPage,
    TabsPage,
    MenuPipe,
    PromoDetail
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PromosPage,
    RestaurantPage,
    MenusPage,
    TabsPage,
    PromoDetail
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}
