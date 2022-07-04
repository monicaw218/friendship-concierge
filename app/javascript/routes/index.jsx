import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import SignUp from '../components/SignUp';
import Contact from '../components/Contact';
import Friends from '../components/Friends';
import Users from '../components/Users';
import User from '../components/User';
import Friend from '../components/Friend';
import Login from '../components/Login';
import ForgotPassword from '../components/ForgotPassword';
import PasswordReset from '../components/PasswordReset';

const CustomRoutes = ({ loggedIn }) => {
  const requireAuth = (nextState, replace, next) => {
    if (!loggedIn) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    next();
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home isLoggedIn={loggedIn} />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/friends' element={<Friends />} onEnter={requireAuth} />
        <Route path='/users' element={<Users />} onEnter={requireAuth} />
        <Route path='/users/:id' element={<User />} onEnter={requireAuth} />
        <Route path='/friends/:id' element={<Friend />} onEnter={requireAuth} />
        <Route path='/login' element={<Login />} />
        <Route path='/password_resets/new' element={<ForgotPassword />} />
        <Route path='/password_resets/:digest/edit' element={<PasswordReset />} />
      </Routes>
    </Router>
  );
};

export default CustomRoutes;
