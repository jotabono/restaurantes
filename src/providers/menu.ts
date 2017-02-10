import { Injectable } from '@angular/core';
import {deserialize} from "serializer.ts/Serializer";
import {Type} from "serializer.ts/Decorators";
import {Carta} from '../providers/carta';
import {Category} from '../providers/category';

@Injectable()
export class Menu {

  name: string;

  @Type(() => Category)
  categories: Category[];

  constructor() {}
}
