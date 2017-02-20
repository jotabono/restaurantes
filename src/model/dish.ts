import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class Dish {
  Name: string;
  Description: string;
  Thumbnail: string;
  constructor(data: {Name: string} & {Description: string} & {Thumbnail: string}) {
    this.Name = data.Name;
    this.Description = data.Description;
    this.Thumbnail = data.Thumbnail;
  }

  getName(){
    return this.Name;
  }
  getDescription(){
    return this.Description;
  }
  getThumbnail(){
    return this.Thumbnail;
  }
}
