import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendRatingComponent } from './friend-rating.component';

describe('FriendRatingComponent', () => {
  let component: FriendRatingComponent;
  let fixture: ComponentFixture<FriendRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
