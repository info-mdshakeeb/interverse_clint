import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SmallSpin from '../SmallSpin';

const ReportedItem = () => {
    const url = `https://interverse.vercel.app/reports`
    const { data: reports = [], isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data.data
        }
    })
    if (isLoading) return (
        <div className="flex items-center justify-center h-screen">
            <SmallSpin />
        </div>)
    // console.log(reports);
    return (
        <div>
            <div className="my-8">
                <p className='text-xl'> Reported Info</p>
            </div>
            <div className="overflow-x-auto w-full mt-10">
                <table className="table w-5/6 mx-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Report Product</th>
                            <th>Reported User</th>
                            <th>Seller Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report, i) =>
                            <tr key={report._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={report.productPic} alt='' />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{report.productName}</div>
                                            <div className="text-sm opacity-50">{report.sellerName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {report?.reportedUserName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">
                                        {report?.reportedUserEmail}
                                    </span>
                                </td>
                                <td>
                                    {report?.sellerName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">
                                        {report?.sellerEmail}
                                    </span>
                                </td>
                                <td>

                                </td>

                            </tr>
                        )}
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ReportedItem;