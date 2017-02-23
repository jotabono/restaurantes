import { Component } from '@angular/core';

import { MenusPage } from '../menus/menus';
import { PromosPage } from '../promos/promos';
import { RestaurantPage } from '../restaurant/restaurant';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RestaurantPage;
  tab2Root: any = MenusPage;
  tab3Root: any = PromosPage;

  constructor() {

  }
}
