import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import SmallSpin from '../Components/SmallSpin';
import { AuthUser } from '../Context/UserContext';
import AlartMessage from '../Hooks/AlartMessage';


const Addusedproduct = () => {
    const { user, loading, setLoading } = useContext(AuthUser);
    const { successMessage } = AlartMessage()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { data: seller = [] } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:2100/admin/${user?.email}`)
            const data = await res.json()
            return data.data[0]
        }
    })
    const onSubmit = (data) => {
        setLoading(true)
        const dateAdded = new Date();
        const phoneDetail = {
            sellerEmail: user.email,
            sellerName: user.displayName,
            sellerType: seller?.type,
            productName: data.name,
            location: data.location,
            years_of_use: data.years_of_use,
            original_price: data.original_price,
            resale_price: data.resale_price,
            photoUrl: data.url,
            dateAdded,
            catogory: data.catogory,
            condition: data.condition,
            description: data.description,
        }
        fetch('http://localhost:2100/addusedproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(phoneDetail)

        }).then(re => {
            successMessage('added product successfully')
            navigate('/dashboard/myproducts')
            setLoading(false)
        })
            .catch(er => {
                setLoading(false)
                console.log(er.message)
            })
    }
    //optino data load :
    const { data: catagorysOptions = [], isLoading } = useQuery({
        queryKey: ['productcatagory'],
        queryFn: async () => {
            const res = await fetch('http://localhost:2100/productcatagorys')
            const data = await res.json()
            return data.data
        }
    })

    if (isLoading) return <div className="flex justify-center items-center h-screen">
        <SmallSpin />
    </div>

    return (
        <div className="">
            <div className="hero">
                <div className=" ">
                    <div className="text-left w-96">
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered"
                                    {...register("name", { required: 'Name must required' })}
                                />
                                {errors.name && <span className="label-text text-red-400">{errors.name.message}</span>}
                            </div>
                            <div className="md:flex">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">location</span>
                                    </label>
                                    <input type="text" placeholder="location" className="input input-bordered"
                                        {...register("location", { required: 'must needed' })}
                                    />
                                    {errors.location && <span className="label-text text-red-400">{errors?.location.message}</span>}
                                </div>
                                <div className="form-control md:pl-2">
                                    <label className="label">
                                        <span className="label-text">years of use</span>
                                    </label>
                                    <input type="number" placeholder="use" className="input input-bordered"
                                        {...register("years_of_use", { required: 'must needed' })}
                                    />
                                    {errors.years_of_use && <span className="label-text text-red-400">{errors?.years_of_use.message}</span>}
                                </div>

                            </div>
                            <div className="md:flex">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Original price</span>
                                    </label>
                                    <input type="number" placeholder="price" className="input input-bordered"
                                        {...register("original_price", { required: 'needed' })}
                                    />
                                    {errors.original_price && <span className="label-text text-red-400">{errors?.original_price.message}</span>}
                                </div>
                                <div className="form-control md:pl-2">
                                    <label className="label">
                                        <span className="label-text">Resale price</span>
                                    </label>
                                    <input type="number" placeholder="price" className="input input-bordered"
                                        {...register("resale_price", { required: 'is require' })}
                                    />
                                    {errors.resale_price && <span className="label-text text-red-400">{errors?.resale_price.message}</span>}
                                </div>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Url"
                                    className="input input-bordered"
                                    {...register("url", { required: 'needed' })}
                                />
                                {errors.url && <span className="label-text text-red-400">{errors?.url.message}</span>}
                            </div>
                            <div className="md:flex">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        sellect catogory
                                    </label>
                                    <select className="select w-full"
                                        {...register("catogory", { required: 'needed' })}
                                    >
                                        <option></option>
                                        {catagorysOptions.map(catagory =>
                                            <option key={catagory._id}>
                                                {catagory.Name}
                                            </option>)
                                        }
                                    </select>
                                    <div className="">{errors.catogory && <span className="label-text text-red-400">{errors?.catogory.message}</span>}</div>
                                </div>
                                <div className="form-control md:w-1/2 pl-2">
                                    <label className="label">
                                        condition type
                                    </label>
                                    <select className="select w-full"
                                        {...register("condition", { required: 'needed' })}
                                    >
                                        <option></option>
                                        <option>excellent</option>
                                        <option>good</option>
                                        <option>fair</option>

                                    </select>
                                    <div className="">{errors.condition && <span className="label-text text-red-400">{errors?.condition.message}</span>}</div>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Description</span>
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="type"
                                    className="textarea textarea-bordered"
                                    {...register("description", { required: 'needed' })} ></textarea>


                                {errors.description && <span className="label-text text-red-400">{errors?.description.message}</span>}
                            </div>
                            <div className="form-control">
                                <button className="btn btn-primary w-full  mt-3">{loading ? <SmallSpin /> : 'Add Product'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addusedproduct;