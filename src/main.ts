// Vue, router, Vuex, directive, plugin, mixin
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/directives'
import '@/plugins'
import '@/mixins'

// Style
import 'normalize.css'
import '@/styles/element-variables.scss'
import '@/styles/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
