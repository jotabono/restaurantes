import { Injectable } from '@angular/core';
import {Category} from '../model/category';

@Injectable()
export class Menu {
  name: string;
  categories: Array<Category>;
  showCats: Boolean;

  constructor(data: { name: string } & { showCats: Boolean }) {
    this.name = data.name;
    this.categories = [];
    this.showCats = true;

    Object.keys(data).forEach(name => {
      if (name != "name") {
        this.categories.push(new Category(data[name]));
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
