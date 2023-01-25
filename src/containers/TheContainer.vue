<template>
  <div class="c-app">
    <!-- <TheSidebar /> -->
    <Header></Header>
    <div class="c-wrapper">
      <NavBar v-if="!isScreenMobile"></NavBar>
      <div class="c-body" :class="{ 'mobile': isScreenMobile }">
        <main class="c-main">

          <b-container fluid :class="[$route.name === 'FinancialPage' ? 'FinancialPage' : '']">
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </b-container>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import TheSidebar from "./TheSidebar";
import NavBar from '../components/NavBar.vue'
import Header from '../components/Header.vue'
export default {
  name: "TheContainer",
  components: {
    TheSidebar,
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
};
</script>

<style scoped>
.c-body {
  margin: 40px 0 0 200px;
}
.c-body.mobile {
  margin: 40px 0 0 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.report_customer_detail {
  padding-right: 15px;
}
</style>
