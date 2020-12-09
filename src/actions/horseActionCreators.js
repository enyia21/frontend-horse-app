const LOADING = { type: "LOADING" };

const BASE_URL = 'http://localhost:3001'

export const fetchHorses = () => {
    return (dispatch) => {
        dispatch(LOADING);
        fetch(BASE_URL + '/horses')
        .then(resp => resp.json())
        .then(horses => dispatch({type: "LOAD_HORSES", payload: horses}))
    }
}

export const fetchSelectedHorse = (id) => {
    return (dispatch) => {
        dispatch(LOADING);
        fetch(BASE_URL + '/horses/' + id)
        .then(resp => resp.json())
        .then(horse => dispatch({type: "LOAD_FULL_HORSE", payload: horse}))
    }
}

export const removeSelectedHorse = () => {
    return (dispatch) => {
        dispatch({type: "UNLOAD_HORSE", payload: {} })
    }
}