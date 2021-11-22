import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css'],
})
export class AddfriendComponent implements OnInit {
  queryResult = [];
  errorMsg = '';
  constructor(public friendsService: FriendsService) {}

  ngOnInit(): void {}

  searchUsers(event: any) {
    const query = event.target.value;
    if (query.length >= 3) {
      this.friendsService.getUsers(query).subscribe((resp: any) => {
        this.queryResult = resp.users;
      });
    }
    this.errorMsg = '';
  }

  sendFriendRequest(user_id: string) {
    this.friendsService.sendFriendRequest(user_id).subscribe((resp: any) => {
      if (resp.msg != 'ok') {
        this.errorMsg = resp.msg;
      }
    });
  }
}
