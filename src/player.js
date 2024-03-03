class player{
    constructor (name, token = 'bot', wins = 0, loses = 0){
    this.name = name,
    this.token = token,
    this.wins = wins,
    this.loses = loses;
}
randomMove(moveSet){
    let randInt =  Math.floor(Math.random() * moveSet.length);
    let move = moveSet[randInt];
    return this.takeTurn(move);

};
takeTurn(move){
    return move
}
saveWinsToStorage(){
    let toStoreWins = this.wins 
    localStorage.setItem('savedWins', toStoreWins)
};

};
function retrieveWinsFromStorage(){
    return localStorage.getItem('savedWins')
};
