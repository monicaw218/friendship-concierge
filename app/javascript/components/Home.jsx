import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  // <Layout className="layout">
  //   <Header />
  //   <Content style={{ padding: "0 50px" }}>
  //     <div className="site-layout-content" style={{ margin: "100px auto" }}>
  //       <h1>Friends Catalog</h1>
  //       <Friends />
  //     </div>
  //   </Content>
  //   <Footer style={{ textAlign: "center" }}>Weitekamp ©2022.</Footer>
  // </Layout>

  <div className='primary-color'>
    <div className='jumbotron jumbotron-fluid bg-transparent'>
      <div className='container secondary-color'>
        <h1 className='display-4'>Friendship Concierge</h1>
        <p className='lead'>A place to reconnect</p>
        <hr className='my-4' />

        <Link
          to='/signup'
          className='btn btn-lg custom-button'
          role='button'
        >
          Sign Up
        </Link>

        <Link
          to='/friends#index'
          className='btn btn-lg custom-button'
          role='button'
        >
          My Friends
        </Link>
      </div>
    </div>
  </div>
);
