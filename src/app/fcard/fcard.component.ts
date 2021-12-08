import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fcard',
  templateUrl: './fcard.component.html',
  styleUrls: ['./fcard.component.css'],
})
export class FcardComponent implements OnInit {
  @Input()
  name = '';
  @Input()
  id = 'asdfasdf';

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['/barat'], { state: { id: this.id } });
  }

  ngOnInit(): void {}
}
