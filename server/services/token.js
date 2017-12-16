const jwt = require('jsonwebtoken');
const secureRandom = require('secure-random');

//set ridiculously high so it wont expire in game
const EXPIRES_IN = 36000000;
const SECRET = secureRandom(256, { type: 'Buffer' });

function createToken(object, expiresIn = EXPIRES_IN, secret = SECRET) {
    return jwt.sign(object, secret, { expiresIn });
}

function validateToken(req, secret = SECRET) {
    const token = req.body.token || req.params.token || req.headers.authorization;

    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                reject({ status: 403, content: 'You are not allowed to access this page' });
            }
            else {
                req.decoded = decoded;
                resolve();
            }
        });
    });
}

module.exports = {
    createToken,
    validateToken
};
