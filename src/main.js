// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuerouter from 'vue-router'
import axios from 'axios'
import routes from "./routerConfig"
import stores from "./store/index.js"
import Loading from "./components/loading/index.js"
import filters from "./filters"
Vue.config.productionTip = false
Vue.use(Vuerouter);
Vue.use(Loading);
Vue.filter("normalTime",filters.normalTime.normalTime);
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
    stores.dispatch('showLoading');
    return config;
}, function (error) {
    return Promise.reject(error);
});
const route=new Vuerouter({/*
    mode:"history",*/
    scrollBehavior:function(){
        return {y:0}
    },
    routes:routes
});
axios.interceptors.response.use(function (response) { //配置请求回来的信息
    stores.dispatch('hideLoading');
    return response;
}, function (error) {

    return Promise.reject(error);
});
Vue.prototype.$http=axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
    router:route,
    store:stores,
  template: '<App/>',
  components: { App,Loading }
})
