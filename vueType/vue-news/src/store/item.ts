import {defineStore} from "pinia";
import {reactive} from "vue";
import {fetchItemInfo} from "@/api";
import type {Item} from "@/types.ts";

export const useItemStore = defineStore('item', () => {
    const item = reactive<Item>({
        comments_count: 0,
        content: "",
        id: 0,
        points: 0,
        time: 0,
        time_ago: "",
        title: "",
        type: "",
        url: "",
        user: ""
    });

    async function fetchItem(itemId: string) {
        try {
            const {data} = await fetchItemInfo(itemId);
            console.log(data);

            item.id = data.id;
            item.comments_count = data.comments_count;
            item.content = data.content;
            item.points = data.points;
            item.time = data.time;
            item.time_ago = data.time_ago;
            item.title = data.title;
            item.type = data.type;
            item.url = data.url;
            item.user = data.user;

        } catch (e) {
            console.error(e);
        }
    }

    return {
        item, fetchItem
    }
});