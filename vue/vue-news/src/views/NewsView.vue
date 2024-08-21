<template>
  <div>
    <div v-for="item in news" :key="item.id">{{ item.title }}</div>
  </div>
</template>

<script>
import { useStore, mapState} from "vuex";

export default {
  setup() {
    const store = useStore();
    store.dispatch('fetchNews');

  },
  computed:{
    ...mapState(['news']),
  },
}
</script>

<style lang="scss" scoped>

</style>