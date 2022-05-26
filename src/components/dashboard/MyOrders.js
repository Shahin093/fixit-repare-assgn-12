import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import DeleteOrderModal from '../services/DeleteOrderModal';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [appointment, setAppointment] = useState([]);
    const [deleteOrder, setDeleteOrder] = useState(null);
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
            <h2>My All Order : {appointment.length}</h2>

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
                            appointment.map((apoint, index) =>
                                <OrderRow
                                    index={index}
                                    key={apoint._id}
                                    apoint={apoint}
                                    setDeleteOrder={setDeleteOrder}
                                >
                                </OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteOrder &&
                <DeleteOrderModal
                    deleteOrder={deleteOrder}
                    setDeleteOrder={setDeleteOrder}
                ></DeleteOrderModal>
            }
        </div>
    );
};

export default MyOrders;