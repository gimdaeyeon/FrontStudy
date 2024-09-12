<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"/>
      <ul v-else>
        <PostListItem v-for="postItem in postItems"
                      :key="postItem.id"
                      :postItem="postItem"
                      @remove="removePostItem"/>
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>

<script setup>
import {ref} from "vue";
import PostListItem from "@/components/posts/PostListItem.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";
import {fetchPosts} from "@/api/post";

const postItems = ref([]);
const isLoading = ref(false);

async function fetchData() {
  isLoading.value = true;
  const {data} = await fetchPosts();
  isLoading.value = false;
  postItems.value = data;
}
fetchData();

function removePostItem(itemId){
  postItems.value = postItems.value.filter(item=>item.id!==itemId);
}
</script>

<style lang="scss" scoped>

</style>