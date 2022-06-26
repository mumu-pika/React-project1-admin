// 引入React核心库
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom/client';
import './index.css';
// 引入APP组件
import App from './App';
import reportWebVitals from './reportWebVitals';


// 应用根组件，渲染APP组件到页面
// ReactDOM.render(<App/>, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
