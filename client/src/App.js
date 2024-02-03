import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import React, { useState } from 'react';
import axios from 'axios';
import LeaguesPage from './components/LeaguesPage';
import RentAPitchPage from './components/RentAPitchPage';
import ProfilePage from './components/ProfilePage';
import PitchesPage from './components/PitchesPage';
import LoginButton from './components/LoginButton';
import { Auth0Provider } from '@auth0/auth0-react';

const App = () => {
	const [soccerPitches, setSoccerPitches] = useState([]);
	const TOKEN2 = '1c7a9652615545338fcb9a7501b163ea';
	useEffect(() => {
		fetch(
			`https://services1.arcgis.com/qAo1OsXi67t7XgmS/arcgis/rest/services/Soccer_Fields/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson`
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setSoccerPitches(data.features);
			});
	}, []);

	// const root = createRoot(document.getElementById('root'));

	// root.render(
	// 	<Auth0Provider
	// 		domain='dev-03h0vls6vzdgqlbq.us.auth0.com'
	// 		clientId='8nXt2o4D33nDWoRKAopWSLcMR2ioSqvX'
	// 		authorizationParams={{
	// 			redirect_uri: window.location.origin,
	// 		}}
	// 	>
	// 		<App />
	// 	</Auth0Provider>
	// );

	return (
		<div className='App'>
			<Router>
				<Header />
				<Routes>
					<Route
						path='/'
						element={<HomePage soccerPitches={soccerPitches} />}
					/>
					<Route path='/login' element={<LoginPage />} />
					{/* Add other routes as needed */}
					<Route path='/ListingGrid/ProfilePage' element={<ProfilePage />} />
					<Route path='/ListingGrid/PitchesPage' element={<PitchesPage />} />
					<Route path='/ListingGrid/LeaguesPage' element={<LeaguesPage />} />
					<Route
						path='/ListingGrid/RentAPitchPage'
						element={<RentAPitchPage />}
					/>
					<Route path='/ProfilePage' element={<ProfilePage />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
