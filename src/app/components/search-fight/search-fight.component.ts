import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchflightService } from 'src/app/_services/searchflight.service';

@Component({
  selector: 'app-search-fight',
  templateUrl: './search-fight.component.html',
  styleUrls: ['./search-fight.component.css']
})
export class SearchFightComponent {
  constructor(private searchService: SearchflightService) { }
  sidebarOpen = false;



  openSidebar() {
    this.sidebarOpen = true;
    console.log("side", this.sidebarOpen)
  }



  closeSidebar() {
    this.sidebarOpen = false;
    console.log("side", this.sidebarOpen)
  }
  Loading: boolean = false;
  response: any;
  request: any = {
    "departleVol1": "2023-04-27T00:00:00",
    "departVol1": "BLR",
    "destinationVol1": "DXB",
    "retourleVol1": "2023-04-28T00:00:00",
    "maxStopsQuantity": "Direct",
    "airline": "EK",
    "cabinPreference": "Y",
    "cabinType": "Y",
    "preferenceLevel": "Restricted",
    "airTripType": "Return",
    "pricingSourceType": "Public",
    "isRefundable": true,
    "qteADT": 1,
    "requestOptions": "Fifty",
    "nearByAirports": true,
    "target": "Test",
    "sessionId": "6785AAC0-EC2A-468B-9957-A38B307CA0E5-29",
    "flightType": "2"
  }
  profileForm = new FormGroup({
    departleVol1: new FormControl(),
    departVol1: new FormControl(),
    destinationVol1: new FormControl(),
    retourleVol1: new FormControl(),
    // airline: new FormControl(),

    cabinType: new FormControl(),
    flightType: new FormControl(),
    qteADT: new FormControl(),

  })
  onSubmit() {
    // console.log('heloo', this.profileForm.value);
    this.Loading = true;
    this.request["departVol1"] = this.profileForm.value["departVol1"];
    this.request["destinationVol1"] = this.profileForm.value["destinationVol1"];
    this.request["departleVol1"] = this.profileForm.value["departleVol1"];
    this.request["retourleVol1"] = this.profileForm.value["retourleVol1"];
    this.request["flightType"] = this.profileForm.value["flightType"];
    this.request["cabinType"] = this.profileForm.value["cabinType"];
    this.request["qteADT"] = this.profileForm.value["qteADT"];

    console.log('request', this.request);
    this.searchService.searchFlight(this.request).subscribe(
      data => {
        //console.log('data' , data); 
        console.log('pricedItineraries', data.pricedItineraries);
        this.response = data.pricedItineraries;
        this.Loading = false;

      },
      err => {
        console.log('erreur', err);
      }
    );
  }

  onSubmited() {
    // console.log('heloo', this.profileForm.value);
   
    // this.request["departVol1"] = this.profileForm.value["departVol1"];
    // this.request["destinationVol1"] = this.profileForm.value["destinationVol1"];
    // this.request["departleVol1"] = this.profileForm.value["departleVol1"];
    // this.request["retourleVol1"] = this.profileForm.value["retourleVol1"];
    // this.request["flightType"] = this.profileForm.value["flightType"];
    // this.request["cabinType"] = this.profileForm.value["cabinType"];
    // this.request["qteADT"] = this.profileForm.value["qteADT"];

    // console.log('request', this.request);
    this.searchService.details(this.request).subscribe(
      data => {
        //console.log('data' , data); 
        // console.log('pricedItineraries', data.pricedItineraries);
        this.response = data.BaggageInfos;
      

      },
      err => {
        console.log('erreur', err);
      }
    );
  }

}
