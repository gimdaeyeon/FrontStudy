<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" :key="item.id" class="post">
        <div class="points">{{ item.points || 0 }}</div>
        <div>
          <p class="news-title">
            <a :href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link :to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore} from "vuex";
import {useRoute} from "vue-router";
import {computed} from "vue";

export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    const routeName =route.name;
    let listItems;

    switch (routeName){
      case 'news':
          store.dispatch('fetchNews');
          listItems = computed(()=>{
            return store.state.news;
          });
          break;
      case 'ask':
        store.dispatch('fetchAsks');
        listItems = computed(()=>{
          return store.state.asks;
        });
        break;
      case 'jobs':
        store.dispatch('fetchJobs');
        listItems = computed(()=>{
          return store.state.jobs;
        });
        break;
    }
    return {store,listItems}
  },
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>