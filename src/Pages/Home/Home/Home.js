import React from 'react';
import Banner from '../../Banner/Banner';
import Footer from '../../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <h1>This is home</h1>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;