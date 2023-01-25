<template>
  <nav class="navbar-container">
    <div class="nav-item" v-for="(menu, index) in menus">
      <div class="menu-item" @click="onMenuClick(menu.to)" :class="{ active: isMenuActive(menu.to) }">
        {{ menu.name }}
      </div>

    </div>

  </nav>
</template>
<script>
import menuConstant from '../containers/_nav'
export default {
  name: "TheSidebar",
  data() {
    return {
      menus: menuConstant[0]._children,
      currentMenu: ''
    }
  },
  computed: {
  },
  methods: {
    isMenuActive(menuUrl) {
      if(this.$route.fullPath.includes(menuUrl)) 
      return true
      else return false
    },
    onMenuClick(menuUrl) {
      this.$router.push(menuUrl)
    }
  },
  mounted() {
  }
}

</script>
<style lang="css" scoped>
@media screen and (max-width: 380px) {
  .c-wrapper {
    margin-left: 0;
  }
}
.navbar-container {
  position: fixed;
  background-color: #00000031;
  z-index: 2;
  top: 0;
  left: 0;
  width: 200px;
  padding: 12px;
  height: 100vh;
  margin:40px 0 0 0;
}

.menu-item {
  margin: 8px 0;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
}

.menu-item.active {
  background: #00000073;
  color: white;
}
</style>