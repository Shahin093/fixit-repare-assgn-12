import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-info">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">
                    <img src='https://html.modernwebtemplates.com/fixit/images/logo.png' alt="" />
                </a>
            </div>
            <div className="flex-none gap-2">
                <ul className='menu menu-horizontal p-0'>
                    <li className='text-2xl'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='text-2xl'>
                        <Link to='/reviews'>Reviews</Link>
                    </li>
                    <li className='text-2xl'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='text-2xl'>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" />
                        </div>
                    </label>
                    <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;