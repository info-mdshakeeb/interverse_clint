import React from 'react';
import Footer from '../Components/Footer';
import Advertise from './HomeComponents/Advertise';
import Hero from './HomeComponents/Hero';
import ProductCatagorys from './HomeComponents/ProductCatagorys';
import Testimonial from './HomeComponents/Testimonial';

const Home = () => {
    return (
        <div>
            <Hero />
            <ProductCatagorys />
            <Advertise></Advertise>
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;