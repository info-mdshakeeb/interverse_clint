import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import SmallSpin from '../Components/SmallSpin';
import { AuthUser } from '../Context/UserContext';

const MyProduct = () => {
    const { user } = useContext(AuthUser);
    const url = `http://localhost:2100/myproducts?email=${user.email}`;

    const { data: orders = [], isLoading } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data.data
        }
    })
    if (isLoading) return <div className="flex h-screen items-center justify-center">
        <SmallSpin />
    </div>

    // console.log(orders);
    return (
        <div>
            <p className="text-2xl py-3">My Product</p>
            <div className="md:w-4/6 mx-auto">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Info</th>
                                <th>Sataus</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, i) =>
                                <tr>
                                    <th> {i + 1} </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={order.photoUrl} alt='dd' />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{order.productName}</div>
                                                <div className="text-sm opacity-50">Price:{order.resale_price}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>comming</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;