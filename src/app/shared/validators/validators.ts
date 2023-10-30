import { FormControl, ValidationErrors } from '@angular/forms'

export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

/**
 * 
 * @param control
 * @returns ValidationErrors | null
 * Si tiene error devuelve un objeto con el error
 * Si no tiene error devuelve null
 * En vez de compararlo con "strider" buscaría en el backend que no se repita un usuario
 * ValidationErrors es un error de validación
 */
export const cantBeStrider = (control: FormControl) : ValidationErrors | null => {
  const value: string = control.value.trim().toLowerCase();
  if (value === 'strider') {
    return {
      noStrider: true,
    };
  }
  return null;
};
