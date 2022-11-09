import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    console.log(serviceDetails)
    const { name, price, image, description, rating } = serviceDetails;
    return (
        <div className="container mx-auto my-10 max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className='p-5'>
                <img className="object-cover w-full h-64" src={image} alt="Article" />
            </div>

            <div className="p-6">
                <div>
                    <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Price: $ {price}</span> <br />
                    <span className="text-xs mt-2 font-medium  uppercase dark:text-blue-400">Rating: {rating} Star</span>
                    <h2 className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600" role="link">{name}</h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                </div>

                <div className='mt-5'>
                    <button className='py-3 px-8 rounded-lg bg-blue-700 text-white'>checkout</button>
                </div>
            </div>
        </div>

    );
};

export default ServiceDetails;