<template>
  <div>
    <p v-for="job in jobs" :key="job.id">
      <a :href="job.url">
        {{ job.title }}
      </a>
      <small>{{job.time_ago}}, {{job.domain}}</small>
    </p>
  </div>
</template>

<script>

import {mapState, useStore} from "vuex";

export default {
  setup(){
    const store = useStore();
    store.dispatch('fetchJobs');
  },
  computed:{
    ...mapState(['jobs'])
  }
}
</script>

<style lang="scss" scoped>

</style>