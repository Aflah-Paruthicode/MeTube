import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";

const SearchResults = () => {
  const menuToggle = useSelector((store) => store.app.isMenuOpen);
  const SearchResults = useSelector((store) => store.searchVideos.videos);
  console.log("search data : ", SearchResults);

  if (SearchResults.length == 0) {
    return (
      <div
        className={`px-8 mt-[70px] z-[1] w-full ${menuToggle && "ml-[14rem] max-md:ml-0"}`}
      >
        <div className="w-full flex items-center justify-center flex-col h-[80vh]">
          <img src="/notFound.png" alt="" />
          <h1 className="text-2xl my-4">No results found</h1>
          <p>Try different keywords or remove search filters</p>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`px-8 max-md:px-3 mt-[70px] z-[1] w-full ${menuToggle && "ml-[14rem] max-md:ml-0"}`} 
    >
      <div className="mx-auto w-[65%] max-md:w-full">
        {SearchResults.map((video, ind) => (
          <VideoCard key={ind} info={video} fromSearch={true} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
