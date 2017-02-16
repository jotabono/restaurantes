import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Globals } from '../../providers/globals';
import { Menu } from '../../entities/menu';

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
  selector: 'page-home',
  providers: [Globals],
  templateUrl: 'home.html'
})
export class HomePage {
  menus: { [name: string]: Menu };
  constructor(public navCtrl: NavController, public globals: Globals) {
    this.getMenus();
  }

  getMenus() {
    this.globals.getMenus().subscribe(
      data => {
        this.menus = {};
        Object.keys(data).forEach(name => {
              this.menus[name] = new Menu(data[name]);
        });
        console.log(this.menus);
      },
      err => { console.log(err) }
    );
  }
}
