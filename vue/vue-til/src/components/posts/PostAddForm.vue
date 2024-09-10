<template>
  <div class="contents">
    <h1 class="page-header">Create post</h1>
    <div class="form-wrapper">
      <form class="form">
        <div>
          <label for="title">Title: </label>
          <input id="title" type="text"/>
        </div>
        <div>
          <label for="contents">Contents</label>
          <textarea id="contents" type="text" rows="5" />
        </div>
        <button class="btn">Create</button>
      </form>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.form-wrapper .form{
  width: 100%;
}
.btn{
  color: white;
}

</style>