import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ isLoggedIn }) => {
  const mainButtonLink = isLoggedIn ? '/friends#index' : '/signup';
  const mainButtonText = isLoggedIn ? 'My Friends' : 'Sign Up!';

  return (
    <div className='primary-color'>
      <div className='jumbotron jumbotron-fluid bg-transparent'>
        <div className='container secondary-color'>
          <h1 className='display-4'>Friendship Concierge</h1>
          <p className='lead'>Be the friend you always wanted</p>
          <hr className='my-4' />
          <Link
            to={mainButtonLink}
            className='btn btn-primary'
            role='button'
          >
            {mainButtonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
