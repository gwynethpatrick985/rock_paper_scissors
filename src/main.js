
//Global Variables.
let playerButton = document.querySelector('.player-game');
let cpuButton = document.querySelector('.cpu-game');
let resultsElement = document.querySelector('results');
let playerOptions = document.querySelector('.player-choice-field')

//Event Listeners
playerOptions.addEventListener('click', function(event){
    let element = event.target;
    let result = ''
    hideElement(playerOptions)
    if (element.classList.contains('rock-button')){
        result = playerGame('classicMoves', 'rock');
    } else if (element.classList.contains('paper-button')){
        result = playerGame('classicMoves', 'paper');
    } else {
        result = playerGame('classicMoves', 'scissors');
    };
    showElement(resultsElement)
    resultsElement.innerText = result
    setTimeout(() =>{menuReset()}, 8000)
});
playerButton.addEventListener('click', function(event){
    showElement(playerOptions);
    hideElement(playerButton);
    hideElement(cpuButton);
});

cpuButton.addEventListener('click', function(event){
    let result = CPUGame();
    resultsElement.innerText = result
    showElement(resultsElement)
    setTimeout(() =>{menuReset()}, 8000)
});

//Functions
function CPUGame(moveSet = 'classicMoves'){
    let CPUGame = new game()
    return CPUGame.newCPURound(CPUGame[moveSet])
    
};

function playerGame (moveSet = 'classicMoves', playerMove = 'paper'){
    let user = loadUser()
    let playerGame = new game(user);
    return playerGame.newPlayerRound(playerGame[moveSet], playerMove);
};

function loadUser(){
    try{
        let localWins = retrieveWinsFromStorage();
        let user = new player('Human','none',localWins);
        return user
    } catch {
         let user = new player('Human','none');
         return user
    };

};

function menuReset(){
    showElement(playerButton)
    showElement(cpuButton)
    hideElement(playerOptions)
    hideElement(resultsElement)
};

function showElement(element){
    element.classList.remove('-hidden');
};
function hideElement(element){
    element.classList.add('-hidden')
};