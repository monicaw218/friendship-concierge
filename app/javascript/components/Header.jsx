import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;

export default () => (
  <Header>
    <div className='logo' />
    <Menu theme='dark' mode='horizontal'>
      <Menu.Item key='1'>
        <a href='/'>Home</a>
      </Menu.Item>
      <Menu.Item key='2'>
        <a href='/signup'>Sign Up</a>
      </Menu.Item>
      <Menu.Item key='3'>
        <a href='/contact'>Contact</a>
      </Menu.Item>
    </Menu>
  </Header>
);
