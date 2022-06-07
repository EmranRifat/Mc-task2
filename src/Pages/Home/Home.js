import React from 'react';
import Banner from '../Banner/Banner';
import BannerTwo from '../BannerTwo/BannerTwo';
import Card from '../Card/Card';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='container mx-auto' >
            <Banner></Banner>
            <Card></Card>
            <BannerTwo></BannerTwo>
            <Services></Services>
        </div>
    );
};

export default Home;