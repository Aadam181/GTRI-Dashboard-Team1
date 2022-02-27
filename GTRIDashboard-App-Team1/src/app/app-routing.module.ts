import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetStatisticsComponent } from './components/statistics-dashobard/asset-statistics/asset-statistics.component';
import { DashboardComponent } from './components/statistics-dashobard/dashboard/dashboard.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TicketStatisticsComponent } from './components/statistics-dashobard/ticket-statistics/ticket-statistics.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'asset-statistics', component:AssetStatisticsComponent},
  {path: 'ticket-statistics', component:TicketStatisticsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
