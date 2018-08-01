import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coll-item',
  templateUrl: './coll-item.component.html',
  styleUrls: ['./coll-item.component.css']
})
export class CollItemComponent  {

  hidden: boolean = true;

  toggleHidden() {
    this.hidden = !this.hidden;
  }
}
