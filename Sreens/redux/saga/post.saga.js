import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchPostAPI } from '../../../common/api/post.api';
import * as ActionType from '../ActionType'


function* fetchPost(action) {
   try {
      const user = yield call(fetchPostAPI);
      //yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      //yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}


function* watchGetPost() {
  yield takeEvery(ActionType.GET_POST, fetchPost);
}

export function* postSaga() {
   yield all([
      watchGetPost()
   ])
}


export default mySaga;