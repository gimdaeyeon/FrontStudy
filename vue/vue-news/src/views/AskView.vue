<template>
  <div>
    <p v-for="ask in asks" :key="ask.id">
      <router-link :to="{path:'/item',query:{id:ask.id}}">
        {{ ask.title }}
      </router-link>
      <small>{{ask.time_ago}} by {{ask.user}}</small>
    </p>
  </div>
</template>

<script>

import {mapState, useStore} from "vuex";

export default {
  setup(){
    const store = useStore();
    store.dispatch('fetchAsks');
  },
  computed:{
    ...mapState(['asks']),
  }
}
</script>

<style lang="scss" scoped>

</style>