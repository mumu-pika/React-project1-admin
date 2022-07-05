// 引入React核心库
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom/client';
import './index.css';
// 引入APP组件
import App from './App';
import reportWebVitals from './reportWebVitals';

// 引入路由
import { BrowserRouter } from 'react-router-dom';

// 引入内存管理
import memoryUtils from './utils/memoryUtils';

// 引入本地存储
import storageUtils from './utils/storageUtils';

// 读取local中的保存好的user, 保存到内存中，因为内存的读写速度比磁盘快，可以提升性能
const user = storageUtils.getUser()
memoryUtils.user = user

// 应用根组件，渲染APP组件到页面
// ReactDOM.render(<App/>, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
