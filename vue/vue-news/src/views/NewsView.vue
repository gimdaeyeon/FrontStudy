<template>
  <div>
    <ListItem :listItems="news"/>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import {mapState} from "vuex";
import ListMixin from "@/mixins/ListMixin";

export default {
  components: {
    ListItem,
  },
  mixins:[ListMixin],
  computed: {
    ...mapState(['news']),
  }
}

</script>

<style scoped>
</style>