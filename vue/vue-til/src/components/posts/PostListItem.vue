<template>
  <li>
    <div class="post-title">
      {{ props.postItem.title }}
    </div>
    <div class="post-contents">
      {{ props.postItem.content }}
    </div>
    <div class="post-time">
      {{ props.postItem.createdDate }}
      <i class="icon ion-md-create" @click="routeEditPage"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script setup>
import {deletePost} from "@/api/post";
import {useRouter} from "vue-router";

// eslint-disable-next-line no-undef
const props = defineProps({
  postItem: {
    type: Object,
    required: true
  }
});

// eslint-disable-next-line no-undef
const emit = defineEmits(['remove']);
const router = useRouter();

async function deleteItem() {
  if (!confirm('게시글을 삭제하시겠습니까?')) return;
  await deletePost(props.postItem.id);
  emit('remove', props.postItem.id);
}

function routeEditPage() {
  router.push(`/post/${props.postItem.id}`);
}

</script>

<style scoped>

</style>