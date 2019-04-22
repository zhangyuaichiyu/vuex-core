import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home'
import item from '../page/item'
import score from '../page/score'
Vue.use(Router)


export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'home',
    component: home,
    meta: {
      title: "首页",
    },
  }, {
    path: '/item',
    name: 'item',
    component: item,
    meta: {
      title: "题",
    },
  }, {
    path: '/score',
    name: 'score',
    component: score,
    meta: {
      title: "得分",
    },
  }],
})

// export default new Router({
//   mode: 'history',
//   routes: [{
//     path: '/',
//     component: App,
//     children: [{
//       path: '',
//       component: r => require.ensure([], () => r(require('../page/home')), 'home')
//     }, {
//       path: '/item',
//       component: r => require.ensure([], () => r(require('../page/item')), 'item')
//     }, {
//       path: '/score',
//       component: r => require.ensure([], () => r(require('../page/score')), 'score')
//     }]
//   }],
//   scrollBehavior(to, from, savedPosition) {
//     return {
//       x: 0,
//       y: 0
//     }
//   }
// })