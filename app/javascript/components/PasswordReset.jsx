import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';

const PasswordReset = () => {
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [alertKeys, setAlertKeys] = useState([]);

  const { digest } = useParams();

  // A custom hook that builds on useLocation to parse
  // the query string for you.
  const useQuery = () => {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  };

  const processErrors = messages => {
    const formattedMessages = messages.map((message, i) => {
      return (<p key={i}>{message}</p>);
    });
    setErrorMessage(formattedMessages);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const body = { user: { password: password, password_confirmation: passwordConfirmation } };

    axios.put(`/password_resets/${digest}?email=${query.get('email')}`, body)
      .then(response => {
        const userId = response.data.id;
        window.location.replace(`/users/${userId}`);
      })
      .catch(error => {
        const errors = error.response.data;
        setAlertVisible(true);
        processErrors(errors);
        setAlertKeys(Object.keys(errors));
      });
  };

  const query = useQuery();

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
