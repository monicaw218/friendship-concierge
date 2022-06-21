import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;

const makeLabel = (url, title) => {
  return (<a href={url}>{title}</a>)
};

const menuItems = [
  {
    key: '/',
    label: makeLabel('/', 'Home'),
  },
  {
    key: '/signup',
    label: makeLabel('/signup', 'Sign Up'),
  },
  {
    key: '/contact',
    label: makeLabel('/contact', 'Contact'),
  },
];

export default () => (
  <Header>
    <div className='logo' />
    <Menu theme='dark' mode='horizontal' items={menuItems} />
  </Header>
);
