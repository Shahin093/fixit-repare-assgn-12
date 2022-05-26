import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import DeleteConfrimModal from './DeleteConfrimModal';
import ProductRow from './ProductRow';

const ManageProduct = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const { data: product, isLoading, refetch } = useQuery('product', () => fetch('https://whispering-everglades-47983.herokuapp.com/product', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(product);

    return (
        <div class="overflow-x-auto">
            <table class="table table-compact w-full">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>image</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        product.map((p, index) =>
                            <ProductRow
                                key={p._id}
                                index={index}
                                product={p}
                                refetch={refetch}
                                setDeleteProduct={setDeleteProduct} >
                            </ProductRow>)
                    }

                </tbody>






            </table>
            {
                deleteProduct && <DeleteConfrimModal
                    deleteProduct={deleteProduct}
                    refetch={refetch}
                    setDeleteProduct={setDeleteProduct}
                ></DeleteConfrimModal>
            }

        </div>
    );
};

export default ManageProduct;