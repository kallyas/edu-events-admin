import { ADD_EVENT, GET_EVENTS } from '../actions/types'

const initialState = {
    events: [],
    event: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_EVENT:
            return {
                ...state,
                event: action.payload
            }
        case GET_EVENTS:
            return {
                ...state,
                events: action.payload
            }
        default:
            return state
    }
}