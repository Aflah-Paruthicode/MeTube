import React from 'react'
import { dummyComments } from '../utils/constants'
import CommentsList from './CommentsList';
import { useSelector } from 'react-redux';
import { formatViews } from '../utils/formateCount';

const CommentsContainer = ({commentsCount}) => {
    const data = dummyComments;
    const comments = useSelector(store => store.comments.comments)
  return (
    <div className='p-2 w-[1380px]'>
      <div className='flex py-3 w-72 justify-between'>
        <h1 className='text-xl font-bold'>{formatViews(commentsCount)} Comments : </h1>
        <h1 className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00000"><path d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h160q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h400q17 0 28.5 11.5T600-480q0 17-11.5 28.5T560-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"/></svg> Sort by</h1>
      </div>
        <CommentsList data={comments} />
    </div>
  )
}

export default CommentsContainer