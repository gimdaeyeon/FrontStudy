<template>
  <div>
    <div v-for="user in users" :key="user.id">{{ user.title }}</div>
  </div>
</template>

<script>
import {ref} from "vue";
import {fetchNewsList} from '../api/index'

export default {
  setup() {
    const users = ref([]);

    fetchNewsList()
        .then(resp => users.value = resp.data)
        .catch(console.error);


    return {users}
  }
}
</script>

<style lang="scss" scoped>

</style>