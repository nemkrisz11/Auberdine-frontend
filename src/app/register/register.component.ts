import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  loginForm: any;
  email: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          this.passwordMatchingValidatior,
        ],
      ],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.register(this.loginForm).subscribe((response) => {
        if (response.email === undefined) {
          alert('Sikeres regisztráció!');
          this.router.navigate(['login']);
        } else if (response.status >= 400) {
          alert('hiba történt a webszerverhez való csatlakozáskor!');
        }
        this.email = response.email;
      });
    } else {
      alert('User form is not valid!!');
    }
  }

  passwordMatchingValidatior: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirm');

    return password?.value === confirmPassword?.value
      ? null
      : { notmatched: true };
  };
}
