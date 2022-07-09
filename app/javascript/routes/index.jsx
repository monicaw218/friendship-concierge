import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../components/Home';
import SignUp from '../components/SignUp';
import Friends from '../components/Friends';
import User from '../components/User';
import Friend from '../components/Friend';
import Login from '../components/Login';
import NotFound from '../components/NotFound';
import ForgotPassword from '../components/ForgotPassword';
import PasswordReset from '../components/PasswordReset';

const CustomRoutes = ({ loggedIn }) => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home isLoggedIn={loggedIn} />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/friends' element={loggedIn ? (<Friends />) : (<Navigate to='/login' />)} />
        {/* TODO: eBFhfXfR - Do not show users page until app uses admin access */}
        <Route path='/users' element={loggedIn ? <NotFound /> : (<Navigate to='/login' />)} />
        <Route path='/users/:id' element={loggedIn ? (<User />) : (<Navigate to='/login' />)} />
        <Route path='/friends/:id' element={loggedIn ? (<Friend />) : (<Navigate to='/login' />)} />
        <Route path='/login' element={<Login />} />
        <Route path='/password_resets/new' element={<ForgotPassword />} />
        <Route path='/password_resets/:digest/edit' element={<PasswordReset />} />
      </Routes>
    </Router>
  );
};

export default CustomRoutes;
