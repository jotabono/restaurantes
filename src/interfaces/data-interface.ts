export interface Dish {
  Name: string;
  Description: string;
  Thumbnail: string;
}

export interface Category {
  [name: string]: Dish;
}

export type ServerResponse = {
  [name: string]: { [name: string]: Category; } & { name: string };
}
