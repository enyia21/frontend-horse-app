const initialState = {
    loading: true, 
    users: [],
    current_user: {}
}

const usersReducer = (state=initialState, action) => {
    switch(action.type){
        case "LOADING_USERS":
            return {...state, loading: true}
        case "LOAD_USERS":
            return {...state, users: action.payload, loading: false}
        case "LOAD_USER":
            return {...state, current_user: action.payload, loading: false}
        case 'CREATE_USER':
            return {
                ...state, 
                current_user: action.payload,
                loading: false
            }
        default: 
            return state
    }
}
export default usersReducer