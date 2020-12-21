import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {logoutCurrentUser} from '../../actions/userActionCreators'
import { Grid } from '@material-ui/core'
import {Button} from '@material-ui/core/Button'
const Logout = (props) => {
    const dispatch = useDispatch()
    const logOut = () => dispatch({type: 'LOGOUT_USER'})
    const loggedIn = useSelector(state => state.users.loggedIn)
    if(loggedIn){
        localStorage.clear();
        logOut();
        return (
            <Redirect to="/" />
        )
    }else{
        return(<Redirect to="/" />)
    }

}

export default Logout

