import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import SmallSpin from '../../Components/SmallSpin';

const ProductCatagorys = () => {
    const { data: productcatagorys = [], isLoading } = useQuery({
        queryKey: ['productcatagory'],
        queryFn: async () => {
            const res = await fetch('https://interverse.vercel.app/productcatagorys')
            const data = await res.json()
            return data.data
        }
    })

    if (isLoading) return
    <div className="flex justify-center items-center h-screen">
        <SmallSpin />
    </div>
    return (
        <section className='mb-20'>
            <div className="mx-5 flex justify-between ">
                <div className="mb-20">
                    <p className='text-primary'>Phones Catagory </p>
                    <p className='text-4xl'>Whitch brand Phone We provide</p>
                </div>

            </div>
            <div className="grid md:gap-2 md:grid-cols-2 lg:grid-cols-3 md:px-10 ">
                {
                    productcatagorys?.map(productcatagory =>
                        <div className=" shadow-md mx-auto md:mt-0 md:w-full " key={productcatagory._id}>
                            <div className="shadow-2xl p-5 md:p-0 ">
                                <figure><Link to={`/productcatagory/${productcatagory._id}`}>
                                    <img className=' cursor-pointer rounded-xl md:h-52 ' src={productcatagory.pic} alt="Shoes" /></Link></figure>
                                <div className="card">
                                    <h2 className="card-title">
                                        {productcatagory.name}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default ProductCatagorys;