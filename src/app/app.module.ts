import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from './Components/navbar/navbar.component';
import { StartButtonComponent } from './Components/start-button/start-button.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AppRoutingModule } from './app-routing.module';
import { LeaderboardComponent } from './Components/leaderboard/leaderboard.component';
import { GameOverComponent } from './Components/game-over/game-over.component';
import { GameComponent } from './Components/game/game.component';

const routes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, StartButtonComponent, ConfigurationComponent, LeaderboardComponent, GameOverComponent, GameComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
