import React from 'react'

const VideoCard = ({info}) => {
    if(!info) return
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className='p-2 w-1/4 z-10'>
        <img className='rounded-lg aspect-video object-cover z-10' src={thumbnails.high.url} alt="" />
        <ul>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>
        </ul>
    </div>
  )
}

export default VideoCard