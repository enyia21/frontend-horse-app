import {combineReducers} from 'redux'
import horsesReducer from './horsesReducer'
import usersReducer from './usersReducer'

const reducer = combineReducers({
    horses: horsesReducer,
    users: usersReducer
});

export default reducer;