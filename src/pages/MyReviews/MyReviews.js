import React, { useContext, useEffect, useState } from 'react';
import Review from '../../components/Review/Review';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    useTitle('myReviews')
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://assignment-11-server-sandy-chi.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [user?.email])

    const handleDeleteReview = id => {
        console.log(id)
        fetch(`https://assignment-11-server-sandy-chi.vercel.app/reviews/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if( data.deletedCount > 0){
                const remaining = reviews.filter(rev => rev._id !== id);
                setReviews(remaining)
            }
        })
    }


    return (
        <div className='my-6'>
            <h2 className='text-3xl text-center my-10'> My Reviews</h2>


            <div className="overflow-x-auto relative shadow-md sm:rounded-lg container mx-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Reviews
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Author Image
                            </th>
                            <th scope="col" className="py-3 px-6">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    {
                        reviews.map(review => <Review
                             key={review._id}
                              review={review}
                              handleDeleteReview={handleDeleteReview}
                              >

                              </Review>)
                    }

                </table>
            </div>

        </div>
    );
};

export default MyReviews;