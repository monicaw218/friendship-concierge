import { Layout } from 'antd';
import React from 'react';
import Friends from './Friends';
import Header from './Header';

const { Content, Footer } = Layout;

export default () => (
  <Layout className="layout">
    <Header />
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content" style={{ margin: "100px auto" }}>
        <h1>Friends Catalog</h1>
        <Friends />
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>Weitekamp ©2022.</Footer>
  </Layout>
);
