import { AbstractControl, ValidationErrors } from "@angular/forms";


export function ssnValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value || '';
  const valid = value.match(/^\d{9}$/);
  /* return valid ? null : {ssn: true}; */
  return valid ? null : {ssn: {description: "Numero de Seg Social Invalido"}};
}

export function equalValidator(control: AbstractControl): ValidationErrors | null {
  const [first, ...rest] = Object.keys(control.value || {});
  const valid = rest.every(v => control.value[v] === control.value[first]);
  return valid ? null : {equal: true};
}
