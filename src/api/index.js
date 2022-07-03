/* 
  包含应用中所有接口的请求函数的模块
  ，每个函数的返回值都是promise
*/

// 引入自定义封装的ajax请求
import ajax from './ajax'

// 登录
// export function reqLogin(username, password) {
//   return ajax('/login', {username, password}, 'POST')
// }

// 为了代码结构简洁，我们可以直接用箭头函数去实现

// const BASE = '' // 域名前缀


// 登录 login
export const reqLogin = (username, password) => ajax('/api1/login', {username, password}, 'POST')

// 添加用户 add user
export const reqAddUser = (user) => ajax('/api1/manage/user/add', user, 'POST')