import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [appointment, setAppointment] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                // .then(res => res.json())
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json();
                })
                .then(data => {
                    setAppointment(data)

                });
        }
    }, [user]);
    console.log(appointment);

    return (
        <div>
            <h2>My Appointments : {appointment.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price $</th>
                            <th>yes / or</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment.map((apoint, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{apoint.serviceName}</td>
                                <td>{apoint.quantity}</td>
                                <td>$ {apoint.price}</td>
                                <td><button className='btn bg-red-300'>Delete</button></td>
                                <td>
                                    {(apoint.price && !apoint.paid) && <Link to={`/dashboard/payment/${apoint._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}

                                    {(apoint.price && apoint.paid) && <span className='text-success'><button className='btn btn-xs btn-success'>Paid</button></span>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;