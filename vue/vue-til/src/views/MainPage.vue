<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"/>
      <ul v-else>
        <PostListItem v-for="postItem in postItems"
                      :key="postItem.id"
                      :postItem="postItem"
                      @click="postDetail(postItem.id)"
                      @remove="removePostItem" class="post-itme"/>
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
  <PostModal v-show="modalOpen" @close="closeModal" :postItem="modalProps" />
</template>

<script setup>
import {ref} from "vue";
import PostListItem from "@/components/posts/PostListItem.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";
import {fetchPosts} from "@/api/post";
import PostModal from "@/components/posts/PostModal.vue";

const postItems = ref([]);
const isLoading = ref(false);
const modalOpen = ref(false);
const modalProps = ref({});
fetchData();
const closeModal =()=>modalOpen.value= false;

async function fetchData() {
  isLoading.value = true;
  const {data} = await fetchPosts();
  isLoading.value = false;
  postItems.value = data;
}

function postDetail(postId){
  modalProps.value = postItems.value.find(post=>post.id===postId);
  modalOpen.value = true;
}

function removePostItem(itemId) {
  postItems.value = postItems.value.filter(item => item.id !== itemId);
}
</script>

<style scoped>
.post-itme{
  cursor: pointer;
}
</style>