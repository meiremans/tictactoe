const gameService = require('../services/game');

async function newGame(req,res,next){
     res.json(await gameService.newGame());
}

async function doMove(req,res,next){
   res.json(await gameService.doMove(req.body.playerId,req.body.placeId));
}

module.exports = {
    newGame,
    doMove
};