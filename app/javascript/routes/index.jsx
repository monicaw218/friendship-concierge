import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import SignUp from '../components/SignUp';
import Contact from '../components/Contact';
import Friends from '../components/Friends';
import Users from '../components/Users';
import User from '../components/User';

export default (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/friends' element={<Friends />} />
      <Route path='/users' element={<Users />} />
      <Route path='/users/:id' element={<User />} />
    </Routes>
  </Router>
);
