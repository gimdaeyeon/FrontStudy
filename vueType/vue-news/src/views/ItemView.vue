<template>
  <div>
    <section>
      <!-- 사용자 정보-->
      <UserProfile :item="user"/>
    </section>
    <section>
      <h2>{{ item.title }}</h2>
    </section>
    <section>
      <div v-html="item.content"/>
    </section>
  </div>
</template>

<script setup lang="ts">

import {useRoute} from "vue-router";
import {useItemStore} from "@/store/item.ts";
import {useUserStore} from "@/store/user.ts";
import {watch} from "vue";
import UserProfile from "@/components/UserProfile.vue";

const route = useRoute();
const {fetchItem, item} = useItemStore();
const {fetchUser, user} = useUserStore();


watch(item, async (newItem) => {
  await fetchUser(newItem.user);
});

fetchItem(route.query.id);

// import {mapState, useStore} from "vuex";
// import {useRoute} from "vue-router";
// import UserProfile from "@/components/UserProfile.vue";
// import {computed, watch} from "vue";
//
// export default {
//   components: {
//     UserProfile,
//   },
//   setup() {
//     const store = useStore();
//     const route = useRoute();
//
//     const itemId = route.query.id;
//     const item = computed(()=>store.state.item);
//
//     watch(item,(value)=>{
//       store.dispatch('fetchUser',value.user);
//     });
//     store.dispatch('fetchItem', itemId);
//   },
//   computed: {
//     ...mapState(['item'])
//   }
// }
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding: 8px;
}

.time {
  font-size: 0.7rem;
}

</style>