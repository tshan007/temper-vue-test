import Vue from 'vue'
import Vuex from 'vuex'
import home from './home.store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home
  }
})
