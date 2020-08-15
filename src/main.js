import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import axios from '@/api'
// 使用自己的插件
import Plugin from '@/plugin'
import '@/styles/index.less'
Vue.use(Plugin)

Vue.prototype.$http = axios

Vue.use(ElementUI)
//
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
