import React from 'react'
import { dummyComments } from '../utils/constants'
import CommentsList from './CommentsList';

const CommentsContainer = () => {
    const data = dummyComments;
  return (
    <div className='p-2 w-[1380px]'>
        <h1 className='text-2xl font-bold'>Comments : </h1>
        <CommentsList data={data} />
    </div>
  )
}

export default CommentsContainer