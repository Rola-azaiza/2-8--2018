import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
hero = 'Windstorm';
 
setup:string;
  punchline:string;
  constructor() {
  this.setup="first example";
  this.punchline="hello example";
  }

  ngOnInit() {
  }

}
