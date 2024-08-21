<template>
  <div>
    <div v-for="ask in asks" :key="ask.id" >{{ask.title}}</div>
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