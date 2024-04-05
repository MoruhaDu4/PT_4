class FootballTeam {
    constructor(name, coach, homeStadium, formation, league, points, matchesPlayed, wins) {
        this.name = name;
        this.coach = coach;
        this.homeStadium = homeStadium;
        this.formation = formation;
        this.league = league;
        this.points = points;
        this.matchesPlayed = matchesPlayed;
        this.wins = wins;
    }

    winPercentage() {
        return (this.wins / this.matchesPlayed) * 100;
    }
}

let team1 = new FootballTeam("Dynamo Kyiv", "Mircea Lucescu", "NSC Olimpiyskiy", "4-3-3", "Ukrainian Premier League", 75, 30, 22);

console.log(`Team1:\n Name: ${team1.name}\n Coach: ${team1.coach}\n Home stadium: ${team1.homeStadium}\n Formation: ${team1.formation}\n League: ${team1.league}\n Points: ${team1.points}`)

console.log(`\n Win rate: ${Math.round(team1.winPercentage())}%`)