const chai = require('chai');
const expect = chai.expect;

const tokenService = require('../../services/token');

describe("Token Service", function () {
    describe("Create Token", function () {
        it("should return a JWT token", function () {
            let token = tokenService.createToken({isAdmin: false});
            return expect(token).to.exist
        });
    });
    describe("replay", function () {
        it("should verify a token", function () {
            let req = {body: {token: {}}};
            req.body.token = tokenService.createToken({isAdmin: false});
            tokenService.validateToken(req);
            return expect(req.decoded).to.exist

        });
    });

});