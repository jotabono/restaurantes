import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestaurantPage } from '../restaurant/restaurant';
import { MenusPage } from '../menus/menus';
import { PromosPage } from '../promos/promos';
import { Globals } from '../../providers/globals';
@Component({
  selector: 'page-home',
  providers: [Globals],
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public globals: Globals) {
  }

  goRtts(){this.navCtrl.push(RestaurantPage);}
  goMenus(){this.navCtrl.push(MenusPage);}
  goPromos(){this.navCtrl.push(PromosPage);}
}
