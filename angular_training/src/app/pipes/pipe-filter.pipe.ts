import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFilter'
})
export class PipeFilterPipe implements PipeTransform {

  transform(value: any, dataToArray:string, properName:string): unknown | any | undefined {
   const localValue = [];
    if (value.length === 0 || dataToArray === '') {
          return value;
    }

    for (const iterator of value) {
        if (iterator[properName]  === dataToArray) {
           localValue.push(iterator);
        }
    }
    return localValue;
  }

}
