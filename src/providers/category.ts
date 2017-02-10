import { Injectable } from '@angular/core';
import { Dish } from '../providers/dish';
import {Menu} from '../providers/menu';
import {Type} from "serializer.ts/Decorators";

@Injectable()
export class Category {
  name: string;
  
  @Type(() => Dish)
  dishes: Dish[];

  constructor() { }
}
