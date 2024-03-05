class game{
    constructor(player1 = new player('cpu_0'), player2 = new player ('cpu_1')){
        this.player1 = player1,
        this.player2 = player2,
        this.classicMoves = ['rock','paper','scissors'];
        this.enhancedMoves = ['ghost', 'lawsuit', 'cursed_dagger', 'stuffed_bear', 'positive_outlook']
    };

    newPlayerRound(moveSet, playerMove){    
        let result = ''
        gameBoard[0] = this.player1.takeTurn(playerMove);
        gameBoard[1] = this.player2.randomMove(moveSet);
        let winner = this.determineWinner(gameBoard[0], gameBoard[1], moveSet);
        (winner)
        if (winner === gameBoard[0]){
            this.player1.wins ++        
            result = "Player Wins!"
            this.player1.saveWinsToStorage()
        } else if (winner === gameBoard[1]){
            this.player1.losses ++
            result =  "Computer Wins!"
            this.player1.saveWinsToStorage()
        } else {
            result = "Draw!"
        };   
        return result;
    };
    
    determineWinner(moveSet){        
        if (!this.isDraw(gameBoard[0],gameBoard[1])){
            if (moveSet === this.classicMoves){
                if(gameBoard[0] === 'paper'){
                    if (gameBoard[1] === 'rock'){
                        return gameBoard[0] 
                    };             
                } else if(gameBoard[0] === 'scissors') {
                    if (gameBoard[1] === 'paper'){
                        return gameBoard[0]
                    };
                } else {
                    if (gameBoard[1] === 'scissors'){
                        return gameBoard[0]
                    };
                }
                return gameBoard[1]; 
        }
            else if (gameBoard[0] === 'ghost'){
                if (gameBoard[1] === 'stuffed_bear' || gameBoard[1] === 'lawsuit'){
                    return gameBoard[0]
                };
            } else if (gameBoard[0] === 'lawsuit'){
                if (gameBoard[1] === 'positive_outlook' || gameBoard[1] === 'cursed_dagger'){
                    return gameBoard[0]
                };
            } else if (gameBoard[0] === 'cursed_dagger'){
                if (gameBoard[1] === 'ghost' || gameBoard[1] === 'stuffed_bear'){
                    return gameBoard[0]
                };
            } else if (gameBoard[0] === 'stuffed_bear'){
                if (gameBoard[1] === 'lawsuit' || gameBoard[1] === 'positive_outlook'){
                    return gameBoard[0]
                };    
            } else {
                if (gameBoard[1] === 'ghost' || gameBoard[1] === 'cursed_dagger'){
                    return gameBoard[0]
                };
            };
            return gameBoard[1]
        
        };
    };
    
    isDraw(){
        if(gameBoard[0] === gameBoard[1]){
            return true
        } else {
            return false
        }
    }

}
const gameBoard = [];