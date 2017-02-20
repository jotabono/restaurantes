import { Component } from '@angular/core';

import { MenusPage } from '../menus/menus';
import { PromosPage } from '../promos/promos';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MenusPage;
  tab2Root: any = PromosPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
