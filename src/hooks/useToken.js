import { useEffect, useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        console.log('user:', user?.user?.email);
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://fixit-repare-server-assgn-12-production.up.railway.app/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('data inside useTOken', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                }
                );
        }

    }, [user])

    return [token];

}
export default useToken;