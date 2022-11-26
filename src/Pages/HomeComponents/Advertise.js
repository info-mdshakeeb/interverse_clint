import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import OrderModal from '../../Components/OrderModule';
import ReportModal from '../../Components/ReportModal';

const Advertise = () => {
    const [modalData, setModalData] = useState(null);
    const [reportModalData, setReportModalData] = useState(null)
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

            <div className="grid md:gap-8 md:grid-cols-2 lg:grid-cols-3 md:px-10">
                {
                    adsData.map(ad =>
                        <div>
                            <div className="card w-full shadow-xl">
                                <figure><img className='w-full h-52 ' src={ad.photoUrl} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {ad.productName}
                                        <div className="badge badge-secondary">{ad.condition}</div>
                                    </h2>
                                    <div className="flex">
                                        <div className="">
                                            <p className='pr-3'> {ad.sellerName}</p>
                                        </div>
                                        {ad.sellerType &&
                                            <div className="">Verified</div>
                                        }
                                    </div>
                                    <div className="">locatiopn : {ad.location}</div>
                                    <div className=" card-footer">
                                        <div className="card-actions justify-end">
                                            <label
                                                onClick={() => setModalData(ad)}
                                                htmlFor="Open_modal" className="btn btn-primary btn-sm">Book Now</label>
                                            <label
                                                htmlFor="report_modal"
                                                onClick={() => setReportModalData(ad)}
                                                className="btn btn-primary btn-sm">Report to admin</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
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


        </section>

    );
};

export default Advertise;