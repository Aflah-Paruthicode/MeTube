import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-3 py-[6px] m-[6px] mt-2 bg-gray-200 rounded-lg text-[14px] hover:cursor-pointer font-semibold'>{name}</button> 
    </div> 
  )
}

export default Button