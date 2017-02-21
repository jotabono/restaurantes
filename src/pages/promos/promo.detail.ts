import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Promotion } from '../../model/promotion';

@Component({
  templateUrl: 'promo.detail.html'
})
export class PromoDetail {
  promotion: Promotion;

  constructor(public params: NavParams){
    this.promotion = params.get("promotion");
  }
}
