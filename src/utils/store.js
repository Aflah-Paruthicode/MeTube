import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import videosSlice from "./videosSlice";
import commentSlice from "./commentsSlice";
import searchVideosSlice from "./searchVideosSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    videos: videosSlice,
    comments: commentSlice,
    searchVideos:searchVideosSlice
  },
});

export default store;
