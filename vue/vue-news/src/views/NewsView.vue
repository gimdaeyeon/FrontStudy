<template>
  <div>
    <p v-for="item in news" :key="item.id">
      <a :href="item.url">
        {{ item.title }}
      </a>
      <small>{{ item.time_ago }} by
        <router-link :to="`/user/${item.user}`">
          {{ item.user }}
        </router-link>
      </small>
    </p>
  </div>
</template>

<script>
import {mapState, useStore} from "vuex";

export default {
  setup() {
    const store = useStore();
    store.dispatch('fetchNews');

  },
  computed: {
    ...mapState(['news']),
  },
}
</script>

<style lang="scss" scoped>

</style>