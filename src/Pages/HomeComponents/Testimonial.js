import React from 'react';
import quote from '../../assets/Icon/quote.svg';


const Testimonial = () => {
    const TestimonialData = [
        {
            id: 1,
            Name: 'Winson ',
            description: 'This site is very useful for those who are going to buy a mobile. He can know every perspective of mobiles good or bad. I personally thought if you are going to buy a smart phone then you have to buy from Apple because this is the only brand that provides us a safe ',
            pic: 'https://randomuserprofile.github.io/logo.png',
            address: 'Japan'
        },
        {
            id: 2,
            Name: 'Alex',
            description: 'I like this product mostly because it gives genuine and detail information .The other thing about this product that it is user-friendly and all the contents are visible clearly I think load time should be improved a little bit.',
            pic: 'https://rapidapi-prod-apis.s3.amazonaws.com/b42aa17d-8ae0-4a28-b29f-587af5454390.png',
            address: 'California'
        }, {
            id: 3,
            Name: 'Sadik',
            description: 'This site is very genuine . and also giving us very helpful knowledge about mobile phones . great . If you want to know anything about upcoming mobiles . then easily you can go to this site and read the details . ',
            pic: 'https://cdn1.iconfinder.com/data/icons/random-115/24/person-512.png',
            address: 'Dhaka'
        },
    ]
    return (
        <section>
            <div className="mx-5 flex justify-between">
                <div className="">
                    <p className='text-primary'>Testimonials</p>
                    <p className='text-4xl'>What Our Customer Says</p>
                </div>
                <figure>
                    <img className=' w-24 md:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className="grid md:gap-3 md:grid-cols-2 lg:grid-cols-3 mx-5">
                {
                    TestimonialData.map(testimonial =>
                        <div className="card  bg-base-100 shadow-xl" key={testimonial.id}>
                            <div className="card-body">
                                <p>{testimonial.description}</p>
                            </div>
                            <div className="card-actions  ">
                                <div className="avatar h-24 ">
                                    <div className="w-16 h-16 mx-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                                        <img src={testimonial.pic} alt='' />
                                    </div>
                                    <div className="w-auto">
                                        <p>{testimonial.Name}</p>
                                        <p>{testimonial.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Testimonial;