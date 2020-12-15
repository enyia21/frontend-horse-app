const LOADING = { type: "LOADING" };

//thunk allows us to return a function that takes in the argument of dispatch
const BASE_URL = 'http://localhost:3001'


export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(LOADING);
        fetch(BASE_URL + '/users')
        .then(resp => resp.json())
        .then( users => dispatch({type: "LOAD_USERS", users}))
    }
}

export const fetchLoginUser = (user_login) =>  {
    debugger;
    const { username, password} = user_login;
    const login_params = {username: username, password: password}
    return (dispatch) => {
        // dispatch(LOADING);
        fetch(BASE_URL + '/login', {
            method: 'Post',
            headers: {
                "Content-Type": 'application/json'
            }, 
            body: JSON.stringify(login_params),
        })
        .then(resp => resp.json())
        .then ( user => {
            debugger;
            if (!user.errors){
                dispatch({type: "LOAD_USER", payload: user})
            }else {
                alert(user.errors)
            }
        })
    }
}

export const fetchCreateNewUser = (new_user) => {
    const user_params = {user: new_user}
    debugger;
    return (dispatch)=>{
        fetch(BASE_URL + '/users', {
            method: 'Post',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user_params),
        })
        .then(resp => resp.json())
        .then (user => {
            if(!user.errors){
                dispatch({type: "CREATE_USER", user})
            }else{
                alert(user.errors)
            }
        })
    }
}

export const toggleSignInOrUp = () => ({type: "TOGGLE_SIGNUP"})