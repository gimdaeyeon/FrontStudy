import {fetchAskList, fetchItemInfo, fetchJobsList, fetchList, fetchNewsList, fetchUserInfo} from "@/api";

export default {
    async fetchNews({commit}) {
        const response = await fetchNewsList();
        commit('setNews', response.data);
        return response;
    },
    async fetchJobs({commit}) {
        const response = await fetchJobsList();
        commit('setJobs', response.data);
        return response;
    },
    async fetchAsks({commit}) {
        const response = await fetchAskList();
        commit('setAsks', response.data);
        return response;
    },
    async fetchUser({commit}, userName) {
        try {
            const resp = await fetchUserInfo(userName);
            commit('setUser', resp.data);
            return resp;
        } catch (e) {
            console.error(e);
        }
    },
    async fetchItem({commit}, itemId) {
        try {
            const resp = await fetchItemInfo(itemId);
            commit('setItem', resp.data);
            return resp;
        } catch (error) {
            console.error(error);
        }
    },
    async fetchList({commit}, pageName) {
        try {
            const {data} = await fetchList(pageName);
            commit('setList', data);
            return data;
        } catch (error) {
            console.error(error);
        }
    },

}