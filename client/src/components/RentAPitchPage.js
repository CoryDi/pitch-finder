import styled from 'styled-components';
import ContactSection from './ContactSection';

const RentAPitch = () => {
	return (
		<div>
			<T>Rent A Pitch</T>
			<RentAPitchContainer>
				<a href='https://www.kitchener.ca/en/recreation-and-sports/book-a-field.aspx'>
					<RentalImage src='/kitchener.png' alt='Kitchener' />
				</a>
				<a href='https://forms.waterloo.ca/Facility-Booking/Booking-and-Event-Planning-Form'>
					<RentalImage src='/Waterloo2.png' alt='Waterloo' />
				</a>
			</RentAPitchContainer>
			<WrapperBottom></WrapperBottom>
			<StyledDiv>
				<ContactSection />
			</StyledDiv>
		</div>
	);
};

const T = styled.h1`
	font-family: 'Lato', sans-serif;
	font-size: 50px;
	text-align: center;
	padding-top: 100px;
`;

const RentAPitchContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 10px;
`;

const RentalImage = styled.img`
	height: 300px;
	width: 300px;
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

export default RentAPitch;
