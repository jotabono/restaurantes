import { Injectable } from '@angular/core';
import {Dish} from '../model/dish';

@Injectable()
export class Category {
  name: string;
  dishes: Array<Dish>
  showDishes: Boolean;

  constructor(data: { name: string } & { showDishes: Boolean }) {
    this.name = data.name;
    this.dishes = [];
    this.showDishes = true;

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
