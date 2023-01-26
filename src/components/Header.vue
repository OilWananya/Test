<template>
  <div class="header" v-if="$cookies.get('setLoginTestClickNext')">
      <div class="hamburger" v-show="$parent.window.width < 380" @click="onHamburgerClick">
        <div class="hamburger-item"></div>
        <div class="hamburger-item"></div>
        <div class="hamburger-item"></div>
      </div>
      <div class="logout"><b-button @click.prevent="clearCookies">Logout</b-button></div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {

    }
  },
  methods: {
    onHamburgerClick() {
      // console.log(this.$parent)
    }
  }


}
</script>
<style lang="css" scoped>
.wrapper {
  width: 100vw;
}
.header {
  position: fixed;
  display: flex;
  z-index: 1;
  top: 0;
  width: 100vw;
  height: 40px;
  border-bottom: 1px solid black;
  background-color: white;
}

.logout {
  right: 0;
  width: fit-content;
  margin: 0 10px 0 auto;
}

.hamburger {
  width: 24px;
  height: 24px;
  padding: 10px 0 0 10px;
}

.hamburger-item {
  background-color: black;
  width: 18px;
  height: 2px;
  margin: 2px;
}
</style>