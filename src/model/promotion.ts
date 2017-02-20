import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class Promotion {
  // ID: string;
  name: string;
  description: string;
   constructor(data: {name: string} & {description: string}) {
    // this.ID = data.ID;
    this.name = data.name;
    this.description = data.description;
  }

  // getName(){
  //   return this.ID;
  // }
  getDescription(){
    return this.name;
  }
  getThumbnail(){
    return this.description;
  }
}
