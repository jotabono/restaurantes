import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Media} from '../model/media';
import {Menu} from '../model/menu';

@Injectable()
export class Restaurant {
  name: string;
  description: string;
  media: Array<Media>;
  menus: Array<Menu>;

  constructor(data: {name: string} & {description: string}) {
    this.name = data.name;
    this.description = data.description;

    Object.keys(data).forEach(name => {
      if (name != "name") {
        this.media.push(new Media(data[name]));
        this.menus.push(new Menu(data[name]));
      }
    });
  }
}
