import React from 'react'

// 引入login登录页样式
import './login.less'

// 引入logo图片 静态引入，这里用require动态加载代替
// import logo from './images/logo.png'

// 引入antd相关资源
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';





// 登录的组件
export default function Login() {
  // onFinish 提交表单且数据验证成功后回调事件
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  }

  // onFinishFailed 提交表单且数据验证失败后回调事件
  const onFinishFailed = (errorInfo) => {
    console.log('Failed', errorInfo)
  }

  return (
    <div className='login'>
      <header className='login-header'>
        <img src={require('./images/logo.png')} alt="logo" />
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
          onFinish = { onFinish }
          onFinishFailed = { onFinishFailed }
        >
          {/* 输入用户名区域 */}
          <Form.Item
            name="username"
            // 声明式验证：直接使用别人定义的验证规则进行验证
            rules={[
              { required: true, message: 'Please input your Username.'},
              { min: 4, message: 'Username must be at least 4 characters!'},
              { max: 12, message: 'Username can be up to 12 characters!'},
              { pattern: /^[a-zA-Z0-9_]+$/, message: 'Username must be numbers, letters or underline!'},
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
                validator: (_, value) =>{
                  return Login.checkPassword(value) ? Promise.resolve() : Promise.reject(new Error('Password should be > 6 digits and < 12 digits.'))
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

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>
          {/* 提交按钮区域 */}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            {/* 注册界面跳转 */}
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </section>
    </div>
  )
}

// 自定义校验密码的规则
Login.checkPassword = function(value){
  // 判断输入密码的值是否符合条件
  if(!value || value.length < 6 || value.length > 12) return false
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

