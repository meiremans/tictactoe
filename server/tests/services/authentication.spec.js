const chai = require('chai');
const expect = chai.expect;

const authenticationService = require('../../services/authentication');

describe("Authentication Service", function() {
    describe("Login", function() {
        it("should respond with a JWT token", function() {
            let token = authenticationService.login();
           return expect(token.accessToken).to.exist
        });
    });
});