import React, { useState } from 'react'
import { formatViews } from '../utils/formateCount'
import { timeAgo } from '../utils/timeAgo'

const DescriptionBox = ({desc,viewCount,uploadedOn}) => {
    const [readMore,setReadMore] = useState(false);

  return (
    <div className={`p-3 bg-gray-200 rounded-2xl`}>
        <div className='flex font-semibold gap-3 text-[14px]'>
        <h1>{formatViews(viewCount)} views</h1>
        <h1>{timeAgo(uploadedOn)}</h1>
        </div>
        <p style={{whiteSpace:'pre-wrap'}} className='px-2 text-sm leading-6 w-full h-full' >{desc.length > 100 && !readMore ? desc.slice(0,100) : desc} <button className='font-bold cursor-pointer' onClick={() => setReadMore(!readMore)}>{!readMore ? '...more' : 'Show less'}</button></p>
        
    </div>   
  )
}

export default DescriptionBox