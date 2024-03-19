import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './configuration/configuration.component';


const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "configuration", component: ConfigurationComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
