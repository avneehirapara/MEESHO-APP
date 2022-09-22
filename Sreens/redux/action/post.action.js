import * as ActionType from '../ActionType'

export const getPost = () => (dispatch) => {
    dispatch({type: ActionType.GET_POST})
}


export const addPost = (data) => (dispatch) => {
    // console.log("action file done " , data);
    dispatch({type: ActionType.ADD_POST, payload: data})
}

export const DeletePost = (id) => (dispatch) => {
   console.log("action file done", id);
    dispatch({type: ActionType.DELETE_POST, payload: id})
}


export const EditPost = (data) => (dispatch) => {
    console.log("action file Edit post done", data);
     dispatch({type: ActionType.EDIT_POST, payload:data})
 }