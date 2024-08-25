<template>
  <div>
    <ListItem :listItems="asks" />
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import {mapState} from "vuex";
export default {
  components:{
    ListItem
  },
  computed:{
    ...mapState(['asks']),
  }
}
</script>

<style scoped>

</style>