
import {all,takeLatest,fork,put,delay} from "redux-saga/effects"
import { LOGIN_IN_FAILURE, LOGIN_IN_REQUEST, LOGIN_IN_SUCCESS } from '../reducer/user';
import { dummyUser } from './../util/data';

// saga func
function* logIn(action){
  // 시도
  try {
  //  const response = 
  //  yield call axios.post("https://백엔드주소.co.kr/api/logn",action.data)
  yield delay(500);
  yield put({
    type: LOGIN_IN_SUCCESS,
    // data: response,
    data: dummyUser(action.data),
    
  });
    // 시도가 실패했을 때
  } catch (err) { 
    yield put({
      type:LOGIN_IN_FAILURE,
      error:err.response.data,
    })
  }

}

  // event listner 이벤트 연결역할


function* watchLogIn(){
  yield takeLatest(LOGIN_IN_REQUEST, logIn);

}

export default function* userSaga(){
  yield all([fork(watchLogIn)]);
}






