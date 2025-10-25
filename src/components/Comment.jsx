import React from "react";
import { timeAgo } from "../utils/timeAgo";
import { formatViews } from "../utils/formateCount";

const Comment = ({ data, isReply = false, replyCount,toggleReplys,replysToggleValue}) => {
  let snippet;
  if (isReply) {
    snippet = data;
  } else {
    snippet = data.topLevelComment.snippet;
  } 
  if (!snippet) return null;
  const {
    authorDisplayName,
    textOriginal,
    authorProfileImageUrl,
    publishedAt,
    likeCount,
  } = snippet;
  return (
    <div className="flex gap-2">
      <img
        className={`rounded-full ${isReply ? "w-8 h-8" : "w-10 h-10"}`}
        src={`${
          authorProfileImageUrl
            ? authorProfileImageUrl
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        }`}
        alt="user"
      />
      <div className="px-3">
        <p className="font-semibold text-[14px]">
          {authorDisplayName}{" "}
          <span className="font-normal text-[#424242f0]">
            {timeAgo(publishedAt)}
          </span>
        </p>
        <p>{textOriginal}</p>
        <h1 className="flex items-center font-semibold gap-2 px-4 py-3 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#707070f0"
          >
            <path d="M840-640q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14H280v-520l240-238q15-15 35.5-17.5T595-888q19 10 28 28t4 37l-45 183h258Zm-480 34v406h360l120-280v-80H480l54-220-174 174ZM160-120q-33 0-56.5-23.5T80-200v-360q0-33 23.5-56.5T160-640h120v80H160v360h120v80H160Zm200-80v-406 406Z" />
          </svg>{" "}
          <p className="text-[#707070f0] font-normal text-[12px]">
            {likeCount > 0 ? formatViews(likeCount) : ""}
          </p>
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#707070f0"
          >
            <path d="M120-320q-32 0-56-24t-24-56v-80q0-7 2-15t4-15l120-282q9-20 30-34t44-14h440v520L440-82q-15 15-35.5 17.5T365-72q-19-10-28-28t-4-37l45-183H120Zm480-34v-406H240L120-480v80h360l-54 220 174-174Zm200-486q33 0 56.5 23.5T880-760v360q0 33-23.5 56.5T800-320H680v-80h120v-360H680v-80h120Zm-200 80v406-406Z" />
          </svg>
          <p className="text-[14px] flex items-center text-[#424242f0]">
            Reply
          </p>
        </h1>
        { replyCount && <h1 onClick={() => toggleReplys(!replysToggleValue)} className="inline-flex gap-2 pt-1 pb-6  text-blue-800 font-semibold text-[14px] m-auto cursor-pointer"> 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#193cb8"
          >
            { replysToggleValue ? <path d="M480-528 324-372q-11 11-28 11t-28-11q-11-11-11-28t11-28l184-184q12-12 28-12t28 12l184 184q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-528Z"/> : <path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z" />}
          </svg>  {formatViews(replyCount)} Replies 
        </h1> } 
      </div>
    </div>
  );
};

export default Comment;
