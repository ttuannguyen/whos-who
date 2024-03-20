import { Component, OnInit } from "@angular/core";
import fetchFromSpotify, { request } from "../../services/api";
import { ConfigService } from "../config.service";


const AUTH_ENDPOINT =
  "https://nuod0t2zoe.execute-api.us-east-2.amazonaws.com/FT-Classroom/spotify-auth-token";
const TOKEN_KEY = "whos-who-access-token";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(public configService: ConfigService) {}

  genres: String[] = ["House", "Alternative", "J-Rock", "R&B"];
  selectedGenre: String = "";
  authLoading: boolean = false;
  configLoading: boolean = false;
  token: String = "";
  previewUrl: any;
  gameStarted: boolean = false;

  ngOnInit(): void {
    this.authLoading = true;
    const storedTokenString = localStorage.getItem(TOKEN_KEY);
    if (storedTokenString) {
      const storedToken = JSON.parse(storedTokenString);
      if (storedToken.expiration > Date.now()) {
        console.log("Token found in localstorage");
        this.authLoading = false;
        this.token = storedToken.value;
        this.loadGenres(storedToken.value);
        return;
      }
    }
    console.log("Sending request to AWS endpoint");
    request(AUTH_ENDPOINT).then(({ access_token, expires_in }) => {
      const newToken = {
        value: access_token,
        expiration: Date.now() + (expires_in - 20) * 1000,
      };
      localStorage.setItem(TOKEN_KEY, JSON.stringify(newToken));
      this.authLoading = false;
      this.token = newToken.value;
      this.loadGenres(newToken.value);
    });
  }

  loadGenres = async (t: any) => {
    this.configLoading = true;

    // #################################################################################
    // DEPRECATED!!! Use only for example purposes
    // DO NOT USE the recommendations endpoint in your application
    // Has been known to cause 429 errors
    // const response = await fetchFromSpotify({
    //   token: t,
    //   endpoint: "recommendations/available-genre-seeds",
    // });
    // console.log(response);
    // #################################################################################
    
    this.genres = [
      "rock",
      "rap",
      "pop",
      "country",
      "hip-hop",
      "jazz",
      "alternative",
      "j-pop",
      "k-pop",
      "emo"
    ]
    this.configLoading = false;
  };

  items: string[] = []
  

  setGenre(selectedGenre: any) {
    this.selectedGenre = selectedGenre;
    console.log(this.selectedGenre);
    console.log(TOKEN_KEY);
  }

  onSubmit = async () => {
    this.items = []
    this.gameStarted = true;
    const response = await fetchFromSpotify({
      token: this.token,
      endpoint: "search",
      params: {
        q: `genre:${this.selectedGenre}`, 
        type: 'track',
        limit: 50,
        market: 'US' 
      }
    });
    console.log(response)

    let randomInt = Math.floor(Math.random() * response.tracks.limit);
    console.log(randomInt)
    let track = response.tracks.items[randomInt];

    while(this.items.length < 3){
      randomInt = Math.floor(Math.random() * response.tracks.limit);
      let trackName = response.tracks.items[randomInt].name;
      let artistName = response.tracks.items[randomInt].artists[0].name;
      this.items.push(`${artistName} - ${trackName}`);
    }

    if (track) {
      this.previewUrl = track.preview_url;
      while(this.previewUrl == "" || this.previewUrl == null){
        track = response.tracks.items[randomInt + 1]
        this.previewUrl = track.preview_url;
      }
      console.log(track.artists[0].name + " - " + track.name)
      this.items.push(`${track.artists[0].name} - ${track.name}`)
    } else {
      console.log("No tracks found");
    }
    this.items.sort(() => Math.random() - 0.5);

  }

}
