
import { configureStore } from "@reduxjs/toolkit";
import appSlice from './appSlice'
import searchSlice from "./searchSlice";
import chatSlice from './chatSlice'
import videosSlice from './videosSlice'
import commentSlice from './commentsSlice'

const store = configureStore({
    reducer : {
        app : appSlice,
        search : searchSlice,
        chat : chatSlice,
        videos : videosSlice,
        comments : commentSlice
    }
})

export default store;