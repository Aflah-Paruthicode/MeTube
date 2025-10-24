import { YT_VIDEOS_API } from "./constants";

export const getVideos = async (nextPageToken = '') => {
    
    const data = await fetch(YT_VIDEOS_API(nextPageToken));
    const json = await data.json();
    if (json) console.log(json);
    return json;
  };