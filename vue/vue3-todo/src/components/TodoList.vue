<template>
  <ul>
    <li v-for="(item,index) in items" :key="index" >{{item}}</li>
  </ul>
</template>

<script>
import {ref} from "vue";

export default {
  setup(){
    const items = ref(['애플','삼성','인프런']);

    return {items}
  }
}
</script>

<style lang="scss" scoped>

</style>