const historyService = require('./../services/history');

async function list(req,res,next){
    res.json(await historyService.list());
}

async function replay(req,res,next){
    res.json(await historyService.replay(req.param('gameId')));
}


module.exports = {
    list,
    replay
};