import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertise = () => {
    const url = `http://localhost:2100/advertises?available=available&&type=publise`;

    const { data: adsData = [] } = useQuery({
        queryKey: ['ad'],
        queryFn: async () => {
            fetch(url)
            const res = await fetch(url)
            const data = await res.json();
            return data.data
        }
    })
    // console.log(adsData);

    return (
        <section className='my-20'>
            <div className="mx-5 flex justify-between mb-20">
                <div className="">
                    <p className='text-primary'>AdvertiseMent</p>
                    <p className='text-4xl'>Sellers Some Product</p>
                </div>
            </div>

            <div className="grid md:gap-5 md:grid-cols-2 lg:grid-cols-4 mx-8">
                {
                    adsData.map(ad =>
                        <div>
                            <div className="card w-full shadow-xl">
                                <figure><img className='w-full h-40 ' src={ad.photoUrl} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {ad.productName}
                                        <div className="badge badge-secondary">{ad.condition}</div>
                                    </h2>
                                    <div className="">seller Name : {ad.sellerName}</div>
                                    <div className="">locatiopn : {ad.location}</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>


        </section>

    );
};

export default Advertise;