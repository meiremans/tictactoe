const tokenService = require('./../services/token');

function login() {
    const tokenObj = {isAdmin: false};
    return {accessToken: tokenService.createToken(tokenObj)};

}

module.exports = {
    login
};