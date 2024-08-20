<template>
  <div>
    <div v-for="item in ask" :key="item.id" >{{item.title}}</div>
  </div>
</template>

<script>
import {ref} from "vue";
import {fetchAskList} from "@/api";

export default {
  setup(){
    const ask = ref([]);

    fetchAskList()
        .then(resp=>ask.value=resp.data)
        .catch(console.log);
    return {
      ask
    }
  }
}
</script>

<style lang="scss" scoped>

</style>