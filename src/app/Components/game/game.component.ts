import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Howl, Howler} from 'howler';


@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})

export class GameComponent implements OnChanges {

    @Input() previewUrl: string = '';
    song: Howl | undefined;
    gameOver: boolean = false;
    @Input() items:string [] = []
    points: number = 0
    @Input() sub: any

    constructor() {}

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

    check(event: any): void {
        let answer = event.target.innerHTML;
        if(answer ===this.items[3]) {
            console.log('correct');
            this.points += 500
        }
        else {
            console.log('wrong')
        }
        this.sub()
    }

    endGame() {
        this.gameOver = true;
    }
}

