import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//Horse Containers
import HorsesPage from './containers/horse/HorsesPage'
import HorsePage from './containers/horse/HorsePage'
//Navigation
import { Switch, Route } from 'react-router-dom'
//actions
import {fetchHorses} from './actions/horseActionCreators'
//thunk
import { connect } from 'react-redux'
// import Horses from './components/Horses';

import NavBar from './components/navigation/NavBar'

class App extends Component{

  //I'm going to add an if to the equation to render the site after
  //horses have been loaded.  
  componentDidMount(){
    this.props.fetchHorses()
  }
  render(){
      return (
        <>
          <NavBar />
          <Switch>
              <Route exact path="/horses" component={HorsesPage} />
              <Route exact path="/horses/:id" component={HorsePage} />
          </Switch>
        </>
        )
  }
}
// const mapStateToProps = state => {
//   return {
//     loading: state.horses.loading
//   }
// }

export default connect(null, { fetchHorses })(App)
