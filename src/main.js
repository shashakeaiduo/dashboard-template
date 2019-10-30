import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import Normalize from 'normalize.css'
import './plugins/element.js'
import http from './http.js'

Vue.use(ElementUI)
Vue.use(Normalize)

Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
