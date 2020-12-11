import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCreateNewUser } from '../../actions/userActionCreators'
class UsersForm extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        address: ""        
    }

    handleOnChange = (e) => this.setState({[e.target.name]: e.target.value})

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.fetchCreateNewUser(this.state);
    }
    render() {
        return (
            <div>
                <h3>Sign Up!</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" onChange={this.handleOnChange} value={this.state.username}/><br />

                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" onChange={this.handleOnChange} value={this.state.email}/><br />

                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange={this.handleOnChange} value={this.state.password}/><br />

                    <label htmlFor="password_confirmation">Password Confirmation: </label>
                    <input type="password" name="password_confirmation" onChange={this.handleOnChange} value={this.state.password_confirmation}/><br />
                    
                    <label htmlFor="first_name">First Name: </label>
                    <input type="text" name="first_name" onChange={this.handleOnChange} value={this.state.first_name}/><br />

                    <label htmlFor="last_name">Last Name: </label> 
                    <input type="text" name="last_name" onChange={this.handleOnChange} value={this.state.last_name}/><br />

                    <label htmlFor="phone_number">Phone Number: </label>
                    <input type="text" name="phone_number" onChange={this.handleOnChange} value={this.state.phone_number}/><br />

                    <label htmlFor="address">Address: </label>
                    <input type="text" name="address" onChange={this.handleOnChange} value={this.state.address}/><br />
                    
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, { fetchCreateNewUser })(UsersForm);
