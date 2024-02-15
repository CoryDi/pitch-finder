import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginButton from './LoginButton';
import LogOutButton from './LogOutButton';
import { useAuth0 } from '@auth0/auth0-react';

function Header() {
	const { isAuthenticated } = useAuth0();
	return (
		<HeaderContainer>
			{/* {logo} */}
			<DivHeader>
				<LogoContainer>
					<Link to='/'>
						{' '}
						<LogoImg src='/logo-png.png' alt='logo' />
					</Link>
				</LogoContainer>
				<H1>Pitch Finder</H1>
				{/* Login Button */}
				<ProfileDiv>
					{isAuthenticated && (
						<Link to='/ProfilePage'>
							<ProfileButton src='data:image/png;base64,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' />
						</Link>
					)}
					<LoginButton />
					<LogOutButton />
				</ProfileDiv>
			</DivHeader>
			<H2>
				"YOUR LOCAL SOURCE FOR SOCCER PITCHES, LEAGUES AND MATCHES WITHIN
				KITCHENER/WATERLOO."
			</H2>
		</HeaderContainer>
	);
}

export default Header;

const DivHeader = styled.div`
	justify-content: space-between;
	align-items: center;
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 180px;
	background-color: White;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
`;

const HeaderContainer = styled.header`
	flex-direction: column;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	margin-bottom: 5px;
`;

const LogoContainer = styled.div`
	max-width: 100px;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
`;

const ProfileDiv = styled.div`
	align-items: center;
	flex-direction: column;
	display: flex;
`;

const ProfileButton = styled.img`
	height: 50px;
	width: 50px;
	border-radius: 30px;
	margin-top: 30px;
`;

const LogoImg = styled.img`
	width: 150px;
	height: 150px;
	padding-top: 5px;
	padding-left: 5px;
	border-top-left-radius: 20px;
`;

const H1 = styled.h1`
	padding-top: 45px;
	font-size: 60px;
	font-family: 'Lato', sans-serif;
	font-style: normal;
	font-weight: 100;
	color: black;
`;

const H2 = styled.h2`
	font-size: 20px;
	text-align: center;
	font-family: 'Lato', sans-serif;
	font-style: normal;
	font-weight: 100;
	color: black;
`;
