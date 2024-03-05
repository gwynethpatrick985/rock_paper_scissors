class player{
    constructor (name, token = '☺', wins = 0, losses = 0){
    this.name = name,
    this.token = token,
    this.wins = wins,
    this.losses = losses;
};
randomMove(moveSet){
    let randInt =  Math.floor(Math.random() * moveSet.length);
    let move = moveSet[randInt];
    return this.takeTurn(move);

};

takeTurn(move){
    return move
};

saveWinsToStorage(){
    let toStoreWins = this.wins 
    let toStoreLosses = this.losses
    localStorage.setItem('savedWins', toStoreWins)
    localStorage.setItem('savedLosses', toStoreLosses)
};

};
function retrieveWinsFromStorage(){
    return localStorage.getItem('savedWins');
};
function retrieveLossesFromStorage(){
    return localStorage.getItem('savedLosses');
};