class game{
    constructor(player1 = new player('cpu_0'), player2 = new player ('cpu_1')){
        this.player1 = player1,
        this.player2 = player2,
        this.classicMoves = ['rock','paper','scissors'],
        console.log(this.player1, 'game scope');
    };
    newCPURound(moveSet){
        console.log(this.player1, 'new cpu round');
       let move1 = this.player1.randomMove(moveSet);
       console.log(move1, 'game scope');
       let move2 = this.player2.randomMove(moveSet);
       console.log(move2, 'game scope');
       let winner = this.determineWinner(move1,move2)
       console.log(winner, 'winner')
    };
    determineWinner(move1, move2){
        if (!this.isDraw(move1,move2)){
            if(move1 === 'paper'){
                if (move2 === 'rock'){
                    return move1 
                };             
            } else if(move1 === 'scissors') {
                if (move2 === 'paper'){
                    return move1
                };
            } else {
                if (move2 === 'scissors'){
                    return move1
                };
            }
            return move2
  
        } else {
            return 'is draw'
        };
    };
    isDraw(move1, move2){
        if(move1 === move2){
            return true
        } else {
            return false
        }
    }

}