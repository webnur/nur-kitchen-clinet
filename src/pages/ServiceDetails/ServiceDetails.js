import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Comment from '../../components/Comment/Comment';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-toastify';
import useTitle from '../../Hooks/useTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {
    useTitle('ServiceDetails')
    const serviceDetails = useLoaderData();
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const author = user?.displayName;
    const authorImage = user?.photoURL
    const [comments, setComment] = useState([]);
    const { name, price, image, description, rating, _id } = serviceDetails;


    const handleReviews = (event) => {
        event.preventDefault();
        const comment = event.target.comment.value;
        const reviews = {
            comment: comment,
            id: _id,
            email: email,
            image: authorImage,
            author: author
        }

        fetch('https://assignment-11-server-sandy-chi.vercel.app/reviews', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => console.error(error))
        toast.success('SuccessFully done Your comment', { autoClose: 1000 })


    }

    useEffect(() => {
        fetch(`https://assignment-11-server-sandy-chi.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setComment(data)
                // console.log(data)

            })
    }, [_id, comments])

    return (
        <div className='container mx-auto'>
            <div className="container mx-auto my-10 max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className='p-5'>
                    <PhotoProvider>
                        <PhotoView src={image}>
                            <img className="object-cover w-full h-64" src={image} alt="Article" />
                        </PhotoView>
                    </PhotoProvider>

                </div>

                <div className="p-6">
                    <div>
                        <span className="text-2xl font-medium text-blue-600 uppercase dark:text-blue-400 ">Price: $ {price}</span> <br />
                        <span className="text-xl mt-2 font-medium  uppercase dark:text-blue-400">Rating: {rating} Star</span>
                        <h2 className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600" role="link">{name}</h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                    </div>

                    <div className='mt-5'>
                        <button className='py-3 px-8 rounded-lg bg-blue-700 text-white'>checkout</button>
                    </div>
                </div>
            </div>

            <div>
                <h2  className='text-2xl font-bold my-3'>Add Your Comment</h2>
                <form onSubmit={handleReviews}>
                    <textarea className='w-3/4 rounded-2xl' placeholder='Add Your Comment' name="comment" id="" rows="3"></textarea> <br />
                    <input   style={{background: '#FDB066'}}  className='py-3 mb-5 px-8 rounded-lg text-white cursor-pointer' type="submit" value="Add Comment" />
                </form>
            </div>

            <div className='mb-10'>
                <h2 className='text-xl font-bold my-3'>All Comments</h2>
                {
                    comments.map(comment => <Comment
                        key={comment._id}
                        comment={comment}
                    >

                    </Comment>)
                }

            </div>
        </div>

    );
};

export default ServiceDetails;