import Vue from 'vue'
import Router from 'vue-router'
import base from '../module/account/base'
import safe from '../module/account/safe'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: '/',
  routes: [{
    path: '/base',
    name: 'base',
    component: base
  }, {
    path: '/safe',
    name: 'safe',
    component: safe
  }]
})
