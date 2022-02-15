import {initialState} from '../index'

const dogsReducer = function (state = initialState.dogs, action) {
    switch (action.type) {
        case "FETCH_DOGS_SUCCESS":
            console.log("payload", action.payload)
            return action.payload
            
        case "FETCH_DOGS_FAIL":
            return {
                ...state
            }
        
        case "DELETE_DOG_SUCCESS":
            return state.filter((dog) => dog.id !== action.payload)

        case "DELETE_DOG_FAIL":
            return {
                ...state
            }
        default:
            return state
    }
}

export default dogsReducer