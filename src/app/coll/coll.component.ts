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

  ngAfterContentInit() {
    this.items = this.CollViewChildren.toArray();
    this.items[0].opened = true;

    //this.panels.toArray()[0].opened = true;
    // Loop through all panels
    this.items.forEach((coll: QueryList<CollItemComponent>) => {
      // subscribe panel toggle event
      coll.toggle.subscribe(() => {
        // Open the panel
        this.openPanel(coll);
      });
    });
  }

  constructor() {
  }

  openPanel(panel: CollItemComponent) {
    // close all panels
    this.items.forEach(p => p.opened = false);
    // open the selected panel
    panel.opened = true;
  }

}
