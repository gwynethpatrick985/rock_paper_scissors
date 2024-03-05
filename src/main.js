
//Global Variables.
let classicButton = document.querySelector('.classic-mode');
let enhancedButton = document.querySelector('.enhanced-edition');
let resultsElement = document.querySelector('.results');
let options = document.querySelector('.options')
let classicOptions = document.querySelector('.classic-choice-field');
const enhancedOptions = document.querySelector('.difficult-choice-field')
let playerAsideScore = document.querySelector('.player-stats')
let cpuAsideScore = document.querySelector('.cpu-score')
let gameBoardElement = document.querySelector('.choices')
const globalTimer = {
    setup(){
        this.timeout = setTimeout(() => {
            menuReset()
        
        }, 5000);
    },
    clear(){
        clearTimeout(this.timeout)
    }
}
const gameBoard = []

//Graphics variables
const ghostImg = '<img alt="ghost" src = "./assets/bear.png">';
const bearImg = '<img alt="bear" src = "./assets/bear.png">';
const officeImg = '<img alt="office" src = "./assets/job.png">';
const happyImg = '<img alt="positive-attitude" src = "./assets/positive attitude.png">';
const poisonImg = '<img alt="poison-dagger" src = "./assets/curse dagger.png">';
const scissorImg = '<img alt="scissors" src = "./assets/scissor.png">';
const rockImg = '<img alt="rock" src = "./assets/rock.png">';
const paperImg = '<img alt="paper" src = "./assets/paper.png">';

//Event Listeners
document.addEventListener('DOMContentLoaded', function(){
    renderScore()

});
classicButton.addEventListener('click', function(){
    classicGame()
});
enhancedButton.addEventListener('click', function(){
    enhancedGame()
})
options.addEventListener('click', function(event){
    let element =event.target;
    if (element.classList.contains('classic-rematch')){
        hideElement(gameBoardElement)
        globalTimer.clear();
        classicGame();
    } else if (element.classList.contains('change-mode')){
        globalTimer.clear();
        menuReset();
    };
});
classicOptions.addEventListener('click', function(event){
    let element = event.target;
    let result = ''
    hideElement(classicOptions)
    if (element.classList.contains('rock-button')){
        gameBoard[0]= 'rock'
        result = playerGame('classicMoves', 'rock');
    } else if (element.classList.contains('paper-button')){
        gameBoard[0]= 'paper'
        result = playerGame('classicMoves', 'paper');
    } else {
        gameBoard[0]= 'scissors'
        result = playerGame('classicMoves', 'scissors');
    };
    classicResultsScreen(result)
});
enhancedOptions.addEventListener('click', function(event){
    let element = event.target;
    let result = '';
    let moveSet = 'enhancedMoves'
    hideElement(enhancedOptions);
    if (element.classList.contains('ghost-button')){
        gameBoard[0]= 'ghost'
        result = playerGame(moveSet,'ghost')
    } else if (element.classList.contains('lawsuit')){
        gameBoard[0] = 'lawisuit'
        result = playerGame(moveSet, 'lawsuit')
    } else if (element.classList.contains('cursed-button')){
        gameBoard[0] = 'cursed_dagger'
        result = playerGame(moveSet, 'cursed_dagger')
    } else if (element.classList.contains('positive-outlook')){
        gameBoard[0] = 'positive_outlook'
        result = playerGame(moveSet, 'positive_outlook')
    } else {
        gameBoard[0] = 'stuffed_bear'
        result = playerGame(moveSet, 'stuffed_bear')
    }

});
function renderBoard(){
    let toRender = ''
    gameBoard.forEach(element => {
        toRender+=' '
        if (element.includes('rock')){
            toRender+=rockImg
        } else if (element.includes('paper')){
            toRender+=paperImg
        } else {
            toRender+=scissorImg
        };
    });
    gameBoardElement.innerHTML = toRender
}
function classicResultsScreen(result){
    showElement(gameBoardElement)
    showElement(resultsElement)
    showElement(options.children[1])
    resultsElement.innerText = result
    renderScore()
    renderBoard()
    globalTimer.setup()
}

function renderScore(){
    user = loadUser();
    playerAsideScore.innerText = 'Score:'+user.wins;
    cpuAsideScore.innerHTML = 'Score:'+user.losses;



}
function classicGame(){
    
    showElement(options.children[0])
    showElement(classicOptions);
    hideElement(classicButton);
    hideElement(enhancedButton);
    hideElement(resultsElement);
   
}
function enhancedGame(){
    showElement(options.children[0])
    showElement(enhancedOptions)
    hideElement(classicButton)
    hideElement(resultsElement)
    hideElement(enhancedButton)
};

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
            let user = new player('Human','none',localWins,localLosses);
            user.saveWinsToStorage()
            return user
        }
};

function showElement(element){
    element.classList.remove('-hidden');
};
function hideElement(element){
    element.classList.add('-hidden')
};

function menuReset(){
    
    showElement(classicButton)
    showElement(enhancedButton)
    hideElement(classicOptions)
    hideElement(resultsElement)
    hideElement(options.children[0])
    hideElement(options.children[1])
    hideElement(options.children[2])
    hideElement(gameBoardElement)
    hideElement(enhancedOptions)
};





// cpuButton.addEventListener('click', function(event){
//     let result = CPUGame();
//     resultsElement.innerText = result
//     showElement(resultsElement)
//     setTimeout(() =>{menuReset()}, 8000)
// });

//Functions
// function CPUGame(moveSet = 'classicMoves'){
//     let CPUGame = new game()
//     return CPUGame.newCPURound(CPUGame[moveSet])
    
// };
