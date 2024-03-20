import {Component, Input, OnInit} from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

  name = 'Rickey'
  @Input() score: number|any
  constructor(public configService: ConfigService) { }

  ngOnInit(): void {
  }

}
