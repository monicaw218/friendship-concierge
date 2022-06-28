import React from 'react';
import Routes from '../routes/index';
import { Layout } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios'

const { Content } = Layout;

const token = document.querySelector('[name=csrf-token]').content
axios.defaults.headers.common['X-CSRF-TOKEN'] = token


export default () => (
  <Layout className='layout'>
    <Header />
    <Content style={{ padding: '0 50px' }}>
      <div className='site-layout-content'>
        {Routes}
      </div>
    </Content>
    <Footer />
  </Layout>
);
