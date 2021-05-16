import { SET_BOT_NAV_DISPLAY_STATE } from "../actions/botNavAction"

const defaultState = {
    displayState: 0
}

const botNavReducer = (state=defaultState, action) => {
    switch(action.type) {
        case SET_BOT_NAV_DISPLAY_STATE:
            return {
                ...state,
                displayState: action.displayState
            }
        default: 
            return state
    }
}

export default botNavReducer