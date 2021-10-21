import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import home from './home'

const store = new Vuex.Store({
    state: {
        // 接口获取权限
        auth: {
            '/': true,
            '/testPage': true
        }
    },
    mutations: {
    },
    actions: {
    },
    // 每个模块store
    modules: {
        home
    }
});

export default store;
