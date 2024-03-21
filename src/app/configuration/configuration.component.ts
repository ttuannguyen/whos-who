import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  name: string = ""
  mode: string = ""
  errorMessage: string = ""
  nameExists: boolean = false;
  
  constructor(private router: Router, private configService: ConfigService) { }

  setName(name: string) {
    this.name = name;
    this.configService.name = name;
    this.errorMessage = ""; // reset error message if a valid name's been provided
  }

  setMode(mode: string) {
    this.mode = mode;
    this.configService.mode = mode;
  }

  ngOnInit(): void {
    const existingNames: string[] = JSON.parse(localStorage.getItem("existingNames") || '[]');
    this.nameExists = existingNames.includes(this.name);
  }

  onSubmit = async () => {
    // console.log(this.configService.name);
    // console.log(this.configService.mode);

    const existingNames: string[] = JSON.parse(localStorage.getItem("existingNames") || '[]');
    if (existingNames.includes(this.name)) {
      this.errorMessage = "Name has been taken!"
      return;
    }

    existingNames.push(this.name);
    localStorage.setItem('existingNames', JSON.stringify(existingNames));

    this.router.navigate(["/"]);
  }

  onDestroy(): void {
    this.errorMessage = ""; // reset error message after navigating away
  }

}
