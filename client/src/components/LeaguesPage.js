import React from 'react';
import styled from 'styled-components';
import ContactSection from './ContactSection';

const LeaguesPage = () => {
	return (
		<div id='LeaguesSection'>
			<H3>FIND A LEAGUE BY CLICKNG THE ICON</H3>
			<TopLogoWrapper>
				<a href='https://www.grandriversoccer.com'>
					<LeagueImage src='/grand-river.png' alt='/GrandRiver' />
				</a>
				<a href='https://www.kdslsoccer.com/'>
					<LeagueImage src='/KDSL.jpeg' alt='KDSL' />
				</a>
				<a href='https://www.kitchenersc.com/'>
					<LeagueImage src='/kitchenerSC.png' alt='kitchenerSC' />
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
			<WrapperBottom></WrapperBottom>
			<StyledDiv>
				<ContactSection />
			</StyledDiv>
		</div>
	);
};

const H3 = styled.h3`
	margin-top: 300px;
	align-items: center;
	font-size: 20px;
	text-align: center;
	font-family: 'Lato', sans-serif;
	font-style: normal;
	font-weight: 100px;
	color: black;
`;

const TopLogoWrapper = styled.div`
	padding-top: 10px;
`;

const BottomLogoWrapper = styled.div``;

const LeagueImage = styled.img`
	padding-left: 13%;
	height: 200px;
	width: 200px;
	margin: 30px;
`;

const WrapperBottom = styled.div`
	/* flex-direction: column; */
	align-items: center;
	display: flex;
	height: 80px;
	justify-content: center;
	width: 100%; //shold be 100vw
	background-size: contain;
	background-image: url('/new_grass.png');
`;

const StyledDiv = styled.div`
	background-color: black;
	width: 100%;
	height: 180px;
	display: flex;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
`;

export default LeaguesPage;
