let playerButton = document.querySelector('.player-game')
console.log(playerButton)
let cpuButton = document.querySelector('.cpu-game')
let resultsHTML = document.querySelector('results')
playerButton.addEventListener('click', function(event){
    playerGame();
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