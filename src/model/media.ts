import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class Media {
  url: string;
  type: string;

  constructor(data: {url: string} & {type: string}) {
    this.url = data.url;
    this.type = data.type;
  }
}
