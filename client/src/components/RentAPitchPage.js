import styled from 'styled-components';

const RentAPitchPage = () => {
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
				{/* <a href='https://forms.waterloo.ca/Facility-Booking/Booking-and-Event-Planning-Form'>
					<RentalImage src='/Core.jpeg' alt='Core' />
				</a> */}
			</RentAPitchContainer>
      {/* <WrapperBottom>
				</WrapperBottom>
			<GrassDiv><ContactSection /></GrassDiv> */}
		</div>
	);
};

const div = styled.div`
	align-items: center;
`;

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


export default RentAPitchPage;
