import React, { useEffect, useState } from 'react';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import useTitle from '../../Hooks/useTitle';

const Services = () => {
    useTitle('Services')

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://assignment-11-server-sandy-chi.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    // console.log(services)
    return (
        <div className='container mx-auto'>
            <h2 className='text-5xl text-center mt-12'>Welcome to Services Page</h2>
            <p className='text-center my-3 text-xl mb-10'>there are my popular services. you can need to those</p>
            <div className='lg:grid grid-cols-3'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;