import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  password: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/ajanlatok']);
    }
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  login() {
    const val = this.loginForm.value;

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm).subscribe((response) => {
        if (response.access_token) {
          this.router.navigate(['/ajanlatok']);
        } else if (response.status >= 400) {
          alert('hiba történt a webszerverhez való csatlakozáskor!');
        } else {
          this.password = response.password;
        }
      });
    } else {
      alert('Nem emailcímet adtál meg vagy a jelszó hossza nem megjelelő!');
    }
  }
}
