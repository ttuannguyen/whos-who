import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Howl, Howler} from 'howler';
import {ConfigService} from "../../config.service";


@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})

export class GameComponent implements OnChanges {

    @Input() previewUrl: string = '';
    song: Howl | undefined;
    gameOver: boolean = false;
    @Input() items: string [] = []
    points: number = 0
    @Input() sub: any
    wrongGuesses = 0


    constructor(private configService: ConfigService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['previewUrl'] && this.previewUrl) {
            console.log(this.previewUrl);
            this.loadAudio();
        }
    }

    loadAudio(): void {
        if (this.previewUrl) {
            this.song = new Howl({
                src: [this.previewUrl],
                html5: true,
            });
        }
    }

    play(): void {
        if (this.song) {
            this.song.play();
        }

    }

    pause(): void {
        if (this.song) {
            this.song.pause();
        }
    }

    stopSong() {
        if (this.song) {
            this.song.stop();
        }
    }

    check(event: any): void {
        this.stopSong();
        let answer = event.target.innerHTML;
        if (answer === this.items[3]) {
            this.points += 500
        } else {
            this.wrongGuesses++;
            if (this.configService.mode === 'hard' && this.wrongGuesses === 3) {
                this.endGame()
            }
        }
        this.sub()
    }

    endGame() {
        this.stopSong();
        this.gameOver = true;
    }
}

