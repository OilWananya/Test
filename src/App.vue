<template>
  <div>
    <Header ></Header>
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
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
  computed: {
    screenWidth() {
      return this.window.width
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
