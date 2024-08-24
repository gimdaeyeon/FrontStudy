<template>
  <ToolBar/>
  <transition name="page">
    <router-view/>
  </transition>
  <WaitSpinner :loading="loadingStatus"></WaitSpinner>
</template>

<script>
import ToolBar from './components/ToolBar'
import WaitSpinner from "@/components/WaitSpinner.vue";
import {mapState, useStore} from "vuex";

export default {
  components: {
    ToolBar, WaitSpinner
  },
  setup() {
    const store = useStore();
    store.commit('startSpinner');

    store.commit('endSpinner');
  },
  computed: {
    ...mapState(['loadingStatus']),
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}

/*Router Trasition*/
.page-enter-active, .page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from, .page-leave-to {
  opacity: 0;
}
</style>
