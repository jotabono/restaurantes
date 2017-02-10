import { Injectable } from '@angular/core';
import {deserialize} from "serializer.ts/Serializer";
import {Type} from "serializer.ts/Decorators";
import {Menu} from '../providers/menu';

@Injectable()
export class Carta {

  @Type(() => Menu)
  menus: Menu[];

  constructor() {
  }
  getMenus(){
  return this.menus;
  }
}
