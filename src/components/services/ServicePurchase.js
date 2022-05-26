import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const ServicePurchase = () => {
    const [check, setCheck] = useState(0);
    console.log(parseInt(check) + 5);
    const ch = parseInt(check);
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();
    const { data: service, isLoading, refetch } = useQuery(['service', id], () =>
        fetch(`https://whispering-everglades-47983.herokuapp.com/servicePurchase/${id}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        }

        )
            .then(res => res.json()));
    console.log(service)
    const minimum_Quan = parseInt(service?.minimum_quantity);
    const available_quan = parseInt(service?.available_quantity);
    console.log(minimum_Quan, available_quan);


    const quantity = (parseInt(service?.available_quantity));
    // console.log(quantity);

    const handlePurchase = event => {
        event.preventDefault();
        const booking = {
            bookingMan: user?.email,
            customerName: user?.displayName,
            phone: event.target.phone.value,
            quantity: event.target.quantity.value,
            available_quantity: service?.available_quantity,
            minimum_quantity: service?.minimum_quantity,
            serviceName: service?.name,
            price: service?.price,
            image: service?.image,
            description: service?.description

        };
        fetch('https://whispering-everglades-47983.herokuapp.com/purchase', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data) {
                    alert('Succuss purchase');
                } else {
                    alert(`Already have and service`)
                }
                refetch();
                event.target.reset();
            })

        const quan = parseInt(event.target.quantity.value);
        const available_quantity = quantity - quan;
        fetch(`https://whispering-everglades-47983.herokuapp.com/tools/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ available_quantity })
        })
            .then(res => res.json())
            .then(data => {
                // console.log('success ', data);
                // alert('user added successfully ');
                // 
            })
        // console.log(booking);
    }
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src="https://fundsnetservices.com/wp-content/uploads/purchase-credit-journal-entry.jpg" />
                <div>


                    <form onSubmit={handlePurchase} action="" className='grid w-full grid-cols-1 gap-3 justify-items-center mt-4'>
                        <input required type="text" value={service?.name} className="input input-bordered input-success w-full max-w-xs" />
                        <input required type="text" name='name' value={user?.displayName || ''} className="input input-bordered input-success w-full max-w-xs" />
                        <input required type="text" name='email' value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input required type="text" name='phone' placeholder='phone ' className="input input-bordered w-full max-w-xs" />



                        <input onChange={(event) => setCheck(event.target.value)} placeholder={service?.minimum_quantity} type="number" name='quantity' className="input input-bordered w-full max-w-xs" />
                        {
                            ch < minimum_Quan && <p className='text-xl text-red-500'>Less than the minimum quantity-{service?.minimum_quantity}</p>
                        }
                        {
                            ch > available_quan && <p className='text-xl text-red-500'> less Than Available Quantity-{service?.available_quantity} </p>
                        }
                        <input type="submit" disabled={ch < service?.minimum_quantity || ch > service?.available_quantity} className="btn btn-secondary input input-bordered w-full max-w-xs" />


                    </form>


                </div>
            </div>
        </div>
    );
};

export default ServicePurchase;