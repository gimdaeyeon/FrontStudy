<template>
  <div>
    <ListItem :listItems="asks" />
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import {mapState} from "vuex";
import ListMixin from "@/mixins/ListMixin";
export default {
  components:{
    ListItem
  },
  mixins:[ListMixin]
 ,
  computed:{
    ...mapState(['asks']),
  }
}
</script>

<style scoped>

</style>