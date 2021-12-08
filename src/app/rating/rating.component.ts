import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecommendationsService } from '../recommendations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input()
  restaurantId = '';
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private recommendationsService: RecommendationsService,
    private router: Router
  ) {
    this.form = this.fb.group({
      star: ['', Validators.required],
      description: [''],
    });
  }

  submit() {
    this.recommendationsService
      .postRating(
        this.restaurantId,
        this.form.value.star,
        this.form.value.description
      )
      .subscribe((res) => {
        this.router.navigate(['/ajanlatok'], {
          state: { id: this.restaurantId },
        });
      });
  }

  ngOnInit(): void {}
}
