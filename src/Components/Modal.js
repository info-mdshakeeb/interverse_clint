import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthUser } from '../Context/UserContext';

const Modal = ({ setModalData, modalData }) => {
    const { catogory, dateAdded, location, original_price, productName, resale_price, sellerName, years_of_use, sellerEmail } = modalData;
    const { user } = useContext(AuthUser);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

    }
    return (
        <div>
            <input type="checkbox" id="Open_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Open_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Want to book somthing : {user.displayName}</h3>


                    <form onSubmit={handleSubmit(onSubmit)}
                        className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered"
                                {...register("email", { required: 'Email must required' })}
                            />
                            {errors.email && <span className="label-text text-red-400">{errors?.email.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                {...register("password")}
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