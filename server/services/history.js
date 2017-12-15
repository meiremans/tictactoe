async function list(){
    return { message: 'List of games' };
}

function replay(gameId){
    return { message: 'Replay Game' };
}


module.exports = {
    list,
    replay
};