async function newGame(){
    return {message: "game started"};
}

async function doMove(playerId,placeId){
    return {message: "move done"};
}

module.exports = {
    newGame,
    doMove
};