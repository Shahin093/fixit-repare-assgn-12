

// MyProfile



import React from 'react';
import { useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    // const imgkey = 'dee40fb0dbdc793e083e03a4e2908ed3';
    const onSubmit = data => {
        console.log(data);




        // send to your database 
        fetch('https://boiling-ravine-29801.herokuapp.com/userUpdate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    alert(' Update successfully')
                    reset();
                }
                else {
                    alert('Failed to Update ');
                }
            })

    }


    return (
        <div className='w-96 mx-auto'>
            <h1 className='text-center font-bold text-2xl'>Update Your Profile</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder=" Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Products Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'email is required'
                            }
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Linkedin Profile link</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Linkedin"
                        className="input input-bordered w-full max-w-xs"
                        {...register("linked", {
                            required: {
                                value: true,
                                message: 'Linkid is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.Quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Quantity.message}</span>}
                        {errors.Quantity?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.Quantity.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Project link</span>
                    </label>
                    <input
                        type="text"
                        placeholder=" Project Link"
                        className="input input-bordered w-full max-w-xs"
                        {...register("project", {
                            required: {
                                value: true,
                            }
                        })}
                    />
                    <label className="label">
                        {errors.minquantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minquantity.message}</span>}
                        {errors.minquantity?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.minquantity.message}</span>}
                    </label>
                </div>


                <input className='btn btn-primary w-full max-w-xs text-white capitalize' type="submit" value="Update Profile" />
            </form>

        </div>
    );
};

export default MyProfile;