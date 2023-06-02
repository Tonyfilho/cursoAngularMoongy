import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeReverse'
})
export class PipeReversePipe implements PipeTransform {
 /**Deixaremos os operadore do JS fazer tudo,
  * 1º SPLIT(''): Dividiremos a string e separeremos por espaço.
  * 2º REVERSE(): Reverteremos a ordem da string
  * 3º JOIN(): Juntaremos a nova String  */
  transform(value: string): unknown {
    return value.split('').reverse().join('');
  }

}
