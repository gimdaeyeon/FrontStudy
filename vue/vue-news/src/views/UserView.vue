<template>
  <div>
    <p>name: {{userInfo.id}}</p>
    <p>karma: {{userInfo.karma}}</p>
    <p>created: {{userInfo.created}}</p>
  </div>
</template>

<script>

import {useRoute} from "vue-router";
import {mapState, useStore} from "vuex";

export default {
  setup(){
    const route = useRoute();
    const store = useStore();
    const userName = route.params.id;
    store.dispatch('fetchUser',userName);
  },
  computed:{
    ...mapState({
      userInfo:'user'
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
