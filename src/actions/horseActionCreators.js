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

export const fetchRemoveHorse = (id) => {
    debugger;
    return (dispatch) => {
        dispatch(LOADING);
        fetch(BASE_URL + '/horses/' + id, {
            method: 'DELETE',
            headers: {
                "AUTHORIZATION": localStorage.token
            }
        })
        .then(resp => resp.json()) 
        .then(response => {
            console.log(response)
            dispatch({type: "REMOVE_HORSE", payload: response.horse})
        })  
    }
}

export const fetchCreateNewHorse = (new_horse) => {
    debugger
    const horse_params = {horse: new_horse}
    return (dispatch)=>{
        fetch(BASE_URL + '/horses', {
            method: 'Post',
            headers: {
                "Content-Type": 'application/json',
                "AUTHORIZATION": localStorage.token

            },
            body: JSON.stringify(horse_params),
        })
        .then(resp => resp.json())
        .then (response => {
            if(!response.errors){
                dispatch({type: "CREATE_HORSE", payload: response.user})
            }else{
                alert(response.errors)
            }
        })
    }
}

export const fetchUpdateHorse = (update_horse) => {
    debugger
    const horse_params = {horse: update_horse}
    return (dispatch)=>{
        fetch(BASE_URL + `/horses/${update_horse.id}`, {
            method: 'Patch',
            headers: {
                "Content-Type": 'application/json',
                "AUTHORIZATION": localStorage.token

            },
            body: JSON.stringify(horse_params),
        })
        .then(resp => resp.json())
        .then (response => {
            if(!response.errors){
                dispatch({type: "CREATE_HORSE", payload: response.user})
            }else{
                alert(response.errors)
            }
        })
    }
}

export const removeSelectedHorse = (id) => {
    return (dispatch) => {
        dispatch({type: "UNLOAD_HORSE", payload: {} })
    }
}