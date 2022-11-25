import React from 'react';

const Blogs = () => {
    return (
        <div className=''>
            <div className=" shadow-xl mt-5 p-4 m-5 md:w-3/5 md:mx-auto">
                <p ><span className='text-2xl mx-2'> Q.</span>13.1 What are the different ways to manage a state in a React application?</p>
                <p className=' text-gray-500'><span className='text-2xl mx-2'> A.</span>
                    There are four main types of state you need to properly
                    manage in your<br /> React apps:
                    <br />
                    Local state,
                    Global state ,
                    Server state,
                    URL state
                </p>
            </div>
            <div className=" shadow-xl mt-5 m-5 p-4 md:w-3/5 md:mx-auto">
                <p ><span className='text-2xl mx-2'> Q.</span>13.2 How does prototypical inheritance work?</p>
                <p className=' text-gray-500'><span className='text-2xl mx-2'> A.</span>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object
                </p>
            </div>
            <div className=" shadow-xl mt-5 m-5 p-4 md:w-3/5 md:mx-auto">
                <p ><span className='text-2xl mx-2'> Q.</span>13.3 What is a unit test? Why should we write unit tests?</p>
                <p className=' text-gray-500'><span className='text-2xl mx-2'> A.</span>
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p>
            </div>
            <div className=" shadow-xl mt-5 p-4 m-5 md:w-3/5 md:mx-auto">
                <p  ><span className='text-2xl mx-2'> Q.</span>13.4 React vs. Angular vs. Vue?</p>
                <p className=' text-gray-500'><span className='text-2xl mx-2'> A.</span>
                    Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.

                    <br />
                    Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.

                    Further reading: Vue.js Tutorial for Beginner Developers
                    <br />
                    React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.
                </p>
            </div>
        </div>
    );
};

export default Blogs;