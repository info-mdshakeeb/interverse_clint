import React from 'react';
import Hero from './HomeComponents/Hero';
import ProductCatagory from './HomeComponents/ProductCatagory';
import Testimonial from './HomeComponents/Testimonial';

const Home = () => {
    return (
        <div>
            <Hero />
            <ProductCatagory />
            <Testimonial />
        </div>
    );
};

export default Home;