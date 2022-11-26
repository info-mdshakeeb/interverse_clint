import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SmallSpin from '../Components/SmallSpin';
import { AuthUser } from '../Context/UserContext';

const MyOrders = () => {
    const { user } = useContext(AuthUser);
    const url = `http://localhost:2100/mybooking?email=${user.email}`;

    const { data: bookings = [], isLoading } = useQuery({
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

    // console.log(bookings);
    return (
        <div>
            <p className="text-2xl py-3">My Orders</p>
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
                                    {booking?.paid ? <td>payed</td> : <td>Pending</td>}
                                    <td>{booking.price && !booking.paid &&
                                        <Link to=''><p className='btn btn-warning btn-sm'>pay</p></Link>
                                    }</td>
                                </tr>

                            )

                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;