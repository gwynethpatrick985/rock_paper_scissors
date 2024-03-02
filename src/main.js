var playerButton = document.querySelector('.player-game')
console.log(playerButton)
let cpuButton = document.querySelector('.cpu-game')
playerButton.addEventListener('click', function(event){
    playerGame();
});
cpuButton.addEventListener('click', function(event){
    CPUGame();
});
function CPUGame(moveSet = 'classicMoves'){
    let CPUGame = new game()
    let result = CPUGame.newCPURound(CPUGame[moveSet])
    console.log(result)
};

function playerGame (moveSet = 'classicMoves', playerMove = 'paper'){
    let playerGame = new game();
    playerGame.newPlayerRound(playerGame[moveSet], playerMove);
};