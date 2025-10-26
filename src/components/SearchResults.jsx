import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";

const SearchResults = () => {
  const menuToggle = useSelector((store) => store.app.isMenuOpen);
  const SearchResults = useSelector(store => store.searchVideos.videos)
  return (
    <div className={`px-8 mt-[70px] z-[1] w-full ${menuToggle && "ml-[14rem]"}`}>
      <div className="mx-auto w-[40%]"> 
        {
            SearchResults.map((video ,ind) => (
                <VideoCard key={ind} info={video} fromSearch={true} />
            ))
        }
      </div>
    </div>
  );
};

export default SearchResults;
