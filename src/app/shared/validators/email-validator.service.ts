import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, delay, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {
  // constructor(private http: HttpClient) {}
  validate(
    control: AbstractControl<any, any>
  ): Observable<ValidationErrors | null> {
    const email = control.value;
    const httpCallObservable = new Observable<ValidationErrors | null>(
      (subscriber) => {
        console.log({ email });
        if (email === 'facundo@google.com') {
          subscriber.next({ emailTaken: true });
          subscriber.complete();
        }
        subscriber.next(null);
        subscriber.complete();
      }
    ).pipe(delay(2000));

    return httpCallObservable;
  }
  //   validate(
  //     control: AbstractControl<any, any>
  //   ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
  //     const email = control.value;
  //     console.log({ email });
  //     return of({
  //       emailTaken: true,
  //     }).pipe(delay(2000));
  //   }

  //Se podría usar para validar un mail.
  //   validate(
  //     control: AbstractControl<any, any>
  //   ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
  //     const email = control.value;
  //     return this.http.get(`http://localhost:3000/users?q=${email}`)
  //     .pipe(
  //         map(
  //             res => {
  //                 return (res.length === 0)
  //                 ? null
  //                 : {emailTaken: true}
  //             }
  //         )
  //     )
  //   }

  //Es opcional, sirve para ver cuándo el validator cambia.
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
}
