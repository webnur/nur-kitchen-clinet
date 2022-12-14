import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Clock from '../../components/Clock/Clock';
import Newsletter from '../../components/Newsletter/Newsletter';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import useTitle from '../../Hooks/useTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([])
    useTitle('Home')
    const sliceServices = services.slice(0, 3);
    useEffect(() => {
        fetch('https://assignment-11-server-sandy-chi.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <div>
            <div className='mb-10 bg-emerald-100'>
                <div className="container px-6 py-16 mx-auto">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">Welcome to Ms. <span style={{color: '#FDB066'}}>Nur Kitchen</span></h1>

                                <p className="my-4 text-gray-600 dark:text-gray-400">Hello dear customer! there are many food packages for your family and friends and for your party example a holiday party etc. so quickly book now</p>

                                <Link to='/services' style={{background: '#FDB066'}} className="w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Book Now</Link>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <PhotoProvider>
                                <PhotoView src={"https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000"}>
                                    <img className="w-full h-full lg:max-w-2xl rounded-lg" src={"https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000"} alt="Catalogue-pana.svg" />
                                </PhotoView>
                            </PhotoProvider>

                        </div>
                    </div>
                </div>
            </div>


            {/* services added on home page  */}


            <div className='container mx-auto'>
                <h2 className='text-5xl text-center mt-12'>My Services</h2>
                <p className='text-center my-3 text-xl mb-10'>there are my popular services. you can need to those</p>
                <div className='lg:grid grid-cols-3'>
                    {

                        sliceServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
                <div className='text-center my-5'>
                    <Link to='/services' style={{background: '#FDB066'}} className="w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">see All</Link>
                </div>

            </div>


            <section className=' bg-emerald-100 h-72 my-10'>
                <div className='container mx-auto'>
                    <h2  style={{color: '#FDB066'}} className='text-5xl  text-center pt-5'>Get 20% discount per packages</h2>
                    <Clock></Clock>

                    <div className='text-center pt-3'>
                        <Link to='/services'   style={{background: '#FDB066'}}  className='inline-flex uppercase items-center py-3 px-4 text-sm font-medium text-center text-white  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Order Now</Link>
                    </div>
                </div>

            </section>

            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;