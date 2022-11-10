import React, {useState, useEffect} from 'react';

const Clock = () => {
    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setseconds] = useState()

    let interval;
    const countDown = () => {
        const destination = new Date('July 15, 2023').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const different = destination - now;

            const days = Math.floor(different / (1000 * 60 * 60 * 24));
            const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000*60*60));
            const minutes = Math.floor(different % (1000 * 60 * 60) / (1000*60));
            const seconds = Math.floor(different % (1000 * 60) / 1000);
            
            if(destination < 0) clearInterval(interval.current)
            else{
                setDays(days);
                setHours(hours)
                setMinutes(minutes)
                setseconds(seconds)
            }
        })
    }

    useEffect(() => {
        countDown()
    })
    return (
        <div className='clock__wrapper flex justify-center pt-10 items-center gap-3'>
            <div className="clock__data d-flex align-items-center gap-3">
 
                <div className='text-center'>
                    <h1 className=' text-2xl mb-2 border-spacing-3 p-4 rounded-lg bg-neutral-600 text-white'>{days}</h1>
                    <h4 className='text-3xl'>Days:</h4>
                </div>
              
            </div>
            <div className="clock__data d-flex align-items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-3xl mb-2 border-spacing-3 p-4 rounded-lg bg-neutral-600 text-white'>{hours}</h1>
                    <h4 className='text-3xl'>Hours:</h4>
                </div>
                
            </div>
            <div className="clock__data d-flex align-items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-2xl mb-2 border-spacing-3 p-4 rounded-lg bg-neutral-600 text-white'>{minutes}</h1>
                    <h4 className='text-3xl'>Minutes:</h4>
                </div>
            </div>
            <div className="clock__data d-flex align-items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-2xl mb-2 border-spacing-3 p-4 rounded-lg bg-neutral-600 text-white'>{seconds}</h1>
                    <h4 className='text-3xl'>Second</h4>
                </div>
              
            </div>
        </div>
    );
};

export default Clock;