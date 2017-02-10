import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Globals } from '../../providers/globals';
import { Carta } from '../../providers/carta'
import { Menu } from '../../providers/menu'
import {deserialize} from "serializer.ts/Serializer";

@Component({
  selector: 'page-home',
  providers: [Globals],
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public globals: Globals) {
    this.getMenus();
}

  getMenus() {
    this.globals.getMenus().subscribe(
      res => {
      console.log(res);
      },
      err => { console.log(err) }
    );
  }
}
