import {Pipe} from '@angular/core';

@Pipe({
  name: 'keys'
})

export class MenuPipe {

// Pipe (filtro de Angular 2) para mostrar en HTML un Objeto, separando la 'key' del 'value'.

  transform(value, args: string[]): any {
    let keys = [];
    for (let key in value) {
      keys.push({ key: key, value: value[key] });
    }
    return keys;
  }
}
