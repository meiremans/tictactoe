export const GET_HISTORY = 'GET_HISTORY';

export function getHistory() {
    const url = "http://localhost:8080/api/history";
    return (dispatch,getState) => {
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

export function emitHistoryEvent(history){
    return {type: GET_HISTORY, history};
}