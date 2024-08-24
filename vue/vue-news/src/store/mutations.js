export default {
    setNews(state, news) {
        state.news = news;
    },
    setJobs(state, jobs) {
        state.jobs = jobs;
    },
    setAsks(state, asks) {
        state.asks = asks;
    },
    setUser(state,user){
        state.user = user;
    },
    setItem(state,item){
        state.item = item;
    },
    startSpinner(state){
        state.loadingStatus = true;
    },
    endSpinner(state){
        state.loadingStatus = false;
    },
    setList(state,list){
        state.list = list;
    }
}