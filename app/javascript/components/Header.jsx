import React from 'react';
// import { Navbar, Container, Nav, NavDropdown  } from 'react-bootstrap';

const makeLabel = (url, title) => {
  return (<a href={url}>{title}</a>);
};

export default () => (
  <header className="navbar navbar-fixed-top navbar-inverse">
    <div className="container" style={{ display: "block", float: "right" }}>
      {makeLabel('/', 'Home')}
      <nav>
        <ul className="nav navbar-nav navbar-right">
          <li>{makeLabel('/', 'Home')}</li>
          <li>{makeLabel('/signup', 'Sign Up')}</li>
          <li>{makeLabel('/contact', 'Contact')}</li>
        </ul>
      </nav>
    </div>
  </header>
);
