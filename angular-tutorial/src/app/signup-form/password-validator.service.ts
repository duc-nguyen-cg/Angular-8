import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidatorService {

  constructor() {
  }

  MatchPassword(password: string, confirmPass: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPassControl = formGroup.controls[confirmPass];
      if (!passwordControl || !confirmPassControl) {
        return null;
      }
      if (passwordControl.errors && !confirmPassControl.errors.passwordMismatch) {
        return null;
      }
      if (passwordControl.value !== confirmPassControl.value) {
        confirmPassControl.setErrors({passwordMismatch: true});
      } else {
        confirmPassControl.setErrors(null);
      }
    };
  }
}
