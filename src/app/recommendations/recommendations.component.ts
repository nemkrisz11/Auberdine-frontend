import { Component, OnInit } from '@angular/core';
import { RecommendationsService } from '../recommendations.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css'],
})
export class RecommendationsComponent implements OnInit {
  recommendations = [];
  constructor(private recommendationsService: RecommendationsService) {}

  ngOnInit(): void {
    this.recommendationsService.getRecommendations().subscribe((ret) => {
      this.recommendations = ret.recommendations;
    });
  }
}
