import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';
import CheckoutForm from './CheckoutForm';

const Payment = () => {

    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();
    const { data: service, isLoading, refetch } = useQuery(['services', id], () =>
        fetch(`https://fixit-repare-server-assgn-12-production.up.railway.app/booking/${id}`, {
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
    console.log(service)


    const stripePromise = loadStripe('pk_test_51L2XcOFWzcOdRAbZsuNZhvcbN6GZ7t1rox7AFNxmUbySY6mLsRUsjwqXK1YafHTJtKqMk4vwUdTYDfb0oQb0asjM00JlEmDWJs');



    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="w-52 text-center lg:text-left">
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <p className='font-bold'>{service.customerName}</p>

                            <h2 class="">Pay for {service?.serviceName}</h2>

                            <p>Please pay : ${service.price}</p>

                        </div>
                    </div>

                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm service={service} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;