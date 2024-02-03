import styled from 'styled-components';

const ContactSection = () => {
	return (
		<div id='ContactsSection'>
			<T>Contact</T>
			<ContactContainer>
				<a href='https://www.instagram.com'>
					<ContactImage src='/instagram.png' alt='Instagram' />
				</a>
				<a href='https://www.facebook.com'>
					<ContactImage src='/facebook.png' alt='Facebook' />
				</a>
				<a href='https://www.x.com'>
					<ContactImage src='/x.webp' alt='X' />
				</a>
				<a href='https://www.youtube.com'>
					<ContactImage src='/youtube.webp' alt='Youtube' />
				</a>
			</ContactContainer>
		</div>
	);
};

const div = styled.div`
	align-items: center;
`;

const T = styled.h1`
	font-family: 'Lato', sans-serif;
	text-align: center;
	/* font-family: copperplate; */
	color: white;
	padding-left: 280%;
`;

const ContactContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-left: 300%;
`;

const ContactImage = styled.img`
	height: 50px;
	width: 50px;
	margin: 10px;
`;

export default ContactSection;
