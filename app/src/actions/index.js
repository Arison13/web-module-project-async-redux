import axios from 'axios'

export const getDog = () => {
    return (dispatch) => {
        dispatch(fetchStart())

        axios.get("https://dog.ceo/api/breeds/image/random")
        .then((resp) => {
            // console.log(resp.data)
            dispatch(fetchSuccess(resp.data.message))
        })
        .catch((err) => {
            console.log(err)
            dispatch(fetchError(err))
        })
    }
}
export const FETCH_START = "FETCH_START";

export const fetchStart = () => {
    return({type: FETCH_START});
}


export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (info) => {
    return({type:FETCH_SUCCESS, payload:info})
}


export const FETCH_ERROR = "FETCH_ERROR";

export const fetchError = (errorMessage) => {
    return({type:FETCH_ERROR, payload: errorMessage })
}