import React from 'react';
import styled from 'styled-components';

const LeaguesPage = () => {
	return (
		<div>
			<T>Find a League by Clicking an Icon</T>
			<LeaguesContainer>
				<TopLogoWrapper>
					<a href='https://www.grandriversoccer.com'>
						<LeagueImage src='/grand river.png' alt='/GrandRiver' />
					</a>
					<a href='https://www.kdslsoccer.com/'>
						<LeagueImage src='/KDSL.jpeg' alt='KDSL' />
					</a>
					<a href='https://www.https://kitchenersc.com/'>
						<LeagueImage src='/kitchenerSC.png' alt='KitchenerSC' />
					</a>
				</TopLogoWrapper>
				<BottomLogoWrapper>
					<a href='https://www.swrsa.ca/page/show/3916194-senior'>
						<LeagueImage src='/SouthWestSoccer.jpeg' alt='SouthWestSoccer' />
					</a>
					<a href='https://www.redacademyofsoccer.com/'>
						<LeagueImage src='/RedAcademy.png' alt='/RedAcademy' />
					</a>
					<a href='https://www.waterloounited.com/'>
						<LeagueImage src='/WaterlooUnited.png' alt='/WaterlooUnited' />
					</a>
				</BottomLogoWrapper>
			</LeaguesContainer>
			{/* <WrapperBottom>
				</WrapperBottom>
				<T>Contact</T>
			<GrassDiv><ContactSection /></GrassDiv> */}
		</div>
	);
};

const StyledDiv = styled.div`
	align-items: center;
`;

const LeaguesContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 10px;
`;

const T = styled.h1`
	font-family: 'Lato', sans-serif;
	font-size: 50px;
	text-align: center;
	padding-top: 100px;
`;

const TopLogoWrapper = styled.div``;

const BottomLogoWrapper = styled.div``;

const LeagueImage = styled.img`
	height: 300px;
	width: 300px;
	margin: 30px;
`;

// const WrapperBottom = styled.div`
// 	/* flex-direction: column; */
// 	align-items: center;
// 	display: flex;
// 	height: 80px;
// 	justify-content: center;
// 	width: 100%; //shold be 100vw
// 	background-size: contain;
// 	background-image: url('grass.webp');

// `;

// const T = styled.h1`
// 	font-family: 'Lato', sans-serif;
// 	text-align: center;
// 	/* font-family: copperplate; */
// 	color: white;
// 	padding-left: 280%;
// `;

// const ContactContainer = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	padding-left: 300%;
// `;

// const ContactImage = styled.img`
// 	height: 50px;
// 	width: 50px;
// 	margin: 10px;
// `;

// const GrassDiv = styled.div`
// 	background-color: black;
// 	width: 100%;
// 	height: 180px;
// 	display: flex;
// `;

export default LeaguesPage;
