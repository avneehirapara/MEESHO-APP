import * as ActionType from '../ActionType';

let inival = {
    post: []
}

export const postReducer = (state = inival, action) => {
    // console.log(action.type, action.payload);
    switch (action.type) {
        case ActionType.POST_GET:
            return {
                ...state,
                post: action.payload
            }
        case ActionType.ADDED_POST:
            return {
                ...state,
                post: state.post.concat(action.payload),
            }
            case ActionType.EDITED_POST:
                return {
                    ...state,
                    post: state.post.map((p) => {
                        if (p.id === action.payload.id) {
                            return action.payload
                        } else {
                            return p
                        }
                    }),
                    error: ''
                }

        default:
            return state
    }
}