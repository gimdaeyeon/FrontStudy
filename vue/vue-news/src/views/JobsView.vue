<template>
  <div>
    <ListItem :listItems="jobs" />
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
import {mapState, useStore} from "vuex";

export default {
  components:{
    ListItem
  },
  setup(){
    const store = useStore();
    store.commit('startSpinner');
    store.dispatch('fetchJobs')
        .then(() => store.commit('endSpinner'));
  },
  computed:{
    ...mapState(['jobs']),
  }
}
</script>

<style scoped>
</style>