import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {deserialize} from "serializer.ts/Serializer";
import { Carta } from '../providers/carta';

@Injectable()
export class Globals {
  constructor(private http: Http) {
    this.http = http;
  }

  getMenus(): any {
    return this.http.get('http://appr.deideasmarketing.solutions/wp-json/appr/v1/menus-list/')
      .map(res => res.json())
      .map(res => deserialize<Carta[]>(Carta, res));
  }
}
