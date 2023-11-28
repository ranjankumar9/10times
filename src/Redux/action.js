import { ADD_EVENT_ERROR, ADD_EVENT_REQUEST, ADD_EVENT_SUCCESS, GET_EVENT_ERROR, GET_EVENT_REQUEST, GET_EVENT_SUCCESS } from "./actionType";
import axios from 'axios'

const GetRequest = () => {
    return { type: GET_EVENT_REQUEST };
};

const GetSuccess = (payload) => {
    return { type: GET_EVENT_SUCCESS, payload }
}

const GetError = () => {
    return { type: GET_EVENT_ERROR }
}

export const GetEvent = () => (dispatch) => {
    dispatch(GetRequest())
    axios.get("https://random-skts.onrender.com/event").then((res) => {
        dispatch(GetSuccess(res))
        // console.log(res)
    })
        .catch((err) => {
            dispatch(GetError(err))
        })
}

export const AddEvent = (payload) => (dispatch) => {
    dispatch({ type: ADD_EVENT_REQUEST })
    axios.post(`https://random-skts.onrender.com/event`, payload).then((res) => {
        dispatch({ type: ADD_EVENT_SUCCESS, payload})
    })
        .catch((err) => {
            dispatch({ type: ADD_EVENT_ERROR, err })
        })
}

