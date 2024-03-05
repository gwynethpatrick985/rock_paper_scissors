
//Global Variables.
const classicButton = document.querySelector('.classic-mode');
const enhancedButton = document.querySelector('.enhanced-edition');
const resultsElement = document.querySelector('.results');
const options = document.querySelector('.options')
const classicOptions = document.querySelector('.classic-choice-field');
const enhancedOptions = document.querySelector('.difficult-choice-field')
const playerAsideScore = document.querySelector('.player-stats')
const cpuAsideScore = document.querySelector('.cpu-score')
const gameBoardElement = document.querySelector('.choices')
const globalTimer = {
    setup(){
        this.timeout = setTimeout(() => {
            menuReset()
        
        }, 10000);
    },
    clear(){
        clearTimeout(this.timeout)
    }
};
//Graphics variables
const ghostImg = '<img alt="ghost" src = "./assets/ghost.png">';
const bearImg = '<img alt="bear" src = "./assets/bear.png">';
const lawsuitImg = '<img alt="lawsuit" src = "./assets/lawsuit.png">';
const positiveImg = '<img alt="positive-attitude" src = "./assets/positive attitude.png">';
const cursedImg = '<img alt="poison-dagger" src = "./assets/curse dagger.png">';
const scissorImg = '<img alt="scissors" src = "./assets/scissor.png">';
const rockImg = '<img alt="rock" src = "./assets/rock.png">';
const paperImg = '<img alt="paper" src = "./assets/paper.png">';

//Event Listeners
document.addEventListener('DOMContentLoaded', function(){
    renderScore();

});

classicButton.addEventListener('click', function(){
    classicGame();
});

enhancedButton.addEventListener('click', function(){
    enhancedGame();
});

options.addEventListener('click', function(event){
    let element =event.target;
    if (element.classList.contains('classic-rematch')){
        hideElement(gameBoardElement)
        globalTimer.clear();
        classicGame();
    } else if (element.classList.contains('change-mode')){
        globalTimer.clear();
        menuReset();
    } else if (element.classList.contains('reset-score')){
        localStorage.clear()
        renderScore()
    } else if(element.classList.contains('enhanced-rematch')) {
        hideElement(gameBoardElement)
        globalTimer.clear()
        enhancedGame()

    }
});

classicOptions.addEventListener('click', function(event){
    let element = event.target;
    let result = '';
    hideElement(classicOptions);
    if (element.classList.contains('rock-button')){
        result = playerGame('classicMoves', 'rock');
    } else if (element.classList.contains('paper-button')){
        result = playerGame('classicMoves', 'paper');
    } else {
        result = playerGame('classicMoves', 'scissors');
    };
    classicResultsScreen(result);
});

enhancedOptions.addEventListener('click', function(event){
    let element = event.target;
    let result = '';
    let moveSet = 'enhancedMoves'
    hideElement(enhancedOptions);
    if (element.classList.contains('ghost-button')){
        result = playerGame(moveSet,'ghost')
    } else if (element.classList.contains('lawsuit-button')){
        result = playerGame(moveSet, 'lawsuit')
    } else if (element.classList.contains('cursed-button')){
        result = playerGame(moveSet, 'cursed_dagger')
    } else if (element.classList.contains('positive-button')){
        result = playerGame(moveSet, 'positive_outlook')
    } else {
        result = playerGame(moveSet, 'stuffed_bear')
    };
    enhancedrResultsScreen(result);
});

//Rendering Functions
function renderBoard(){
    let toRender = '';
    gameBoard.forEach(element => {
        toRender+=' '
        if (element.includes('rock')){
            toRender+=rockImg
        } else if (element.includes('paper')){
            toRender+=paperImg
        } else if (element.includes('scissor')){
            toRender+=scissorImg
        } else if (element.includes('ghost')){
            toRender+=ghostImg
        } else if(element.includes('lawsuit')) {
            toRender+=lawsuitImg
        } else if(element.includes('cursed_dagger')) {
            toRender+=cursedImg
        } else if(element.includes('stuffed_bear')) {
            toRender+=bearImg
        } else {
            toRender+=positiveImg
        };
    });
    gameBoardElement.innerHTML = toRender
};

function renderScore(){
    user = loadUser();
    playerAsideScore.innerText = 'Score:'+user.wins;
    cpuAsideScore.innerHTML = 'Score:'+user.losses;
};

//Screen Update Functions.
function showElement(element){
    element.classList.remove('-hidden');
};

function hideElement(element){
    element.classList.add('-hidden')
};

function classicResultsScreen(result){
    showElement(gameBoardElement);
    showElement(resultsElement);
    showElement(options.children[1]);
    resultsElement.innerText = result;
    renderScore();
    renderBoard();
    globalTimer.setup();
}

function enhancedrResultsScreen(result){
    showElement(gameBoardElement);
    showElement(resultsElement);
    showElement(options.children[2]);
    resultsElement.innerText = result;
    renderScore();
    renderBoard();
    globalTimer.setup();
};

function menuReset(){
    showElement(classicButton);
    showElement(enhancedButton);
    showElement(options.children[3]);
    hideElement(classicOptions);
    hideElement(resultsElement);
    hideElement(options.children[0]);
    hideElement(options.children[1]);
    hideElement(options.children[2]);
    hideElement(gameBoardElement);
    hideElement(enhancedOptions);
};

function classicGame(){  
    showElement(options.children[0]);
    showElement(classicOptions);
    hideElement(classicButton);
    hideElement(enhancedButton);
    hideElement(resultsElement);
    hideElement(options.children[3]);
}
function enhancedGame(){
    showElement(options.children[0]);
    showElement(enhancedOptions);
    hideElement(classicButton);
    hideElement(resultsElement);
    hideElement(enhancedButton);
    hideElement(options.children[3]);
};

//Other functions
function playerGame (moveSet = 'classicMoves', playerMove = 'paper'){
    let user = loadUser()
    let playerGame = new game(user);
    return playerGame.newPlayerRound(playerGame[moveSet], playerMove);
};

function loadUser(){
    
        let localWins = retrieveWinsFromStorage();
        let localLosses = retrieveLossesFromStorage();
        if (localWins === null || localLosses === null){
            let user = new player('Human','none');
            return user
        } else {
            let user = new player('Human','☻',localWins,localLosses);
            user.saveWinsToStorage()
            return user
        }
};