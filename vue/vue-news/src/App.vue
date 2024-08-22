<template>
  <ToolBar/>
  <transition name="page">
    <router-view/>
  </transition>
</template>

<script>
import ToolBar from './components/ToolBar'

export default {
  components: {
    ToolBar,
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
a{
  color: #34495e;
  text-decoration: none;
}
a:hover{
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active{
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
