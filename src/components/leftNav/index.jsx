import React, { useState } from 'react';
import './index.less'

// 引入路由
import { Link, useNavigate, useLocation } from 'react-router-dom'

// 引入antd相关
import { Menu } from 'antd';

// 引入菜单列表动态生成左侧菜单导航栏
import menuList from '../../config/menuConfig';


/*
  左侧导航组件
*/

// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }

// const items = [
//   getItem('首页', '/home', <PieChartOutlined />),
//   getItem('用户管理', '/user', <DesktopOutlined />),
//   getItem('角色管理', '/role', <ContainerOutlined />),
//   getItem('商品分类', 'sub1', <MailOutlined />, [
//     getItem('Option 5', '5'),
//     getItem('Option 6', '6'),
//     getItem('Option 7', '7'),
//     getItem('Option 8', '8'),
//   ]),
//   getItem('图形图表', 'sub2', <AppstoreOutlined />, [
//     getItem('Option 9', '9'),
//     getItem('Option 10', '10'),
//     getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
//   ]),
// ];


// 寻找当前选中的菜单的父级（一级）菜单的key
LeftNav.findOpenKey = function(menuList, path) {
  let resultKey = ''
  menuList.map(item => {
    // 如果有子菜单
    if (item.children) {
      // 查找一个与当前请求路径匹配的子Item
      let cItem = item.children.find(cItem => path.indexOf(cItem.key)===0)
      if (cItem) { // 如果找到了
        resultKey = item.key
      }
    }
  })
  return resultKey
}

// 寻找并返回具有子菜单的一级菜单的key
LeftNav.findRootSubmenuKeys = function(menuList) {
  let arr = []
  menuList.map(item => {
    // 如果有子菜单
    if (item.children) {
      arr.push(item.key)
    }
  })
  return arr
}

export default function LeftNav() {
  // 初始获取路由相关信息
  const navigate = useNavigate() // 跳转路由
  const location = useLocation() // 获取location信息
  const path = location.pathname // 当前路径名名，同菜单列表的key相联系


  const openkey = LeftNav.findOpenKey(menuList, path)   // 当前的选中的子菜单的父级（一级）菜单的key
  const rootSubmenuKeys = LeftNav.findRootSubmenuKeys(menuList) //菜单列表中具有子菜单的一级菜单的数组

  // 为的是刷新页面能自动在当前路径下，打开菜单
  // antd的openkeys选项，当前展开的 SubMenu 菜单项 key 数组
  const [openKeys, setOpenKeys] = useState([openkey]);
  // antd的onOpenChange选项，SubMenu 展开/关闭的回调
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  }

  // 实现菜单栏点击路由调转
  const onSelect = e => {
    navigate(e.key, {
      replace: false
    })
  };

  return (
    <div className='left-nav'>
      <Link to="/" className="left-nav-header">
        <img src={require('../../assets/images/logo.png')} alt="logo" />
        <h1>React后台</h1>
      </Link>
      <div>
        {/* <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button> */}
        <Menu
          onSelect={onSelect}
          defaultSelectedKeys={[path == '/' ? '/home' : path]}
          defaultOpenKeys={[openkey]}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          mode="inline"
          theme="dark"
          // inlineCollapsed={collapsed}
          items={menuList}
        />
      </div>
    </div>
  )
}


