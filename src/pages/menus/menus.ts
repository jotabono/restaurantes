import { Component } from '@angular/core';
import { Globals } from '../../providers/globals';
import { Menu } from '../../model/menu';
import { LoadingController } from 'ionic-angular';

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
  loader: any;
  menus = [];

  constructor(public globals: Globals, public loadingCtrl: LoadingController) {
    this.loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: `<ion-content [style.backgroundColor]="globals.loaderBackground">Cargando...</ion-content>`,
    });
    this.loader.present();
    this.getMenus();
  }

  getMenus() {
    this.globals.getMenus().subscribe(
      data => {
        this.loader.dismiss();
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
