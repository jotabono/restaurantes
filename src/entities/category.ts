import { Injectable } from '@angular/core';
import {Dish} from '../entities/dish';

@Injectable()
export class Category {
  name: string;
  dishes: {};

  constructor(data: { name: string }) {
    this.name = data.name;
    this.dishes = {};

    Object.keys(data).forEach(Name => {
        this.dishes[Name] = new Dish(data[Name]);
    });
  }

  getName(){
    return this.name;
  }

  getDishes(){
    return this.dishes;
  }
}
