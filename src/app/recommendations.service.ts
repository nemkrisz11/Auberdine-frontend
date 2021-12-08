import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const options = {
  headers: new HttpHeaders().set('Content-Type', 'application/json'),
};
@Injectable({
  providedIn: 'root',
})
export class RecommendationsService {
  constructor(private httpClient: HttpClient) {}

  getRecommendations(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/recommendations');
  }

  getPlaceDetails(id: any) {
    return this.httpClient.get(environment.apiUrl + `/place/${id}`);
  }

  postRating(placeId: any, rating: any, description: any): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/place/rate', {
      place_id: placeId,
      rating: rating,
      description: description,
    });
  }
}
