import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugins/element-ui'
import { listenToColorScheme } from '@/plugins/adaptive-color-scheme'
import { MultiWindow } from '@/mixins/multi-window'
import '@/directives/throttled-click'
import '@/directives/debounced-click'
// import '@/plugins/axios-mock-adapter'

Vue.config.productionTip = false
Vue.mixin(MultiWindow)

const vueInstance = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

listenToColorScheme(vueInstance)
