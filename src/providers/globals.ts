import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Globals {
  constructor(private http: Http) {
    this.http = http;
  }
  getMenus(): any {
    return this.http.get('http://appr.deideasmarketing.solutions/wp-json/appr/v1/menus-list/')
      .map(res => res.json());
  }
}
