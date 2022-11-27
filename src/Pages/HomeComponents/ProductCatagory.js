import { UisCheckCircle } from '@iconscout/react-unicons-solid';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderModal from '../../Components/OrderModule';
import ReportModal from '../../Components/ReportModal';
import SmallSpin from '../../Components/SmallSpin';

const ProductCatagory = () => {
    const data = useLoaderData()
    const catagoryName = data.data[0].Name
    const [modalData, setModalData] = useState(null);
    const [reportModalData, setReportModalData] = useState(null)
    const url = `https://interverse.vercel.app/usephoneServices?catagory=${catagoryName}`
    const { data: services = [], isLoading } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data.data
        }
    })
    console.log(services);
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
                                <div className="flex">
                                    <div className="">
                                        <p className='pr-3'> {service.sellerName}</p>
                                    </div>
                                    {service.sellerType &&
                                        <UisCheckCircle className='text-blue-500 w-4' />
                                    }
                                </div>
                                <p>publis Date : {service.dateAdded}</p>
                                <div className="mt-5">
                                    <p>Location:{service.location}</p>
                                    <p>Phone use :{service.years_of_use} yr</p>
                                </div>
                                <div className="mt-5">
                                    <p>Original price :{service.original_price} yr</p>
                                    <p>Relice price :{service.resale_price} yr</p>
                                    {service.type === 'publise' ? <p>Type : Avalable </p> :
                                        <p>Type : {service.type} </p>
                                    }
                                </div>

                            </div>
                            <div className="card-actions justify-end">
                                <label
                                    onClick={() => setModalData(service)}
                                    htmlFor="Open_modal" className="btn btn-primary btn-sm">Book Now</label>
                                <label
                                    htmlFor="report_modal"
                                    onClick={() => setReportModalData(service)}
                                    className="btn btn-primary btn-sm">Report to admin</label>
                            </div>

                        </div>
                    </div>
                )
            }
            {modalData &&
                <OrderModal
                    modalData={modalData}
                    setModalData={setModalData}
                />
            }
            {reportModalData &&
                <ReportModal
                    reportModalData={reportModalData}
                    setReportModalData={setReportModalData}
                />

            }


        </div>
    );
};

export default ProductCatagory;