const authenticationService = require('./../services/authentication');

function login(req, res, next) {
    res.json(authenticationService.login());
    next();
}

module.exports = {
    login
};