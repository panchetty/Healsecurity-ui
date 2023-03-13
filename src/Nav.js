import React from 'react';
import './index.css';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const items = [
  {
    label: 'Home',
    key: 'mail',
    icon: <MailOutlined />,
    
  },
  {
    label: 'Contact',
    key: 'contact',
    icon: <AppstoreOutlined />,
  },
  {
    label:'About',
    key: 'about',
    icon: <AppstoreOutlined />,
  },
 
 
];
const App = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return(
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}>
    <Menu.Item>Home page</Menu.Item>
    <Menu.Item>Contact page</Menu.Item>
    <Menu.Item>About page</Menu.Item>
    </Menu>
  )
};
export default App;