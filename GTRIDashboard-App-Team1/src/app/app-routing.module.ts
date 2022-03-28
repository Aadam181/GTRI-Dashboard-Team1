import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetStatisticsComponent } from './components/statistics-dashobard/asset-statistics/asset-statistics.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TicketStatisticsComponent } from './components/statistics-dashobard/ticket-statistics/ticket-statistics.component';
import { AuthGuard } from './auth.guard';
import { amComponent } from './components/asset management/am.component';



const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'asset-statistics', component:AssetStatisticsComponent, canActivate:[AuthGuard]},
  {path: 'ticket-statistics', component:TicketStatisticsComponent, canActivate:[AuthGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'asset-management', component: amComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
