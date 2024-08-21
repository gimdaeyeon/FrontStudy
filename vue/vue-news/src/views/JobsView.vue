<template>
  <div>
    <div v-for="job in jobs" :key="job.id" >{{job.title}}</div>
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