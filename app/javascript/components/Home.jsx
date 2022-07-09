import React from 'react';
import { Link } from 'react-router-dom';
import AddFriendHistoryModal from './AddFriendHistoryModal';

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
    <>
      <div className='primary-color'>
        <div className='jumbotron jumbotron-fluid bg-transparent'>
          <div className='container secondary-color'>
            <h1 className='display-4'>Friendship Concierge</h1>
            <p className='lead'>Be the friend you wish you had</p>
            <hr className='my-4' />
            {isLoggedIn
              ? (
                <>
                  {linkComponent('My Friends', '/friends')}
                  <AddFriendHistoryModal />
                </>
                )
              : (<>{linkComponent('Sign Up!', '/signup')}</>)}
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
