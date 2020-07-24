// 1.引入vue和vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.1配置路由
import Login from '@/views/login' // 登录
import Home from '@/views/home'

// 2.注册
Vue.use(VueRouter)

// 3.实例化
const router = new VueRouter({
  routes: [
    // 登录
    { path: '/login', component: Login },
    // 首页
    { path: '/home', component: Home }
  ]
})

// 4.导出VueRouter实例
export default router
