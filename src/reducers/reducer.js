import horsesReducer from './horsesReducer'
import usersReducer from './usersReducer'

import {combineReducers} from 'redux'

export const reducer = combineReducers({
    horses: horsesReducer,
    users: usersReducer
})