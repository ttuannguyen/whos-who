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
    
  }

  onSubmit = async () => {
  
    if(this.name === ''){
      this.errorMessage = "Please enter a name"
      return;
    }
    else if(this.mode === ''){
      this.errorMessage = "Please select a mode"
      return;
    }    
    
    const uniqueNameErrorMessage = "Name has been taken for this mode!"
    if (this.mode === "easy") {
      const existingNamesForEasyMode: string[] = JSON.parse(localStorage.getItem("existingNamesForEasyMode") || '[]');
      if (existingNamesForEasyMode.includes(this.name)) {
        this.errorMessage = uniqueNameErrorMessage;
        return;
      } else {
        existingNamesForEasyMode.push(this.name);
        localStorage.setItem('existingNamesForEasyMode', JSON.stringify(existingNamesForEasyMode));
      }
    } else {
      const existingNamesForHardMode: string[] = JSON.parse(localStorage.getItem("existingNamesForHardMode") || '[]');
      if (existingNamesForHardMode.includes(this.name)) {
        this.errorMessage = uniqueNameErrorMessage;
        return;
      } else {
        existingNamesForHardMode.push(this.name);
        localStorage.setItem('existingNamesForHardMode', JSON.stringify(existingNamesForHardMode));
      }
    } 

    this.router.navigate(["/"]);
  }

  onDestroy(): void {
    this.errorMessage = ""; // reset error message after navigating away
  }

}
