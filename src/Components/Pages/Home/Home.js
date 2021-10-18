import React from 'react';
import Banner from './Banner/Banner';
import PromoBanner from './PromoBanner/PromoBanner';
import Services from './Services/Services';
import Consultants from './Consultants/Consultants';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <PromoBanner></PromoBanner>
            <Consultants></Consultants>
        </div>
    );
};

export default Home;