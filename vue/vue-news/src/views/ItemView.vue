<template>
  <div>
    <section>
      <!--      질문 상세정보-->
      <div class="user-container">
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${item.user}`">
            {{ item.user }}
          </router-link>
          <div class="time">
            {{ item.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ item.title }}</h2>
    </section>
    <section>
      <div v-html="item.content"/>
    </section>
  </div>
</template>

<script>
import {mapState, useStore} from "vuex";
import {useRoute} from "vue-router";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();

    const itemId = route.query.id;
    store.dispatch('fetchItem', itemId);
  },
  computed: {
    ...mapState(['item'])
  }
}
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
.user-description{
  padding: 8px;
}
.time{
  font-size: 0.7rem;
}

</style>