import React from 'react';
import bg from '../../assets/img/horo.png';


const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className=" w-3/4 mx-auto ">
                <div className="md:w-3/5 ">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">The obvious benefit of carrying two phones is that you get a dedicated phone for work. This makes it easy to identify work-related calls and prioritise them. You can also your second phone to organise your professional messages. This makes it easy to retrieve a text from a customer or vendor.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;