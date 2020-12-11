import React, { Component } from 'react'
import Login from './Login'
import UserForm from './UserForm'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button } from '@material-ui/core'
import {toggleSignInOrUp} from '../../actions/userActionCreators'
class LoginSignupFormToggle extends Component {
    handleOnChange = (e) => this.setState({[e.target.name]: e.target.value})
    render() {
        console.log(this.props)
            if(this.props.user.id){
                return <Redirect to="/" />
            }else{
                return (
                    <div>
                        {this.props.signIn ? <Login /> : <UserForm />}
                <Button onClick={this.props.toggleSignInOrUp}>{this.props.signIn ? "Sign Up?" : "Login?"}</Button>
                    </div>
                )
            }
    }
}
const mapStateToProps = state => {
    return {
        user: state.users.current_user,
        signIn: state.users.signIn
    }
}
export default connect(mapStateToProps, { toggleSignInOrUp })(LoginSignupFormToggle)
