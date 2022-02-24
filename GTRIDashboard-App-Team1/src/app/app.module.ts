import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { TopnavbarComponent } from './components/naivgation/topnavbar/topnavbar.component';
import { SidenavbarComponent } from './components/naivgation/sidenavbar/sidenavbar.component';
import { MaterialModule } from './material.module';
import { TicketStatisticsComponent } from './components/statistics-dashobard/ticket-statistics/ticket-statistics.component';
import { AssetStatisticsComponent } from './components/statistics-dashobard/asset-statistics/asset-statistics.component';
import { LoginComponent } from './components/authentication/login/login.component';
 
@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    SidenavbarComponent,
    LoginComponent,
    TicketStatisticsComponent,
    AssetStatisticsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MaterialModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
