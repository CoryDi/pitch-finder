import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import ContactSection from './ContactSection';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGl, { Marker, NavigationControl, Popup } from 'react-map-gl';
import RoomIcon from '@mui/icons-material/Room';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const TOKEN = process.env.REACT_APP_MAP_TOKEN;
const HomePage = ({ soccerPitches }) => {
	const [viewPort, setViewPort] = useState({
		latitude: 43.4516,
		longitude: -80.495064,
		zoom: 13,
	});
	const [popup, setPopup] = useState({
		hover: false,
		longitude: 0,
		latitude: 0,
	});
	const navigate = useNavigate();
	const { user } = useAuth0();
	console.log(user);
	return (
		<Wrapper1>
			<WrapperTop>
				<Container1 to='ListingGrid/LeaguesPage'>
					<p>LEAGUES</p>
				</Container1>
				<Container2 to='ListingGrid/RentAPitch'>
					<p>RENT A PITCH</p>
				</Container2>
			</WrapperTop>
			<WrapperMap style={{ width: '100%', height: '150%', zIndex: 999 }}>
				<ReactMapGl
					{...viewPort}
					mapboxAccessToken={TOKEN}
					transitionDuration='100'
					mapStyle='mapbox://styles/cory-dixon/clrshfs9i00n901nlc7tmd76c'
					onMove={(viewPort) => setViewPort(viewPort)}
					dragPan={true}
					scrollZoom={true}
					doubleClickZoom={true}
				>
					{popup.hover && (
						<Popup latitude={43.4516} longitude={-80.495064}>
							Name: {popup.name}
						</Popup>
					)}
					<NavigationControl />
					{soccerPitches.map((e) => {
						console.log(e);
						return (
							<Marker
								onClick={() => {
									navigate(`/soccerPitches/${e.properties.LANDMARKID}`);
								}}
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
								<div
									onMouseEnter={() => {
										setPopup({
											...popup,
											number: e.properties.CIVIC_NO,
											name: e.properties.LANDMARK,
											street: e.properties.STREET,
											hover: true,
										});
									}}
									onMouseLeave={() => {
										setPopup({ ...popup, hover: false });
									}}
								>
									<RoomIcon
										style={{
											fontSize: 4.4 * viewPort.zoom,
											color: 'red',
											cursor: 'pointer',
										}}
									/>
								</div>
							</Marker>
						);
					})}
				</ReactMapGl>
			</WrapperMap>
			<WrapperBottom></WrapperBottom>
			<StyledDiv>
				<ContactSection />
			</StyledDiv>
		</Wrapper1>
	);
};
//Wrapper for whole page
const Wrapper1 = styled.div`
	padding-top: -20px;
	flex-direction: column;
	align-items: center;
	display: flexbox;
	justify-content: center;
	width: 100%;
	height: 30vh;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	background-size: cover;
	background-color: black;
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
	margin-top: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 5px solid black;
`;

//Wrapper for contacts icons/Grass image
const WrapperBottom = styled.div`
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
// 	display: flex;
// 	width: 300px;
// 	height: 300px;
// 	background-image: url('https://wallpapercrafter.com/th8007/1721134-football-ball-sports-ground-goal-kick-off-leather.jpg');
// 	align-items: flex-end;
// 	justify-content: flex-start;
// 	margin: 10px;
// 	background-size: cover;
// 	filter: brightness(75%);
// 	font-size: 20px;
// 	padding: 3px;
// 	text-decoration: none;
// 	border: solid 1px white;
// 	p {
// 		filter: revert;
// 		color: white;
// 		text-decoration: none;
// 		font-size: 35px;
// 		font-family: 'Lato', sans-serif;
// 		font-style: normal;
// 		font-weight: 100px;
// 		height: 5px;
// 		padding-left: 27%;
// 	}
// `;

const Container1 = styled(Link)`
	display: flex;
	width: 300px;
	height: 300px;
	background-image: url('https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c733320b-a2a8-4fff-8c16-07c72317a4a9/phantom-gx-2-elite-sg-low-top-football-boot-msnSFx.png');
	align-items: flex-end;
	justify-content: flex-start;
	margin: 10px;
	background-size: cover;
	filter: brightness(75%);
	font-size: 20px;
	padding: 3px;
	text-decoration: none;
	border-radius: 20px;
	p {
		filter: revert;
		color: black;
		text-decoration: none;
		font-size: 35px;
		font-family: 'Lato', sans-serif;
		font-style: normal;
		font-weight: 100px;
		height: 5px;
		padding-left: 23%;
	}
`;

const Container2 = styled(Link)`
	display: flex;
	width: 300px;
	height: 300px;
	background-image: url('pitch.jpeg');
	align-items: flex-end;
	justify-content: flex-start;
	margin: 10px;
	background-size: cover;
	filter: brightness(75%);
	font-size: 20px;
	padding: 3px;
	text-decoration: none;
	border-radius: 20px;
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
