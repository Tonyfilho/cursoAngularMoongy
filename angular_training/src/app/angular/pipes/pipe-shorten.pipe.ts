import { Pipe, PipeTransform } from "@angular/core";


/**
 * 1ª criar uma class TS e implementar a Interface PipeTransform.
 * 2º Por a @notação @PIPE(....) e passar um Objeto com o Name
 * 3º usaremos o Metodo SUBSTR(...) do JS que transforma a String em em array e limita a quantidade de caracteres que queremos retornar
 * 4º Temos q passar o Index inicial e o final: Ex: 0 a 10.
 * 5º Declarar no MODULE esta class como se fosse um COMPONENT
 */
@Pipe({ name: 'customPipeShorten'})
export class ShortenPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return value.length > args ? value.substr(0, args) + '....' : value;
  }


}
