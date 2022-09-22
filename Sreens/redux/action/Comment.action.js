import { AddData, Alldata, DeleteData, Editdata } from "../../../common/api/comments.api";
import * as ActionType from '../ActionType'




export const getcomment = () =>  (dispatch) => {
    // console.log("ation file done" );

     Alldata()
        .then((data) => dispatch({type:ActionType.GET_COMMENTS,payload:data.data}))
        .catch((error) => console.log(error))
}


export const addcomment = () =>  (dispatch) => {
    // console.log("addcommentRequest file done" );

    AddData()
        .then((data) => dispatch({type:ActionType.ADD_COMMENT,payload:data.data}))
        .catch((error) => console.log(error))
}


export const deletecomment = (id) => (dispatch) => {
    console.log("ation  delete file done" ,id );

    DeleteData(id)
        .then((id) => dispatch({type: ActionType.DELETE_COMMENTS, payload:id}))                 
        .catch((error) => console.log(error))
    
}


export const Editcomment = (data) => (dispatch) => {
     // console.log("ation  delete file done" ,data );
    Editdata(data)
    .then((data) => dispatch({type: ActionType.EDIT_COMMENT, payload:data}))                 
    .catch((error) => console.log(error))
}

