const chai = require('chai');
const expect = chai.expect;

const gameService = require('../../services/game');

describe("Game Service", function() {
    describe("New Game", function() {
        it("should start a new game", function() {
            let newGame = gameService.newGame();
           return expect(newGame.gameId).to.exist
        });
    });
    describe("Do Move", function() {
        it("should do a move and get the AI move", function() {
            let doMove = gameService.doMove();
           return expect(doMove.ai.placeId).to.exist
        });
    });

});