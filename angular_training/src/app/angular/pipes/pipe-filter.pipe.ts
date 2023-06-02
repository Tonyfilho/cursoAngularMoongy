import { Pipe, PipeTransform } from '@angular/core';

/**Colocar este 2ª chave PURE: false, faz com o Angular venha Atualizar a paginas quando usando Array o Objetos diminui um pouco
 * a performace mas nada que seja observada,
 * Apesar do nosso Service ser um EventEmitter, senão fosse, isto resolveria o problema */
@Pipe({
  name: 'pipeFilter',
  pure: false
})
export class PipeFilterPipe implements PipeTransform {

  transform(value: any, dataToArray: string, properName: string): unknown | any | undefined {
    const localValue = [];
    if (value.length === 0 || dataToArray === '') {
      return value;
    }

    for (const iterator of value) {
      if (iterator[properName] === dataToArray) {
        localValue.push(iterator);
      }
    }
    return localValue;
  }

}
