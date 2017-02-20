import { Injectable } from '@angular/core';
import {Dish} from '../model/dish';

@Injectable()
export class Category {
  name: string;
  dishes: Array<Dish>

  constructor(data: { name: string }) {
    this.name = data.name;
    this.dishes = [];

    Object.keys(data).forEach(name => {
      if(name != "name"){
        this.dishes.push( new Dish(data[name]));
      }
    });
  }

  getName(){
    return this.name;
  }

  getDishes(){
    return this.dishes;
  }
}
