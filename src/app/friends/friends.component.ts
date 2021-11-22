import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})
export class FriendsComponent implements OnInit {
  friendRequests = [];
  friends = [];
  constructor(public router: Router, public friendsService: FriendsService) {}

  ngOnInit(): void {
    this.friendsService.currentFriends.subscribe((friends) => {
      this.friends = friends;
    });

    this.friendsService.currentRequests.subscribe((requests) => {
      this.friendRequests = requests;
    });
    this.friendsService.getFriends();
    this.friendsService.getFriendRequests();
  }
}
