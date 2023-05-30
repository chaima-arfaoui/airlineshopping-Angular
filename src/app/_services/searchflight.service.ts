import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const SEARCH_API = 'http://localhost:8081/api/search/';
const FARERULES_API = 'http://localhost:8081/api/farerules/';
const BOOKING_API = 'http://localhost:8081/api/booking/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class SearchflightService {

  constructor(private http: HttpClient) { }

  searchFlight(body: any) : Observable <any> {
    return this.http.post(SEARCH_API + 'flight', body, httpOptions);
  }
 
  createFrules(body: any) : Observable <any> {
    return this.http.post(FARERULES_API + 'CreateFarerules', body, httpOptions);
  }

   
  bookingflight(body: any) : Observable <any> {
    return this.http.post(BOOKING_API + 'bookingflight', body, httpOptions);
  }
}
