import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AlartMessage from '../../Hooks/AlartMessage';
import SmallSpin from '../SmallSpin';

const Allsellers = () => {
    const { successMessage } = AlartMessage()
    const url = `http://localhost:2100/admin/users?role=seller`
    const { data: sellers = [], refetch, isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data.data
        }
    })
    const heandelVerify = id => {
        const ststus = { type: 'verified' }
        fetch(`http://localhost:2100/user/admin/vf/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ststus)
        }).then(res => res.json()).then(data => {
            successMessage('seller verified')
            refetch()
        })
    }
    const heandelDelete = id => {
        fetch(`http://localhost:2100/user/admin/delete/${id}`, {
            method: "DELETE"
        }).then(res => res.json()).then(data => {
            successMessage('User Deleted')
            refetch()
        })
    }
    if (isLoading) return <SmallSpin />
    return (
        <div>
            <p className="text-2xl py-3">All Buyers</p>
            <div className="md:w-4/6 mx-auto">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>User Mail</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {sellers.map((seller, i) =>
                                <tr key={seller._id}>
                                    <th> {i + 1} </th>
                                    <td>
                                        <div className="font-bold">{seller.email}</div>
                                    </td>
                                    <td>
                                        {seller.type ?
                                            <div
                                                className="btn btn-sm btn-disabled"
                                            >verifyed</div>
                                            :
                                            <div
                                                onClick={() => heandelVerify(seller._id)}
                                                className="btn btn-sm btn-success"
                                            >verify</div>}
                                    </td>
                                    <td>
                                        <div
                                            onClick={() => heandelDelete(seller._id)}
                                            className="btn btn-sm btn-warning">Delete</div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default Allsellers;