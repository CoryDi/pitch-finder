// LoginPage.js
import React from 'react';
import LoginForm from './LoginForm';
import { createRoot } from 'react-dom/client';

const LoginPage = () => {
	return (
		<div className='Login-page'>
			<LoginForm />
		</div>
	);
};

export default LoginPage;
