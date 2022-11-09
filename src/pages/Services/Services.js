import React, { useEffect, useState } from 'react';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    // console.log(services)
    return (
        <div className='container mx-auto'>
            <h2>this is services page</h2>
            <div className='lg:grid grid-cols-3'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;