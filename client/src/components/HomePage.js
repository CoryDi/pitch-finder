import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import ContactSection from './ContactSection';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGl, { Marker, Room } from 'react-map-gl';
import RoomIcon from '@mui/icons-material/Room';

const TOKEN =
	'pk.eyJ1IjoiY29yeS1kaXhvbiIsImEiOiJjbHJzaDNsbmowNnhzMmluN3g5cG5idHg1In0.U8FMLJab_GWF2H8YGClDDw';

const HomePage = ({ soccerPitches }) => {
	console.log(soccerPitches);
	const [viewPort, setViewPort] = useState({
		latitude: 43.4516,
		longitude: -80.495064,
		zoom: 13,
	});
	return (
		<Wrapper1>
			<Title>
				<H2>
					"YOUR LOCAL SOURCE FOR SOCCER PITCHES AND MATCHES WITHIN
					KITCHENER/WATERLOO."
				</H2>
			</Title>

			<WrapperTop>
				<Container1 to='ListingGrid/Pitches'>
					<p>PITCHES</p>
				</Container1>
				<Container2 to='ListingGrid/Leagues'>
					<p>LEAGUES</p>
				</Container2>
				<Container3 to='ListingGrid/RentAPitch'>
					<p>RENT A PITCH</p>
				</Container3>
			</WrapperTop>
			<WrapperMap style={{ width: '100%', height: '100%', zIndex: 999 }}>
				<ReactMapGl
					{...viewPort}
					mapboxAccessToken={TOKEN}
					transitionDuration='100'
					mapStyle='mapbox://styles/cory-dixon/clrshfs9i00n901nlc7tmd76c'
					// onMove={(viewPort) => setViewPort(viewPort)}
					// onDblClick={handleClick}
					dragPan={true}
					scrollZoom={true}
					doubleClickZoom={true}
				>
					{soccerPitches.map((e) => {
						console.log(e.geometry.coordinates[0][0][0]);
						return (
							<Marker
								latitude={
									Array.isArray(e.geometry.coordinates[0][0][1])
										? e.geometry.coordinates[0][0][1][1]
										: e.geometry.coordinates[0][0][1]
								}
								longitude={
									Array.isArray(e.geometry.coordinates[0][0][0])
										? e.geometry.coordinates[0][0][0][0]
										: e.geometry.coordinates[0][0][0]
								}
								offsetLeft={-3.5 * viewPort.zoom}
								offsetTop={-7 * viewPort.zoom}
							>
								<RoomIcon
									style={{
										fontSize: 4.4 * viewPort.zoom,
										color: 'red',
										cursor: 'pointer',
									}}
								/>
							</Marker>
						);
					})}
				</ReactMapGl>
			</WrapperMap>
			<WrapperBottom>
				</WrapperBottom>
			<StyledDiv><ContactSection /></StyledDiv>
		</Wrapper1>
	);
};
//Wrapper for whole page
const Wrapper1 = styled.div`
	padding-top: -20px;
	padding-bottom:150px;
	flex-direction: column;
	align-items: center;
	display: flexbox;
	justify-content: center;
	width: 100%; //shold be 100vw
	height: 80vh; //should be 100vh
	background-size: cover;
	background-image: url('https://i.imgur.com/5OW6Dp0.png');
`;
//Wrapper for Pitches,Leagues and Rent a Pitch
const WrapperTop = styled.div`
	display: flex;
	justify-content: center;
	width: 100vw;
	height: 100%;
	background-size: cover;
`;
//Wrapper for map
const WrapperMap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid black;
`;
//Wrapper for contacts icons/Grass image
const WrapperBottom = styled.div`
	/* flex-direction: column; */
	align-items: center;
	display: flex;
	height: 80px;
	justify-content: center;
	width: 100%; //shold be 100vw
	background-size: contain;
	background-image: url('grass.webp');

`;

const StyledDiv = styled.div`
	background-color: black;
	width: 100%;
	height: 180px;
	display: flex;
`;

const Title = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0px;
`;

const H2 = styled.h2`
	padding-bottom: 35px;
	font-size: 20px;
	text-align: center;
	font-family: 'Lato', sans-serif;
	font-style: normal;
	font-weight: 100px;
	color: white;
`;

const Container1 = styled(Link)`
	display: flex;
	width: 300px;
	height: 300px;
	background-image: url('https://wallpapercrafter.com/th8007/1721134-football-ball-sports-ground-goal-kick-off-leather.jpg');
	align-items: flex-end;
	justify-content: flex-start;
	margin: 10px;
	background-size: cover;
	filter: brightness(75%);
	font-size: 20px;
	padding: 3px;
	text-decoration: none;
	border: solid 1px white;
	p {
		filter: revert;
		color: white;
		text-decoration: none;
		font-size: 35px;
		font-family: 'Lato', sans-serif;
		font-style: normal;
		font-weight: 100px;
		height: 5px;
		padding-left: 27%;
	}
`;

const Container2 = styled(Link)`
	display: flex;
	width: 300px;
	height: 300px;
	background-image: url('http://leaguelab-prod.s3.amazonaws.com/userimages/099172_std.jpg');
	align-items: flex-end;
	justify-content: flex-start;
	margin: 10px;
	background-size: cover;
	filter: brightness(75%);
	font-size: 20px;
	padding: 3px;
	text-decoration: none;
	border: solid 1px white;
	p {
		filter: revert;
		color: black;
		text-decoration: none;
		font-size: 35px;
		font-family: 'Lato', sans-serif;
		font-style: normal;
		font-weight: 100px;
		height: 267px;
		padding-left: 23%;
	}
`;

const Container3 = styled(Link)`
	display: flex;
	width: 300px;
	height: 300px;
	background-image: url('https://lainco.ca/wp-content/uploads/2022/10/Projet_Centre-multisports-regional-Varennes-4-IMG_4961-2000x1125.jpg');
	align-items: flex-end;
	justify-content: flex-start;
	margin: 10px;
	background-size: cover;
	filter: brightness(75%);
	font-size: 20px;
	padding: 3px;
	text-decoration: none;
	border: solid 1px white;
	p {
		filter: revert;

		text-align: center;
		color: white;
		text-decoration: none;
		font-size: 35px;
		font-family: 'Lato', sans-serif;
		font-style: normal;
		font-weight: 100px;
		height: 5px;
		padding-left: 11%;
	}
`;

export default HomePage;
