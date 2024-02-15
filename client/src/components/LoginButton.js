import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import styled from 'styled-components';

const LoginButton = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();
	return (
		<>
			{!isAuthenticated && (
				<StyledLoginButton onClick={loginWithRedirect}>Login</StyledLoginButton>
			)}
		</>
	);
};

export default LoginButton;

const StyledLoginButton = styled.button`
	background-color: black;
	border-radius: 5px;
	max-height: 40px;
	border: none;
	color: white;
	padding: 10px 20px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 10px;
	cursor: pointer;
`;
