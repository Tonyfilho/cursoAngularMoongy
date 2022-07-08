import { ValidationErrors, ValidatorFn } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

/**
 *  Função de validar iqualdade de password para sem usar o Every, retorno true e um objeto com a description
 * @returns
 */

export function passwordsMarchValidator(): ValidatorFn {
return (control: AbstractControl): ValidationErrors | null => {
  // console.log("password: ", control.get('password')?.value );
  // console.log("pConfirm: ", control.get('pConfirm')?.value );
  // console.log("pConfirm2: ", control.value['pConfirm'] );
  const pConfirm = control.value['pConfirm'];
  const password = control.get('password')?.value;
  if (password!== pConfirm) {
    return true && { passwordsDontMatch: {description: 'Error password doesnt match'}};
  }
  return null
}

}

/**
 *Função para validar iqualdade em passwords
 * @param control
 * @returns
 */
export function equalPasswordValidator(control: AbstractControl): ValidationErrors | null {
  const [first, ...rest] = Object.keys(control.value || {});
  const valid = rest.every(v => control.value[v] !== control.value[first]);
  return !valid ? null : { equalPassword: { description: 'Error password doesnt match' } };
}

/**
 * função para validar padrões pre escolhidos em password
 * @param control
 * @returns
 * ^ - Beginning of string
 * (?=.*[a-z]) - A positive look-ahead to require a lowercase letter
 *  (?=.*[A-Z]) - A positive look-ahead to require an uppercase letter
 * (?=.*[0-9]) - A positive look-ahead to require a digit
 * (?=.*[ -/:-@\[-{-~])` - A positive look-ahead to require a special character
 * .{8,64} - Any character (but a newline), 8 to 64 occurrences
 * $ - End of string.
 */
/**
 *
 * @param control OBS: Temos que buscar o Object control.value para cada KEY do Objeto.
 * @returns
 */
export function custonPatternPassword(control: AbstractControl): ValidationErrors | null {
  const pattern: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-.\/:;<=>?\\@[\]^_`{|}~]).{8,64}$/;
  // console.log('TEST: ', pattern.test(control.value['password']), ' ', pattern.test(control.value['pConfirm']));
  return pattern.test(control.value['password']) && pattern.test(control.value['pConfirm']) ? null :
   { passwordPattern: { description: `Password doenst contain the pattern Ex: Min size 8 caracters, 2 lowercase and
    2 upcase letters, min 2 numbers and more special caracters...,` } }

}

/*************Funciona na forma de função no Ecmascript6**************** */
export function ssnValidatorFunc(control: AbstractControl): ValidationErrors | null {
  const value = control.value || '';
  const pattern: RegExp = /^\d{9}$/
  return pattern.test(value) || !control.value ? null : { ssn: { description: 'Invalid Social number, Max of 9 letters' } }

}
/*************Funciona na forma de Classe Statica ou Não **************** */
export class ssnValidator {
  public static SSNVALIDATOR(control: AbstractControl): ValidationErrors | null {
    const pattern: RegExp = /^\d{9}$/;
    const value = control.value || '';
    return pattern.test(value) || !control.value ? null : { ssn: { description: 'Invalid Social number, Max de 9 letters' } }
  }

}
