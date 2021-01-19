import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Redux 
import {Provider} from 'react-redux'

//asynchronous actions from redux
import thunk from 'redux-thunk'

//Provides Routing
import { BrowserRouter as Router } from 'react-router-dom'
import {createStore, compose, applyMiddleware} from 'redux'

//created reducer
import  reducer  from './reducers/reducer'

//Create theme
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme'

//built the store
const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
