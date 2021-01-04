import React from 'react';
import Navigation from '../components/Navigation/Navigation.jsx';
import HomeHero from '../components/Home/HomeHero';
import HomeArticles from '../components/Home/HomeArticles';
import Footer from '../components/Footer/Footer.jsx';

const Home = () => {
    return (
        <>
            <Navigation page="work" />
            <HomeHero />
            <HomeArticles />
            <Footer />
        </>
    );
}

export default Home;