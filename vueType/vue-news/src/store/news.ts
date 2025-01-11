import {defineStore} from "pinia";
import {reactive} from "vue";
import {fetchNewsList} from "@/api";
import type {News} from "@/types.ts";

export const useNewsStore = defineStore('news', () => {
    const newsList = reactive<News[]>([]);

    async function fetchNews() {
        try {
            const {data} = await fetchNewsList();
            console.log(data);

            for (const newsInfo of data as News[]) {
                newsList.push(newsInfo)
            }
        } catch (e) {
            console.error(e);
        }
    }

    return {
        newsList, fetchNews
    }
});

