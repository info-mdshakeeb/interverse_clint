import React, { useContext } from 'react';
import { AuthUser } from '../Context/UserContext';

const Modal = ({ setModalData, modalData }) => {
    const { catogory, dateAdded, location, original_price, productName, resale_price, sellerName, years_of_use, sellerEmail } = modalData;
    const { user } = useContext(AuthUser);

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const sellerName = form.sellerName.value;
        const productName = form.productName.value;
        const email = form.sellerEmail.value;
        const price = form.prlicePrice.value;
        const phone_number = form.phone_number.value;
        const mettingLocation = form.mettingLocation.value;
        const booking = {

            sellerName,
            productName,
            email,
            phone: phone_number,
            price,
            mettingLocation,

        }
        console.log(booking);
        setModalData(null)
    }
    return (
        <div>
            <input type="checkbox" id="Open_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Open_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

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

export default Modal;