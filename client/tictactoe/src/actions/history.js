export const GET_HISTORY = 'GET_HISTORY';
export const REPLAY_MOVE = 'REPLAY_MOVE';
export const RESET_REPLAY = 'RESET_REPLAY';

export function getHistory() {
    const url = "http://localhost:8080/api/history";
    return (dispatch, getState) => {
        const request = new Request(url, {
            headers: {
                'Authorization': getState().user.token
            }
        });
        fetch(request)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                dispatch(emitHistoryEvent(response))
            })
            .catch((err) => console.log(err))
    }

}

export function replayMove(turn) {

    return {type: REPLAY_MOVE, turn};
}

export function resetReplayBoard() {

    return {type: RESET_REPLAY};
}

export function emitHistoryEvent(history) {
    return {type: GET_HISTORY, history};
}