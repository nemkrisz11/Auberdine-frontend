import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from './../environments/environment';
import * as jwt_decode from 'jwt-decode';
import * as moment from 'moment';

const headers = new HttpHeaders({ enctype: 'multipart/form-data' });

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usernameSource = new BehaviorSubject('');
  public currentUsername = this.usernameSource.asObservable();
  constructor(private http: HttpClient) {}

  register(loginForm: any): Observable<any> {
    let formData = new FormData();
    formData.append('name', loginForm.value.name);
    formData.append('email', loginForm.value.email);
    formData.append('password', loginForm.value.password);
    formData.append('confirm', loginForm.value.confirm);
    return this.http.post(environment.apiUrl + '/user/register', formData, {
      headers: headers,
    });
  }

  login(loginForm: any): Observable<any> {
    let formData = new FormData();
    formData.append('email', loginForm.value.email);
    formData.append('password', loginForm.value.password);
    return this.http
      .post(environment.apiUrl + '/user/login', formData, {
        headers: headers,
      })
      .pipe(
        tap((resp: any) => {
          if (resp.access_token) {
            let tokenString: string = `${resp.access_token}`;
            let tokenInfo: any = jwt_decode.default(tokenString);
            const expiresAt = moment().add(tokenInfo.exp, 'second');
            localStorage.setItem(
              'expiration',
              JSON.stringify(expiresAt.valueOf())
            );
            localStorage.setItem('uid', tokenInfo.sub);
            localStorage.setItem('access_token', resp.access_token);
            this.http
              .get(environment.apiUrl + '/user/' + tokenInfo.sub)
              .subscribe((resp: any) => this.usernameSource.next(resp.name));
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('expiration');
    localStorage.removeItem('uid');
    localStorage.removeItem('access_token');
    this.http
      .post(environment.apiUrl + '/user/logout', null)
      .subscribe((resp) => {
        if (resp === 'ok') {
          console.log('logout successful');
          this.usernameSource.next('');
        } else alert('logout unsuccessfull');
      });
  }

  public isLoggedIn() {
    if (!localStorage.getItem('expiration')) {
      return false;
    }
    return moment().isBefore(this.getExpiration());
  }

  getExpiration() {
    let expiration = localStorage.getItem('expiration');
    const expiresAt = JSON.parse(expiration || '');
    return moment(expiresAt);
  }

  getUsername() {
    const uid = localStorage.getItem('uid');
    this.http
      .get(environment.apiUrl + '/user/' + uid)
      .subscribe((resp: any) => this.usernameSource.next(resp.name));
  }
}
