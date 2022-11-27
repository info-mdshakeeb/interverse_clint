import React from 'react';


const Footer = () => {
    return (
        <div className="mt-20">
            <hr className="h-px mt-6 bg-gray-200 border-none dark:bg-gray-700" />
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 flex justify-between">
                <div className="items-center grid-flow-col">
                    <img className='w-10 h-10' src="https://www.nifcoeu.com/wp-content/uploads/2015/04/kinematics.png" alt="" />
                    <p>Interverse Ltd. <br />@ CopyRight By Shakeeb || 2022</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <a href='https://www.facebook.com/mdshakeebltd/' to='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>

                </div>
            </footer>
        </div>

    );
};

export default Footer;
