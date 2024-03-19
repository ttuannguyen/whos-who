import {Component, OnInit} from '@angular/core';
import {Howl, Howler} from 'howler';




@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    constructor() {
    }

    song = new Howl({
        src: ['https://p.scdn.co/mp3-preview/15e1178c9eb7f626ac1112ad8f56eccbec2cd6e5?cid=85b2344ba4a14b1fafeb1aa2a6cbad04'],
        html5: true,
    })

    ngOnInit(): void {

    }

    play() {
        this.song.play();
    }

    pause() {
        this.song.pause();
    }
}
