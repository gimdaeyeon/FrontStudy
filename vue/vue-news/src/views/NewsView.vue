<template>
  <div>
    <ListItem :listItems="news"/>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import {mapState} from "vuex";

export default {
  components: {
    ListItem,
  },
  computed: {
    ...mapState(['news']),
  }
}

</script>

<style scoped>
</style>