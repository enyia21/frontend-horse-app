const horsesReducer = (state={
    loading: true, 
    horses: [],
    selectedHorse: {}
}, action) =>{
    switch(action.type){
        case "LOADING":
            return {...state, loading: true}
        case "LOAD_HORSES":
            return {...state, horses: action.payload, loading: false}
        case "LOAD_FULL_HORSE": 
            return {...state, selectedHorse: action.payload, loading: false}
        case "UNLOAD_HORSE":
            return {...state, selectedHorse: action.payload, loading: false}
            
        default: 
            return state
    }
}
export default horsesReducer;