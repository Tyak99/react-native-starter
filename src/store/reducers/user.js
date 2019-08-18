import { UPDATE_ROLE, GET_JOKE } from "../constants/constants";

const initialState = {
    joke: 'Ready to laugh?'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_JOKE:
            return {
                ...state,
                joke: action.joke
            }
        default:
            return state;
    }
}