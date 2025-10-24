import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { ChannelDetails } from "./ChannelDetails";
import { AdsLogo } from "../utils/constants";

const WatchVideo = () => {
  const [searchparams] = useSearchParams();
  const videoDetails = useSelector((store) => store.videos.videos.find(item => item.id == searchparams.get("v")))
  console.log('video here : ',videoDetails)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="mt-[80px] px-12 z-10 w-screen">
      <div className="flex gap-8"> 
        <iframe
          className="rounded-xl"
          width="1380"
          height="730"
          src={`https://www.youtube.com/embed/${searchparams.get("v")}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <LiveChat />

        {/*  this is the ad portion that i miss created, just keeping it like this for now, we can move it after the live chat, */}
      </div>
      <div className="flex w-full justify-between">
        <div className="w-[1380px]">

        <ChannelDetails details={videoDetails.snippet} counts={videoDetails.statistics} /> 
        </div>
        <div className="h-40 border cursor-pointer rounded-2xl z-20 mt-5 border-gray-200" onClick={() => window.location.replace('https://www.almircollections.com')}>
          <img
            className="w-[400px] h-20 object-cover rounded-t-2xl"
            src="/adWatchPage.png"
            alt=""
          /> 
          <div className="p-3 flex w-full items-center justify-between"> 
            <img className="w-10 border border-gray-200 rounded-full " src={AdsLogo} alt="" /> 
            <p>Almir Collections <br /> <span className="text-sm font-bold">Sponsored  <span className="font-normal">almircollections.com</span></span></p>
            <button className="bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">Visit site</button>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00000"><path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z"/></svg>
          </div>
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchVideo;
