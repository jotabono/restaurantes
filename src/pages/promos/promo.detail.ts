import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Promotion } from '../../model/promotion';
import { Globals } from '../../providers/globals';
@Component({
  selector: 'page-promos',
  templateUrl: 'promo.detail.html',
  providers: [Globals]
})
export class PromoDetail {
  promotion: Promotion;

  constructor(public params: NavParams, public globals: Globals){
    this.promotion = params.get("promotion");
  }
}
