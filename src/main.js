import Vue from 'vue'

import VueRouter from 'vue-router'
import router from './router'
import store from './store'

import App from './App.vue'
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
