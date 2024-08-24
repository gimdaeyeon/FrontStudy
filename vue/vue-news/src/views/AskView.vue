<template>
  <div>
    <ListItem :listItems="asks" />
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import {mapState, useStore} from "vuex";
export default {
  components:{
    ListItem
  },
  setup(){
    const store = useStore();
    store.commit('startSpinner');
    store.dispatch('fetchAsks')
        .then(() => store.commit('endSpinner'));
  },
  computed:{
    ...mapState(['asks']),
  }
}
</script>

<style scoped>

</style>