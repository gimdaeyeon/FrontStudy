<template>
  <div>
    <div v-for="job in jobs" :key="job.id" >{{job.title}}</div>
  </div>
</template>

<script>
import {ref} from "vue";
import {fetchJobsList} from "@/api";

export default {
  setup(){
    const jobs = ref([]);

    fetchJobsList()
        .then(resp=>jobs.value=resp.data)
        .catch(console.log);

    return{jobs}
  }
}
</script>

<style lang="scss" scoped>

</style>