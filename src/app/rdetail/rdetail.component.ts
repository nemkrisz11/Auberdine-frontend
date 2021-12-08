import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RecommendationsService } from '../recommendations.service';

@Component({
  selector: 'app-rdetail',
  templateUrl: './rdetail.component.html',
  styleUrls: ['./rdetail.component.css'],
})
export class RdetailComponent implements OnInit {
  details = {
    address: '',
    location: [],
    name: '',
    picture: '',
    reviews: [],
    rating: 0,
  };
  rid: any = '';
  marker = {
    position: { lat: 0, lng: 0 },
    label: { color: 'red', text: '' },
  };
  constructor(
    private location: Location,
    private recommendationsService: RecommendationsService
  ) {}

  ngOnInit(): void {
    this.rid = this.location.getState();
    this.recommendationsService
      .getPlaceDetails(this.rid.id)
      .subscribe((res: any) => {
        this.details = res;
        this.details.rating = Math.round(res.rating);
        this.marker = {
          position: { lat: res.location[0], lng: res.location[1] },
          label: { color: 'yellow', text: res.name },
        };
      });
  }
}
