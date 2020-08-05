import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
// 导入面包屑组件
import MyBread from '@/components/my-bread'
import axios from '@/api'
// 注册面包屑组件
Vue.component('my-bread', MyBread)

Vue.prototype.$http = axios

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
