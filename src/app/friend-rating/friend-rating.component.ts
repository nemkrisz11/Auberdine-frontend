import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-rating',
  templateUrl: './friend-rating.component.html',
  styleUrls: ['./friend-rating.component.css'],
})
export class FriendRatingComponent implements OnInit {
  @Input()
  review = { name: '', description: '', rating: 0 };
  constructor() {}

  ngOnInit(): void {
    this.review.rating = Math.round(this.review.rating);
  }
}
