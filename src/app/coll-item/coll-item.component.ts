import {Component, ElementRef, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {map} from 'rxjs/operators';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-coll-item',
  templateUrl: './coll-item.component.html',
  styleUrls: ['./coll-item.component.css']
})
export class CollItemComponent  implements OnInit {



  @Input() opened = false;
  @Input() title: string;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }
}
