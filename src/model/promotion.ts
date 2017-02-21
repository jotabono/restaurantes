import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class Promotion {
  ID: number;
  name: string;
  description: string;

   constructor(data: {ID: number} & {name: string} & {description: string}) {
    this.ID = data.ID;
    this.name = data.name;
    this.description = data.description;
  }

  getID(){
   return this.ID;
  }
  getName(){
    return this.name;
  }
  getDescription(){
    return this.description;
  }
}
