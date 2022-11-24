import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SmallSpin from '../../Components/SmallSpin';

const ProductCatagory = () => {
    const data = useLoaderData()
    const catagoryName = data.data[0].Name
    console.log(catagoryName);

    const url = `http://localhost:2100/usephoneServices?catagory=${catagoryName}`
    const { data: services = [], isLoading } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data.data
        }
    })
    console.log(services);
    if (isLoading) return <div className="flex justify-center items-center h-screen">
        <SmallSpin />
    </div>
    return (
        <div className='p-10 md:p-32 lg:p-10 lg:grid grid-cols-2 gap-5 h-screen items-center'>
            {
                services?.map(service =>
                    <div className="card  mx-auto bg-base-100 shadow-xl" key={service._id}>
                        <figure><img className='h-96 w-full' src={service.photoUrl} alt="pictures" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Device Name: {service.productName}</h2>
                            <div className="">
                                <div className=" flex ">
                                    <p>publishName : {service.sellerName}</p>
                                    <p>publis Date : {service.dateAdded}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ProductCatagory;