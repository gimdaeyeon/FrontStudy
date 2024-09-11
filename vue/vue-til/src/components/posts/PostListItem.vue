<template>
  <li >
    <div class="post-title">
      {{props.postItem.title}}
    </div>
    <div class="post-contents">
      {{props.postItem.content}}
    </div>
    <div class="post-time">
      {{props.postItem.createdDate}}
      <i class="icon ion-md-create"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script setup>
  import {deletePost} from "@/api/post";

// eslint-disable-next-line no-undef
const props = defineProps({
    postItem:{
      type:Object,
      required:true
    }
  });

async function deleteItem(){
    await deletePost(props.postItem.id);
  console.log('삭제!!')
  }

</script>

<style scoped>

</style>