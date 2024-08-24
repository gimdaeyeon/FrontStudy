<template>
  <div>
    <UserProfile/>
  </div>
</template>

<script>

import {useRoute} from "vue-router";
import { useStore} from "vuex";
import UserProfile from "@/components/UserProfile.vue";

export default {
  components: {UserProfile},
  setup(){
    const route = useRoute();
    const store = useStore();
    const userName = route.params.id;
    store.dispatch('fetchUser',userName);
  },
}
</script>

<style lang="scss" scoped>

</style>
