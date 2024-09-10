<template>
  <div class="contents">
    <h1 class="page-header">Create post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title: </label>
          <input id="title" type="text" v-model="title"/>
        </div>
        <div>
          <label for="contents">Contents</label>
          <textarea id="contents" type="text" rows="5" v-model="content"/>
        </div>
        <button class="btn">Create</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";
import {createPost} from "@/api";

const title = ref('');
const content = ref('');
const logMessage = ref('');

async function submitForm() {
  try {
    const resp = await createPost({
      title: title.value,
      content: content.value
    });
    console.log(resp)
  } catch (error) {
    logMessage.value=error.message;
  }
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