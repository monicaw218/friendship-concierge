import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const processErrors = messages => {
    messages = messages.map((message, i) => {
      return (<p key={i}>{message}</p>);
    });
    setErrorMessage(messages);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = '/api/v1/users/create';
    const body = { user: { first_name: firstName, last_name: lastName, email: email, password: password, password_confirmation: passwordConfirmation } };
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: 'POST',
      headers: {
        'X-CSRF-Token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          const errorResponse = response.json();
          setAlertVisible(true);
          errorResponse.then(json => processErrors(json.errors));
        }
      })
      .catch(error => console.log(error.message));
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
        <h1 className='display-4'>Sign Up</h1>
        <Form style={{ display: 'inline-grid' }}>
          <label>First Name</label>
          <input
            type='text'
            placeholder='Fred'
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
          />

          <label>Last Name</label>
          <input
            type='text'
            placeholder='Rogers'
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />

          <label>Email</label>
          <input
            type='email'
            placeholder='frogers@neighborhood.com'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />

          <label>Password</label>
          <input
            type='password'
            placeholder='Set password'
            onChange={e => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>
          <input
            type='password'
            placeholder='Confirm password'
            onChange={e => setPasswordConfirmation(e.target.value)}
          />

          <button type='submit' className='btn custom-button mt-3' onClick={e => onSubmit(e)}>
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
