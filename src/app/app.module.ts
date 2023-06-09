import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SigninComponent } from './components/signin/signin.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { RegisterComponent } from './components/register/register.component';
import { SearchFightComponent } from './components/search-fight/search-fight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FarerulesComponent } from './components/farerules/farerules.component';
import { BookingComponent } from './components/booking/booking.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { OurServicesComponent } from './components/our-services/our-services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    RegisterComponent,
    SearchFightComponent,
    DashboardComponent,
    FarerulesComponent,
    BookingComponent,
    HistoriqueComponent,
    FooterComponent,
    BookingDetailsComponent,
    OurServicesComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
