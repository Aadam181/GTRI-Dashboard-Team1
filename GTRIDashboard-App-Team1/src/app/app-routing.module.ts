import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetStatisticsComponent } from './components/statistics-dashobard/asset-statistics/asset-statistics.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { TicketStatisticsComponent } from './components/statistics-dashobard/ticket-statistics/ticket-statistics.component';


const routes: Routes = [
  {path: '', redirectTo: 'ticket-statistics', pathMatch:'full'},
  {path: 'ticket-statistics', component:TicketStatisticsComponent} ,
  {path: 'asset-statistics', component:AssetStatisticsComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
