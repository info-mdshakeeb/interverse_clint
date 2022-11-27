import React from 'react';
import bg from '../../assets/img/horo.png';


const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
            <div className="container px-6 py-16 mx-auto">
                <div className="items-center lg:flex">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-2xl font-semibold text-yellow-600 uppercase dark:text-white lg:text-3xl">Find Your Phone Here</h1>
                            <p className="mt-2 text-white dark:text-gray-400">The obvious benefit of carrying two phones is that you get a dedicated phone for work. This makes it easy to identify work-related calls and prioritise them. You can also your second phone to organise your professional messages. This makes it easy to retrieve a text from a customer or vendor.</p>

                            <button className="w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-yellow-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Explore More</button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        {/* <img className="w-full h-full lg:max-w-2xl" src="" alt=''></img> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;