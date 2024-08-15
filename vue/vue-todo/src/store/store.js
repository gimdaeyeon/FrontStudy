import {createStore} from "vuex";
import todoApp from './modules/todoApp'

export const store = createStore({
    modules:{
      todoApp,
    }
});
