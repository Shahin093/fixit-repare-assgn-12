import React from 'react';

const DeleteOrderModal = ({ deleteOrder, setDeleteOrder }) => {
    const { serviceName, _id } = deleteOrder;
    console.log('price is : ', serviceName, _id)

    const handleDelete = () => {
        fetch(`https://fixit-repare-server-assgn-12-production.up.railway.app/order/${_id}`, {
            method: 'DELETE',

            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert(`Fixit: ${serviceName} is deleted`);
                    setDeleteOrder(null)
                    // refetch();
                }
            })
    }
    return (
        <div>

            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} className='btn btn-xs btn-error' >Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancle</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteOrderModal;