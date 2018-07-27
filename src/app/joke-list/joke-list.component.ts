import { Component, OnInit } from '@angular/core';
import {Joke} from '../models/joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokeList: Array<Joke>;
  constructor() {
    this.jokeList = [new Joke('', '')    ];
  }

  ngOnInit() {
  }

  addNewJoke(val: Joke) {
    this.jokeList.unshift(val);
  }

}
