import { Component } from '@angular/core';
import { Globals } from '../../providers/globals';
import { NavController } from 'ionic-angular';
import { Promotion } from '../../model/promotion';
import { PromoDetail } from './promo.detail';

@Component({
  selector: 'page-promos',
  providers: [Globals],
  templateUrl: 'promos.html'
})
export class PromosPage {
  promotions = [];
  selectedPromo: Promotion;

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
      },
      err => { console.log(err) }
    );
  }

  promoDetail(promotion: Promotion) {
    this.navCtrl.push(PromoDetail, {
      promotion: promotion
    });
  }
}
