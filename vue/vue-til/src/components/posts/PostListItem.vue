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
    </div>
  </li>
</template>

<script setup>
// eslint-disable-next-line no-undef
  const props = defineProps({
    postItem:{
      type:Object,
      required:true
    }
  });
</script>

<style scoped>

</style>