import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SignUp = ({}) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirmation, setPasswordConfirmation] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		const url = '/api/v1/users/create';

		const body = { user: { first_name: firstName, last_name: lastName, username: email, password: password } };

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
			<div style={{textAlign: 'center'}} className='row'>
				<h1 className='display-4'>Sign Up</h1>
				<Form>
					<label>First Name</label>
					<input type='text' placeholder='Fred' onChange={e => setFirstName(e.target.value)} />

					<label>Last Name</label>
					<input type='text' placeholder='Rogers' onChange={e => setLastName(e.target.value)} />

					<label>Email</label>
					<input type='email' placeholder='frogers@neighborhood.com' onChange={e => setEmail(e.target.value)} />

					<label>Password</label>
					<input type='password' placeholder='Set password' onChange={e => setPassword(e.target.value)} />

					<label>Password Confirmation</label>
					<input type='password' placeholder='Confirm password' onChange={e => setPasswordConfirmation(e.target.value)} />


					<button type='submit' className='btn custom-button mt-3 vertical-center' onClick={e => onSubmit(e)}>
						Submit
					</button>
				</Form>
			</div>
		</div>
	);
}

export default SignUp;

