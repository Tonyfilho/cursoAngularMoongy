import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeSortBy'
})
export class PipeSortByPipe implements PipeTransform {
  /** UNICODE EX:
   * var scores = [1, 10, 2, 21];
   *scores.sort(); // [1, 10, 2, 21]
   *Observe que 10 vem antes do 2,
   *porque '10' vem antes de '2' em ponto de código Unicode.
   */

  /**Deixaremos os operadore do JS fazer tudo,
 * 1º SORT(''): Organizaremos o Array de string, ms se deixamos somente o SORT()
 *  sem passar um função que organiza ele usara o padrão UNICODE
 * Com isto temos que somente checar se o que vem no index é maior do que proximo index .
 * 2º Os Argumento são passado automaticamente pelo JS, não precisamos passar
 */

  transform(value: any[], proName: string ): unknown | any {
    return value?.sort((maior: any, menor: any) => {
      if(maior[proName] > menor[proName] )
      return 1;
      else {
        return -1;
      }
    });
  }

}
