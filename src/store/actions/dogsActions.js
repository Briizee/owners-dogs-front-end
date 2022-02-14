import axios from 'axios'

export const getDogs = () => {
    return async dispatch => {
        try {
            const res = await axios.get('http://localhost:3000/dog')
            console.log("res", res)
            dispatch({
                type: "FETCH_DOGS_SUCCESS",
                payload: res.data
            })
        }
        catch(e) {
            dispatch({
                type:"FETCH_DOGS_FAIL"
            })
        }
    }
}

export const deleteDog = (id) => {
    return async dispatch => {
        try {
            await axios.delete(`http://localhost:3000/dog/${id}`)
            dispatch({
                type: "DELETE_DOG_SUCCESS",
                payload: id
            })
        }
        catch(e) {
            dispatch({
                type:"DELETE_DOG_FAIL"
            })
        }
    }
}