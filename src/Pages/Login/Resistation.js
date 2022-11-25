import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SmallSpin from '../../Components/SmallSpin';
import { AuthUser } from '../../Context/UserContext';
import AlartMessage from '../../Hooks/AlartMessage';
import { setAuthToken } from '../../Hooks/auth';

const Resistation = () => {
    const imageBBapi = process.env.REACT_APP_imageBBapi;
    const { successMessage, errorMessage } = AlartMessage();
    const navigate = useNavigate();
    const { createUser, updateUser, loading, setLoading, loginWithGoogle } = useContext(AuthUser)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const onSubmit = data => {
        setLoading(true)
        const image = data.photo[0]
        const formData = new FormData();
        formData.append('image', image)
        const urL = `https://api.imgbb.com/1/upload?key=${imageBBapi}`
        fetch(urL, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(dataImage => {
                if (dataImage.success) {
                    createUser(data.email, data.password)
                        .then(rs => {
                            const userInfo = {
                                displayName: data.name,
                                photoURL: dataImage.data.url
                            }
                            setAuthToken(rs.user, data.type)
                            updateUser(userInfo)
                                .then(rs => {
                                    successMessage('Accout Create SuccessFully')
                                    navigate('/')
                                })
                                .catch(error => errorMessage(error.message))
                        })
                        .catch(error => {
                            setLoading(false)
                            errorMessage(error.message)
                        })
                }
            })
            .catch(error => console.log(error.name, '-', error.message)
            )

    }
    const heandelGoogleLogin = () => {
        loginWithGoogle()
            .then(re => {
                successMessage('Login SuccessFull')
                setAuthToken(re.user, 'buyer')
                navigate(from, { replace: true })
            })
            .catch(error => { })
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
                                    {errors.name && <span className="label-text text-red-400">{errors?.name.message}</span>}
                                </div>
                                <div className="md:flex">
                                    <div className="form-control ">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered"
                                            {...register("email", { required: 'Email must required' })}
                                        />
                                        {errors.email && <span className="label-text text-red-400">{errors?.email.message}</span>}
                                    </div>
                                    <div className="md:w-2/6 md:pl-2">
                                        <div className="form-control">
                                            <label className="label">
                                                Type:
                                            </label>
                                            <select className="select w-full border-collapse"
                                                {...register("type", { required: 'needed' })}
                                            >
                                                <option defaultValue>buyer</option>
                                                <option>seller</option>
                                            </select>
                                        </div>
                                    </div>
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
                                        {...register("password", { required: ' must required' })}
                                    />
                                    {errors.password && <span className="label-text text-red-400">{errors?.password.message}</span>}
                                </div>
                                <div className="form-control">

                                    <div className="flex w-full">
                                        <button className="btn btn-primary w-3/5 mt-3">{loading ? <SmallSpin /> : 'SignUp'}</button>
                                        <div className="divider divider-horizontal ">OR</div>
                                        <p className='flex justify-center items-center mt-3 btn-primary btn'
                                            onClick={heandelGoogleLogin}>G</p>
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