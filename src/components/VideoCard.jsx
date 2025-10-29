import React from "react";
import { Link } from "react-router-dom";
import { formatViews } from "../utils/formateCount";
import { timeAgo } from "../utils/timeAgo";

const VideoCard = ({ info, from = false, fromSearch = false }) => {
  if (!info) return;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <Link
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      to={fromSearch ? "/watch?v=" + info.id.videoId : "/watch?v=" + info.id}
      className={`p-2  z-10 hover:bg-gray-200 rounded-2xl transition-colors delay-150 duration-500 max-md:w-full ${
        from || fromSearch ? "w-full p-0" : "w-1/4"
      }`}
    >
      <div className={`${from ? "flex max-md:flex-col" : fromSearch ? "flex gap-3 max-md:flex-col max-md:mb-4" : ""}`}>
        <img
          className={`rounded-lg aspect-video object-cover z-10 ${
            from ? "w-40 h-24 mx-2 max-md:w-full max-md:h-full " : ""
          }`}
          src={thumbnails.high.url}
          alt=""
        /> 
        <ul className={fromSearch ? "w-full" : ""}>
          <li className={`font-semibold ${from ? "text-[14px]" : ""}`}>
            {from ? (
              title.slice(0, 50) + "..."
            ) : fromSearch ? (
              <h1 className="flex justify-between font-normal text-[17px] whitespace-pre-wrap break-words break-all">
                {title.slice(0, 70) + "..."}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16px"
                  viewBox="0 -960 960 960"
                  width="16px"
                  fill="#000000"
                  className="inline ml-1"
                >
                  <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
                </svg>
              </h1>
            ) : title.length > 85 ? (
              title.slice(0, 82) + "..."
            ) : (
              title
            )}
          </li>
          {!fromSearch ? (
            <>
              <li className="text-gray-600 font-normal text-[14px]">
                {channelTitle}
              </li>
              <li className="text-gray-600 font-normal text-[14px]">
                {statistics?.viewCount &&
                  formatViews(statistics?.viewCount) + " views"}
                &nbsp; {timeAgo(publishedAt)}
              </li>
            </>
          ) : (
            <>
              <li className="text-gray-600 font-normal text-[14px]">
                 1k views
                &nbsp; {timeAgo(publishedAt)}
              </li>{" "}
              <li className="text-gray-600 font-normal text-[14px] py-2 flex items-center gap-1">
                <img className="w-7" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" alt="" />{channelTitle}
              </li>
            </>
          )}
          {fromSearch && (
            <p className="text-[14px] text-gray-600 whitespace-pre-wrap break-words break-all ">{snippet.description}</p>
          )}
        </ul>
      </div>
    </Link>
  );
};

export default VideoCard;
