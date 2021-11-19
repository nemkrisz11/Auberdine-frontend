import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';

const headers = new HttpHeaders({ enctype: 'multipart/form-data' });

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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
}
