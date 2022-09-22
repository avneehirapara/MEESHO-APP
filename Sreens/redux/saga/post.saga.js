import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { addPostAPI, DeletePostAPI, EditPostAPI, fetchAddPostAPI, fetchPostAPI } from '../../../common/api/post.api';
import * as ActionType from '../ActionType'


function* fetchPost(action) {
   try {
      const response = yield call(fetchPostAPI);

      yield put({type: ActionType.POST_GET, payload: response});

   } catch (e) {
      console.log(e);
      //yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* fetchAddPost(action) {
   try {
      const response = yield call(addPostAPI, action.payload);
      // console.log('yessssssssssssssssss',response);

      yield put({type: ActionType.ADDED_POST, payload: response});

   } catch (e) {
      console.log(e);
      //yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}


function* fetchDeletePost(action) {

   // console.log("saga ",id);
   try {
      const response = yield call(DeletePostAPI,action.payload);  

      console.log('saga file done ' , response);

      yield put({type: ActionType.DELETED_POST, payload:response});
      
   } catch (e) {
      console.log(e);
      //yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}


function* fetchEditPost(action) {

   // console.log("saga Edite file done ",data);
   try {
      const response = yield call(EditPostAPI,action.payload);  

      console.log('sagaAAA Edite file done' , response);
      
      yield put({type: ActionType.EDITED_POST, payload:response});
      
   } catch (e) {
      console.log(e);
      //yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}



function* watchGetPost() {

  yield takeEvery(ActionType.GET_POST, fetchPost);
}

function* watchAddPost() {
   yield takeEvery(ActionType.ADD_POST, fetchAddPost);
 }

 function* watchDeletePost() {
   yield takeEvery(ActionType.DELETE_POST, fetchDeletePost);
 }

 function* watchEditPost() {
   yield takeEvery(ActionType.EDIT_POST, fetchEditPost);
 }

export function* postSaga() {
   yield all([
      watchGetPost(),
      watchAddPost(),
      watchDeletePost(),
      watchEditPost(),

   ])
}