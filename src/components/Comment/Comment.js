import React from 'react';

const Comment = ({ comment }) => {
    // console.log(comment)
    return (
        <div className='mt-3 bg-emerald-200 p-4 rounded-lg'>

            <div className='flex items-center'>
                <div>
                    <img className="w-12 h-12 rounded-lg" src={comment.image} alt="Default avatar"></img>
                </div>
                <p className='ml-4'> {comment.author}</p>
            </div>


            <p>Comment: {comment.comment}</p>
        </div>
    );
};

export default Comment;