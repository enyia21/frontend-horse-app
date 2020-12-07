import React, { Component } from 'react';

import './App.css';


//Hores Page
import { HorsesPage } from './containers/HorsesPage'

//Navigation
import { Switch, Route } from 'react-router-dom'

//thunk
import {connect} from 'redux'


class App extends Component{
  render(){
    return (
      <Switch>
        <div className="App">
          <Route exact path="/horses" component={HorsesPage} />
        </div>
      </Switch>
    );
  }

  }

export default App;
