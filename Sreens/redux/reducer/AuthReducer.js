import * as ActionTypes from '../ActionType'

const initVal = {
    isLoading: false,
    auth: null,
    error: '',
    authMsg: ''
}

export const authUserReducer = (state = initVal, action) => {
    console.log(action.type, action.payload);
    switch (action.type) {
        case ActionTypes.SING_UP:
            return {
                ...state,
                isLoading: false,
                auth: action.payload.user,
                error: '',
                authMsg: action.payload.authMsg
            }
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                auth: action.payload.user,
                error: '',
                authMsg: action.payload.authMsg
            }

        case ActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                auth: null,
                error: '',
                authMsg: action.payload.authMsg
            }

        default:
            return state;
    }
}