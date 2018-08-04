import { Component, ElementRef, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    
  }

}
