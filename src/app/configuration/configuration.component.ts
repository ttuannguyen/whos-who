import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  name: string = ""
  mode: string = ""
  
  constructor() { }

  ngOnInit(): void {
  }

  setName(name: any) {
    this.name = name;
  }

  setMode(mode: any) {
    this.mode = mode;
  }

  onSubmit = async () => {
    
    console.log(this.name);
    console.log(this.mode)
  }

}
