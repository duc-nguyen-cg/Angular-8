import {Component, OnInit} from '@angular/core';
import {Account} from './account';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PasswordValidatorService} from './password-validator.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  accountForm: FormGroup;
  isSubmitted = false;
  accounts: Array<Account> = [];

  constructor(
    private fb: FormBuilder, private passwordValidator: PasswordValidatorService
  ) { }

  ngOnInit() {
    this.accountForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPass: ['', [Validators.required]],
      country: ['Vietnam', [Validators.required]],
      age: [null, [Validators.required, Validators.min(18)]],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]]
    },
      {
        validator: this.passwordValidator.MatchPassword('password', 'confirmPass')
      }
    );
  }

  getRegisteredInfo() {
  }

  register() {
    this.isSubmitted = true;
    if (this.accountForm.valid) {
      this.accounts.push(this.accountForm.value);
      this.accountForm.reset();
      this.isSubmitted = false;
    }
  }

  get email() {
    return this.accountForm.get('email');
  }

  get password() {
    return this.accountForm.get('password');
  }

  get confirmPass() {
    return this.accountForm.get('confirmPass');
  }

  get country() {
    return this.accountForm.get('country');
  }

  get age() {
    return this.accountForm.get('age');
  }

  get gender() {
    return this.accountForm.get('gender');
  }

  get phone() {
    return this.accountForm.get('phone');
  }
}
