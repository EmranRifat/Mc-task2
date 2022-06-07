import React from 'react';
import logo from '../../Assets/images/Logo.png'

const Navbar = () => {

    return (

        <div class="navbar bg-base-100 px-14">
            <div class="w-10 rounded-full">
                <img src={logo} />
            </div>
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl">Agency</a>
            </div>

            <li><button className="btn btn-ghost">Services</button>
            </li>
            <li><button className="btn btn-ghost">Our Values</button>
            </li>
            <li><button className="btn btn-ghost">Blogs</button> </li>
            <li><button className="btn btn-ghost">Login</button> </li>
            <li><button className="btn btn-accent mx-2">Register</button> </li>


            <div class="flex-none gap-2">
                <div class="form-control">
                    <input type="text" placeholder="Search" class="input input-bordered" />
                </div>
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">

                    </label>
                    <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a class="justify-between">
                                Profile
                                <span class="badge">New</span>
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