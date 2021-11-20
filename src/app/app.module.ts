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
import { FriendsComponent } from './friends/friends.component';
import { FcardComponent } from './fcard/fcard.component';
import { AddfriendComponent } from './addfriend/addfriend.component';
import { FdetailsComponent } from './fdetails/fdetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Interceptor } from './interceptor/interceptor';
import jwtDecode from 'jwt-decode';

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
    FriendsComponent,
    FcardComponent,
    AddfriendComponent,
    FdetailsComponent,
    UserdetailsComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
