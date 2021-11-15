import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { RdetailComponent } from './rdetail/rdetail.component';
import { FriendsComponent } from './friends/friends.component';
import { AddfriendComponent } from './addfriend/addfriend.component';
import { FdetailsComponent } from './fdetails/fdetails.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'ajanlatok', component: RecommendationsComponent },
  { path: 'etterem', component: RdetailComponent },
  { path: 'baratok', component: FriendsComponent },
  { path: 'ujbarat', component: AddfriendComponent },
  { path: 'barat', component: FdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
