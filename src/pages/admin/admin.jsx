import React from 'react'

// 引入路由hook
import { Navigate, Outlet } from 'react-router-dom'

// 引入内存管理
import memoryUtils from '../../utils/memoryUtils'

// 引入antd
import { Layout } from 'antd'

// 引入其他组件
import LeftNav from '../../components/leftNav'
import Header from '../../components/header'

const {  Footer, Sider, Content } = Layout

// 判断用户是否已经登录
// 如果内存没有存储user => 当前没有登陆
function isLogin() {
  let user = memoryUtils.user
  if (!user || !user._id) return false
  else return true
}

export default function Admin() {
  // 应用useNavigate实现一般组件的前进后退
  return (
    isLogin() ?
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <LeftNav/>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content style={{ backgroundColor: '#bfa' }}>
            <Outlet/>
          </Content>
          <Footer style={{ textAlign: 'center', color:'#fba8b6'}}>一键三连加关注，包包金橙挡不住~</Footer>
        </Layout>
      </Layout>
      : <Navigate to='/login' replace={true} />
  )
}
