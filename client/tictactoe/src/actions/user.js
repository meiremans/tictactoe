export const LOGIN = 'LOGIN';

export function login() {
    const url = "http://localhost:8080/api/auth/login";
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                dispatch(emitLoginEvent(response.accessToken))
            })
            .catch((err) => console.log(err))
    }
}

export function emitLoginEvent(token){
    return {type: LOGIN, token};
}