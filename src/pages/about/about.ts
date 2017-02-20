import { Component } from '@angular/core';
import { Globals } from '../../providers/globals';
import { NavController } from 'ionic-angular';
import { Promotion } from '../../model/promotion';

@Component({
  selector: 'page-about',
  providers: [Globals],
  templateUrl: 'about.html'
})
export class AboutPage {
  promotions = [];

  constructor(public navCtrl: NavController, public globals: Globals) {
    this.getPromotions();
  }
  getPromotions() {
    this.globals.getPromotions().subscribe(
      data => {
        this.promotions = new Array<Promotion>();
        Object.keys(data).forEach(name => {
          this.promotions.push(new Promotion(data[name]));
        });
        console.log(this.promotions);
      },
      err => { console.log(err) }
    );
  }
}
