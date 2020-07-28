// 配置axios的默认配置
// 1.导入
import axios from 'axios'
import store from '@/store'

// 2.默认配置
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

// 3.默认配置
axios.defaults.headers.Authorization = `Bearer ${store.getUser().token}`

export default axios
