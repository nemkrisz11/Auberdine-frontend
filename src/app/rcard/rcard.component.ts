import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rcard',
  templateUrl: './rcard.component.html',
  styleUrls: ['./rcard.component.css'],
})
export class RcardComponent implements OnInit {
  @Input()
  details = {
    place_name: '',
    rating: 0,
    picture: '',
    friend_ratings: [{ name: '', rating: 0 }],
    place_id: 0,
  };
  filledstars = Array(5).fill(0);
  emptystars = Array(0).fill(0);
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.filledstars = Array(Math.round(this.details.rating)).fill(0);
    this.emptystars = Array(5 - Math.round(this.details.rating)).fill(0);
  }

  onDetails() {
    this.router.navigate(['/etterem'], {
      state: { id: this.details.place_id },
    });
  }
}
