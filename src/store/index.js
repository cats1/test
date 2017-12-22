import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import cart from './modules/cart'
Vue.use(Vuex)

const state = {
  count: 1,
  language: 'zh-Hans'
}
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  state,
  actions,
  getters,
  modules: {
    cart
  },
  strict: debug
})
