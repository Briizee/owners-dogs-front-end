import axios from 'axios'

export const getOwners = () => {
    return async dispatch => {
        try {
            const res = await axios.get('http://localhost:3000/owner')
            console.log("res", res)
            dispatch({
                type: "FETCH_OWNERS_SUCCESS",
                payload: res.data
            })
        }
        catch(e) {
            dispatch({
                type:"FETCH_OWNERS_FAIL"
            })
        }
    }
}

export const deleteOwner = (id) => {
    return async dispatch => {
        try {
            await axios.delete(`http://localhost:3000/owner/${id}`)
            dispatch({
                type: "DELETE_OWNER_SUCCESS",
                payload: id
            })
        }
        catch(e) {
            dispatch({
                type:"DELETE_OWNER_FAIL"
            })
        }
    }
}