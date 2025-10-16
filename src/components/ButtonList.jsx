import React from 'react'
import Button from './Button'

const ButtonList = () => { 

  const buttonNames = ['All','Mixes','Music','Podcasts','Quiffs','Hair Care',
    'Self-Confidence','Wealth','Reverberation','Skills','Funk','Tamil Cinema','Dramedy','Live','Gadgets','House Music','Motivation','Comedy']

  return (
    <div className='flex overflow-x-scroll w-full overflow-hidden fixed bg-white z-50'>  
    {buttonNames.map((name,ind) => <Button key={ind} name={name} /> )}
    </div> 
  )
}

export default ButtonList