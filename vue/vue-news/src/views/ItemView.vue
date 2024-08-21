<template>
  <div>
    <p>{{item.id}}</p>
    <p>{{item.title}}</p>
    <small>{{item.time_ago}}</small>,
    <small>{{item.user}}</small>
    <p>{{item.content}}</p>
  </div>
</template>

<script>
import {mapState, useStore} from "vuex";
import {useRoute} from "vue-router";

export default {
  setup(){
    const store = useStore();
    const route = useRoute();

    const itemId = route.query.id;
    store.dispatch('fetchItem',itemId);
  },
  computed:{
    ...mapState(['item'])
  }
}
</script>

<style lang="scss" scoped>

</style>