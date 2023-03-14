import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';
const AddProduct = () => {
    const [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        console.log(data);

        fetch('https://fixit-fsa6.onrender.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(inserted => {
                console.log('inserted : ', inserted);
                if (inserted.insertedId) {
                    alert('Product added successfully');
                    reset();
                } else {
                    alert("Failed to add the Product");
                }
            })

    }

    if (loading) {
        return <Loading></Loading>
    }



    return (

        <div class="hero min-h-screen" style={{
            backgroundImage: "url(https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/counter_bg.jpg)"
        }} >
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">

                    <div className='w-72'>
                        <div className="text-2xl">Add a New Product</div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* <div class="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    value={user?.displayName}
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'name is Required'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div> */}
                            <div class="form-control w-full max-w-xs">
                                <input
                                    type="email"
                                    value={user?.email}
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a vilid Email'
                                        }
                                    })}
                                />

                                <label class="label">
                                    {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    placeholder='product name'
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Product Name is Required'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>

                            <div class="form-control w-full max-w-xs">
                                <input
                                    placeholder='Available Quantity'
                                    type="number"
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("available_quantity", {
                                        required: {
                                            value: true,
                                            message: 'available quantity is Required'
                                        },
                                        pattern: {
                                            value: { min: 0, max: 10000 },
                                            message: 'Provide a vilid Email'
                                        }
                                    })}
                                />

                                <label class="label">
                                    {errors.available_quantity?.type === 'required' && <span class="label-text-alt text-red-500">{errors.available_quantity.message}</span>}
                                    {errors.available_quantity?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.available_quantity.message}</span>}
                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <input
                                    placeholder='minimum quantity'
                                    type="number"
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("minimum_quantity", {
                                        required: {
                                            value: true,
                                            message: 'Minimum quantity is Required'
                                        },
                                        pattern: {
                                            value: { min: 0, max: 10000 },
                                            message: 'Provide a vilid Email'
                                        }
                                    })}
                                />

                                <label class="label">
                                    {errors.minimum_quantity?.type === 'required' && <span class="label-text-alt text-red-500">{errors.minimum_quantity.message}</span>}
                                    {errors.minimum_quantity?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.minimum_quantity.message}</span>}
                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <input
                                    placeholder='image url'
                                    type="text"
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'image url  is Required'
                                        },
                                        pattern: {
                                        }
                                    })}
                                />

                                <label class="label">
                                    {errors.image?.type === 'required' && <span class="label-text-alt text-red-500">{errors.image.message}</span>}
                                    {errors.image?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.image.message}</span>}
                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <input
                                    placeholder='Price'
                                    type="number"
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message: 'price  is Required'
                                        },
                                        pattern: {
                                        }
                                    })}
                                />

                                <label class="label">
                                    {errors.price?.type === 'required' && <span class="label-text-alt text-red-500">{errors.price.message}</span>}
                                    {errors.price?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.price.message}</span>}
                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <textarea
                                    placeholder='Product Description'
                                    type="text"
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: 'description is Required'
                                        },
                                        pattern: {
                                        }
                                    })}
                                />

                                <label class="label">
                                    {errors.description?.type === 'required' && <span class="label-text-alt text-red-500">{errors.description.message}</span>}
                                    {errors.description?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.description.message}</span>}
                                </label>
                            </div>
                            {/* {signInError} */}
                            <input className=' btn  w-full max-w-xs' type="submit" value="Save" />
                        </form>
                    </div>


                </div>
            </div>
        </div >






    );
};

export default AddProduct;