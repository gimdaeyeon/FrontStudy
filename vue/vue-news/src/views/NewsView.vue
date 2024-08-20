<template>
  <div>
    <div v-for="user in news" :key="user.id">{{ user.title }}</div>
  </div>
</template>

<script>
import { useStore, mapState} from "vuex";

export default {
  setup() {
    const store = useStore();
    store.dispatch('fetchNews');

    return {}
  },
  computed:{
    ...mapState(['news']),
  },
}
</script>

<style lang="scss" scoped>

</style>