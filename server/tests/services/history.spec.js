const chai = require('chai');
const expect = chai.expect;

const historyService = require('../../services/history');

describe("History Service", function() {
    describe("History List", function() {
        it("should return all played games", function() {
            let history = historyService.list();
            return expect(history).to.exist
        });
    });
    describe("replay", function() {
        it("should return all moves in a game", function() {
            let replay = historyService.replay();
            return expect(replay).to.exist
        });
    });
});