import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center px-6 py-1 text-sm'>

        <img
          className="w-7"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          alt=""
        />
        <span className='font-medium px-2 text-gray-600'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage