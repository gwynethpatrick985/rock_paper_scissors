let playerButton = document.querySelector('.player-game');
let cpuButton = document.querySelector('.cpu-game');
let resultsElement = document.querySelector('results');
let playerOptions = document.querySelector('.player-choice-field')


playerOptions.addEventListener('click', function(event){
    let element = event.target;
    let result = ''
    if (element.classList.contains('rock-button')){
        result = playerGame('classicMoves', 'rock');
    } else if (element.classList.contains('paper-button')){
        result = playerGame('classicMoves', 'paper');
    } else {
        result = playerGame('classicMoves', 'scissors');
    };
    resultsElement.innerText = result
});
// playerButton.addEventListener('click', function(event){

// });

cpuButton.addEventListener('click', function(event){
    let result = CPUGame();
    resultsElement.innerText = result
});
function CPUGame(moveSet = 'classicMoves'){
    let CPUGame = new game()
    return CPUGame.newCPURound(CPUGame[moveSet])
    
};

function playerGame (moveSet = 'classicMoves', playerMove = 'paper'){
    let playerGame = new game();
    return playerGame.newPlayerRound(playerGame[moveSet], playerMove);
};