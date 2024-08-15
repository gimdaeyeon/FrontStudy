<template>
  <div>
    <p>{{message}}</p>
    <button @click="changeMessage">클릭</button>
  </div>
</template>

<script>

import {useMessage} from "./hooks/useMessage";

export default {
  setup(){
    const {message,changeMessage} = useMessage();

    return {message,changeMessage};
  }
}
</script>

<style lang="scss" scoped>

</style>