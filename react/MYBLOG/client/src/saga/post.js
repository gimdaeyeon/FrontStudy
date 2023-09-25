import { put, delay, takeLatest, all, fork } from 'redux-saga/effects';
import { LOAD_ALLPOSTS_FAILURE, LOAD_ALLPOSTS_REQUEST, LOAD_ALLPOSTS_SUCCESS } from '../reducer/post';
import { createDummyPost } from '../util/data';

function* loadPosts(){
   try{
      yield delay(500);
      yield put({
        type :LOAD_ALLPOSTS_SUCCESS,
        data :createDummyPost(10),
      });
   }catch(err){
      console.log(err);
      yield put ({
        type : LOAD_ALLPOSTS_FAILURE,
        error : err.response.data,
      })
      throw new Error(err);
   }
}

function* watchLoadPosts(){
  yield takeLatest(LOAD_ALLPOSTS_REQUEST, loadPosts)
}

export default function* postSaga(){
  yield all([fork(watchLoadPosts)]);
}

