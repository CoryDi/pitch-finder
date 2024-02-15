import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import ContactSection from './ContactSection';

const PitchesPage = ({ soccerPitches }) => {
	const { PitchId } = useParams();
	const navigate = useNavigate();
	const [rating, setRating] = useState();
	const [ratingList, setRatingList] = useState();
	const { user, isAuthenticated } = useAuth0();
	let pitch = soccerPitches?.find((s) => s.properties.LANDMARKID == PitchId);
	const handleChange = (e) => {
		setRating(e.target.value);
	};
	const fetchRatings = () => {
		fetch('/api/ratings')
			.then((res) => res.json())
			.then((data) => {
				console.log(data.data);
				setRatingList(data.data);
			});
	};
	useEffect(fetchRatings, []);
	const addRating = (e) => {
		console.log(user);
		e.preventDefault();
		fetch(`/api/addrating`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				pitchID: PitchId,
				userEmail: user.email,
				rating: rating,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				fetchRatings();
			})
			.catch((error) => {
				window.alert(error);
			});
	};
	const editRating = (e) => {
		console.log(user);
		e.preventDefault();
		fetch(`/api/editrating`, {
			method: 'PATCH',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				pitchID: PitchId,
				userEmail: user.email,
				rating: rating,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				fetchRatings();
			})
			.catch((error) => {
				window.alert(error);
			});
	};
	const deleteRating = (e) => {
		console.log(user);
		e.preventDefault();
		fetch(`/api/deleterating`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				pitchID: PitchId,
				userEmail: user.email,
				rating: rating,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				fetchRatings();
			})
			.catch((error) => {
				window.alert(error);
			});
	};
	return (
		<div>
			<Img src='https://kitchener.citynews.ca/wp-content/blogs.dir/sites/3//village-media/rbj-schlegel-park-2.PNG' />
			<div>
				<P>
					Address: {pitch?.properties.CIVIC_NO} {pitch?.properties.STREET}
				</P>
				<br></br>
				<P>Field Surface: {pitch?.properties.SURFACE_MATERIAL} </P>
				<br></br>
				<div>
					<input
						type='number'
						min='0'
						max='5'
						value={rating}
						onChange={handleChange}
					/>
					{ratingList?.filter(
						(e) => e.pitchID == PitchId && e.userEmail == user?.email
					).length == 0 ? (
						<button disabled={!isAuthenticated} onClick={addRating}>
							Add Rating
						</button>
					) : (
						<button disabled={!isAuthenticated} onClick={editRating}>
							Edit Rating
						</button>
					)}
				</div>
				<P>
					User Rating:
					{ratingList
						?.filter((e) => e.pitchID == PitchId)
						.map((e) => {
							return (
								<>
									<h1>{e.rating}/5</h1>
									<h3>{e.userEmail}</h3>
									<button
										onClick={deleteRating}
										disabled={e.userEmail != user?.email}
									>
										Delete Rating
									</button>
								</>
							);
						})}
				</P>
				<WrapperBottom></WrapperBottom>
				<StyledDiv>
					<ContactSection />
				</StyledDiv>
			</div>
		</div>
	);
};

const Img = styled.img`
	flex: display;
	border-radius: 20px;
	width: 100%;
`;

const P = styled.h3`
	font-family: 'Lato', sans-serif;
	color: black;
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

export default PitchesPage;
