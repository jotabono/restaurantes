import { Injectable } from '@angular/core';
import {Category} from '../entities/category';

@Injectable()
export class Menu {
  name: string;
  categories: { [name: string]: Category };

  constructor(data: { name: string }) {
    this.name = data.name;
    this.categories = {};

    Object.keys(data).forEach(name => {
      if (name !== "name") {
        this.categories[name] = new Category(data[name]);
      }
    });
  }

  getName(){
    return this.name;
  }

  getCategory(){
    return this.categories;
  }
}
