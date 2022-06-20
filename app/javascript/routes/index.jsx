import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import SignUp from '../components/SignUp';
import Contact from '../components/Contact';

export default (
  <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
  </Router>
);
