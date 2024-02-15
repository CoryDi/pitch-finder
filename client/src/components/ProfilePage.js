import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ContactSection from './ContactSection';
import styled from 'styled-components';

const ProfilePage = () => {
	const { user, isAuthenticated } = useAuth0();
	console.log(user);
	return (
		<div className=' profile-page'>
			<div className='body'>
				<img src={user?.picture} />
				<p>Email:{user?.email}</p>
			</div>
			<WrapperBottom></WrapperBottom>
			<StyledDiv>
				<ContactSection />
			</StyledDiv>
		</div>
	);
};

const WrapperBottom = styled.div`
	/* flex-direction: column; */
	align-items: center;
	position: fixed;
	bottom: 0;
	display: flex;
	height: 300px;
	justify-content: center;
	width: 100%; //shold be 100vw
	background-size: contain;
	background-image: url('/new_grass.png');
	background-position-y: 100%;
`;

const StyledDiv = styled.div`
	position: fixed;
	bottom: 0;
	background-color: black;
	width: 100%;
	height: 5px;
	display: flex;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
`;

export default ProfilePage;
