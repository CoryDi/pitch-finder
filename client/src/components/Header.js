import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginButton from './LoginButton';

const categories = ['Fields', "Men's Game", "Women's Game", 'Co-ed Game'];

function Header() {
	return (
		<HeaderContainer>
			{/* {logo} */}
			<LogoContainer>
				<Link to='/'>
					{' '}
					<LogoImg src='/logo-png.png' alt='logo' />
				</Link>
			</LogoContainer>
			<H1>Welcome to Pitch Finder </H1>
			{/* Login Button */}
			<Link to='/LoginPage'>
				<LoginButton />
			</Link>
		</HeaderContainer>
	);
}

export default Header;

const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px;
	background-color: black;
`;

const LogoContainer = styled.div`
	max-width: 100px;
`;

const LogoImg = styled.img`
	width: 250px;
	height: 250px;
	padding-top: 5px;
	padding-left: 5px;
`;

const Button = styled.div`
	background-color: #04aa6d;
	border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
`;

const H1 = styled.h1`
	justify-content: center;
	font-size: 60px;
	font-family: 'Lato', sans-serif;
	font-style: normal;
	font-weight: 100px;
	color: white;
`;

const Navigation = styled.nav`
	ul {
		list-style: none;
		display: flex;
		margin: 0;
		padding: 0;
	}

	li {
		margin-right: 40px;
	}

	a {
		text-decoration: none;
		color: #333;
		font-weight: normal;
		font-size: 20px;
	}
`;
