import { Component, OnInit } from '@angular/core';
import { SearchflightService } from 'src/app/_services/searchflight.service';

@Component({
  selector: 'app-farerules',
  templateUrl: './farerules.component.html',
  styleUrls: ['./farerules.component.css']
})
export class FarerulesComponent implements OnInit {
  constructor(private searchService: SearchflightService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
