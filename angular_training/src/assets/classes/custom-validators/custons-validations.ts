import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';






export function equalValidator(control: AbstractControl): ValidationErrors | null {
    const [first, ...rest] = Object.keys(control.value || {});
    const valid = rest.every(v => control.value[v] !== control.value[first]);
    return valid ? {equal: 'Error password doesnt match'}: null;
}


export function custonPattern(control: AbstractControl): ValidationErrors | null {
  const pattern:RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/ ;

  return pattern.test(control.value) || !control.value ? null : { password: 'Password doenst contain the pattern '}

}

/*************Funciona na forma de função no Ecmascript6**************** */
export function ssnValidatorFunc(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '' ;
    const pattern:RegExp = /^\d{9}$/
    return pattern.test(value)  || !control.value ? null : { ssn: {description: 'Invalid Social number, Max of 9 letters'}}

 }
 /*************Funciona na forma de Classe Statica ou Não **************** */
export class ssnValidator {
  public static SSNVALIDATOR(control: AbstractControl): ValidationErrors | null {
    const pattern:RegExp = /^\d{9}$/;
    const value = control.value || '' ;
     return pattern.test(value)  || !control.value ? null : { ssn: {description: 'Invalid Social number, Max de 9 letters'}}
 }

}
