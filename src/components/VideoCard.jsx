import React from "react";
import { Link } from "react-router-dom";
import { formatViews } from "../utils/formateCount";
import { timeAgo } from "../utils/timeAgo";

 const VideoCard = ({ info,from=false }) => {
  if (!info) return;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails,publishedAt } = snippet;

  return (
    <Link
      to={from ? "?v=" + info.id : "watch?v=" + info.id}
      className={`p-2  z-10 hover:bg-gray-200 rounded-2xl transition-colors delay-150 duration-500 ${from ? 'w-full p-0' : 'w-1/4'}`}
    >
      <div className={`${from ? 'flex' : ''}`}>
        <img
          className={`rounded-lg aspect-video object-cover z-10 ${from ? 'w-40 h-24 mx-2' : ''}`}
          src={thumbnails.high.url}
          alt=""
        />
        <ul>
          <li className={`font-semibold ${from ? 'text-[14px]' : ''}`}>
            {from ? title.slice(0,50) + '...' : title.length > 85 ? title.slice(0, 82) + "..." : title}
          </li>
          <li className="text-gray-600 font-normal text-[14px]">
            {channelTitle}
          </li>
          <li className="text-gray-600 font-normal text-[14px]">
            {formatViews(statistics.viewCount)} views  {timeAgo(publishedAt)}
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default VideoCard;
