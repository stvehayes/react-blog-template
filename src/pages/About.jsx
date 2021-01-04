import React from 'react';
import {
	BodyContainer,
	Container
} from '../components/StyledComponents/StyledComponents';
import Navigation from '../components/Navigation/Navigation.jsx';
import AboutHero from '../components/About/AboutHero';
import AboutDescription from '../components/About/AboutDescription';
import AboutResume from '../components/About/AboutResume.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Button from '../components/Utility/Button';

const About = () => {
    return (
		<>
			<Navigation page="about" />
			<BodyContainer>
				<AboutHero />
				<AboutDescription />
				<AboutResume />
				<Container flex center>
					<Button
						right
						route="/contact"
						text="Get in touch"
					/>
				</Container>
			</BodyContainer>
			<Footer />
		</>
    );
}

export default About;