import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PromosPage } from '../pages/promos/promos';
import { PromoDetail } from '../pages/promos/promo.detail';
import { ContactPage } from '../pages/contact/contact';
import { MenusPage } from '../pages/menus/menus';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuPipe } from '../pipes/menu-pipe';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'a12c7d56'
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
    ContactPage,
    MenusPage,
    TabsPage,
    MenuPipe,
    PromoDetail
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PromosPage,
    ContactPage,
    MenusPage,
    TabsPage,
    PromoDetail
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
