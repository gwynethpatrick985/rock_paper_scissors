class player{
    constructor (name, token = 'bot', wins = 0){
    this.name,
    this.token,
    this.wins;
}
randomMove(moveSet){
    let randInt =  Math.floor(Math.random() * moveSet.length);
    let move = moveSet[randInt];
    console.log(move, 'player scope')
    return this.takeTurn(move);

};
takeTurn(move){
    return move
}
};

// function saveWinsToStorage(){

// };

// function retrieveWinsFromStorage(){

// }

