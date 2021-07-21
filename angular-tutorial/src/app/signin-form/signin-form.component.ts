import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {
  defaultEmail = 'admin@code.vn';
  defaultPassword = '123456';
  signinForm: FormGroup;
  isSubmitted = false;
  isLogin = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  authenticated() {
    return (this.signinForm.value.email === this.defaultEmail &&
      this.signinForm.value.password === this.defaultPassword);
  }

  login() {
    this.isSubmitted = true;
    if (this.signinForm.valid && this.authenticated()) {
      this.isLogin = true;
      this.signinForm.reset();
    }
  }

  get email() {
    return this.signinForm.get('email');
  }

  get password() {
    return this.signinForm.get('password');
  }
}
