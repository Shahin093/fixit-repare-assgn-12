import React, { useState } from 'react';
import { useQuery } from 'react-query';
import ReactStars from 'react-rating-stars-component';
import Loading from '../shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Reviews = () => {
    const [user, loading, error] = useAuthState(auth);

    const { data: reviews, isLoading, refetch } = useQuery('review', () =>
        fetch(`https://fixit-repare-server-assgn-12-production.up.railway.app/review`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        }
        )
            .then(res => res.json()));
    if (isLoading) {

        return <Loading></Loading>

    }


    // console.log(reviews);


    const thirdExample = {
        // size: 40,
        count: 5,
        isHalf: true,
        color: "blue",
        activeColor: "red",
        onChange: newValue => {
            console.log(`Example 3: new value is ${newValue}`);
        }
    };
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review =>

                                <tr>
                                    <td>{review.name}</td>
                                    <td>{review.description}</td>
                                    <td><ReactStars value={review.rating} {...thirdExample} /></td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};
export default Reviews;