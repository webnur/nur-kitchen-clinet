import React from 'react';
const Review = ({review, handleDeleteReview}) => {
    // console.log(review)
    return (
        <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {review.comment}
            </th>
            <td className="py-4 px-6">
               {review.author}
            </td>
            <td className="py-4 px-6">
            <img className="w-12 h-12 rounded-lg" src={review.image} alt="Default avatar"></img>
            </td>
            <td className="py-4 px-6 text-right">
                <button onClick={() => handleDeleteReview(review._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
            </td>
        </tr>
    </tbody>
    );
};

export default Review;