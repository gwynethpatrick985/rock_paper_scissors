let playerButton = document.querySelector('.player-game');
let cpuButton = document.querySelector('.cpu-game');
let resultsHTML = document.querySelector('results');
let playerOptions = document.querySelector('.player-choice-field')
let rockButton = document.querySelector('.rock-button');
let paperButton = document.querySelector('.paper-button');
let scissorsButton = document.querySelector('.scissors-button');

playerOptions.addEventListener('click', function(){
    
    var element = event.target;
    console.log(element);
    if (element.classList.contains('rock-button')){
        playerGame('classicMoves', 'rock')
    }
})
playerButton.addEventListener('click', function(event){
    // let result = playerGame();
    // resultsHTML.innerText = result
});

cpuButton.addEventListener('click', function(event){
    let result = CPUGame();
    resultsHTML.innerText = result
});
function CPUGame(moveSet = 'classicMoves'){
    let CPUGame = new game()
    return CPUGame.newCPURound(CPUGame[moveSet])
    
};

function playerGame (moveSet = 'classicMoves', playerMove = 'paper'){
    let playerGame = new game();
    playerGame.newPlayerRound(playerGame[moveSet], playerMove);
};