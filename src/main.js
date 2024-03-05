
//Global Variables.
let playerButton = document.querySelector('.classic-mode');
let enhancedButton = document.querySelector('.enhanced-edition');
let resultsElement = document.querySelector('.results');
let options = document.querySelector('.options')
let classicOptions = document.querySelector('.classic-choice-field');
let playerAsideScore = document.querySelector('.player-stats')
let cpuAsideScore = document.querySelector('.cpu-score')
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
const gameBoard = {
    playerMove : '',
    cpuMove : '',
};

//Graphics variables
let ghostImg = '<img alt="ghost" src = "./assets/bear.png">';
let bearImg = '<img alt="bear" src = "./assets/bear.png">';
let officeImg = '<img alt="office" src = "./assets/job.png">';
let happyImg = '<img alt="positive-attitude" src = "./assets/positive attitude.png">';
let poisonImg = '<img alt="poison-dagger" src = "./assets/curse dagger.png">';
let scissorImg = '<img alt="scissors" src = "./assets/scissor">';
let rockImg = '<img alt="rock" src = "./assets/curse rock.png">';
let paperImg = '<img alt="paper" src = "./assets/curse paper.png">';

//Event Listeners
document.addEventListener('DOMContentLoaded', function(){
    let user=loadUser()
    console.log(user.wins)
    user.saveWinsToStorage()
    renderScore()

});
playerButton.addEventListener('click', function(){
    classicGame()
});
options.addEventListener('click', function(event){
    let element =event.target;
    if (element.classList.contains('classic-rematch')){
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
        result = playerGame('classicMoves', 'rock');
    } else if (element.classList.contains('paper-button')){
        result = playerGame('classicMoves', 'paper');
    } else {
        result = playerGame('classicMoves', 'scissors');
    };
    classicResultsScreen(result)
});

function classicResultsScreen(result){
    showElement(resultsElement)
    showElement(options.children[1])
    resultsElement.innerText = result
    renderScore()
}

function renderScore(){
    user = loadUser();
    playerAsideScore.innerText = 'Score:'+user.wins;
    cpuAsideScore.innerHTML = 'Score:'+user.losses;



}
function classicGame(){
    globalTimer.setup()
    showElement(options.children[0])
    showElement(classicOptions);
    hideElement(playerButton);
    hideElement(enhancedButton);
    hideElement(resultsElement) 
}

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
            return user
        }
};

function menuReset(){
    showElement(playerButton)
    showElement(enhancedButton)
    hideElement(classicOptions)
    hideElement(resultsElement)
    hideElement(options.children[0])
    hideElement(options.children[1])
    hideElement(options.children[2])
};

function showElement(element){
    element.classList.remove('-hidden');
};
function hideElement(element){
    element.classList.add('-hidden')
};