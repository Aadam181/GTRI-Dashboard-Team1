import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketStatsComponent } from './ticket-stats/ticket-stats.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopnavbarComponent } from './components/topnavbar/topnavbar.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';

 
@NgModule({
  declarations: [
    AppComponent,
    TicketStatsComponent,
    TopnavbarComponent,
    SidenavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
