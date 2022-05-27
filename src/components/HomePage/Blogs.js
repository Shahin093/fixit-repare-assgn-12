import React from 'react';

const Blogs = () => {
    return (
        <div class="hero min-h-screen" style={{
            backgroundImage: "url(https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/counter_bg.jpg)"
        }}>
            <div class="card w-96 bg-primary text-primary-content p-5">
                <div class="card-body  pt-5 ">
                    <h2 class="card-title">Q-1 How will you improve the performance of a React Application?</h2>
                    <small>Answer-</small>
                    <p>Code-splitting is another important optimization technique for a React application.Both react-window and react-virtualized are two popular windowing libraries that can implement this concept.</p>
                </div>
                <div class="card-body  pt-5 ">
                    <h2 class="card-title">Q-2 What are the different ways to manage a state in a React application?</h2>
                    <small>Answer-</small>
                    <p><p><span className='text-2xl'>Local state</span> : Local state in React allows you to instantiate a plain JavaScript object for a component </p>
                        <p><span className='text-2xl'> Global state :</span> How to create a global application state without Redux using React latest built-in features: React Hooks and the Context API.
                        </p></p>
                </div>
                <div class="card-body  pt-5 ">
                    <h2 class="card-title">Q-3 Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                    <small>Answer-</small>
                    <p><p><span className='text-2xl'>Local state</span> : Local state in React allows you to instantiate a plain JavaScript object for a component </p>
                        <p><span className='text-2xl'> Global state :</span> How to create a global application state without Redux using React latest built-in features: React Hooks and the Context API.
                        </p></p>
                </div>
            </div>
        </div >
    );
};

export default Blogs;