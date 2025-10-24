import React, { useEffect, useState } from "react";
import { YT_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { OrbitProgress } from "react-loading-indicators";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videosSlice";
import store from "../utils/store";

const VideoContainer = () => {
  const [nextPageToken, setNextPageToken] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const gVideos = useSelector((store) => store.videos.videos);

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        !loading
      ) {
        getVideos(nextPageToken);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextPageToken, loading]);

  const getVideos = async () => {
    setLoading(true);
    const data = await fetch(YT_VIDEOS_API(nextPageToken));
    const json = await data.json();
    dispatch(addVideos(json.items));
    setNextPageToken(json.nextPageToken);
    setTimeout(() => setLoading(false), 500);
    if (json) console.log(json);
  };

  return (
    <div className="flex flex-wrap w-full mt-[60px]">
      {loading && (
        <div className="w-full text-center">
          {" "}
          <OrbitProgress
            variant="disc"
            dense
            color="#ebe6e7"
            size="medium"
            text=""
            textColor=""
          />
        </div>
      )}
      {gVideos.map((video, ind) => (
        <VideoCard key={ind} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
