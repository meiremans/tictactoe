const chai = require('chai');
const expect = chai.expect;

const Field = require('../../classes/Field');

describe("Class Field", function() {
    describe("Constructor", function() {
        it("should build a field", function() {
            const turns = [{
                fieldId: "1-1",
                player: "1"
            },{
                fieldId: "2-1",
                player:"0"
            }];
            const result = [{
                fieldId: "1-1",
                player: "1"
            }, {
                fieldId: "1-2"
            }, {
                fieldId: "1-3"
            }, {
                fieldId: "2-1",
                player:"0"
            }, {
                fieldId: "2-2"
            }, {
                fieldId: "2-3"
            }, {
                fieldId: "3-1"
            }, {
                fieldId: "3-2"
            }, {
                fieldId: "3-3"
            }];

            let field = new Field(turns);
            expect(field.getField()).to.deep.equal(result);
        });
    });
    describe("isGameOver", function() {
        it("should tell if the game is over", function() {
            const turns = [{
                fieldId: "1-1",
                player : "1"
            }, {
                fieldId: "1-2",
                player : "1"
            }, {
                fieldId: "1-3",
                player : "1"
            }, {
                fieldId: "2-1",
                player : "0"
            }, {
                fieldId: "2-2",
                player : "1"
            }, {
                fieldId: "2-3",
                player : "1"
            }, {
                fieldId: "3-1",
                player : "0"
            }, {
                fieldId: "3-2",
                player : "1"
            }];
            let field = new Field(turns);
            let winner = field.isGameOver(field);
            console.log(winner);
            return expect(winner).to.deep.equal({ winner: true, player: '1' });
        });
        describe("threeInARow", function() {
            it("should tell if someone has three in a row", function() {
                const turns = [{
                    fieldId: "1-1",
                    player : "1"
                }, {
                    fieldId: "1-2",
                    player : "1"
                }, {
                    fieldId: "1-3",
                    player : "1"
                }, {
                    fieldId: "2-1",
                    player : "0"
                }, {
                    fieldId: "2-2",
                    player : "1"
                }, {
                    fieldId: "2-3",
                    player : "1"
                }, {
                    fieldId: "3-1",
                    player : "0"
                }, {
                    fieldId: "3-2",
                    player : "1"
                }];
                let field = new Field(turns);
                let winner = field.threeInARow(field);
                return expect(winner).to.deep.equal({ winner: true, player: '1' });
            });
        });

        describe("threeInACOlumn", function() {
            it("should tell if someone has three in a Column", function() {
                const turns = [{
                    fieldId: "1-1",
                    player : "1"
                }, {
                    fieldId: "1-2",
                    player : "0"
                }, {
                    fieldId: "1-3",
                    player : "0"
                }, {
                    fieldId: "2-1",
                    player : "1"
                }, {
                    fieldId: "2-2",
                    player : "1"
                }, {
                    fieldId: "2-3",
                    player : "0"
                }, {
                    fieldId: "3-1",
                    player : "1"
                }, {
                    fieldId: "3-2",
                    player : "0"
                }];
                let field = new Field(turns);
                let winner = field.threeInAColumn(field);
                return expect(winner).to.deep.equal({ winner: true, player: '1' });
            });
        });

        describe("threediagonally", function() {
            it("should tell if someone has three diagonally", function() {
                const turns = [{
                    fieldId: "1-1",
                    player : "0"
                }, {
                    fieldId: "1-2",
                    player : "0"
                }, {
                    fieldId: "1-3",
                    player : "1"
                }, {
                    fieldId: "2-1",
                    player : "1"
                }, {
                    fieldId: "2-2",
                    player : "1"
                }, {
                    fieldId: "2-3",
                    player : "0"
                }, {
                    fieldId: "3-1",
                    player : "1"
                }, {
                    fieldId: "3-3",
                    player : "1"
                }];
                let field = new Field(turns);
                let winner = field.threeDiagonally(field);
                return expect(winner).to.deep.equal({ winner: true, player: '1' });
            });
            it("should tell if someone has three diagonally other side", function() {
                const turns = [{
                    fieldId: "1-1",
                    player : "1"
                }, {
                    fieldId: "1-2",
                    player : "0"
                }, {
                    fieldId: "1-3",
                    player : "0"
                }, {
                    fieldId: "2-1",
                    player : "0"
                }, {
                    fieldId: "2-2",
                    player : "1"
                }, {
                    fieldId: "2-3",
                    player : "0"
                }, {
                    fieldId: "3-1",
                    player : "0"
                }, {
                    fieldId: "3-3",
                    player : "1"
                }];
                let field = new Field(turns);
                let winner = field.threeDiagonally(field);
                return expect(winner).to.deep.equal({ winner: true, player: '1' });
            });
        });
        describe("hasWinner", function() {
            it("should tell if there is a winner after a turn", function() {
                const turn = {
                    fieldId: "1-1",
                    player : "0"
                };
                let aiCount = 0;
                let playerCount = 2;
                let field = new Field([]) ;

                let winner = field.hasWinner(turn,playerCount,aiCount);
                return expect(winner).to.deep.equal({ winner: true, player: '0' });
            });
        });
    });
});