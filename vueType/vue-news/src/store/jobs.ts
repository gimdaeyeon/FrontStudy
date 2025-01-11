import {defineStore} from "pinia";
import {reactive} from "vue";
import {fetchJobsList} from "@/api";
import type {Jobs} from "@/types.ts";

export const useJobsStore = defineStore('jobs', () => {
    const jobsList = reactive<Jobs[]>([]);

    async function fetchJobs() {
        try {
            const {data} = await fetchJobsList();
            console.log(data);

            for (const jobsInfo of data as Jobs[]) {
                jobsList.push(jobsInfo)
            }
        } catch (e) {
            console.error(e);
        }
    }

    return {
        jobsList, fetchJobs
    }
});