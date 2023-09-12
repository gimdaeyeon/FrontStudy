import produce from 'immer';

const initialState = {
  me:null,
  isLoading:false,
  isDone:false,
  isError:null,

  logInLoading:false, //백엔드 데이터 전송 중이니?
  logInDone: false, //백엔드 데이터 받아왔니?
  logInError:null,  //받아온 데이터가 에러니?

};

export const LOGIN_IN_REQUEST = 'LOGIN_IN_REQUEST';
export const LOGIN_IN_SUCCESS = 'LOGIN_IN_SUCCESS';
export const LOGIN_IN_FAILURE = 'LOGIN_IN_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state,(draft)=>{
    switch (action.type) {
      case LOGIN_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError= null;
        break;
        case LOGIN_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;
        case LOGIN_IN_FAILURE:
          draft.logInLoading = false;
          draft.logInDone = false;
          draft.logInError = action.err;
          break;
      default:
        return console.log('타입명이 틀렸습니다');
    }
  });


