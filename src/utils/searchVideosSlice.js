import { createSlice } from "@reduxjs/toolkit";

const searchVideosSlice = createSlice({
  name: "searchVideos",
  initialState: { 
    videos : []
  },
  reducers: {
    addSearchVideos: (state, action) => { 
      state.videos = action.payload
    },
  },
});
 
export const { addSearchVideos } = searchVideosSlice.actions;
export default searchVideosSlice.reducer;
