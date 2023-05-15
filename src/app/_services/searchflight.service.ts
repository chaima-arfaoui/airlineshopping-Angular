import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const SEARCH_API = 'http://localhost:8081/api/search/';
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

  
  details(body: any) : Observable <any> {
    return this.http.post(SEARCH_API + 'CreateFarerules', body, httpOptions);
  }

}
