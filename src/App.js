import React, { Component } from 'react';
import './App.css';
//Horse Containers
import HorsesPage from './containers/horse/HorsesPage'
import HorsePage from './containers/horse/HorsePage'
//Navigation
import { Switch, Route, Redirect } from 'react-router-dom'
//actions
import {fetchHorses} from './actions/horseActionCreators'
import {autoLogin} from './actions/userActionCreators'
//thunk
import { connect } from 'react-redux'
// import Horses from './components/Horses';
import SignupForm from './containers/user/SignupForm'
import Login from './containers/user/Login'
import Logout from './containers/user/Logout'
import Home from './Home'
import ButtonAppBar from './components/navigation/ButtonAppBar'
import HorseForm from './components/horse/HorseForm'
import UpdateHorse from './components/horse/UpdateHorse';
class App extends Component{

  //I'm going to add an if to the equation to render the site after
  //horses have been loaded.  
  componentDidMount(){
    localStorage.token && this.props.autoLogin();
    this.props.fetchHorses()
  }
  render(){
    if ((this.props.loading || this.props.loading===undefined) && (this.props.horses.length === 0)){
      return <div>Loading...</div>
    }else{
      return (
        <>
          <ButtonAppBar loggedIn={this.props.loggedIn}/>
          <Switch>
              <Route exact path="/horses" render={()=> <HorsesPage horses={this.props.horses}/>} />
              <Route exact path="/horses/new" render={()=> <HorseForm user={this.props.user}/>} />
              <Route exact path="/horses/:id" component={HorsePage} />
              <Route exact path="/horses/edit/:id" component={UpdateHorse}/>
              <Route exact path='/users/new' render={() => (this.props.loggedIn ? <Redirect to="/" /> : <SignupForm />) } />
              <Route exact path='/login' render={() => (this.props.loggedIn ? <Redirect to="/" /> : <Login />) } />
              <Route exact path='/logout' component={Logout} />
              <Route exact path='/' render={()=> <Home user={this.props.user} horses={this.props.horses}/>} />
          </Switch>
        </>
        )
  }   
}
}
const mapStateToProps = state => {
  return {
    loading: state.horses.loading,
    loggedIn: state.users.loggedIn,
    user: state.users.app_user,
    horses: state.horses.horses
  }
}

export default connect(mapStateToProps, {autoLogin, fetchHorses })(App)
