<template>
  <div>
    <Header ></Header>
    <div class="custom-container" :class="{'mobile': isScreenMobile}">
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
.custom-container {
  margin: 40px 0 0 200px;
}

.custom-container.mobile {
  margin: 40px 0 0 0;
}
</style>
