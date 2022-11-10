import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <div className='bg-emerald-200'>
            <footer className="container mx-auto p-4 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to='/' className="flex items-center mb-4 sm:mb-0">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NUR KITCHEN</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to='/' className="font-bold mr-4 hover:underline md:mr-6 ">Home</Link>
                        </li>
                        <li>
                            <Link to='/services' className="font-bold mr-4 hover:underline md:mr-6">Services</Link>
                        </li>
                        <li>
                            <Link to='/blogs' className="font-bold mr-4 hover:underline md:mr-6 ">Blogs</Link>
                        </li>
                        <li>
                            <Link className="font-bold hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">NUR KITCHEN </a>. All Rights Reserved.
                </span>
            </footer>
        </div>

    );
};

export default Footer;