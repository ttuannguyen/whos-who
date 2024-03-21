import {Component, Input, OnInit} from '@angular/core';
import {ConfigService} from "../../config.service";

@Component({
  selector: 'app-start-button',
  templateUrl: './start-button.component.html',
  styleUrls: ['./start-button.component.css']
})
export class StartButtonComponent implements OnInit {

  @Input() selectedGenre: String = ''
  constructor(protected configService: ConfigService) { }

  ngOnInit(): void {
  }

}
