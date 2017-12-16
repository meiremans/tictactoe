const Field = require('../classes/Field');
const History = require('../models/history');
const HUMAN_PLAYER = require('./../config/constants').HUMAN_PLAYER;
const AI_PLAYER = require('./../config/constants').AI_PLAYER;
const logger = require('./../services/logger');



async function newGame() {
    let history = new History({
        startDate: new Date(),
        turns: []
    });
    const newHistory = await history.save();
    const newGame = {
        gameId: newHistory._id
    };
    return {newGame};
}

async function doMove(gameId, fieldId) {
    let history = await History.findById(gameId);
    history.turns.push({fieldId:fieldId, player:HUMAN_PLAYER});//push player turn

    let field = new Field(history.turns);
    let winner = field.isGameOver();
    if(winner.winner){
        return winner;
    }
    const aiMove = calculateAIMove(field.field);
    history.turns.push({fieldId:aiMove, player :AI_PLAYER});
    field.addTurn(aiMove,AI_PLAYER);
    winner = field.isGameOver();
    if(winner.winner){
        return winner;
    }
    //mark turns as modified so mongoose will update it
    history.markModified('turns');
    console.log(history);
    try {
        history.save();
    }
    catch (err){
        logger.error(err);
    }
    return {winner: false,nextMove : aiMove};
}

function calculateAIMove(field) {
    for (let i = 0; i < field.length; i++) {
        if (!field[i].player) {
            return field[i].fieldId;
        }
    }
}


const _private = {
    calculateAIMove,

};

module.exports = {
    newGame,
    doMove,
    _private
};