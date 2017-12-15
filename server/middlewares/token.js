const tokenService = require('../services/token');

function validateRequest(req, res, next) {
    tokenService.validateToken(req)
        .then(next)
        .catch(next);
}

module.exports = {
    validateRequest
}; 