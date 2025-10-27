import React from 'react'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'
import { useSelector } from 'react-redux'
import store from '../utils/store'

const MainContainer = () => {
  const menuToggle = useSelector((store) => store.app.isMenuOpen)
  return (
    <div className={`px-8 mt-[70px] z-[1]  ${ menuToggle &&  'ml-[14rem]' }`}> 
        <ButtonList  /> 
        <VideoContainer /> 
    </div>
  )
}

export default MainContainer