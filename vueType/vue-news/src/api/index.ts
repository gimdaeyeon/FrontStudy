import axios from "axios";
import type {Asks, Item, Jobs, News, User} from "@/types.ts";
import type {RouteParamValue} from "vue-router";

const instance = axios.create({
    baseURL: 'https://api.hnpwa.com/v0/'
});

export function fetchNewsList() {
    return instance.get<News[]>(`news/1.json`);
}

export function fetchJobsList() {
    return instance.get<Jobs[]>(`jobs/1.json`);
}

export function fetchAskList() {
    return instance.get<Asks[]>(`ask/1.json`);
}

export function fetchUserInfo(userName: string | RouteParamValue[]) {
    return instance.get<User>(`user/${userName}.json`)
}

export function fetchItemInfo(itemId: string) {
    return instance.get<Item>(`item/${itemId}.json`)
}

