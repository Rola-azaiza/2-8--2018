import {
  Component,
  NgModule,
  AfterContentInit,
  Input,
  ContentChildren,
  QueryList
} from '@angular/core';
import {CollItemComponent} from '../coll-item/coll-item.component';
@Component({
  selector: 'app-coll',
  templateUrl: './coll.component.html',
  styleUrls: ['./coll.component.css']
})
export class CollComponent implements AfterContentInit {
  items: CollItemComponent[];
  @ContentChildren(CollItemComponent) CollViewChildren: QueryList<CollItemComponent>;
  ngAfterContentInit () {
    this.items = this.CollViewChildren.toArray();
    this.items[0].toggleHidden();
    this.items[1].toggleHidden();
    this.items[2].toggleHidden();
  }
  constructor() { }

}
