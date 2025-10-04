<template>
  <div>
    <div class="link-box">
      <NuxtLink to="/">홈페이지</NuxtLink>
      <NuxtLink to="/main">메인 페이지</NuxtLink>
      <NuxtLink to="/product">상품 페이지</NuxtLink>
      <NuxtLink to="/blog/hello">안녕</NuxtLink>
    </div>

    <h1>{{ $route.name}} 페이지</h1>
    <slot />
  </div>
</template>

<script setup>

</script>

<style scoped>
.link-box{
  a{
    margin-right: 4px;
  }
}
</style>