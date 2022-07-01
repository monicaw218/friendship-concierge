import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ isLoggedIn }) => {
  const linkComponent = (title, link) => (
    <Link
      to={link}
      className='btn btn-primary'
      role='button'
    >
      {title}
    </Link>
  );

  return (
    <div className='primary-color'>
      <div className='jumbotron jumbotron-fluid bg-transparent'>
        <div className='container secondary-color'>
          <h1 className='display-4'>Friendship Concierge</h1>
          <p className='lead'>Be the friend you always wanted</p>
          <hr className='my-4' />
          {isLoggedIn
            ? (
              <>
                {linkComponent('My Friends', '/friends#index')}
                {linkComponent('Add a Friend Update', '/')}
              </>
              )
            : (<>{linkComponent('Sign Up!', '/signup')}</>)}
        </div>
      </div>
    </div>
  );
};

export default Home;
