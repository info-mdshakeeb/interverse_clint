import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import PaymentModal from '../Components/DashboardComponent/PaymentModal';
import SmallSpin from '../Components/SmallSpin';
import { AuthUser } from '../Context/UserContext';

const MyOrders = () => {
    const { user } = useContext(AuthUser);
    const [pay, setPay] = useState(null)
    const url = `http://localhost:2100/mybooking?email=${user.email}`;
    const { data: bookings = [], isLoading, refetch } = useQuery({
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
    refetch()
    // console.log(bookings);
    return (
        <div>
            <p className="pl-5 text-2xl py-5">My Orders</p>
            <div className="md:w-4/6 mx-auto">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Info</th>
                                <th>Seler Info</th>
                                <th>Pament Sataus</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking, i) =>
                                <tr>
                                    <th> {i + 1} </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={booking.photoUrl} alt='dd' />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{booking.productName}</div>
                                                <div className="text-sm opacity-50">Price:{booking.price}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {booking.sellerName}<br />
                                        <span className="badge badge-ghost badge-sm">Email :{booking.sellerEmail}</span>
                                    </td>
                                    {booking?.available === "sold" ? <td className='btn btn-sm btn-disabled'>payed</td> : <td>Pending</td>}
                                    <td>{!(booking?.available === "sold") &&
                                        <label
                                            onClick={() => setPay(booking)}
                                            htmlFor="paymemt-modal" className="btn btn-warning btn-sm">Pay</label>
                                    }</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    {pay &&
                        <PaymentModal
                            setPay={setPay}
                            isLoading={isLoading}
                            pay={pay} />
                    }

                </div>
            </div>
        </div>
    );
};

export default MyOrders;