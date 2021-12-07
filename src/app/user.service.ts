import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

const headers = new HttpHeaders({ enctype: 'multipart/form-data' });

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public userNameSource = new BehaviorSubject('');
  public currentUserName = this.userNameSource.asObservable();

  constructor(private httpClient: HttpClient) {}

  getUserData() {
    return this.httpClient.get(environment.apiUrl + '/user/properties');
  }

  postUserData(userDetailsForm: any): Observable<any> {
    let formData = new FormData();
    formData.append('new_name', userDetailsForm.value.name);
    formData.append('password', userDetailsForm.value.regi_jelszo);
    formData.append('new_password', userDetailsForm.value.uj_jelszo);
    formData.append('new_confirm', userDetailsForm.value.uj_jelszo_meg_egyszer);
    return this.httpClient.post(
      environment.apiUrl + '/user/properties',
      formData,
      {
        headers: headers,
      }
    );
  }
}
