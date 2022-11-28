import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import heroAni from '../../assets/styleHero.json';
import { AuthUser } from '../../Context/UserContext';



const Hero = () => {
    const { user } = useContext(AuthUser)
    // console.log(user);
    return (
        <div className="hero min-h-screen mb-5" >
            <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 md:flex-row lg:items-center">
                <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                    <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
                        <button className="w-3 h-3 mx-2 bg-yellow-500 rounded-full lg:mx-0 focus:outline-none"></button>
                        <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
                        <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
                        <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
                    </div>

                    <div className="max-w-lg pt-20 lg:pt-0 lg:mx-12 lg:order-2">
                        <h1 className="text-3xl font-medium tracking-wide dark:text-white lg:text-4xl"> The best used Phone Here</h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            Used smartphones are generally a safe investment, but there are any number of reasons why you might need to return it – it doesn't work as advertised, or you may even discover it's missing a critical feature you didn't realize you needed.</p>
                        {user?.email ?
                            null
                            :
                            <div className="mt-6">
                                <Link to='/login' className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-300 transform bg-yellow-500 rounded-md lg:inline hover:bg-blue-400">Login For Order</Link>
                            </div>}
                    </div>
                </div>

                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <Lottie animationData={heroAni} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Hero;