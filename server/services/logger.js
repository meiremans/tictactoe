let winston = require('winston');
winston.level = 'debug';

let transports = [
    new (winston.transports.Console)(),
    new (winston.transports.File)({filename: 'tictactoe-server.log'}),
];

let logger = new (winston.Logger)({
    exitOnError: false,
    transports
});

logger.saveRequest = (req, res) => {
    const log = {
        type: 'request',
        request: {
            method: req.method,
            url: req.url,
            dateTimeRequested: req.start
        },
        response: {
            status: res.content.status
        },
        duration: Date.now() - req.start
    };
    logger.log('info', `${req.method} ${req.url}`, log);
};

module.exports = logger;
