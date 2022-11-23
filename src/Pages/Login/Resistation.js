import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Resistation = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const userData = {
            name: data.name,
            email: data.email,
            photoUrl: data.photo,
        }
        console.log(userData)
    }
    return (
        <div className="bg-base-200">
            <div className="">
                <div className="hero min-h-screen ">
                    <div className="hero-content flex flex-col p-10 ">
                        <div className="text-left w-96 pl-3">
                            <p className='text-2xl'>Interverse SignUp</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)}
                                className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered"
                                        {...register("name", { required: 'Name must required' })}
                                    />
                                    {errors.name && <span className="label-text text-red-400">{errors?.email.name}</span>}
                                </div>
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
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("photo", { required: 'Photo must required' })}
                                    />
                                    {errors.photo && <span className="label-text text-red-400">{errors?.photo.message}</span>}
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
                                <div className="form-control">

                                    <div className="flex w-full">
                                        <button className="btn btn-primary w-3/5 mt-3">SignUp</button>
                                        <div className="divider divider-horizontal ">OR</div>
                                        <p className='flex justify-center items-center mt-3 btn-primary btn'>G</p>
                                    </div>
                                </div>

                            </form>
                        </div>

                        <div className="w-96 pl-3">
                            <p>Already have an account? -
                                <Link className='text-yellow-400' to='/login'>Login</Link>
                            </p><br />
                            <p>© Interverse • Contact . Privacy & terms</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resistation;