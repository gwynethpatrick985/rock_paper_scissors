class game{
    constructor(player1 = new player('cpu_0'), player2 = new player ('cpu_1')){
        this.player1 = player1,
        this.player2 = player2,
        this.classicMoves = ['rock','paper','scissors'],
        console.log(this.player1, 'game scope')
    };
    newCPURound(moveSet){
        console.log(this.player1, 'new cpu round')
       let move1 = this.player1.randomMove(moveSet)
       console.log(move1, 'game scope')
       let move2 = this.player2.randomMove(moveSet)
       console.log(move2, 'game scope')
    }

}