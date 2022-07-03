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
import { matchPath, useLocation } from "react-router-dom";


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

  // console.log(matchPath("/users/123", {
  //   path: "/users/:id",
  //   exact: true,
  //   strict: false
  // }));

  // const req_url = '/password_resets/dvbQVO7g3BtGv_TXIIySWA/edit?email=monicadweitekamp%40gmail.com';
  const req_url = '/password_resets/vSPxY6o7UZeqPth-K0nM_A/edit?email=second%40user.com'
  // const req_url = '/password_resets/:digest/edit?email=:email'

  // console.log(useLocation().pathname == req_url);

  const password_reset_edit_route = '/password_resets/:digest/edit?email=:email'
  // const password_reset_edit_route = '/password_resets/:digest/edit?:email'

  // const exroute = '/user/manage/:id?/:type?'
  // const password_reset_edit_route = '/password_resets/:digest/edit:email?'

  // console.log(matchPath({ path: "/users/:id", exact: true }, "/users/123"));
  // console.log(matchPath({ path: password_reset_edit_route, exact: true, strict: true }, req_url));

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home isLoggedIn={loggedIn} />}/>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/friends' element={<Friends />} onEnter={requireAuth} />
        <Route path='/users' element={<Users />} onEnter={requireAuth} />
        <Route path='/users/:id' element={<User />} onEnter={requireAuth} />
        <Route path='/friends/:id' element={<Friend />} onEnter={requireAuth} />
        <Route path='/login' element={<Login />} />
        <Route path='/password_resets/new' element={<ForgotPassword />} />
        <Route path='/password_resets/:digest/edit?email=:email' element={<PasswordReset />} />
      </Routes>
    </Router>
  );
};

export default CustomRoutes;
