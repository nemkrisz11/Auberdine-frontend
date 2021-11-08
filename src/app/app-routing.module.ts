import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { RdetailComponent } from './rdetail/rdetail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'ajanlatok', component: RecommendationsComponent },
  { path: 'etterem', component: RdetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
