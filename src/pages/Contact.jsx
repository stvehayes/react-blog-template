import React from 'react';
import {
    BodyContainer,
    Container,
    HeroContainer
} from '../components/StyledComponents/StyledComponents';
import Navigation from '../components/Navigation/Navigation.jsx';
import ContactForm from '../components/Contact/ContactForm.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Link from '../components/Utility/Link';
import Data from '../Data';

const Contact = () => {
    return (
        <>
            <Navigation page="contact" />
            <BodyContainer>
                <HeroContainer
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 2, delay: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Container flex top={6}>
                        <Container width={50} bottom={6} right={2}>
                            <h1>{Data.contact.title}</h1>
                            <p>{Data.contact.description} <nobr><Link external text={Data.contact.email} route={`mailto:${Data.contact.email}`} />.</nobr></p>
                        </Container>
                        <Container width={50}>
                            <ContactForm />
                        </Container>
                    </Container>
                </HeroContainer>
            </BodyContainer>
            <Footer />
        </>
    );
}

export default Contact;
