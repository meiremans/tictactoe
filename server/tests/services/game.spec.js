const chai = require('chai');
const expect = chai.expect;
var sinon = require('sinon');
var mongoose = require('mongoose');
require('sinon-mongoose');

const gameService = require('../../services/game');
const History = require('../../models/history');

describe("Game Service", function () {

    describe("Calculate AI move", function () {
        it("should give an empty position where the ai wants to play", function () {
            const field = [{
                fieldId: "1-1",
                player: "1"
            }, {
                fieldId: "1-2",
                player: "0"
            }, {
                fieldId: "1-3",
                player: "1"
            }, {
                fieldId: "2-1",
                player: "0"
            }, {
                fieldId: "2-2",
                player: "1"
            }, {
                fieldId: "2-3",
                player: "1"
            }, {
                fieldId: "3-1",
                player: "0"
            }, {
                fieldId: "3-2",
                player: "1"
            }, {
                fieldId: "3-3"
            }];
            let position = gameService._private.calculateAIMove(field);
            return expect(position).to.equal("3-3");
        });
    });


});