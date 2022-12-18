import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFilter'
})
export class PipeFilterPipe implements PipeTransform {

  transform(value: any, args:string, properName:string): unknown | any | undefined {
   const localValue = [];
    if (value.length === 0 || args === '') {
          return value;
    }

    for (const iterator of value) {
        if (iterator[properName]  === args) {
           localValue.push(iterator);
        }
    }
    return localValue;
  }

}
