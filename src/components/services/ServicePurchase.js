import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const ServicePurchase = () => {
    const { id } = useParams();


    // const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () =>
    //     fetch(`https://murmuring-sea-88663.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    // );

    const { data: service, isLoading, refetch } = useQuery(['service', id], () =>
        fetch(`http://localhost:5000/servicePurchase/${id}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        }
            // body: JSON.stringify(booking))

        )
            .then(res => res.json()))
    console.log(service);
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Hello there {id} </h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default ServicePurchase;