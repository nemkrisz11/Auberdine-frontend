import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { RcardComponent } from './rcard/rcard.component';
import { FooterComponent } from './footer/footer.component';
import { RdetailComponent } from './rdetail/rdetail.component';
import { FriendRatingComponent } from './friend-rating/friend-rating.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RecommendationsComponent,
    RcardComponent,
    FooterComponent,
    RdetailComponent,
    FriendRatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
