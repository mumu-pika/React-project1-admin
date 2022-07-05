import React, { useState, useEffect } from 'react'

// 引入路由
import { Link, useNavigate, useLocation } from 'react-router-dom'

// 引入antd的对话框组件
import { Modal } from 'antd'

import LinkButton from '../link-button'
import { reqWeather } from '../../api'
// import menuList from '../../config/menuConfig'
import { formateDate } from '../../utils/dateUtils'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'

// 引入菜单列表动态生成左侧菜单导航栏
import menuList from '../../config/menuConfig';

// 引入样式
import './index.less'

/*
  头部组件
 */

export default function Header() {
  // 初始获取路由相关信息
  const navigate = useNavigate() // 跳转路由
  const location = useLocation() // 获取location信息
  const path = location.pathname // 当前路径名名，同菜单列表的key相联系

  // 状态, 这里是数组的解构赋值，有两个参数，第一个参数是初始值，第二个参数是更新这个状态的函数
  // const [currentTime, setTime] = useState(formateDate(Date.now()))
  const [currentTime, setTime] = useState(formateDate(Date.now())) //useState 底层用了单例模式做了处理，避免调用Header函数后，初始值再次覆盖
  const [weather, setWeather] = useState('晴')


  // 登录的用户名
  const username = memoryUtils.user.username
  // 页面标题
  const title = getTitle()
  // 设置定时器
  let intervalId = ''


  // 生命周期钩子
  // useEffect的第二个参数可以传入一个数组 [stateValue] 用来监视这个数组中的状态的值，当传入空数组时候，useEffect的作用相当于componentDidMount()
  useEffect(() => {
    getTime()
    return () => {
      // 在组件卸载前执行 componentWillUnmount ()
      clearInterval(intervalId) //清除定时器
    }
  }, [])

  useEffect(() => {
    getWeather()
  }, [])


  // 获取页面标题，对应于左侧的导航栏菜单名
  function getTitle() {
    let title = '首页'
    menuList.forEach(item => {
      if (item.key === path) { // 如果当前item对象的key与path一样,item的title就是需要显示的title
        title = item.label
      } else if (item.children) {
        // 在所有子item中查找匹配的
        const cItem = item.children.find(cItem => path.indexOf(cItem.key) === 0)
        // 如果有值才说明有匹配的
        if (cItem) {
          // 取出它的title
          title = cItem.label
        }
      }
    })
    return title
  }

  // 获取当前时间
  function getTime() {
    // 每隔1s获取当前时间, 并更新状态数据currentTime
    intervalId = setInterval(() => {
      // 更新当前时间
      setTime(formateDate(Date.now()))
    }, 1000)
  }

  // 注销登出，如确认登出会返回至登录界面
  function Logout() {
    // 显示确认框
    Modal.confirm({
      content: '确定退出吗?',
      onOk: () => {
        console.log('OK', this)
        // 删除保存的user数据
        storageUtils.removeUser()
        memoryUtils.user = {}

        // 跳转到login 界面
        navigate('/login', {replace: true})
      }
    })
  }

  // 获取天气
  async function getWeather() {
    let result = await reqWeather(310115, 'all', 'klVvEurDMNgrfPCh9WPI3uCPZsZvDGAu')
    let weather = result.data.result.now.text
    // 更新状态
    setWeather(weather)
  }

  // 渲染
  return (
    <div className="header">
      <div className="header-top">
        <span>欢迎, {username}</span>
        <LinkButton onClick={Logout}>退出</LinkButton>
      </div>
      <div className="header-bottom">
        <div className="header-bottom-left">{title}</div>
        <div className="header-bottom-right">
          <span>{currentTime}</span>
          {/* <img src={dayPictureUrl} alt="weather"/> */}
          <span>{weather}</span>
        </div>
      </div>
    </div>
  )
}
