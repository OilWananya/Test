<template>
  <CSidebar fixed >
    <CRenderFunction flat :content-to-render="nav" />
  </CSidebar>
</template>

<script>
import nav from "./_nav";

export default {
  name: "TheSidebar",
  data() {
    return {
      minimize: false,
      nav,
      show: "responsive",
      theme: {},
      ishavePermission: [],
    };
  },
  created() {
    this.handleResize();
  },
  beforeMount() {
    window.addEventListener("resize", this.handleResize);
  },
  mounted: async function () {
    this.$root.$on("toggle-sidebar", () => {
      const sidebarOpened = this.show === true || this.show === "responsive";
      this.show = sidebarOpened ? false : "responsive";
    });
    this.$root.$on("toggle-sidebar-mobile", () => {
      const sidebarClosed = this.show === "responsive" || this.show === false;
      this.show = sidebarClosed ? true : "responsive";
    });
    this.filterPermisision();
  },
  methods: {
    handleResize() {
      const screenSize = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      this.$store.commit("setScreenSize", screenSize);
    },
    async filterPermisision() {
      this.nav[0]._children = await this.nav[0]._children.filter((x) => {
        if (
          this.ishavePermission
            .map(function (e) {
              return e.key;
            })
            .indexOf(x.key) != -1 &&
          this.ishavePermission
            .some((el) => {
              return el.is_sub_menu === 0;
            })
        ) {
          if (x.items) {
            x.items = x.items.filter(
              (y) =>
                this.ishavePermission
                  .map(function (el) {
                    return el.key_valid;
                  })
                  .indexOf(y.key_valid) != -1
            );
          }
          return x;
        }
      });
    },
    getPermissionList: async function () {
      let data = await this.$callApi(
        "get",
        `${this.$baseUrl}/api/permission`,
        null,
        this.$headers,
        null
      );

      if (data.result == 1) {
        this.nav[0]._children = await this.nav[0]._children.filter((x) => {
          if (data.detail.permission.indexOf(x.id) != -1) {
            if (x.items) {
              x.items = x.items.filter(
                (y) => data.detail.permission.indexOf(y.id) != -1
              );
            }
            return x;
          }
        });
      }
    },
  },
};
</script>

