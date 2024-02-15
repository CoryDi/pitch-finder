import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';

const LogOutButton = () => {
	const { logout, isAuthenticated } = useAuth0();
	return isAuthenticated && <button onClick={logout}>Log Out</button>;
};

export default LogOutButton;
