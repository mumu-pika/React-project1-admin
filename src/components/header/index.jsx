import React, { useState } from 'react'

// 引入路由
import { Link, useNavigate, useLocation } from 'react-router-dom'

// 引入antd的对话框组件
// import { Modal } from 'antd'

// import LinkButton from '../link-button'
// import {reqWeather} from '../../api'
// import menuList from '../../config/menuConfig'
import {formateDate} from '../../utils/dateUtils'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'

// 引入菜单列表动态生成左侧菜单导航栏
import menuList from '../../config/menuConfig';

// 引入样式
import './index.less'

/*
  头部组件
 */

// 获取事件
Header.getTime = function () {
  // 每隔1s获取当前时间, 并更新状态数据currentTime
  this.intervalId = setInterval(() => {
    const currentTime = formateDate(Date.now())
    this.setState({ currentTime })
  }, 1000)
}


// 获取页面标题，对应于左侧的导航栏菜单名
Header.getTitle = function (menuList, path) {
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

export default function Header() {
  // 初始获取路由相关信息
  const navigate = useNavigate() // 跳转路由
  const location = useLocation() // 获取location信息
  const path = location.pathname // 当前路径名名，同菜单列表的key相联系

  // 状态, 这里是数组的解构赋值，有两个参数，第一个参数是初始值，第二个参数是更新这个状态的函数
  // const [currentTime, setTime] = useState(formateDate(Date.now()))
  const [currentTime, setTime] = useState(0) //useState 底层用了单例模式做了处理，避免调用Header函数后，初始值再次覆盖

  // 登录的用户名
  const username = memoryUtils.user.username

  const title = Header.getTitle(menuList, path)

  return (
    <div className="header">
      <div className="header-top">
        <span>欢迎, {username}</span>
        {/* <LinkButton onClick={this.logout}>退出</LinkButton> */}
      </div>
      <div className="header-bottom">
        <div className="header-bottom-left">{title}</div>
        <div className="header-bottom-right">
          <span>{currentTime}</span>
          {/* <img src={dayPictureUrl} alt="weather"/>
          <span>{weather}</span> */}
        </div>
      </div>
    </div>
  )
}



// class Header extends Component {

//   state = {
//     currentTime: formateDate(Date.now()), // 当前时间字符串
//     dayPictureUrl: '', // 天气图片url
//     weather: '', // 天气的文本
//   }

//   getTime = () => {
//     // 每隔1s获取当前时间, 并更新状态数据currentTime
//     this.intervalId = setInterval(() => {
//       const currentTime = formateDate(Date.now())
//       this.setState({currentTime})
//     }, 1000)
//   }

//   getWeather = async () => {
//     // 调用接口请求异步获取数据
//     const {dayPictureUrl, weather} = await reqWeather('北京')
//     // 更新状态
//     this.setState({dayPictureUrl, weather})
//   }

//   getTitle = () => {
//     // 得到当前请求路径
//     const path = this.props.location.pathname
//     let title
//     menuList.forEach(item => {
//       if (item.key===path) { // 如果当前item对象的key与path一样,item的title就是需要显示的title
//         title = item.title
//       } else if (item.children) {
//         // 在所有子item中查找匹配的
//         const cItem = item.children.find(cItem => path.indexOf(cItem.key)===0)
//         // 如果有值才说明有匹配的
//         if(cItem) {
//           // 取出它的title
//           title = cItem.title
//         }
//       }
//     })
//     return title
//   }

//   /*
//   退出登陆
//    */
//   logout = () => {
//     // 显示确认框
//     Modal.confirm({
//       content: '确定退出吗?',
//       onOk: () => {
//         console.log('OK', this)
//         // 删除保存的user数据
//         storageUtils.removeUser()
//         memoryUtils.user = {}

//         // 跳转到login
//         this.props.history.replace('/login')
//       }
//     })
//   }

//   /*
//   第一次render()之后执行一次
//   一般在此执行异步操作: 发ajax请求/启动定时器
//    */
//   componentDidMount () {
//     // 获取当前的时间
//     this.getTime()
//     // 获取当前天气
//     this.getWeather()
//   }
//   /*
//   // 不能这么做: 不会更新显示
//   componentWillMount () {
//     this.title = this.getTitle()
//   }*/

//   /*
//   当前组件卸载之前调用
//    */
//   componentWillUnmount () {
//     // 清除定时器
//     clearInterval(this.intervalId)
//   }


//   render() {

//     const {currentTime, dayPictureUrl, weather} = this.state

//     const username = memoryUtils.user.username

//     // 得到当前需要显示的title
//     const title = this.getTitle()
//     return (
//       <div className="header">
//         <div className="header-top">
//           <span>欢迎, {username}</span>
//           <LinkButton onClick={this.logout}>退出</LinkButton>
//         </div>
//         <div className="header-bottom">
//           <div className="header-bottom-left">{title}</div>
//           <div className="header-bottom-right">
//             <span>{currentTime}</span>
//             <img src={dayPictureUrl} alt="weather"/>
//             <span>{weather}</span>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Header