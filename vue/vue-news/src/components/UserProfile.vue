<template>
  <div class="user-container">
    <div>
      <i class="fa-solid fa-user"></i>
    </div>
    <div class="user-description">
      <div>
        {{ item.id }}
      </div>
      <div class="time">
        {{ item.created }}
      </div>
      <div>{{item.karma}}</div>
    </div>
  </div>
</template>

<script>

import {mapState} from "vuex";

export default {
  computed: {
    ...mapState({item: 'user'}),
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

.user-description {
  padding: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>