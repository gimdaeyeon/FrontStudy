<template>
  <div>
    <ListItem :listItems="news"/>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import {mapState, useStore} from "vuex";

export default {
  components: {
    ListItem,
  },
  setup() {
    const store = useStore();
    store.commit('startSpinner');
    store.dispatch('fetchNews')
        .then(() => store.commit('endSpinner'));
  },
  computed: {
    ...mapState(['news']),
  }
}

</script>

<style scoped>
</style>