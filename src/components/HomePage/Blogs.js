import React from 'react';

const Blogs = () => {
    return (
        <div class="hero w-62 h-auto" >
            <div class="card w-62 h-auto bg-primary text-primary-content p-5">
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
                    <h2 class="card-title">Q-3How does prototypical inheritance work?</h2>
                    <small>Answer-</small>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype</p>
                </div>
                <div class="card-body  pt-5 ">
                    <h2 class="card-title">Q-4: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <small>Answer-</small>
                    <p>array_product() <br /> returns the product of values in an array. <br />
                        const arrayProduct = [name, price, description] <br />
                        const arr = arrayProduct[0] <br />
                        console.log(arr)</p>
                </div>
                <div class="card-body  pt-5 ">
                    <h2 class="card-title">Q-5: What is a unit test? Why should write unit tests?</h2>
                    <small>Answer-</small>
                    <p>A unit test is the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a method or property.We should write unit tests because--1. Unit testing allows software developers to actually think through the design of the software.
                        2. This can help developer to stay focused and can also help them to create much better designs.</p>
                </div>
            </div>
        </div >
    );
};

export default Blogs;