export const DO_MOVE = 'DO_MOVE';
export const NEW_GAME = 'NEW_GAME';
export const GAME_WON = 'GAME_WON';


export function doMove(index, player) {
    if (typeof index === 'string') {
        let fieldnumbers = index.split("-");
        console.log(fieldnumbers);
        if (fieldnumbers[0] === "1") {
            index = parseInt(fieldnumbers[1]) - 1;
        }
        if (fieldnumbers[0] === "2") {
            index = parseInt(fieldnumbers[1]) + 2;
        }
        if (fieldnumbers[0] === "3") {
            index = parseInt(fieldnumbers[1]) + 5;
        }
    }

    return {index, player, type: DO_MOVE};
}

export function gameOver(winner) {
    return {winner, type: GAME_WON};
}

export function playerDoMove(index) {
    console.log(index);
    return (dispatch) => {
        dispatch(doMove(index, 0));
        dispatch(requestToDoMove(index));
    }
}

export function newGame(id) {
    return {type: NEW_GAME, id};
}


export function requestNewGame() {
    const url = "http://localhost:8080/api/game/new";
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                dispatch(newGame(response.newGame.gameId))
            })
            .catch((err) => console.log(err))
    };
}

export function requestToDoMove(placeId) {
    return (dispatch, getState) => {
        const url = `http://localhost:8080/api/game/${getState().board.gameId}/move`;
        const request = new Request(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                placeId: placeId
            })
        });
        console.log(url);
        fetch(request)
            .then((response) => {
                return response.json();
            })
            .then((nextMove) => {
                if(nextMove.winner){
                    dispatch(gameOver(nextMove.player))
                }else {
                    dispatch(doMove(nextMove.nextMove, 1))
                }
            })
            .catch((err) => console.log(err))
    };
}