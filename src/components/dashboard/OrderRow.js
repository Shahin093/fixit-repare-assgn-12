import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const OrderRow = ({ index, apoint, setDeleteOrder }) => {
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{apoint.serviceName}</td>
                <td>{apoint.quantity}</td>
                <td>$ {apoint.price}</td>
                <td>$ {apoint.price * apoint.quantity}</td>
                <td>
                    {

                        apoint.paid &&
                        <label onClick={() => setDeleteOrder(apoint)} for="delete-confirm-modal" class="btn btn-xs btn-error"> Delete</label>
                    }
                </td>
                <td>
                    {

                        (apoint.price && !apoint.paid) && <Link to={`/dashboard/payment/${apoint._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>
                    }

                    {
                        (apoint.price && apoint.paid) && <span className='text-success'><button className='btn btn-xs btn-success'>Paid</button></span>
                    }
                </td>
            </tr >
        </>
    );
};

export default OrderRow;