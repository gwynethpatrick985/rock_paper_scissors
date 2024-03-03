class player{
    constructor (name, token = 'bot', wins = 0){
    this.name = name,
    this.token = token,
    this.wins = wins;
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
    console.log(toStoreWins)
    localStorage.setItem('savedWins', toStoreWins)
};

};
function retrieveWinsFromStorage(){
    return localStorage.getItem('savedWins')
};
// function saveWinsToStorage(){

// };

// function retrieveWinsFromStorage(){

// }

