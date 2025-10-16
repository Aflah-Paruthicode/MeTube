import React, { useEffect, useState } from 'react'
import { YT_VIDEOS_API } from '../utils/constants'
import VideoCard from './VideoCard'

const VideoContainer = () => { 

  const [videos,setVideos] = useState([])

  useEffect(() => { 
    getVideos()
  },[])

  const getVideos = async () => {
    const data = await fetch(YT_VIDEOS_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
    console.log(videos)
  }

  return (
    <div className='flex flex-wrap w-full'>
      {videos.map((video) => <VideoCard key={video.id} info={video} /> )}
    </div> 
  )
}

export default VideoContainer