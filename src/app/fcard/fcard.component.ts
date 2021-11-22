import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fcard',
  templateUrl: './fcard.component.html',
  styleUrls: ['./fcard.component.css'],
})
export class FcardComponent implements OnInit {
  @Input()
  name = '';

  constructor() {}

  ngOnInit(): void {}
}
