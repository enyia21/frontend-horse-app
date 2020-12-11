const initialState = {
    loading: true, 
    users: [],
    current_user: {},
    signIn: true
}

const usersReducer = (state=initialState, action) => {
    switch(action.type){
        case "LOADING":
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
        case 'TOGGLE_SIGNUP':
            return {...state, signIn: !state.signIn}
        default: 
            return state
    }
}
export default usersReducer