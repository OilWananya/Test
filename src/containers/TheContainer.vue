<template>
  <div class="c-app">
    <Header v-if="$cookies.get('setLoginTestClickNext')"></Header>
    <div class="c-wrapper">
      <NavBar v-if="!isScreenMobile && $cookies.get('setLoginTestClickNext')"></NavBar>
      <div>
          <div class="f-right"><b-button @click.prevent="clearCookies">Logout</b-button></div>
        </div>
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
import NavBar from '../components/NavBar.vue'
import Header from '../components/Header.vue'
export default {
  name: "TheContainer",
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
  },
  methods:{
    clearCookies(){
      this.$cookies.remove('emailTestClickNext');
      this.$cookies.remove('setLoginTestClickNext');
      window.location.href = "/";
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
.f-right{
  float: right;
}
</style>
