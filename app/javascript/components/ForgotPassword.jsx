import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const body = { password_reset: { email: email } };

    axios.post('/password_resets', body)
      .then(response => {
        window.location.replace('/');
      })
      .catch(error => {
        window.location.replace('/');
      });
  };

  return (
    <div className='primary-color'>
      <div style={{ textAlign: 'center' }}>
        <h1>Forgot Password</h1>

        <div className='row'>
          <div className='col-md-4 col-md-offset-4'>
            <Form action='/password_resets/new' className='new_password_reset' id='new_password_reset' method='post'>
              <div>
                <label htmlFor='password_reset_email'>Email</label>
                <input
                  id='password_reset_email'
                  type='email'
                  name='password_reset[email]'
                  placeholder='frogers@neighborhood.com'
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  className='form-control'
                />
              </div>

              <input type='submit' value='Submit' className='btn btn-primary' onClick={e => onSubmit(e)} />
            </Form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;
