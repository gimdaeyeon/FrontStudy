import {fetchAskList, fetchItemInfo, fetchJobsList, fetchList, fetchNewsList, fetchUserInfo} from "@/api";

export default {
    fetchNews({commit}) {
        fetchNewsList()
            .then(resp => {
                commit('setNews', resp.data)
            })
            .catch(console.error);
    },
    fetchJobs({commit}) {
        fetchJobsList()
            .then(resp => {
                commit('setJobs', resp.data)
            })
            .catch(console.error);
    },
    fetchAsks({commit}) {
        fetchAskList()
            .then(resp => {
                commit('setAsks', resp.data)
            })
            .catch(console.error);
    },
    fetchUser({commit},userName){
        fetchUserInfo(userName)
            .then(({data})=>{
                commit('setUser',data)
            })
            .catch(console.error);
    },
    fetchItem({commit},itemId){
        fetchItemInfo(itemId)
            .then(({data})=>{
                commit('setItem',data)
            })
            .catch(console.error);
    },
    fetchList({commit},pageName){
        fetchList(pageName)
            .then(({data})=>commit('setList',data))
            .catch(console.error);
    },

}