<template>
  <div>
    <Header></Header>
    <div class="container">
      <NavBar v-if="!isScreenMobile"></NavBar>
      <router-view></router-view>

    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    Header,
  },
  computed: {
    screenWidth() {
      return window.innerWidth
    },
    isScreenMobile() {
      return this.screenWidth < 380
    }
  }
}
</script>

<style lang="css">
.c-body {
  margin: 40px 0 0 200px;
}

.c-body.mobile {
  margin: 40px 0 0 0;
}
</style>
