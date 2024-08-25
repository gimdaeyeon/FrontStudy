<template>
  <div>
    <ListItem :listItems="jobs" />
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
import {mapState} from "vuex";

export default {
  components:{
    ListItem
  },
  computed:{
    ...mapState(['jobs']),
  }
}
</script>

<style scoped>
</style>