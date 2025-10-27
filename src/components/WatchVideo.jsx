import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { ChannelDetails } from "./ChannelDetails";
import { AdsLogo } from "../utils/constants";
import VideoCard from "./VideoCard";
import { addComments } from "../utils/commentsSlice";
import store from "../utils/store";

const WatchVideo = () => {
  const [searchparams] = useSearchParams();
  const allVideos = useSelector((store) => store.videos.videos);
  const searchVideos = useSelector((store) => store.searchVideos.videos);
  const [commentsDisabled,setCommentsDisabled] = useState(false)
  const id = searchparams.get("v");
  const [videoDetails, setVideoDetails] = useState(
    allVideos.find((item) => item.id == id)
  );

  useEffect(() => { 
    let found = allVideos.find((item) => item.id == id);

    if (found) {
      setVideoDetails(found);
      setCommentsDisabled(false)
    } else {
      const searchItem = searchVideos.find((item) => item.id.videoId == id);
      if (searchItem) {
        fetchVideoDetails(searchItem.id.videoId);
      }
    } 
  }, [id, allVideos, searchVideos]);

  async function fetchVideoDetails(videoId) {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${
          import.meta.env.VITE_GOOGle_API_KEY
        }`
      );
      const data = await res.json();
      setVideoDetails(data.items[0]);
    } catch (err) {
      console.error("Failed to fetch video details", err);
    }
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getComments();
  }, [id,videoDetails]);


  const getComments = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=" +
        searchparams.get("v") +
        "&maxResults=50&order=time&key=" +
        import.meta.env.VITE_GOOGle_API_KEY
    );
    const json = await data.json();
    if (json.error?.errors?.[0]?.reason === "commentsDisabled") {
      dispatch(addComments([]));
      setCommentsDisabled(true);
      return;
    }
    dispatch(addComments(json.items));
  };

  console.log('checking is rendering twice ',videoDetails)

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
      </div>
      <div className="flex w-full justify-between">
        <div className="w-[1380px]">
          {videoDetails ? (
            <ChannelDetails
              details={videoDetails.snippet}
              counts={videoDetails.statistics}
            />
          ) : (
            <p className="text-gray-500">Loading video details...</p>
          )}
        </div>
        <div
          className="h-40 border cursor-pointer rounded-2xl z-20 mt-5 border-gray-200"
          onClick={() =>
            window.location.replace("https://www.almircollections.com")
          }
        >
          <img
            className="w-[400px] h-20 object-cover rounded-t-2xl"
            src="/adWatchPage.png"
            alt=""
          />
          <div className="p-3 flex w-full items-center justify-between">
            <img
              className="w-10 border border-gray-200 rounded-full "
              src={AdsLogo}
              alt=""
            />
            <p>
              Almir Collections <br />{" "}
              <span className="text-sm font-bold">
                Sponsored{" "}
                <span className="font-normal">almircollections.com</span>
              </span>
            </p>
            <button className="bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
              Visit site
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#00000"
            >
              <path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between">
        { !commentsDisabled ? <CommentsContainer
          commentsCount={videoDetails?.statistics?.commentCount}
        /> : <div className="p-2 w-[1380px] text-center">
          <p>Comments are turned off. <span className="text-blue-700">Learn more</span></p>
        </div> }
        <div className="w-[400px]">
          {allVideos.map((video, ind) => (
            <VideoCard key={ind} info={video} from={"watchPage"} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
