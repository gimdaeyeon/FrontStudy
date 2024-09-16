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
          <p v-if="!isContentValid" class="validation-text warning">
             Contents length must be less than 250
          </p>
        </div>
        <button class="btn">Create</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script setup>

import {computed, ref} from "vue";
import {createPost} from "@/api/post";
import {useRouter} from "vue-router";
import {useAuth} from "@/store/pinia/auth";

const title = ref('');
const content = ref('');
const logMessage = ref('');
const router = useRouter();
const auth = useAuth();

const isContentValid = computed(() => {
  return content.value.length <= 250;
});

async function submitForm() {
  try {
    const resp = await createPost({
      title: title.value,
      content: content.value,
      loginId: auth.username
    });
    console.log(resp);
    router.push('/main');
  } catch (error) {
    console.log(error);
    logMessage.value = error.message;
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