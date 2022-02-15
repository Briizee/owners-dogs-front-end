import {initialState} from '../index'

const ownersReducer = function (state =initialState.owners, action) {
    switch (action.type) {
        case "FETCH_OWNERS_SUCCESS":
            return action.payload

        case "FETCH_OWNERS_FAIL":
            return {
                ...state
            }

        case "DELETE_OWNER_SUCCESS":
            return state.filter((owner) => owner.id !== action.payload)

        case "DELETE_OWNER_FAIL":
            return {
                ...state
            }

        default:
            return state
    }
}
export default ownersReducer