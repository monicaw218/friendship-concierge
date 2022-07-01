import React from 'react';
import CustomRoutes from '../routes/index';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const token = document.querySelector('[name=csrf-token]').content;
axios.defaults.headers.common['X-CSRF-TOKEN'] = token;

const App = ({ loggedIn, currentUserId }) => {
  return (
    <>
      <Header isLoggedIn={loggedIn} currentUserId={currentUserId} />
      <div style={{ padding: '0 50px' }}>
        <div className='site-layout-content'>
          <CustomRoutes loggedIn={loggedIn} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
