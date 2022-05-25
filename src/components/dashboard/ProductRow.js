import React from 'react';

const ProductRow = ({ product, index, setDeleteProduct }) => {
    const { name, image, email } = product;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td><div class="avatar">
                <div class="w-10 rounded">
                    <img src={image} alt={name} />
                </div>
            </div></td>
            <td>
                <label onClick={() => setDeleteProduct(product)} for="delete-confirm-modal" class="btn btn-xs btn-error"> Delete</label>
                {/* <button className='' onClick={() => handleDelete(email)}>Delete</button> */}
            </td>
        </tr>
    );
};

export default ProductRow;