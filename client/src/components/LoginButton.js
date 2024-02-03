// LoginButton.js

import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton = () => {
	return (
		<Link to='/LoginPage'>
			<button>Login</button>
		</Link>
	);
};

export default LoginButton;
