const initialState = {
    loading: true, 
    users: [],
    app_user: {},
    loggedIn: false
    // signIn: true
}

const usersReducer = (state=initialState, action) => {
    switch(action.type){
        case "LOADING":
            return {...state, loading: true}
        case "LOAD_USER":
            return {...state, app_user: action.payload, loading: false, loggedIn: true}
        case 'CREATE_USER':
            return {
                ...state, 
                app_user: action.payload,
                loading: false,
                loggedIn: false
            }
        case 'LOGOUT_USER':
            return {...state, 
                app_user: {}, 
                loading: false, 
                loggedIn: false
            }
        case 'TOGGLE_SIGNUP':
            return {...state, signIn: !state.signIn}
        default: 
            return state
    }
}
export default usersReducer