class game{
    constructor(player1 = new player('cpu_0'), player2 = new player ('cpu_1')){
        this.player1 = player1,
        this.player2 = player2,
        this.classicMoves = ['rock','paper','scissors'];
      
    };
    newCPURound(moveSet){
       let result = ''
       let move1 = this.player1.randomMove(moveSet);
       let move2 = this.player2.randomMove(moveSet);
       let winner = this.determineWinner(move1,move2)
       if (winner === move1){
            this.player1.wins ++
            result = "Player 1 Wins!"
       } else if (winner === move2){
            this.player2.wins ++
            result =  "Player 2 Wins!"
       } else {
            result = "Draw!"
       };
       return result;
    };
    newPlayerRound(moveSet, playerMove){
        
        let result = ''
        let move1 = this.player1.takeTurn(playerMove);
        let move2 = this.player2.randomMove(moveSet);
        let winner = this.determineWinner(move1, move2);
        
        if (winner === move1){
            this.player1.wins ++
          
            result = "Player 1 Wins!"
 
            this.player1.saveWinsToStorage()
        } else if (winner === move2){
            this.player1.loses ++
            result =  "Player 2 Wins!"
        } else {
            result = "Draw!"
        };
    
        return result;
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
            return move2;
        }
    };
    
    isDraw(move1, move2){
        if(move1 === move2){
            return true
        } else {
            return false
        }
    }

}