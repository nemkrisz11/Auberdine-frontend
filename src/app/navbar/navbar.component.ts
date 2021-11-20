import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  username: string | null | undefined;
  constructor(
    public authService: AuthService,
    public httpClient: HttpClient,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.authService.currentUsername.subscribe(
      (username) => (this.username = username)
    );
    if (this.authService.isLoggedIn()) {
      this.authService.getUsername();
    }
  }

  logout() {
    this.authService.logout();
  }
}
