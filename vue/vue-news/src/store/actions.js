import {fetchAskList, fetchItemInfo, fetchJobsList, fetchList, fetchNewsList, fetchUserInfo} from "@/api";

export default {
    // fetchNews({commit}) {
    //    return fetchNewsList()
    //         .then(resp => {
    //             commit('setNews', resp.data)
    //         })
    //         .catch(console.error);
    // },
    async fetchNews({commit}){
        const response = await fetchNewsList();
        commit('setNews',response.data);
        return response;
    },
    async fetchJobs({commit}) {
        const response = await fetchJobsList();
        commit('setJobs',response.data);
        return response;
    },
    async fetchAsks({commit}) {
        const response = await fetchAskList();
        commit('setAsks',response.data);
        return response;
    },
    async fetchUser({commit},userName){
        const resp = await fetchUserInfo(userName);
        commit('setUser',resp.data);
        return resp;
       // return fetchUserInfo(userName)
       //      .then(({data})=>{
       //          commit('setUser',data)
       //      })
       //      .catch(console.error);
    },
    async fetchItem({commit},itemId){
        const resp = await fetchItemInfo(itemId);
        commit('setItem',resp.data);
        return resp;
    },
    async fetchList({commit},pageName){
        const resp = await fetchList(pageName);
        commit('setList',resp.data);
        return resp;
    },

}