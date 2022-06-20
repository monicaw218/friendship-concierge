import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Header from './Header';

const SignUp = ({}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const url = '';

    const body = { contact: { name: name, email: email, message: message } };

    const token = document.querySelector('meta[name="csrf=token"]').content;

    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .catch(error => console.log(error.message));
  }

  return (
    <div className='primary-color'>
      <Header />
      <div style={{textAlign: 'center'}} className='row'>
        <h1 className='display-4'>Contact</h1>
        <Form>
          <label>Name</label>
          <input type='text' placeholder='Name' onChange={e => setFirstName(e.target.value)} />

          <label>Email</label>
          <input type='email' placeholder='frogers@neighborhood.com' onChange={e => setEmail(e.target.value)} />

          <label>Message</label>
          <input type='textarea' placeholder='Set password' onChange={e => setPassword(e.target.value)} />

          <button type='submit' className='btn custom-button mt-3 vertical-center'>
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;

