import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
jokes: Object[];

  constructor() {
    this.jokes = [
      {
        setup: "s1",
        punchline: "p1",
        hide: true
      },
      {
        setup: "s2",
        punchline: "p2",
        hide: true
      },
      {
        setup: "s3",
        punchline: "p3’",
        hide: true
      },
    ];
  }

  ngOnInit() {
  }
toggle(joke) {
  joke.hide = !joke.hide;
}

 

}
