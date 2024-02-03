// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async () => {
		try {
			const response = await axios.post('http://localhost:5000/api/login', {
				username,
				password,
			});

			console.log(response.data);
			// Handle success (e.g., store a token in localStorage)
		} catch (error) {
			console.error('Login failed:', error.response.data.message);
			// Handle error (e.g., display an error message)
		}
	};

	return (
		<div className='login-form'>
			<input
				type='text'
				placeholder='Username'
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type='password'
				placeholder='Password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};

export default LoginForm;
