import React from 'react'
import { dummyComments } from '../utils/constants'
import CommentsList from './CommentsList';

const CommentsContainer = () => {
    const data = dummyComments;
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments : </h1>
        <CommentsList data={data} />
    </div>
  )
}

export default CommentsContainer