import React from 'react';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const { _id, name, image, description } = service
    return (

        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-8">

            <img className="rounded-t-lg" src={image} style={{ height: '300px' }} alt="" />
            <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description.slice(0, 100) + '...'}</p>
                <div>
                    <Link to={`/serviceDetails/${_id}`} className="inline-flex uppercase items-center py-3 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View Details
                    </Link>
                </div>

            </div>
        </div>

    );
};

export default ServiceCard;