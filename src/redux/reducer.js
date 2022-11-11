import { SUBSCRIBE } from './action'

const initialState = {
    email: []
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case SUBSCRIBE:
            return {
                ...state,
                email: action.payload
            }
        default:
            return state;
    }
}