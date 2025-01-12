<template>
  <UserProfile :item="user"/>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {useUserStore} from "@/store/user.ts";
import UserProfile from "@/components/UserProfile.vue";

const route = useRoute();
const {fetchUser, user} = useUserStore();
fetchUser(route.params.userName);



</script>

<style scoped>

</style>