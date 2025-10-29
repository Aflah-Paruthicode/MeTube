import React, { useEffect, useState } from "react";
import { formatViews } from "../utils/formateCount";
import DescriptionBox from "./DescriptionBox";

export const ChannelDetails = ({ details, counts }) => {
  const [subscribe, setSubscribed] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [like, setLike] = useState(false);
  useEffect(() => {
    setSubscribed(false);
    setLike(false);
    setDislike(false);
  }, [details]);
  return (
    <div>
      <h1 className="font-bold text-[17px] py-2">{details.title}</h1>
      <div className="flex justify-between max-md:flex-col">
        <div className="flex gap-2">
          <img
            className=" w-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
            alt=""
          />
          <h1 className="whitespace-pre-wrap break-words break-all">{details.channelTitle}</h1>
          <button
            onClick={() => setSubscribed(!subscribe)}
            className={`flex items-center px-3 h-10 ${
              !subscribe ? "bg-black text-white" : "bg-gray-200 text-black"
            }  rounded-full cursor-pointer  font-semibold`}
          >
            {!subscribe ? "Subscribe" : "Subscribed"}
          </button>
        </div>
        <div className="flex gap-2">
          <h1 className="flex items-center font-semibold gap-2 px-4 py-1 bg-gray-200 rounded-full">
            {!like ? (
              <svg
                className="cursor-pointer"
                onClick={() => {
                  setLike(!like);
                  if (dislike) setDislike(false);
                }}
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#00000"
              >
                <path d="M840-640q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14H280v-520l240-238q15-15 35.5-17.5T595-888q19 10 28 28t4 37l-45 183h258Zm-480 34v406h360l120-280v-80H480l54-220-174 174ZM160-120q-33 0-56.5-23.5T80-200v-360q0-33 23.5-56.5T160-640h120v80H160v360h120v80H160Zm200-80v-406 406Z" />
              </svg>
            ) : (
              <svg
                className="cursor-pointer"
                onClick={() => {
                  setLike(!like);
                  if (dislike) setDislike(false);
                }}
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#00000"
              >
                <path d="M815.38-600q25.08 0 44.85 19.77Q880-560.46 880-535.38v49.23q0 5.46-1.12 11.92-1.11 6.46-3.34 11.92L766.31-203.38q-8.23 18.46-27.69 30.92Q719.15-160 698.46-160H370.77q-26.85 0-45.73-18.88-18.89-18.89-18.89-45.74v-348.53q0-12.93 5.35-25.12 5.35-12.19 14.04-20.88l206.23-204.47q8.85-8.61 19.73-10.84 10.88-2.23 20.65 2.38 9.77 4.62 14.04 14.93 4.27 10.3 1.58 23.15l-41.15 194h268.76ZM184.62-160q-26.85 0-45.74-18.88Q120-197.77 120-224.62v-310.76q0-26.85 18.88-45.74Q157.77-600 184.62-600h16.92q26.84 0 45.73 18.88 18.88 18.89 18.88 45.74v311.53q0 26.85-18.88 45.35-18.89 18.5-45.73 18.5h-16.92Z" />
              </svg>
            )}{" "}
            {counts.likeCount
              ? like
                ? formatViews(parseInt(counts.likeCount) + 1)
                : formatViews(counts.likeCount)
              : ""}
            <span className="border-l pl-3 border-gray-300">
              {!dislike ? (
                <svg
                  className="cursor-pointer"
                  onClick={() => {
                    setDislike(!dislike);
                    if (like) setLike(false);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#00000"
                >
                  <path d="M120-320q-32 0-56-24t-24-56v-80q0-7 2-15t4-15l120-282q9-20 30-34t44-14h440v520L440-82q-15 15-35.5 17.5T365-72q-19-10-28-28t-4-37l45-183H120Zm480-34v-406H240L120-480v80h360l-54 220 174-174Zm200-486q33 0 56.5 23.5T880-760v360q0 33-23.5 56.5T800-320H680v-80h120v-360H680v-80h120Zm-200 80v406-406Z" />
                </svg>
              ) : (
                <svg
                  className="cursor-pointer"
                  onClick={() => {
                    setDislike(!dislike);
                    if (like) setLike(false);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#00000"
                >
                  <path d="M144.62-360q-25.08 0-44.85-19.77Q80-399.54 80-424.62v-49.23q0-5.46 1.12-11.92 1.11-6.46 3.34-11.92l109.23-258.93q8.23-18.46 27.69-30.92Q240.85-800 261.54-800h327.69q26.85 0 45.73 18.88 18.89 18.89 18.89 45.74v348.53q0 12.93-5.35 25.12-5.35 12.19-14.04 20.88L428.23-136.38q-8.85 8.61-19.73 10.84-10.88 2.23-20.65-2.38-9.77-4.62-14.04-14.93-4.27-10.3-1.58-23.15l41.15-194H144.62Zm630.76-440q26.85 0 45.74 18.88Q840-762.23 840-735.38v310.76q0 26.85-18.88 45.74Q802.23-360 775.38-360h-16.92q-26.84 0-45.73-18.88-18.88-18.89-18.88-45.74v-311.53q0-26.85 18.88-45.35 18.89-18.5 45.73-18.5h16.92Z" />
                </svg>
              )}
            </span>
          </h1>
          <h1 className="flex items-center font-semibold gap-2 px-4 py-1 bg-gray-200 rounded-full cursor-pointer max-md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#00000"
            >
              <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z" />
            </svg>
            Share
          </h1>
          <h1 className="flex items-center font-semibold gap-2 px-4 py-1 bg-gray-200 rounded-full cursor-pointer max-md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#00000"
            >
              <path d="M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5ZM240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360q17 0 28.5 11.5T800-320v80q0 33-23.5 56.5T720-160H240Z" />
            </svg>
            Download
          </h1>
          <h1 className="flex items-center font-semibold gap-2 px-4 py-1 bg-gray-200 rounded-full cursor-pointer max-md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#00000"
            >
              <path d="m480-400-94 94q8 15 11 32t3 34q0 66-47 113T240-80q-66 0-113-47T80-240q0-66 47-113t113-47q17 0 34 3t32 11l94-94-94-94q-15 8-32 11t-34 3q-66 0-113-47T80-720q0-66 47-113t113-47q66 0 113 47t47 113q0 17-3 34t-11 32l438 438q27 27 12 61.5T783-120q-11 0-21.5-4.5T743-137L480-400Zm120-120-80-80 223-223q8-8 18.5-12.5T783-840q38 0 52.5 35T823-743L600-520ZM240-640q33 0 56.5-23.5T320-720q0-33-23.5-56.5T240-800q-33 0-56.5 23.5T160-720q0 33 23.5 56.5T240-640Zm240 180q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM240-160q33 0 56.5-23.5T320-240q0-33-23.5-56.5T240-320q-33 0-56.5 23.5T160-240q0 33 23.5 56.5T240-160Z" />
            </svg>
            Clip
          </h1>
          <h1 className="flex items-center font-semibold gap-2 px-2 py-1 bg-gray-200 rounded-full cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#00000"
            >
              <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
            </svg>
          </h1>
        </div>
      </div>
      <div className="my-2">
        <DescriptionBox
          desc={details.description}
          viewCount={counts.viewCount}
          uploadedOn={details.publishedAt}
        />
      </div>
    </div>
  );
};
