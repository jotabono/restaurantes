import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Category} from '../providers/category';

@Injectable()
export class Dish {
  description: string;
  name: string;
  thumbnail: string;
  constructor() { }
}
