import {createStore} from 'vuex';
import {fetchNewsList} from "@/api";

export const store = createStore({
    state:{
        news:[],
    },
    mutations:{
      setNews(state,news){
          state.news = news;
      }
    },
    actions:{
        fetchNews(context){
            fetchNewsList()
                .then(resp => {
                    context.commit('setNews',resp.data)
                })
                .catch(console.error);
        }
    }
})

