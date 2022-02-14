import {initialState} from '../index'

const ownersReducer = function (state =initialState.owners, action) {
    switch (action.type) {
        case "OWNERS_SUCCESS":
            return action.payload
        case "OWNERS_FAIL":
            return {
                ...state
            }
        default:
            return state
    }
}
export default ownersReducer