import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-3 whitespace-nowrap py-1.5 m-1.5 mt-2 bg-gray-200 rounded-lg text-[14px] hover:cursor-pointer font-semibold'>{name}</button> 
    </div> 
  )
}

export default Button