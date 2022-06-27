import React from 'react';
import Routes from '../routes/index';
import { Layout } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';

const { Content } = Layout;

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
