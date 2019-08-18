import { GET_JOKE } from '../constants/constants';
import axios from 'axios';

export const getJokeSuccess = (joke) => {
    return {
        type: GET_JOKE,
        joke,
    }
}

export const getJoke = () => {
    return dispatch => {
        axios.get(`http://api.icndb.com/jokes/random?firstName=Tunde&lastName=Nasri`)
        .then(res => {
            // dispatch the success action
            dispatch(getJokeSuccess(res.data.value.joke))
        })
        .catch(error => {
            // error handler here
        })
    }
}