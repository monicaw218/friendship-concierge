import React from 'react';
import axios from 'axios';

const Header = ({ isLoggedIn }) => {
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

  return (
    <header className='navbar navbar-fixed-top navbar-inverse'>
      <div className='container' style={{ display: 'block', float: 'right' }}>
        <nav>
          <ul className='nav navbar-nav navbar-right'>
            <li>{makeLabel('/', 'Home')}</li>
            {!isLoggedIn
              ? <li>{makeLabel('/login', 'Log In')}</li>
              : <li>{makeLabel('#', 'Log Out', logOut)}</li>}
            <li>{makeLabel('/contact', 'Contact')}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
