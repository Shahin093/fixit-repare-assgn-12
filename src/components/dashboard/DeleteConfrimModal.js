import React from 'react';

const DeleteConfrimModal = ({ deleteProduct, setDeleteProduct, refetch }) => {
    const { name, _id } = deleteProduct;
    console.log("em : ", deleteProduct)
    const handleDelete = () => {
        fetch(`https://fixit-fsa6.onrender.com/product/${_id}`, {
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
                    // alert(`Doctor: ${name} is deleted`);
                    setDeleteProduct(null)
                    refetch();
                }
            })
    }

    return (


        <div>

            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete ${name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button className='btn btn-xs btn-error' onClick={() => handleDelete()}>Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancle</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfrimModal;