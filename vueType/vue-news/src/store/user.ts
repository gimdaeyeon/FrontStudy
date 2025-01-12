import {defineStore} from "pinia";
import {reactive} from "vue";
import {fetchUserInfo} from "@/api";
import type {User} from "@/types.ts";

export const useUserStore = defineStore('user', () => {
    const user = reactive<User>({});

    async function fetchUser(userName:string) {
        try {
            const {data} = await fetchUserInfo(userName);

            user.id = data.id;
            user.about = data.about;
            user.created = data.created;
            user.created_time = data.created_time;
            user.karma = data.karma;

        } catch (e) {
            console.error(e);
        }
    }

    return {
        user, fetchUser
    }
});