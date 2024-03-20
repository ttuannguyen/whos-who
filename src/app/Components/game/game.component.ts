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
}

