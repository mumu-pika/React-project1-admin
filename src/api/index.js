/* 
  包含应用中所有接口的请求函数的模块
  ，每个函数的返回值都是promise
*/

// 引入自定义封装的ajax请求
import { message } from 'antd'
import ajax from './ajax'

// 引入jsonp
// import jsonp from 'jsonp'

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


/* 
  jsonp请求的接口请求函数

*/
// jsonp(url, opts, fn(err,data))
// export const reqWeather = () => {
//   const url = 'https://api.map.baidu.com/weather/v1/?district_id=310115&data_type=all&ak=klVvEurDMNgrfPCh9WPI3uCPZsZvDGAu'
//   jsonp(url, (err, data) => {
//     console.log('jsonp', err, data)
//   })
// }

// reqWeather()

export const reqWeather = (district_id, data_type, ak) => ajax('/api2', {district_id, data_type, ak}, 'GET')

// console.log(reqWeather(310115, 'all', 'klVvEurDMNgrfPCh9WPI3uCPZsZvDGAu'))

// reqWeather(310115, 'all', 'klVvEurDMNgrfPCh9WPI3uCPZsZvDGAu').then( response => {
//   // 请求返回数据成功
//   if (response.data.status === 0){
//     // 获取今日天气情况
//     const weather = response.data.result.now.text
//   }
//   // 请求返回数据失败
//   else {
//     message.error('获取用户信息失败')
//   }
// })
