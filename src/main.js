import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ajax from './config/ajax'
import './style/common'
import './config/rem'

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面meta */
  if (to.meta.content) {
    var head = document.getElementsByTagName('head');
    var meta = document.createElement('meta');
    meta.content = to.meta.content;
    head[0].appendChild(meta);
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
    Vue.prototype.head = to.meta.title
  }
  next()
});

new Vue({
  el: '#app',
  router,
  store, //使用store
  components: {
    App
  },
  template: '<App/>'
})