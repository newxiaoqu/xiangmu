// 配置axios的默认配置
// 1.导入
import axios from 'axios'
import store from '@/store'
import router from '@/router'
import JSONBIGINT from 'json-bigint'

// 2.默认配置
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

// axios.defaults.headers.Authorization = `Bearer ${store.getUser().token}`

axios.defaults.transformResponse = [(data) => {
  // data json格式的字符串
  // 使用 json-bigint 进行转换
  return JSONBIGINT.parse(data)
}]

// 3.请求拦截器  作用：在每次发送请求前，可以处理一些业务逻辑
axios.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${store.getUser().token}`
  return config
}, err => Promise.reject(err))

// 4.响应拦截器   作用：在每次响应前，可以处理一些业务逻辑
axios.interceptors.response.use(response => response, error => {
  // 如果响应状态码是401，那么代表token失效或者未登录
  if (error.response.status === 401) {
    // 跳转到登录页面，让用户重新登录即可
    router.push('/login')
  }
  return Promise.reject(error)
})

export default axios
