import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions";

const initialState = {
    picture: "https://images.dog.ceo/breeds/akita/Akita_hiking_in_Shpella_e_Pellumbasit.jpg",
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START :
            return ({
                ...state,
                picture: "",
                isFetching: true,
                error:"",
            })
        case FETCH_SUCCESS :
            return ({
                ...state,
                picture: action.payload,
                isFetching: false,
                error:""
            })

        case FETCH_ERROR :
            return({
                ...state,
                picture: "",
                isFetching: false,
                error: action.payload
            })
        default:
            return state;
    }

 }