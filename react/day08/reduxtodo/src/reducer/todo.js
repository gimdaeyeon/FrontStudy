const initialState = [
  {
    id:1,
    todo: '리액트 공부하기',
  },
  {
    id:2,
    todo: '리액트 또 공부하기',
  },
  {
    id:3,
    todo: '리액트 계에속 공부하기',
  },
]

export const INSERT_TODO = 'INSERT_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
// 삭제 실습

const todo = (state = initialState, action) =>{
    switch (action.type) {
      case INSERT_TODO:
        return [...state, {id:action.data.id, todo: action.data.todo}];
      case REMOVE_TODO:
        return state.filter((item)=>item.id !== action.data.id);
      default:
        return state;
    }
}

export default todo;



