import React from 'react'
// 引入login登录页样式
import './login.less'

// 引入logo图片 静态引入，这里用require动态加载代替
// import logo from './images/logo.png'

// 引入antd相关资源
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, message } from 'antd'

// 引入api
import { reqLogin } from '../../api'

// 引入路由hook
import { Navigate, useNavigate } from 'react-router-dom'

// 引入内存管理js
import memoryUtils from '../../utils/memoryUtils.js'

// 引入本地存储js
import storageUtils from '../../utils/storageUtils'


// 判断用户是否已经登录
// 如果内存没有存储user => 当前没有登陆
function isLogin() {
  let user = memoryUtils.user
  console.log("@@@@", user)
  if (user && user._id) return true
  else return false
}


// 登录的组件
export default function Login(props) {
  // 应用useNavigate实现一般组件的前进后退
  const navigate = useNavigate()

  // onFinish 提交表单且数据验证成功后回调事件
  const onFinish = async (values) => {
    // 请求登录
    console.log('Received values of form: ', values);
    const { username, password } = values
    const response = await reqLogin(username, password)
    const result = response.data  // {status: 0, data: {...}}
    // 根据登录请求的返回数据的标识status来判断
    if (result.status === 0) {
      // 提示登录成功
      message.success("登录成功")

      // 保存用户信息
      const user = result.data
      memoryUtils.user = user // 保存在内存
      storageUtils.saveUser(user) // 保存在local中

      // 登录成功后,跳转页面(登录完毕不用回退登录页所以用replace)
      navigate('/', {
        replace: true,
        // state: {a:1, b:2}
      }) 
    }
    else {
      // 提示登录失败
      message.error(result.msg)
    }
  }

  // onFinishFailed 提交表单且数据验证失败后回调事件
  const onFinishFailed = (errorInfo) => {
    console.log('Failed', errorInfo)
  }

  return (
    !isLogin() ?
    <div className='login'>
      <header className='login-header'>
        <img src={require('../../assets/images/logo.png')} alt="logo" />
        <h1>快乐花园后台管理</h1>
      </header>
      <section className='login-content'>
        <h2>用户登录</h2>
        {/* 整个登录表单区域 */}
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          {/* 输入用户名区域 */}
          <Form.Item
            name="username"
            // 声明式验证：直接使用别人定义的验证规则进行验证
            rules={[
              { required: true, message: 'Please input your Username.' },
              { min: 4, message: 'Username must be at least 4 characters!' },
              { max: 12, message: 'Username can be up to 12 characters!' },
              { pattern: /^[a-zA-Z0-9_]+$/, message: 'Username must be numbers, letters or underline!' },
            ]}
          >
            {/* prefix是带有前缀图标的 input */}
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          {/* 输入密码区域 */}
          <Form.Item
            name="password"
            // 表单校验的规则
            rules={[
              {
                // 自定义校验
                // 这里value是输入的值
                validator: (_, value) => {
                  return Login.checkPassword(value) ? Promise.resolve() : Promise.reject(new Error('Password should be > 3 digits and < 12 digits.'))
                }
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          {/* 记住我以及忘记密码区域 */}
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="https://www.baidu.com">
              Forgot password
            </a>
          </Form.Item>
          {/* 提交按钮区域 */}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            {/* 注册界面跳转 */}
            Or <a href="https://www.baidu.com">register now!</a>
          </Form.Item>
        </Form>
      </section>
    </div>
    : <Navigate to ='/' replace = {true} />
  )
}

// 自定义校验密码的规则
Login.checkPassword = function (value) {
  // 判断输入密码的值是否符合条件
  if (!value || value.length < 4 || value.length > 12) return false
  else return true
}


/* 
  1、前台表单验证
    例如：
      用户名/密码的合法性要求：
      * 必须输入
      * 必须大于4位
      * 必须小于12位
      * 必须是英文、数字或下划线组成
  2、收集表单数据
*/
