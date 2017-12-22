import Vue from 'vue'
import Router from 'vue-router'
import base from '../module/account/base'
import theme from '../module/account/theme'
import safe from '../module/account/safe'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: '/',
  routes: [{
    path: '/',
    name: '',
    component: base
  }, {
    path: '/theme',
    name: 'theme',
    component: theme
  }, {
    path: '/safe',
    name: 'safe',
    component: safe
  }]
})
