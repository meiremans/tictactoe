const HUMAN_PLAYER = require('./../config/constants').HUMAN_PLAYER;
const AI_PLAYER = require('./../config/constants').AI_PLAYER;

function Field(turns) {

    this.field = [{
        fieldId: "1-1"
    }, {
        fieldId: "1-2"
    }, {
        fieldId: "1-3"
    }, {
        fieldId: "2-1"
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


    //fill in the playerturns in the field
    for (let i = 0; i < turns.length; i++) {
        this.addTurnToField(turns[i]);
    }

}

Field.prototype.addTurn = function (fieldId, player) {
    this.addTurnToField({fieldId, player})
};

Field.prototype.isGameOver = function () {
    let winner = this.threeInARow();
    if (winner) {
        return winner;
    }
    winner = this.threeInAColumn();
    if (winner) {
        return winner;
    }
    winner = this.threeDiagonally();
    if (winner) {
        return winner;
    }
    return false;
};


Field.prototype.addTurnToField = function (turn) {
    for (let i = 0; i < this.field.length; i++) {
        if (this.field[i].fieldId === turn.fieldId) {
            this.field[i].player = turn.player
        }
    }
};

Field.prototype.getField = function () {
    return this.field;

};

Field.prototype.threeInARow = function() {
    let playerCount = 0;
    let aiCount = 0;
    for (let i = 0; i < this.field.length; i++) {
        //reset every row
        if (i % 3 === 0) {
            playerCount = 0;
            aiCount = 0;
        }
        let isWinner = this.hasWinner(this.field[i], playerCount, aiCount);
        if (isWinner.winner) {
            return isWinner;
        } else {
            playerCount = isWinner.playerCount;
            aiCount = isWinner.aiCount;
        }
    }
    return false;
};


Field.prototype.threeInAColumn = function () {
    let playerCount = 0;
    let aiCount = 0;
    for (let columns = 0; columns <= 3; columns++) {
        for (let i = columns; i < this.field.length; i = i + 3) {
            let winner = this.hasWinner(this.field[i], playerCount, aiCount);
            playerCount = winner.playerCount;
            aiCount = winner.aiCount;
            if (winner.winner) {
                return winner;
            }
        }
    }
    return false;
};

Field.prototype.threeDiagonally = function() {
    let playerCount = 0;
    let aiCount = 0;
    for (let diagonals = 0; diagonals <= 2; diagonals = diagonals + 2) {
        for (let i = diagonals; i < this.field.length; i = i + 3) {
            let winner = this.hasWinner(this.field[i], playerCount, aiCount);
            playerCount = winner.playerCount;
            aiCount = winner.aiCount;
            if (winner) {
                return winner;
            }
        }
    }
    return false;
};

Field.prototype.hasWinner = function (currentPlace,playerCount, aiCount) {

    if (currentPlace.player === HUMAN_PLAYER) {
        playerCount++;

        if (playerCount === 3) {
            return {winner: true, player: currentPlace.player};
        }
    }
    if (currentPlace.player === AI_PLAYER) {
        aiCount++;
        if (aiCount === 3) {
            return {winner: true, player: currentPlace.player};
        }
    }
    return {winner: false, playerCount, aiCount};
};


module.exports = Field;

