const History = require('./../models/history');
const logger = require('./../services/logger');

async function list(){
    try {
        return await History.find({});
    }catch(e){
        logger.error(e);
    }

}

function replay(gameId){
    return { message: 'Replay Game' };
}


module.exports = {
    list,
    replay
};