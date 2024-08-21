import {fetchAskList, fetchJobsList, fetchNewsList} from "@/api";

export default {
    fetchNews(context) {
    fetchNewsList()
        .then(resp => {
            context.commit('setNews', resp.data)
        })
        .catch(console.error);
},
    fetchJobs(context){
    fetchJobsList()
        .then(resp => {
            context.commit('setJobs', resp.data)
        })
        .catch(console.error);
},
    fetchAsks(context){
    fetchAskList()
        .then(resp => {
            context.commit('setAsks', resp.data)
        })
        .catch(console.error);
}
}