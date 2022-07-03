/* 
  发送异步ajax请求的函数模块
  封装axios库
  axios函数返回值是Promise对象
*/

/* 
  优化点：
    1、axjx层统一处理请求异常:
    在外层包一个自己创建的promise对象
    在请求出错时候，不去reject(error)处理
    2、异步得到的不是response, 而是response.data
    在请求成功resolve时，resolve(response.data)

*/

import axios from 'axios'
import { message } from 'antd'

export default function ajax(url, data={}, type='GET') {
  return new Promise((resolve, reject)=>{
    let promise
    // 1、执行异步ajax请求
    if (type === 'GET') {
      promise = axios.get(url, {
        params: data  // 指定请求参数
      })
    }
    // POST请求
    else {
      promise = axios.post(url, data)
    }

    // 2、请求成功，调用resolve(value)
    promise.then(response => {
      resolve(response)
    }).catch(error => {
      // 3、请求失败，这里不调用reject(reason), 而是统一处理，提示异常信息
      // reject(error)
      message.error('请求出错啦! ' + error.message)
    })

  })



  // 请求登录接口
  // ajax('/login', {username: 'Tom', password: '12345'}, 'POST').then()

  // // 添加用户
  // ajax('/manage/user/add', {username: 'Tom', password: '12345', phone: '13710101010'}).then()
}