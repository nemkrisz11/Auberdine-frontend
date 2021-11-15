import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { RdetailComponent } from './rdetail/rdetail.component';
import { FriendsComponent } from './friends/friends.component';
import { AddfriendComponent } from './addfriend/addfriend.component';
import { FdetailsComponent } from './fdetails/fdetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'ajanlatok', component: RecommendationsComponent },
  { path: 'etterem', component: RdetailComponent },
  { path: 'baratok', component: FriendsComponent },
  { path: 'ujbarat', component: AddfriendComponent },
  { path: 'barat', component: FdetailsComponent },
  { path: 'adatmodositas', component: UserdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
