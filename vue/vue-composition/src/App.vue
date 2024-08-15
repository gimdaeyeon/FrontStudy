<template>
  <div>
    <p>{{message}}</p>
    <button @click="changeMessage">클릭</button>
  </div>
</template>

<script>

import {ref} from "vue";

export default {
  setup(){
    const message = ref('hello');

    function changeMessage(){
      message.value = 'hi';
    }

    return {message,changeMessage};
  }
}
</script>

<style lang="scss" scoped>

</style>