import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public form: FormGroup = Object.create(null);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: this.fb.control(null, [Validators.required]),
      lastName: this.fb.control(null, [Validators.required]),
      emailOrphone: this.fb.control(null, [
        Validators.required,
        this.checkEmailOrPhoneValidator('emailOrphone'),
      ]),
      password: this.fb.control(null, [
        Validators.required,
        this.checkEmailOrPhoneValidator('password'),
      ]),
    });
  }

  checkEmailOrPhoneValidator(type: string) {
    return (control: AbstractControl) => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const phonePattern = /^[0-9]{10}$/; // 10-digit phone number
      const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$/;

      const value = control.value;
      if (!value) {
        return null;
      }

      if (
        emailPattern.test(value) ||
        phonePattern.test(value) ||
        passwordPattern.test(value)
      ) {
        return null;
      } else {
        if (type === 'emailOrphone') {
          return {
            inValidEmailOrPhone: true,
            message:
              'Wrong or Invalid email address or mobile phone number. Please correct and try again.',
          };
        } else {
          return {
            inValidPassword: true,
            message:
              'Create a strong password with a mix of letters, numbers and symbols',
          };
        }
      }
    };
  }

  signUp() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('signUp submitted');
  }
}
