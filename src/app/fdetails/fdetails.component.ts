import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-fdetails',
  templateUrl: './fdetails.component.html',
  styleUrls: ['./fdetails.component.css'],
})
export class FdetailsComponent implements OnInit {
  ratings = [];
  name = '';
  constructor(private location: Location, private userService: UserService) {}

  ngOnInit(): void {
    let id: any = this.location.getState();
    this.userService.getRatings(id.id).subscribe((ret) => {
      console.log(ret);
      this.ratings = ret.reviews;
      this.name = ret.name;
    });
  }
}
