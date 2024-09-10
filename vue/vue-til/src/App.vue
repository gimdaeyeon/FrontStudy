<template>
  <div class="app">
    <AppHeader/>
    <div class="app-contents">
      <router-view/>
    </div>
  </div>
</template>

<script setup>
import AppHeader from "@/components/common/AppHeader.vue";

</script>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>