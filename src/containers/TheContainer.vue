<template>
  <div class="c-app">
    <!-- <TheSidebar /> -->
    <div class="c-wrapper">
      <div class="c-body">
        <main class="c-main">
          <b-container
            fluid
            :class="[$route.name === 'FinancialPage' ? 'FinancialPage' : '' ]"
          >
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

export default {
  name: "TheContainer",
  components: {
    TheSidebar
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.report_customer_detail{
  padding-right: 15px;
}
</style>
