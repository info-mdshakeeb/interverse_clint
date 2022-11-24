import React from 'react';
import Footer from '../Components/Footer';
import Hero from './HomeComponents/Hero';
import ProductCatagorys from './HomeComponents/ProductCatagorys';
import Testimonial from './HomeComponents/Testimonial';

const Home = () => {
    return (
        <div>
            <Hero />
            <ProductCatagorys />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;