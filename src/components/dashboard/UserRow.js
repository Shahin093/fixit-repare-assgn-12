import React from 'react';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;

    const makeUser = () => {
        fetch(`https://whispering-everglades-47983.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    alert('Failed to Make an Admin');
                }

                return res.json()
            }
            )


            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    alert(`Successfully made an admin`);
                }

            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button class="btn btn-xs" onClick={makeUser}>Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;