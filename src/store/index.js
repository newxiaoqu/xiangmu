// 提供：操作用户信息的工具函数

const KEY = 'username&password'
export default {
  // 1.设置用户信息
  setUser (user) {
    window.sessionStorage.setItem(KEY, JSON.stringify(user))
  },
  // 2.获取用户信息
  getUser () {
    return JSON.parse(window.sessionStorage.getItem(KEY) || '{}')
  },
  // 3.删除用户信息
  deleteUser () {
    window.sessionStorage.removeItem(KEY)
  }
}
