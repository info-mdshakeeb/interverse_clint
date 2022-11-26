import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthUser } from '../Context/UserContext';
import AlartMessage from '../Hooks/AlartMessage';

const OrderModal = ({ setModalData, modalData }) => {
    const { productName, resale_price, sellerName, sellerEmail, photoUrl } = modalData;
    // console.log(modalData)
    const { user } = useContext(AuthUser)
    const navigate = useNavigate()
    const { successMessage, errorMessage } = AlartMessage()
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const sellerName = form.sellerName.value;
        const productName = form.productName.value;
        const sellerEmail = form.sellerEmail.value;
        const price = form.prlicePrice.value;
        const phone_number = form.phone_number.value;
        const mettingLocation = form.mettingLocation.value;
        const bookingsDetails = {

            sellerName,
            sellerEmail,
            productName,
            photoUrl,
            buyerName: user.displayName,
            buyerEmail: user.email,
            buyerPhone: phone_number,
            price,
            mettingLocation,
        }
        fetch('http://localhost:2100/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingsDetails)
        }).then(rs => {
            successMessage('booking SuccessFull')
            setModalData(null)
            navigate('/dashboard/myorders')

        }).catch(er => {
            errorMessage(er.name)
            setModalData(null)
        })
    }
    return (
        <div>
            <input type="checkbox" id="Open_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        onClick={() => setModalData(null)}
                        htmlFor="Open_modal" className="btn btn-sm  btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit}
                        className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text"
                                placeholder="name"
                                defaultValue={sellerName}
                                name='sellerName'
                                disabled className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="email"
                                placeholder="email"
                                name='sellerEmail'
                                disabled className="input input-bordered"
                                defaultValue={sellerEmail}
                            />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Relice Price</span>
                            </label>
                            <input type="number"
                                placeholder="Pelice Price"
                                name='prlicePrice'
                                disabled className="input input-bordered"
                                defaultValue={resale_price}
                            />
                        </div>
                        <div className="form-control md:pl-2 ">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input type="text"
                                placeholder="item name"
                                name='productName'
                                disabled className="input input-bordered"
                                defaultValue={productName}

                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">meeting location</span>
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="location"
                                name='mettingLocation'
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Phone Number</span>
                            </label>
                            <input
                                required
                                type="number"
                                placeholder="Phone number"
                                name='phone_number'
                                className="input input-bordered"

                            />
                        </div>
                        <div className="w-full">
                            <button className="btn btn-primary w-full mt-5">Place Order</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;