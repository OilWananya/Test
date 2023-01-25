<template>
  <div class="header">
    <div class="hamburger" v-show="screenWidth < 380" @click="onHamburgerClick">
      <div class="hamburger-item"></div>
      <div class="hamburger-item"></div>
      <div class="hamburger-item"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data(){
    return {

    }
  },
  computed: {
    screenWidth() {
      return window.innerWidth
    }
  },
  methods: {
    onHamburgerClick() {
      console.log(this.$store)
    }
  }
  

}
</script>
<style lang="css" scoped>
@media screen and (max-width: 380px) {
  .c-wrapper {
    margin-left: 0;
  }
}
.header{ 
  position:fixed;
  z-index: 1;
  top:0;
  width: 100vw;
  height: 40px;
  border: 1px solid black;
  background-color: white;
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
  margin: 2px ;
}
</style>