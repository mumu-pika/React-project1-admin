import logo from './logo.svg';
import './App.less';

// 引入antd库
import { Button, DatePicker, Space } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
// 引入antdUI样式 ,不要忘记引入样式,这里样式在App.less中引入了
// import 'antd/dist/antd.css'

function onChange(date, dateString) {
  console.log(date, dateString);
}

function App() {
  return (
    <div className="App">
      <Button type='primary'>button</Button>
      <div>
        <Button type="primary">来点我呀</Button>
        <GithubOutlined />
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
          <DatePicker onChange={onChange} picker="week" />
          <DatePicker onChange={onChange} picker="month" />
          <DatePicker onChange={onChange} picker="quarter" />
          <DatePicker onChange={onChange} picker="year" />
        </Space>
      </div>
    </div>
  );
}

export default App;
