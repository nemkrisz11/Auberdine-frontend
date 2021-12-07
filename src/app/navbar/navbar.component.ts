import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FriendsService } from '../friends.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  username: string | null | undefined;
  requestCount = 0;
  constructor(
    public authService: AuthService,
    public httpClient: HttpClient,
    private friendsService: FriendsService,
    private userService: UserService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.userService.currentUserName.subscribe(
      (username) => (this.username = username)
    );
    this.authService.currentUsername.subscribe(
      (username) => (this.username = username)
    );
    if (this.authService.isLoggedIn()) {
      this.authService.getUsername();
    }
    this.friendsService.getFriendRequests();
    this.friendsService.currentRequests.subscribe((resp: any) => {
      this.requestCount = resp.length;
    });
  }

  logout() {
    this.authService.logout();
  }
}
