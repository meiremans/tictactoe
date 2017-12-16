const tokenService = require('../services/token');

function validateRequest(req, res, next) {
    tokenService.validateToken(req)
        .then(next)
        .catch((err) => {
            console.log(err);
            res.status(err.status).json({ error: err.content });
            res.end();

        });
}

module.exports = {
    validateRequest
};