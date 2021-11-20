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
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'ajanlatok',
    component: RecommendationsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'etterem',
    component: RdetailComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'baratok',
    component: FriendsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'ujbarat',
    component: AddfriendComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'barat',
    component: FdetailsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'adatmodositas',
    component: UserdetailsComponent,
    canActivate: [AuthGuardService],
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
