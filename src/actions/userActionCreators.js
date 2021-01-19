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
    const { username, password} = user_login;
    const login_params = {username: username, password: password}
    return (dispatch) => {
        dispatch(LOADING);
        fetch(BASE_URL + '/login', {
            method: 'Post',
            headers: {
                "Content-Type": 'application/json'
            }, 
            body: JSON.stringify(login_params),
        })
        .then(resp => resp.json())
        .then ( response => {
            
            if (!response.errors){
                localStorage.token = response.token;
                dispatch({type: "LOAD_USER", payload: response.user})
            }else {
                alert(response.errors)
            }
        })
    }
}

export const fetchCreateNewUser = (new_user) => {
    const user_params = {user: new_user}
    return (dispatch)=>{
        fetch(BASE_URL + '/users', {
            method: 'Post',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user_params),
        })
        .then(resp => resp.json())
        .then (response => {
            if(!response.errors){
                localStorage.token = response.token;
                dispatch({type: "CREATE_USER", payload: response.user})
            }else{
                alert(response.errors)
            }
        })
    }
}


export const autoLogin = () => {
        return (dispatch) => {
        dispatch(LOADING);
        fetch(BASE_URL + '/autoLogin', {
            method: 'Post',
            headers: {
                "AUTHORIZATION": localStorage.token
            }
        })
        .then(resp => resp.json())
        .then(response => {
            if (!response.errors){
                dispatch({type: "LOAD_USER", payload: response.user})
            }else{
                alert(response.errors)
            }
        })
    }
}
// export const toggleSignInOrUp = () => ({type: "TOGGLE_SIGNUP"})