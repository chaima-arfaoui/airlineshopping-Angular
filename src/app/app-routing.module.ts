import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchFightComponent } from './components/search-fight/search-fight.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookingComponent } from './components/booking/booking.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
;

const routes: Routes = [
  { path: 'Login', component: SigninComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'search', component: SearchFightComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'historique', component: HistoriqueComponent },
  { path: 'bookingDetails', component: BookingDetailsComponent },
  { path: 'ourservices', component: OurServicesComponent }



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
