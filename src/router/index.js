// 1.引入vue和vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.1配置路由
import Login from '@/views/login' // 登录
import Home from '@/views/home' // 首页
import Welcome from '@/views/welcome' // 欢迎页面、二级路由组件
import NotFound from '@/views/404' // 404页面 一级路由
import Article from '@/views/article' // 内容管理页面，二级路由组件
import Image from '@/views/image' // 素材管理页面，二级路由组件
import Publish from '@/views/publish' // 发布文章管理页面 二级路由
import Comment from '@/views/comment' // 评论管理页面 二级路由
import Fans from '@/views/fans' // 粉丝管理页面 二级路由
import Setting from '@/views/setting' // 个人设置页面 二级路由

// 2.注册
Vue.use(VueRouter)

// 3.实例化
const router = new VueRouter({
  routes: [
    // 登录
    { path: '/login', component: Login },
    // 首页
    {
      path: '/',
      component: Home,
      children: [
        // 二级路由：欢迎页面
        { path: '/', component: Welcome },
        // 二级路由：内容管理页面
        { path: '/article', component: Article },
        // 二级路由：素材管理页面
        { path: '/image', component: Image },
        // 二级路由：发布文章管理页面
        { path: '/publish', component: Publish },
        // 二级路由：评论管理页面
        { path: '/comment', component: Comment },
        // 二级路由：粉丝管理页面
        { path: '/fans', component: Fans },
        // 二级路由：个人设置页面
        { path: 'setting', component: Setting }
      ]
    },
    // 404页面
    // 注意：404页面应该写在所有路由规则的最后
    { path: '*', component: NotFound }
  ]
})

// 4.导出VueRouter实例
export default router
