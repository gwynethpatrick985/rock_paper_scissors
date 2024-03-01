class game{
    constructor(player1 = new player('cpu_0'), player2 = new player ('cpu_1')){
        this.player1 = player1,
        this.player2 = player2
        this.classicMoves = ['rock','paper','scissors']

    };
    newCPURound(moveSet){
        // if ((this.player1.includes('cpu'))&&(this.player2.includes('cpu'))){

        // }
       let move1 = this.player1.randomMove(moveSet)
       console.log(move1)
       let move2 = this.player2.randomMove(moveSet)
       console.log(move2)
    }

}