import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchLoginUser} from '../../actions/userActionCreators'

class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    handleOnChange = (e) => this.setState({[e.target.name]: e.target.value})

    handleOnSubmit = (e) => {
        e.preventDefault()
        
        this.props.fetchLoginUser(this.state);
        debugger;
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h3>Login!</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <label>
                        <input type="text" name="username" placeholder="username" onChange={this.handleOnChange} value={this.state.username} /><br />
                    </label>

                     <label>
                        <input type="password" name="password" placeholder="password" onChange={this.handleOnChange} value={this.state.password} /><br />
                    </label>    

                    <label>
                        <input type="submit" value="submit" />
                    </label>   
                </form>
            </div>
        )
    }
}

export default connect(null, { fetchLoginUser })(Login);
