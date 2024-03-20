import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  name: string = ""
  mode: string = ""
  
  constructor(private configService: ConfigService) { }

  setName(name: string) {
    this.name = name;
    this.configService.name = name;
  }

  setMode(mode: string) {
    this.mode = mode;
    this.configService.mode = mode;
  }

  ngOnInit(): void {
  }

  onSubmit = async () => {
    console.log(this.configService.name);
    console.log(this.configService.mode)
  }

}
