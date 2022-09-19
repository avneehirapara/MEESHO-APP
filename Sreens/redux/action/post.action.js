import * as ActionType from '../ActionType'

export const getPost = () => (dispatch) => {
    dispatch({type: ActionType.GET_POST})
}