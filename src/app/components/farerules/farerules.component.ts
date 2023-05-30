import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchflightService } from 'src/app/_services/searchflight.service';

@Component({
  selector: 'app-farerules',
  templateUrl: './farerules.component.html',
  styleUrls: ['./farerules.component.css']
})
export class FarerulesComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor(private searchService: SearchflightService) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  CloseBtn(){
    this.close.emit();

  }

}
