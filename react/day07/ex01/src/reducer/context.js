import { createContext,useReducer } from "react";

export const Context = createContext();

const initialState = [
  {
    id: 1,
    name: "김사과",
  },
  {
    id: 2,
    name: "반하나",
  },
  {
    id: 3,
    name: "오렌지",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_STATE":
      return [...state, { id: action.id, name: action.name }];
    case "REMOVE_STATE":
      return state.filters((item) => item.id !== action.id);
    default:
      return state;
  }
};

const ContextProvider = ({children})=>{
  // 전역으로 관리될 변수
  // 현재 state는 id,이름으로된 객체 배열
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{state,dispatch}}>
        {children}
    </Context.Provider>
  );
};

export default ContextProvider;
