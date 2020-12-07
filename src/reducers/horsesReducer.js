const initialState = {
    loading: true, 
    horses: []
}

function horseReducer(state=initialState, action) {
    switch(action.type){
        case "LOADING":
            return {...state, loading: true}
        case "LOAD_HORSES":
            debugger;
            return {...state, horses: action.payload, loading: false}
        default: 
            return state;
    }
}