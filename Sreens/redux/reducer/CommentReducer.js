import * as ActionType from '../ActionType';

let inival = {
    comment: []
}

export const commentReducer = (state = inival, action) => {
    console.log("reducer done 111111111111111111111111111111111111111111111111111",action.type, action.payload);
    switch (action.type) {

        case ActionType.GET_COMMENTS:
            return {
                ...state,
                comment: action.payload
            }
            case ActionType.ADD_COMMENT:
                return {
                    ...state,
                    comment: state.comment.concat(action.payload),
                    error: ''

                }
            case ActionType.DELETE_COMMENTS:
            return {
                ...state,
                comment: state.comment.filter((c) => c.id != action.payload),
                error: ''

            }
            case ActionType.EDIT_COMMENT:
            return {
                ...state,
                comment: state.comment.map((c) => {
                    if (c.id === action.payload.id) {
                        return action.payload
                    } else {
                        return c
                    }
                }),
                error: ''
            }

        default:
            return state
    }
}

