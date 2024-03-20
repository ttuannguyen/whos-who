import {Component, Input, OnInit} from '@angular/core';
import {ConfigService} from "../../config.service";


interface Player {
    name: string;
    score: number;
}

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.component.html',
    styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

    leaders: Player[] = []
    @Input() playerName: string = ''
    @Input() playerScore: number = 0

    constructor(private configService: ConfigService) {
    }

    ngOnInit(): void {
        this.leaders = JSON.parse(localStorage.getItem(this.configService.mode + "Leaderboard" ) || '[]')
        this.leaders.push({name: this.playerName, score: this.playerScore})
        this.sortLeaderboard(this.leaders)
        this.saveLeaderboard(this.leaders, this.configService.mode)
    }


    sortLeaderboard(players: Player[]) {
        return players.sort((playerOne, playerTwo) => {
            const player1Score = playerOne.score
            const player2Score = playerTwo.score
            if (player1Score > player2Score)
                return -1
            else if (player1Score < player2Score)
                return 1
            else
                return 0
        })
    }

    saveLeaderboard(leaderboard:Player[], mode:string) {
        localStorage.setItem(mode + "Leaderboard", JSON.stringify(leaderboard))
    }


}
