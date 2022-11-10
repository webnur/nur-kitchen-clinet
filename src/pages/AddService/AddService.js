import React from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../Hooks/useTitle';
const AddService = () => {
    useTitle('addService')
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const image = form.image.value;
        const description = form.description.value;

        const product = {
            name: name,
            price: price,
            image: image,
            description: description
        }

        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error(error))

        toast.success('SuccessFully done Your add service', { autoClose: 1000 })
        form.reset()

    }


    return (
        <div className="sm:w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-8">
            <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Add New Service</h1>

            <form onSubmit={handleSubmit} className="mt-6">
                <div>
                    <label htmlFor="name" className="block text-sm text-gray-800 dark:text-gray-200">Service name</label>
                    <input type="text" name='name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='Service name' required />
                </div>

                <div>
                    <label htmlFor="price" className="block text-sm text-gray-800 dark:text-gray-200">Price</label>
                    <input type="text" name='price' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='Price: $' required />
                </div>

                <div>
                    <label htmlFor="image" className="block text-sm text-gray-800 dark:text-gray-200">Image Url</label>
                    <input type="text" name='image' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='image' required />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm text-gray-800 dark:text-gray-200">Description</label>
                    <textarea name='description' className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40' cols="40" rows="4" placeholder='Description'></textarea>
                </div>


                <div className="mt-6">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 translate bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Add Service
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddService;