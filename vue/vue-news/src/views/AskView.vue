<template>
  <div>
    <div v-for="ask in asks" :key="ask.id" >{{ask.title}}</div>
  </div>
</template>

<script>
import {ref} from "vue";
import {fetchAskList} from "@/api";

export default {
  setup(){
    const asks = ref([]);

    fetchAskList()
        .then(resp=>asks.value=resp.data)
        .catch(console.log);
    return {
      asks
    }
  }
}
</script>

<style lang="scss" scoped>

</style>