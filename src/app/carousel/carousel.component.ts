
import {
  Component,
  NgModule,
  AfterContentInit,
  Input,
  ContentChildren,
  QueryList
} from '@angular/core';

import {CarouselItemComponent} from '../carousel-item/carousel-item.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export
class CarouselComponent implements AfterContentInit {
  @Input('delay') delay: number;
  currentIndex: number = 0;
  items: CarouselItemComponent[];
  @ContentChildren(CarouselItemComponent) carouselViewChildren: QueryList<CarouselItemComponent>;
  ngAfterContentInit() {
    this.items = this.carouselViewChildren.toArray();
    this.items[0].toggleHidden();
    // ++this.currentIndex;
    setInterval(() => {
      const length = this.items.length;
      this.items[this.currentIndex % length].toggleHidden();
      ++this.currentIndex;
      this.items[this.currentIndex % length].toggleHidden();
    }, this.delay)
  }
}
