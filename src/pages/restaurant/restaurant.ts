import { Component } from '@angular/core';
import { Globals } from '../../providers/globals';
import { NavController } from 'ionic-angular';
// import { Restaurant } from '../../model/restaurant';
// import { Menu } from '../../model/menu';

@Component({
  selector: 'page-restaurant',
  providers: [Globals],
  templateUrl: 'restaurant.html'
})
export class RestaurantPage {

  restaurant = [];
  selectOptions: any;

  constructor(public navCtrl: NavController, public globals: Globals) {
    // this.getMenus();
  }

  // getMenus() {
  //   this.globals.getMenus().subscribe(
  //     data => {
  //       this.restaurant = new Array<Restaurant>();
  //       Object.keys(data).forEach(name => {
  //         this.restaurant.push(new Restaurant(data[name]));
  //       });
  //     },
  //     err => { console.log(err) }
  //   );
  // }



}
