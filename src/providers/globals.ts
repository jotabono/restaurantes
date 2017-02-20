import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Globals {
  constructor(private http: Http) {
    this.http = http;
  }
  // GET de Menús: Menús, Categorías y Platos.
  getMenus(): any {
    return this.http.get('http://appr.deideasmarketing.solutions/wp-json/appr/v1/menus-list/')
      .map(res => res.json());
  }
  // GET de Promociones: ID, Nombre y Descripción.
  getPromotions(): any {
    return this.http.get('http://appr.deideasmarketing.solutions/wp-json/appr/v1/promotions-list/')
      .map(res => res.json());
  }
}
