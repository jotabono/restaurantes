import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Globals } from '../../providers/globals';
import { Menu } from '../../model/menu';

interface Dish {
  Name: string;
  Description: string;
  Thumbnail: string;
}
interface Category {
  [name: string]: Dish;
}
type ServerResponse = {
  [name: string]: { [name: string]: Category; } & { name: string };
}
@Component({
  selector: 'page-menus',
  providers: [Globals],
  templateUrl: 'menus.html'
})
export class MenusPage {
  menus = [];

  constructor(public navCtrl: NavController, public globals: Globals) {
    this.getMenus();
  }

  getMenus() {
    this.globals.getMenus().subscribe(
      data => {
        this.menus = new Array<Menu>();
        Object.keys(data).forEach(name => {
          this.menus.push(new Menu(data[name]));
        });
        console.log(this.menus);
      },
      err => { console.log(err) }
    );
  }
  toggleCats(data) {
    if (data.showCats) {
      data.showCats = false;
    } else {
      data.showCats = true;
    }
  }
  toggleDishes(data) {
    if (data.showDishes) {
      data.showDishes = false;
    } else {
      data.showDishes = true;
    }
  }
}
