import React from 'react';
import { useForm } from "react-hook-form";
import AlartMessage from '../Hooks/AlartMessage';

const UpdateUsedProductModal = ({ datainfo, setDatainfo, refetch }) => {
    const { successMessage } = AlartMessage()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data.sales_status);
        const isAva = {
            available: data.sales_status
        }
        fetch(`https://interverse.vercel.app/usephoneServices/update/${datainfo._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(isAva)
        }).then(rs => {
            successMessage("updated product")
            setDatainfo(null)
            refetch()
        })
            .catch(err => console.log(err))
    }
    // console.log(datainfo);
    return (
        <div>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">{datainfo?.productName}</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className="form-control">
                            <label className="label">
                                Select Your Type:
                            </label>
                            <select className="select w-full border-collapse"
                                {...register("sales_status", { required: 'must add Any option' })}
                            >
                                <option defaultValue>available</option>
                                <option>sold</option>
                            </select>
                            <div className="">{errors.sales_status && <span className="label-text text-red-400">{errors?.sales_status.message}</span>}</div>
                        </div>
                        <div className=" w-full">
                            <button className="btn btn-primary w-3/5 mt-3">Submit</button>
                        </div>
                    </form>
                </label>
            </label>
        </div>
    );
};

export default UpdateUsedProductModal;