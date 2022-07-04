/* 
  进行local数据存储管理的工具模块
*/

// 设置常量名，不易出错
const USER_KEY = 'user_key'


const storageUtils = {
  // 存储用户user
  saveUser(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  },


  // 读取用户user
  getUser() {
    return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
  },

  // 移除用户user
  removeUser() {
    localStorage.removeItem(USER_KEY)
  }
}


export default storageUtils