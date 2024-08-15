import {createStore} from "vuex";
import todoApp from './modules/todoApp.js'

export const store = createStore({
    modules:{
      todoApp,
    }
});
