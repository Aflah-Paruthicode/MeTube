import React, { useEffect, useState } from "react";
import { timeAgo } from "../utils/timeAgo";
import { formatViews } from "../utils/formateCount";

const Comment = ({
  data,
  isReply = false,
  replyCount,
  toggleReplys,
  replysToggleValue,
}) => {
  const [dislike, setDislike] = useState(false);
  const [like, setLike] = useState(false);
  useEffect(() => {
    setLike(false);
    setDislike(false);
  }, [data]);

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
        className={`rounded-full ${
          isReply
            ? "w-8 h-8 max-md:w-6 max-md:h-6"
            : "w-10 h-10 max-md:w-8 max-md:h-8"
        }`}
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
        <p className="text-sm whitespace-pre-wrap break-words break-all">
          {textOriginal}
        </p>{" "}
        <h1 className="flex items-center font-semibold gap-2 px-4 py-3 rounded-full">
          {like ? (
            <svg
              className="cursor-pointer"
              onClick={() => {
                setLike(!like);
                if (dislike) setDislike(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#00000"
            >
              <path d="M815.38-600q25.08 0 44.85 19.77Q880-560.46 880-535.38v49.23q0 5.46-1.12 11.92-1.11 6.46-3.34 11.92L766.31-203.38q-8.23 18.46-27.69 30.92Q719.15-160 698.46-160H370.77q-26.85 0-45.73-18.88-18.89-18.89-18.89-45.74v-348.53q0-12.93 5.35-25.12 5.35-12.19 14.04-20.88l206.23-204.47q8.85-8.61 19.73-10.84 10.88-2.23 20.65 2.38 9.77 4.62 14.04 14.93 4.27 10.3 1.58 23.15l-41.15 194h268.76ZM184.62-160q-26.85 0-45.74-18.88Q120-197.77 120-224.62v-310.76q0-26.85 18.88-45.74Q157.77-600 184.62-600h16.92q26.84 0 45.73 18.88 18.88 18.89 18.88 45.74v311.53q0 26.85-18.88 45.35-18.89 18.5-45.73 18.5h-16.92Z" />
            </svg>
          ) : (
            <svg
              className="cursor-pointer"
              onClick={() => {
                setLike(!like);
                if (dislike) setDislike(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#707070f0"
            >
              <path d="M840-640q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14H280v-520l240-238q15-15 35.5-17.5T595-888q19 10 28 28t4 37l-45 183h258Zm-480 34v406h360l120-280v-80H480l54-220-174 174ZM160-120q-33 0-56.5-23.5T80-200v-360q0-33 23.5-56.5T160-640h120v80H160v360h120v80H160Zm200-80v-406 406Z" />
            </svg>
          )}{" "}
          <p className="text-[#707070f0] font-normal text-[12px]">
            {likeCount > 0
              ? like
                ? formatViews(parseInt(likeCount) + 1)
                : formatViews(likeCount)
              : like
              ? formatViews(1)
              : ""}
          </p>
          {dislike ? (
            <svg
              className="cursor-pointer"
              onClick={() => {
                setDislike(!dislike);
                if (like) setLike(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#00000"
            >
              <path d="M144.62-360q-25.08 0-44.85-19.77Q80-399.54 80-424.62v-49.23q0-5.46 1.12-11.92 1.11-6.46 3.34-11.92l109.23-258.93q8.23-18.46 27.69-30.92Q240.85-800 261.54-800h327.69q26.85 0 45.73 18.88 18.89 18.89 18.89 45.74v348.53q0 12.93-5.35 25.12-5.35 12.19-14.04 20.88L428.23-136.38q-8.85 8.61-19.73 10.84-10.88 2.23-20.65-2.38-9.77-4.62-14.04-14.93-4.27-10.3-1.58-23.15l41.15-194H144.62Zm630.76-440q26.85 0 45.74 18.88Q840-762.23 840-735.38v310.76q0 26.85-18.88 45.74Q802.23-360 775.38-360h-16.92q-26.84 0-45.73-18.88-18.88-18.89-18.88-45.74v-311.53q0-26.85 18.88-45.35 18.89-18.5 45.73-18.5h16.92Z" />
            </svg>
          ) : (
            <svg
              className="cursor-pointer"
              onClick={() => {
                setDislike(!dislike);
                if (like) setLike(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#707070f0"
            >
              <path d="M120-320q-32 0-56-24t-24-56v-80q0-7 2-15t4-15l120-282q9-20 30-34t44-14h440v520L440-82q-15 15-35.5 17.5T365-72q-19-10-28-28t-4-37l45-183H120Zm480-34v-406H240L120-480v80h360l-54 220 174-174Zm200-486q33 0 56.5 23.5T880-760v360q0 33-23.5 56.5T800-320H680v-80h120v-360H680v-80h120Zm-200 80v406-406Z" />
            </svg>
          )}
          <p className="text-[14px] flex items-center text-[#424242f0]">
            Reply
          </p>
        </h1>
        {replyCount && (
          <h1
            onClick={() => toggleReplys(!replysToggleValue)}
            className="inline-flex gap-2 pt-1 pb-6  text-blue-800 font-semibold text-[14px] m-auto cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#193cb8"
            >
              {replysToggleValue ? (
                <path d="M480-528 324-372q-11 11-28 11t-28-11q-11-11-11-28t11-28l184-184q12-12 28-12t28 12l184 184q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-528Z" />
              ) : (
                <path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z" />
              )}
            </svg>{" "}
            {formatViews(replyCount)} Replies
          </h1>
        )}
      </div>
    </div>
  );
};

export default Comment;
