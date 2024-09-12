<template>
  <div class="contents">
    <h1 class="page-header">Edit post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title: </label>
          <input id="title" type="text" v-model="title"/>
        </div>
        <div>
          <label for="contents">Contents</label>
          <textarea id="contents" type="text" rows="5" v-model="content"/>
          <p v-if="!isContentValid" class="validation-text warning">
            Contents length must be less than 250
          </p>
        </div>
        <button class="btn">Edit</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {editPost, fetchPost} from "@/api/post";

const title = ref('');
const content = ref('');
const logMessage = ref('');
const route = useRoute();
const router = useRouter();
const postId = route.params.id;
created();


const isContentValid = computed(() => {
  return content.value.length <= 250;
});

async function submitForm() {
  try {
    await editPost(postId, {
      title: title.value,
      content: content.value
    });
    router.push('/main');
  } catch (error) {
    console.log(error);
    logMessage.value = error.message;
  }

}

async function created() {
  const {data} = await fetchPost(postId);
  title.value = data.title;
  content.value = data.content;
}
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}

.btn {
  color: white;
}
</style>