import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeSortBy'
})
export class PipeSortByPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
