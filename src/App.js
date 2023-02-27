import { Button, Checkbox, Form, Input, Typography, Space, message } from "antd";
import './App.css';

const onChange = (e) => {
  console.log('checked = ${e.target.checked}');
};

function App() {
  const Login = () => {
    message.success("Login Success")
  };

  return <div className="app8g">
    <Form className="LoginForm" onFinish={Login}>
      <Typography.Title>Welcome to DOT INDONESIA</Typography.Title>
      <Form.Item
        rules={[
          {
            required: true,
            type: "email",
            message: "Please enter vaild email",
          },
        ]} 
        label='Email' 
        name={'myEmail'}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>
      <Form.Item 
        rules={[
          {
            required: true,
            nessage: "Please enter your password",
          },
        ]}
        label="Password" 
        name={"myPassword"}
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>
      <Space direction="vertical" style={{ width: '100' }}>
      <Checkbox onChange={onChange}>Remember me</Checkbox>
      <Button type="primary" htmlType="submit" block>
        Login
      </Button>
        <Button type="primary" htmlType="Register" block>
        New Register
        </Button>
      </Space>
    </Form>
  </div>
}

export default App;
