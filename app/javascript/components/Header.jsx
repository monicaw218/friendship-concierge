import React from 'react';

const Header = ({ isLoggedIn }) => {
  const makeLabel = (url, title) => {
    return (<a href={url}>{title}</a>);
  };

  return (
    <header className='navbar navbar-fixed-top navbar-inverse'>
      <div className='container' style={{ display: 'block', float: 'right' }}>
        <nav>
          <ul className='nav navbar-nav navbar-right'>
            <li>{makeLabel('/', 'Home')}</li>
            {isLoggedIn
              ? <li>{makeLabel('/login', 'Log In')}</li>
              : <li>{makeLabel('/logout', 'Log Out')}</li>}
            <li>{makeLabel('/contact', 'Contact')}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
