// import logo from './logo.svg';
import './App.less';

// 引入antd库
// import { Button, DatePicker, Space } from 'antd'
// import { GithubOutlined } from '@ant-design/icons'
// 引入antdUI样式 ,不要忘记引入样式,这里样式在App.less中引入了
// import 'antd/dist/antd.css'

// 引入路由组件
import { Routes, Route } from 'react-router-dom'

// 引入其他组件
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import Home from './pages/home'
import Category from './pages/category'
import Product from './pages/product'
import Role from './pages/role'
import User from './pages/user'
import Bar from './pages/charts/bar'
import Line from './pages/charts/line'
import Pie from './pages/charts/pie'
import Order from './pages/order'

// function onChange(date, dateString) {
//   console.log(date, dateString);
// }


// 应用根组件
function App() {
  return (
    <div className="App">
      {/* Routes相当于一个 if 语句，如果其路径与当前 URL 匹配，则呈现其对应的组件。代替了5版本中的Switch */}
      {/* 只会匹配下面的一个路由 */}
      <Routes>
        {/* path属性用于定义路径，element属性用于定义当前路径所对应的组件 */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Admin />}>
          {/* 嵌套路由 */}
          <Route path="home" element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="product" element={<Product />} />
          <Route path="role" element={<Role />} />
          <Route path="user" element={<User />} />
          <Route path="charts/bar" element={<Bar />} />
          <Route path="charts/line" element={<Line />} />
          <Route path="charts/pie" element={<Pie/>} />
          <Route path="order" element={<Order/>} />
        </Route>
      </Routes>
    </div>
  );
}


// 测试antd组件用，这里注释掉
// function App() {
//   return (
//     <div className="App">
//       <Button type='primary'>button</Button>
//       <div>
//         <Button type="primary">来点我呀</Button>
//         <GithubOutlined />
//         <Space direction="vertical">
//           <DatePicker onChange={onChange} />
//           <DatePicker onChange={onChange} picker="week" />
//           <DatePicker onChange={onChange} picker="month" />
//           <DatePicker onChange={onChange} picker="quarter" />
//           <DatePicker onChange={onChange} picker="year" />
//         </Space>
//       </div>
//     </div>
//   );
// }

export default App;
