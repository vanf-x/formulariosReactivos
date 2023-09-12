import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamic-page',
  templateUrl: './dinamic-page.component.html',
  styleUrls: ['./dinamic-page.component.css'],
})
export class DinamicPageComponent {
  constructor(private fb: FormBuilder) {}

  // public myForm2 = new FormGroup({
  //   favouriteGames: new FormArray([]),
  // });

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favouriteGames: this.fb.array([]),
  });

  public newFavourite: FormControl = new FormControl('', Validators.required);

  get favouriteGames() {
    return this.myForm.get('favouriteGames') as FormArray;
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    (this.myForm.controls['favouriteGames'] as FormArray) = this.fb.array([]);
    this.myForm.reset();
  }

  onDeleteFavourite(index: number): void {
    this.favouriteGames.removeAt(index);
  }

  onAddToFavourites(): void {
    if (this.newFavourite.invalid) return;
    const newGame = this.newFavourite.value;
    //Sin formbuilder
    //this.favouriteGames.push(new FormControl(newGame, Validators.required));

    //Con formbuilder
    this.favouriteGames.push(this.fb.control(newGame, Validators.required));
    this.newFavourite.reset();
  }

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  isValidFieldInArray(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es obligatorio';
        case 'minlength':
          return `Este campo debe ocupar mínimo ${errors['minlength'].requiredLength} caracteres`;
      }
    }

    return null;
  }
}
