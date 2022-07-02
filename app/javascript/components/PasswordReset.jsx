import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import axios from 'axios';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [alertKeys, setAlertKeys] = useState([]);

  const capitalizeFirst = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const processErrors = messages => {
    const formattedMessages = Object.keys(messages).map((key, i) => {
      return (<p key={i}>{capitalizeFirst(key)} {messages[key][0]}</p>);
    });
    setErrorMessage(formattedMessages);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const body = { password_reset: { first_name: firstName, last_name: lastName, email: email, password: password, password_confirmation: passwordConfirmation } };

    axios.post('/password_reset', body)
      .then(response => {
        window.location.replace(`/users/${response.data.id}`);
      })
      .catch(error => {
        const errors = error.response.data.errors;
        setAlertVisible(true);
        processErrors(errors);
        setAlertKeys(Object.keys(errors));
      });
  };

  return (
    <div className='primary-color'>
      <Alert
        key='danger'
        variant='danger'
        style={{ opacity: '1' }}
        onClose={() => setAlertVisible(false)}
        show={alertVisible}
        dismissible
      >
        {errorMessage}
      </Alert>

      <div style={{ textAlign: 'center' }}>
        <h1>Reset Password</h1>

        <div className='row'>
          <div className='col-md-4 col-md-offset-4'>
            <Form action='/password_reset' className='edit_password_reset' id='edit_password_reset' method='post'>
              <div className={alertKeys.includes('email') ? 'field_with_errors' : null}>
                <label>Email</label>
                <input
                  type='email'
                  name='password_reset[email]'
                  placeholder='frogers@neighborhood.com'
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  className='form-control'
                />
              </div>

              <input type="hidden" id='hidden_email' name='hidden_email' value="myspecificemail@gmail.com" />

              <div className={alertKeys.includes('password') ? 'field_with_errors' : null}>
                <label>Password</label>
                <input
                  type='password'
                  name='password_reset[password]'
                  placeholder='Set password'
                  onChange={e => setPassword(e.target.value)}
                  autoComplete='off'
                  className='form-control'
                />
              </div>

              <div className={alertKeys.includes('password_confirmation') ? 'field_with_errors' : null}>
                <label>Confirm Password</label>
                <input
                  type='password'
                  name='password_reset[password_confirmation]'
                  placeholder='Confirm password'
                  onChange={e => setPasswordConfirmation(e.target.value)}
                  autoComplete='off'
                  className='form-control'
                />
              </div>
              <input type='submit' value='Update Password' className='btn btn-primary' onClick={e => onSubmit(e)} />
            </Form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PasswordReset;
