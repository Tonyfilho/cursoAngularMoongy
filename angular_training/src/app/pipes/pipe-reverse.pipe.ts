import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeReverse'
})
export class PipeReversePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
