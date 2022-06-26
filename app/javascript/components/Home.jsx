import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className='primary-color'>
    <div className='jumbotron jumbotron-fluid bg-transparent'>
      <div className='container secondary-color'>
        <h1 className='display-4'>Friendship Concierge</h1>
        <p className='lead'>Be the friend you always wanted</p>
        <hr className='my-4' />

        <Link
          to='/signup'
          className='btn btn-primary'
          role='button'
        >
          Sign Up
        </Link>

        <Link
          to='/friends#index'
          className='btn btn-primary'
          role='button'
        >
          My Friends
        </Link>
      </div>
    </div>
  </div>
);
