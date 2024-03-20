import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

  name = 'Rickey'
  @Input() score: number|any
  constructor() { }

  ngOnInit(): void {
  }

}
