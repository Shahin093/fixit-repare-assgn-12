import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import UserRow from './UserRow';

const User = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://fixit-repare-server-assgn-12-production.up.railway.app/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <UserRow index={index} key={user._id} user={user}
                            refetch={refetch}></UserRow>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default User;