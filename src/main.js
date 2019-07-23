import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ajax from './support/ajax.js'
import second from "./component/second.vue";
import article from "./component/article.vue";
import css from "./css/pulib.css"
Vue.prototype.Get = ajax
Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(css);

var router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: App },
    { path: '/sec', component: second,name:'second'},
    {path: '/act', component: article,name:'article'}
  ]
})
new Vue({
  el: "#app",
  router: router,
  template: '<router-view></router-view>'
})
