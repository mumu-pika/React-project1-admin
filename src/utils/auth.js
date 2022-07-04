// 利用localstorage来保存用户token状态 , 这个模块作为示例项目暂未使用

export function getToken() {
  return localStorage.getItem('token')
}

export function setToken(token) {
  localStorage.setItem('token', token)
}

export function isLogin() {
  return localStorage.getItem('token')? true : false
}