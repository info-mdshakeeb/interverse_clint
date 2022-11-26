import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import SmallSpin from "../Components/SmallSpin";
import UpdateUsedProductModal from '../Components/UpdateUsedProductModal';
import { AuthUser } from "../Context/UserContext";
import AlartMessage from "../Hooks/AlartMessage";

const MyProduct = () => {
    const { successMessage } = AlartMessage()
    const { user } = useContext(AuthUser);
    const [datainfo, setDatainfo] = useState(null)

    const hendelPublish = id => {
        const isAva = {
            type: 'publise'
        }
        fetch(`http://localhost:2100/usephoneServices/publish/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(isAva)
        }).then(rs => {
            refetch()
            successMessage("updated publiseD")
        })
            .catch(err => console.log(err))
    }
    const url = `http://localhost:2100/myproducts?email=${user.email}`;

    const { data: orders = [], isLoading, refetch } = useQuery({
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

    console.log(orders);
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
                                <tr key={order._id}>
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
                                    <td className="form-control w-40">
                                        <label
                                            onClick={() => setDatainfo(order)}
                                            htmlFor="my-modal-4" className="btn btn-sm btn-success">updat sataus</label>
                                    </td>
                                    {order.available === "available" &&
                                        <td>
                                            {order.type ? <button

                                                className='btn btn-sm btn-disabledbtn-warning'>advertised</button> :
                                                <button
                                                    onClick={() => hendelPublish(order._id)}
                                                    className='btn btn-sm btn-warning'>advertise</button>
                                            }
                                        </td>
                                    }
                                </tr>
                            )}
                        </tbody>
                    </table>
                    {datainfo &&
                        <UpdateUsedProductModal
                            refetch={refetch}
                            datainfo={datainfo}
                            setDatainfo={setDatainfo}
                        />}
                </div>
            </div>
        </div>
    );
};

export default MyProduct;