import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import dogsReducer from './reducers/dogsReducer'
import ownersReducer from './reducers/ownersReducer'

export const initialState = {
    dogs: [],
    owners: []
}

const rootReducer = combineReducers({
    owners: ownersReducer,
    dogs: dogsReducer
})

export const store = createStore(
    rootReducer, 
    initialState,
    applyMiddleware(thunk)
)


