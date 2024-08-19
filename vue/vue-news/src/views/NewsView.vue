<template>
  <div>
    <div v-for="user in users" :key="user.id" >{{user.title}}</div>
  </div>
</template>

<script>
import {ref} from "vue";
import axios from "axios";

export default {
  setup(){
    const users = ref([]);

    function fetchUsers(){
      axios.get('https://api.hnpwa.com/v0/news/1.json')
          .then(resp=>users.value=resp.data)
          .catch(console.error)
    }
    fetchUsers();


    return {users}
  }
}
</script>

<style lang="scss" scoped>

</style>