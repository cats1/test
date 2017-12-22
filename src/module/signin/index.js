// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '../../store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../../assets/css/v1.less'
import utils from '../../utils/utils.js'
Vue.use(ElementUI)
Vue.use(utils)

// import Mheader from '../../components/Mheader'
// import pageJson from '../../../static/zh-cn.json'
Vue.config.productionTip = false
// console.log(pageJson)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
