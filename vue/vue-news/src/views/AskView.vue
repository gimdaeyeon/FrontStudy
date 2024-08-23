<template>
  <div>
    <ListItem/>
<!--    <ul class="news-list">-->
<!--      <li v-for="item in asks" :key="item.id" class="post">-->
<!--        <div class="points">{{item.points}}</div>-->
<!--        <div>-->
<!--          <p class="news-title">-->
<!--            <router-link :to="{path:'/item',query:{id:item.id}}">-->
<!--              {{ item.title }}-->
<!--            </router-link>-->
<!--          </p>-->
<!--          <small class="link-text">-->
<!--            {{ item.time_ago }} by-->
<!--            <router-link :to="`/user/${item.user}`" class="link-text">-->
<!--              {{ item.user }}-->
<!--            </router-link>-->
<!--          </small>-->
<!--        </div>-->
<!--      </li>-->
<!--    </ul>-->
  </div>
</template>

<script>
// import {mapState, useStore} from "vuex";
import ListItem from '../components/ListItem.vue'
export default {
  components:{
    ListItem
  }
  // setup(){
  //   const store = useStore();
  //   store.dispatch('fetchAsks');
  // },
  // computed:{
  //   ...mapState(['asks']),
  // }
}
</script>

<style scoped>

</style>