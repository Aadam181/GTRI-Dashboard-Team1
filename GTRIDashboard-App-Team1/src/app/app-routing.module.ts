import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetStatisticsComponent } from './components/asset-statistics/asset-statistics.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'login', component:LoginComponent}
import { TicketStatisticsComponent } from './components/ticket-statistics/ticket-statistics.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'asset-statistics', component:AssetStatisticsComponent},
  {path: 'ticket-statistics', component:TicketStatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
