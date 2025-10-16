import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex overflow-x-scroll w-full overflow-hidden'> 
      <Button name={'All'} /> 
      <Button name={'Mixes'} /> 
      <Button name={'Music'} /> 
      <Button name={'Podcasts'} /> 
      <Button name={'Quiffs'} /> 
      <Button name={'Hair Care'} /> 
      <Button name={'Self-Confidence'} /> 
      <Button name={'Wealth'} /> 
      <Button name={'Reverberation'} /> 
      <Button name={'Skills'} /> 
      <Button name={'Funk'} /> 
      <Button name={'Tamil Cinema'} /> 
      <Button name={'Dramedy'} /> 
      <Button name={'Live'} /> 
      <Button name={'Gadgets'} /> 
      <Button name={'House Music'} /> 
      <Button name={'Motivation'} /> 
      <Button name={'Comedy'} /> 
    </div> 
  )
}

export default ButtonList