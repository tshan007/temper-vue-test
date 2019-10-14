import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ApiService from './common/api.service'

library.add(faAngleDown, faAngleUp)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

ApiService.init()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
