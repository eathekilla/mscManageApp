import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MagicianComponent } from './magician/magician.component';
import { MagicianDetailComponent } from './magician-detail/magician-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'magicians', component: MagicianComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MagicianDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
