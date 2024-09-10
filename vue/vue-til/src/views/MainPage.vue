<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"/>
      <ul v-else>
        <PostListItem v-for="postItem in postItems"
                      :key="postItem.id"
                      :postItem="postItem"/>
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>

<script setup>
import {fetchPosts} from "@/api";
import {ref} from "vue";
import PostListItem from "@/components/posts/PostListItem.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";

const postItems = ref([]);
const isLoading = ref(false);

async function fetchData() {
  isLoading.value = true;
  const {data} = await fetchPosts();
  isLoading.value = false;
  postItems.value = data;
}

fetchData();
</script>

<style lang="scss" scoped>

</style>