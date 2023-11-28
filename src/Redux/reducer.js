import { ADD_EVENT_ERROR, ADD_EVENT_REQUEST, ADD_EVENT_SUCCESS, GET_EVENT_ERROR, GET_EVENT_REQUEST, GET_EVENT_SUCCESS } from "./actionType";


const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_EVENT_REQUEST:
            return { ...state, isLoading: true }
        case GET_EVENT_SUCCESS:
            return { ...state, isLoading: false, isError: false, data: payload }
        case GET_EVENT_ERROR:
            return { ...state, isLoading: false, isError: true }
        case ADD_EVENT_REQUEST:
            return { ...state, isLoading: true }
        case ADD_EVENT_SUCCESS:
            return { ...state, isLoading: false, isError: false, data: [...state.data,payload] }
        case ADD_EVENT_ERROR:
            return { ...state, isLoading: false, isError: true }
        default:
            return state;
    }
}

export default reducer;