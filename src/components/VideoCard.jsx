import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({info}) => {
    if(!info) return
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    function formatViews(views) {
  if (views >= 1_000_000_000) {
    return (views / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  } else if (views >= 1_000_000) {
    return (views / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  } else if (views >= 1_000) {
    return (views / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  } else {
    return views.toString();
  }
}

  return (
    <Link to={'watch?v='+info.id} className='p-2 w-1/4 z-10 hover:bg-gray-200 rounded-2xl transition-colors delay-150 duration-500'> 
    <div className=''>
        <img className='rounded-lg aspect-video object-cover z-10' src={thumbnails.high.url} alt="" />
        <ul>
            <li className='font-semibold'>{title.length > 85 ? title.slice(0,82) + '...' : title}</li>
            <li className='text-gray-600 font-normal text-[14px]'>{channelTitle}</li>
            <li className='text-gray-600 font-normal text-[14px]'>{formatViews(statistics.viewCount)} views</li> 
        </ul>
    </div>
    </Link>
  )
}

export default VideoCard