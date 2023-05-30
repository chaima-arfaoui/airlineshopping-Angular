import { Component, OnInit } from '@angular/core';
import { SearchflightService } from 'src/app/_services/searchflight.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  constructor(private searchService: SearchflightService) { }

  // public book=
  // {
  //   DateOfBirth:'',


  // }


  // ngOnInit(): void {

  // }

  // formSubmit(registerForm:NgForm){

  //   //add condidat
  //   this.searchService.bookingflight(this.book).subscribe(
  //   (data)=>{
  //     //this.router.navigateByUrl('/getcategory');
  //   console.log(data)

  //   //this.message=true;
  //   registerForm.reset();
  //   },

  //   );
  //   }

  response: any

  request: any = {

    "fareSourceCode": "",

    "adults": [
      {
        "passengerType": "ADT",
        "sexe": "M",

        "passengerTitle": "MR",
        "firstName": "MOHAMMED",
        "lastName": "MUBARAK",

        "bithday": "1988-01-03T00:00:00",

        "passportNumber": "Z876789",
        "expiryDate": "2025-01-03T00:00:00",
        "country": "IN",


        "seatPreference": "Any",
        "mealPreference": "Any",
        "flightSegments": [
          {
            "departureAirportLocation": "BLR",
            "arrivalAirportLocation": "DXB",
            "flightNumber": "667",
            "departureDateTime": "2023-03-07T20:20:00.000+00:00"

          }
        ],

        "passengerNationality": "IN"

      }
    ],
    "countryCode": "91",
    "areaCode": "080",
    "phoneNumber": "87657897",
    "email": "apisupport@mystifly.com",
    "postCode": "560028"


  }
  profileForm = new FormGroup({
    passengerTitle: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    bithday: new FormControl(),
    sexe: new FormControl(),
    seatPreference: new FormControl(),
    mealPreference: new FormControl(),
    country: new FormControl(),

  })
  onSubmit() {
    this.request["passengerTitle"] = this.profileForm.value["passengerTitle"];
    this.request["firstName"] = this.profileForm.value["firstName"];
    this.request["lastName"] = this.profileForm.value["lastName"];
    this.request["bithday"] = this.profileForm.value["bithday"];
    this.request["sexe"] = this.profileForm.value["sexe"];
    this.request["seatPreference"] = this.profileForm.value["seatPreference"];
    this.request["mealPreference"] = this.profileForm.value["mealPreference"];
    this.request["country"] = this.profileForm.value["country"];

    console.log('request', this.request);
    this.searchService.bookingflight(this.request).subscribe(
      data => {
        console.log('data' , data); 
        //console.log('pricedItineraries', data.pricedItineraries);
         this.response = data;


      },
      err => {
        console.log('erreur', err);
      }
    );
  }

}
