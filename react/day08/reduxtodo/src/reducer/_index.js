/*
index로 적게되면 폴더까지만 경로로 가져와도 기본경로로 읽는다. import from /reducer
_index 읽지못해서 다 써야한다 import from/reducer/_index
*/
import {combineReducers} from "redux";
import todo from "./todo";



const rootReducer = combineReducers({
      // 합칠 리듀서 목록
      todo

})

export default rootReducer;







