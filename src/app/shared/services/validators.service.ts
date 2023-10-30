import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public cantBeStrider = (control: FormControl): ValidationErrors | null => {
    const value: string = control.value.trim().toLowerCase();
    if (value === 'strider') {
      return {
        noStrider: true,
      };
    }
    return null;
  };

  public isValidField(form: FormGroup, field: string) {
    return form.controls[field].errors && form.controls[field].touched;
  }
/**
 * 
 * @param field1 password1 del formGroup
 * @param field2 password2 del formGroup
 * @returns retorna una función que recibe como parámetro el formulario, y esa función retornada
 * retorna un ValidationError o null.
 * Se obtienen los valores de password1 y 2 y se los compara. 
 * Si no son iguales se le atribuye el error a password2 y se devuelve el error.
 * Si son iguales se le limpian los errores a password2 y se devuelve null.
 */
  public isFieldOneEqualFieldTwo(field1: string, field2: string) {
    
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if (fieldValue1 !== fieldValue2) {
        formGroup.get(field2)?.setErrors({ notEqual: true });
        return { notEqual: true };
      }

      formGroup.get(field2)?.setErrors(null);
      return null;
    };
  }
}
