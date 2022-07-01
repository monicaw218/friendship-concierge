import React from 'react';
import axios from 'axios';

const Header = ({ isLoggedIn, currentUserId }) => {
  const logOut = event => {
    event.preventDefault();

    axios.delete('/logout')
      .then(response => {
        window.location.replace('/');
      });
  };

  const makeLabel = (url, title, onClick) => {
    return (<a href={url} onClick={event => onClick ? onClick(event) : null}>{title}</a>);
  };

  const loggedInItems = (
    <>
      <li>{makeLabel(`/users/${currentUserId}`, 'Profile')}</li>
      <li>{makeLabel('#', 'Log Out', logOut)}</li>
    </>
  );

  return (
    <header className='navbar navbar-header navbar-fixed-top navbar-inverse'>
      <div className='container' style={{ display: 'block' }}>
        <nav>
          <ul className='nav navbar-nav navbar-right'>
            <li>{makeLabel('/', 'Home')}</li>
            {isLoggedIn
              ? loggedInItems
              : <li>{makeLabel('/login', 'Log In')}</li>}
            <li>{makeLabel('/contact', 'Contact')}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
