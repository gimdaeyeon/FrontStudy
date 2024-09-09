<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <ul>
        <li v-for="postItem in postItems" :key="postItem.id">
          {{postItem.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {fetchPosts} from "@/api";
import {ref} from "vue";

const postItems = ref([]);

async function fetchData(){
  const {data} = await fetchPosts();
  postItems.value = data;
}

fetchData();
</script>

<style lang="scss" scoped>

</style>