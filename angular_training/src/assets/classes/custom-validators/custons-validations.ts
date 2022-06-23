import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';



export function ssnValidator(control: AbstractControl): ValidationErrors | null {
   const value = control.value || '' ;
   const valid = value.match(/^\d{9}$/);
   return valid ? null : {ssn: {description: 'Numero de Seg Social Inválido'}};

}


export function equalValidator(control: AbstractControl): ValidationErrors | null {
    const [first, ...rest] = Object.keys(control.value || {});
    const valid = rest.every(v => control.value[v] !== control.value[first]);
    return valid ? {equal: 'Error password doesnt match'}: null; 
}


export function custonPattern(control: AbstractControl): ValidationErrors | null {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/ ;
  
  return pattern.test(control.value) || !control.value ? null : { password: 'Password doenst contain the pattern '}

}

