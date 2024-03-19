import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.component.html',
    styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

    leaders = [
        {
            name: 'John',
            score: 520
        },
        {
            name: 'Doe',
            score: 980
        }, {
            name: 'Sally',
            score: 2500
        }
    ].sort((a, b) => {
        const player1Score = a.score
        const player2Score = b.score
        if (player1Score > player2Score)
            return -1
        else if (player1Score < player2Score)
            return 1
        else
            return 0
    })

    constructor() {
    }

    ngOnInit(): void {
    }


}
