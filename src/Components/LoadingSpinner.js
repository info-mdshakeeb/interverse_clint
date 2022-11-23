import Lottie from 'lottie-react';
import React from 'react';
import loadingAmimation from '../assets/loading.json';

const LoadingSpinner = () => {
    return <Lottie animationData={loadingAmimation} loop={true} />;
};

export default LoadingSpinner;