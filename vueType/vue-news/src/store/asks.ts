import {defineStore} from "pinia";
import {reactive} from "vue";
import {fetchAskList} from "@/api";
import type {Asks} from "@/types.ts";

export const useAskStore = defineStore('asks', () => {
    const askList = reactive<Asks[]>([]);

    async function fetchAsks() {
        try {
            const {data} = await fetchAskList();
            console.log(data);

            for (const askInfo of data as Asks[]) {
                askList.push(askInfo)
            }
        } catch (e) {
            console.error(e);
        }
    }

    return {
        askList, fetchAsks
    }
});