import React, { useState } from 'react';
import { useQuery } from 'react-query';
import ReactStars from 'react-rating-stars-component';
import Loading from '../shared/Loading';
const Reviews = () => {

    const { data: reviews, isLoading, refetch } = useQuery('review', () =>
        fetch(`https://whispering-everglades-47983.herokuapp.com/review`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        }
        )
            .then(res => res.json()));
    // console.log(reviews);
    if (isLoading) {
        return <Loading></Loading>
    }

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
            <h2>reviews</h2>
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