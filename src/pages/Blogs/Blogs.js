import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-3xl text-center my-5'>Welcome to My Blog Page</h2>
            <div className='lg:grid grid-cols-3 mt-10 container mx-auto'>
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-8">

                    <img className="rounded-t-lg" src={"https://i.ytimg.com/vi/QwevGzVu_zk/maxresdefault.jpg"} style={{ height: '300px' }} alt="" />
                    <div className="p-5">

                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Difference between SQL and NoSQL</h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                        </p>

                    </div>
                </div>
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-8">

                    <img className="rounded-t-lg" src={"https://res.cloudinary.com/practicaldev/image/fetch/s--9Eyi8mVf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h70g99gmnoy0boni6j9q.png"} style={{ height: '300px' }} alt="" />
                    <div className="p-5">

                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is JWT, and how does it work?</h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
                    </div>
                </div>


                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-8">

                    <img className="rounded-t-lg" src={"https://i.ytimg.com/vi/B8KdllPwxBw/maxresdefault.jpg"} style={{ height: '300px' }} alt="" />
                    <div className="p-5">

                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is the difference between javascript and NodeJS?</h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                    </div>
                </div>


                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-8">

                    <img className="rounded-t-lg" src={'https://tsh.io/wp-content/uploads/2019/09/concurrency-nodejs_.png'} style={{ height: '300px' }} alt="" />
                    <div className="p-5">

                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">How does NodeJS handle multiple requests at the same time?</h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                        </p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;