<template>
  <div id="app">
    <div class="left-menu">
      <div class="page-btn" v-for="item in menu" @click="onClickPage(item.path)" :key="item.path">{{item.name}}</div>
    </div>
    <div class="right-count">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>


export default {
  name: "App",
  components: {
  },
  data() {
    return {
      menu: [
        {
          name: '首页',
          path: '/'
        },
        {
          name: '测试页面',
          path: '/testPage'
        },
        {
          name: '权限测试',
          path: '/noAuth'
        }
      ]
    };
  },
  mounted: function () {
  },
  methods: {
    onClickPage(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
}
.left-menu {
  width: 130px;
  border-right: 1px solid #ccc;
  .page-btn {
    width: 100px;
    cursor: pointer;
    border: 1px solid #ccc;
    padding: 6px;
    margin: 3px;
  }
}

.right-count {
  flex: 1;
}

.home {
  width: 300px;
  height: 300px;
  margin: 100px auto;
}
</style>
