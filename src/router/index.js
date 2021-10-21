import VueRouter from "vue-router";
import store from "../store";
import HomeContainer from "../container/HomeContainer.vue";
import TestContainer from "../container/TestContainer.vue";
import NoAuth from "../container/NoAuth.vue";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeContainer,
  },
  {
    path: "/testPage",
    name: "testPage",
    component: TestContainer,
  },
  {
    path: "/noAuth",
    name: "noAuth",
    component: NoAuth,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // 路由跳转权限控制
  if (store.state.auth[to.path]) {
    next();
  } else {
    if (to.path === "/noAuth") {
      next();
    } else {
      next({ path: "/noAuth" });
    }
  }
});

export default router;
