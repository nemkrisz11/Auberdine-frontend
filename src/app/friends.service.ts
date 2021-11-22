import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

const options = {
  headers: new HttpHeaders().set('Content-Type', 'application/json'),
};
@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  private friendsSource = new BehaviorSubject([]);
  public currentFriends = this.friendsSource.asObservable();

  private requestsSource = new BehaviorSubject([]);
  public currentRequests = this.requestsSource.asObservable();

  constructor(private httpClient: HttpClient) {}

  getFriends() {
    return this.httpClient
      .get(environment.apiUrl + '/user/friends')
      .subscribe((resp: any) => {
        this.friendsSource.next(resp);
      });
  }

  deleteFriend(friend_id: string) {
    return this.httpClient
      .delete(environment.apiUrl + '/user/friends', {
        headers: options.headers,
        body: { friend_id: friend_id },
      })
      .subscribe((resp: any) =>
        this.friendsSource.next(
          this.friendsSource
            .getValue()
            .filter((f: any) => f.user_id != friend_id)
        )
      );
  }

  getFriendRequests() {
    return this.httpClient
      .get(environment.apiUrl + '/user/friend_requests')
      .subscribe((resp: any) => {
        this.requestsSource.next(resp);
      });
  }

  acceptFriendRequest(user_id: string) {
    return this.httpClient
      .post(
        environment.apiUrl + '/user/friend_requests',
        {
          user_id: user_id,
          accepted: true,
        },
        options
      )
      .subscribe((resp: any) => {
        this.friendsSource.next(
          this.friendsSource
            .getValue()
            .concat(
              this.requestsSource
                .getValue()
                .filter((r: any) => r.user_id == user_id)
            )
        );
        this.requestsSource.next(
          this.requestsSource
            .getValue()
            .filter((r: any) => r.user_id != user_id)
        );
      });
  }

  declineFriendRequest(user_id: string) {
    return this.httpClient
      .post(
        environment.apiUrl + '/user/friend_requests',
        {
          user_id: user_id,
          accepted: false,
        },
        options
      )
      .subscribe((resp: any) =>
        this.requestsSource.next(
          this.requestsSource
            .getValue()
            .filter((f: any) => f.user_id != user_id)
        )
      );
  }

  getUsers(query: string) {
    return this.httpClient.post(
      environment.apiUrl + '/user/search',
      { query: query },
      options
    );
  }

  sendFriendRequest(user_id: string) {
    return this.httpClient.post(
      environment.apiUrl + '/user/friend_request',
      {
        user_id: user_id,
      },
      options
    );
  }
}
