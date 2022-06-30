import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    const body = { session: { email: email, password: password } };

    axios.post('/sessions#create', body)
      .then(response => {
        window.location.replace(`/users/${response.data}`);
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
        <h1>Log In</h1>

        <div className='row'>
          <div className='col-md-4 col-md-offset-4'>
            <Form action='/login' className='new_session' id='new_session' method='post'>
              <div className={alertKeys.includes('email') ? 'field_with_errors' : null}>
                <label htmlFor='session_email'>Email</label>
                <input
                  id='session_email'
                  type='email'
                  name='session[email]'
                  placeholder='frogers@neighborhood.com'
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  className='form-control'
                />
              </div>

              <div className={alertKeys.includes('password') ? 'field_with_errors' : null}>
                <label htmlFor='session_password'>Password</label>
                <input
                  id='session_password'
                  type='password'
                  name='session[password]'
                  onChange={e => setPassword(e.target.value)}
                  className='form-control'
                />
              </div>

              <input type='submit' value='Log In' className='btn btn-primary' onClick={e => onSubmit(e)} />
            </Form>

            <p>New user? <a href='/signup'>Sign up now!</a></p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
