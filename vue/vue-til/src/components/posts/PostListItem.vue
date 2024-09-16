<template>
  <li>
    <div class="post-title">
      {{ props.postItem.title }}
    </div>
    <div class="post-contents">
      {{ props.postItem.content }}
    </div>
    <div class="post-time">
      <span>{{ formatDate }}</span>
      <span v-if="isAuthor" @click.stop>
        <i class="icon ion-md-create" @click="routeEditPage"></i>
        <i class="icon ion-md-trash" @click="deleteItem"></i>
      </span>
    </div>
  </li>
</template>

<script setup>
import {deletePost} from "@/api/post";
import {useRouter} from "vue-router";
import {computed} from "vue";
import {useAuth} from "@/store/pinia/auth";

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
const auth = useAuth();


async function deleteItem() {
  if (!confirm('게시글을 삭제하시겠습니까?')) return;
  await deletePost(props.postItem.id);
  emit('remove', props.postItem.id);
}

function routeEditPage() {
  router.push(`/post/${props.postItem.id}`);
}

const formatDate = computed(() => {
  const date = new Date(props.postItem.createdDate);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month > 9 ? month : `0${month}`;
  const day = date.getDate();
  let hours = date.getHours();
  hours = hours > 9 ? hours : `0${hours}`;
  const minutes = date.getMinutes();
  return `${year}-${month}-${day} ${hours}:${minutes}`;
});

const isAuthor = computed(()=>auth.username === props.postItem.loginId);

</script>

<style scoped>

</style>