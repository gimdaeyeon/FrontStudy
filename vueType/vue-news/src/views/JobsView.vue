<template>
  <ListItem :list="jobsList"/>
</template>

<script setup lang="ts">
import {useJobsStore} from "@/store/jobs.ts";
import ListItem from "@/components/ListItem.vue";

const {fetchJobs, jobsList} = useJobsStore();
fetchJobs();

</script>

<style scoped>

</style>