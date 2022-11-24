import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../../Components/Modal';
import SmallSpin from '../../Components/SmallSpin';

const ProductCatagory = () => {
    const data = useLoaderData()
    const catagoryName = data.data[0].Name
    const [modalData, setModalData] = useState(null);
    const url = `http://localhost:2100/usephoneServices?catagory=${catagoryName}`
    const { data: services = [], isLoading } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data.data
        }
    })
    if (isLoading) return <div className="justify-center items-center h-screen">
        <SmallSpin />
    </div>
    return (
        <div className='p-5 md:w-5/6 lg:w-4/6 mx-auto'>
            {
                services?.map(service =>

                    <div className="card md:card-side my-5 shadow-xl" key={service._id}>
                        <figure><img className='h-96 md:h-full w-full md:w-96' src={service.photoUrl} alt="pictures" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title">Device Name: {service.productName}</h2>
                            <div className=" py-5">
                                <div className="">
                                    <p>publishName : {service.sellerName}</p>
                                    <p>publis Date : {service.dateAdded}</p>
                                </div>
                                <div className="mt-5">
                                    <p>Location:{service.location}</p>
                                    <p>Phone use :{service.years_of_use} yr</p>
                                </div>
                                <div className="mt-5">
                                    <p>Original price :{service.original_price} yr</p>
                                    <p>Relice price :{service.resale_price} yr</p>
                                </div>

                            </div>
                            <div className="card-actions justify-end">
                                <label
                                    onClick={() => setModalData(service)}
                                    htmlFor="Open_modal" className="btn btn-primary">Book Now</label>
                            </div>
                            {modalData &&
                                <Modal
                                    modalData={modalData}
                                    setModalData={setModalData}
                                />
                            }
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default ProductCatagory;