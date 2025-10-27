
import { createSlice } from "@reduxjs/toolkit";
import { Offset_Live_Chat } from "./constants";

const chatSlice = createSlice({
    name : 'chat',
    initialState : {
        messages : []
    },
    reducers : {
        addMessage:(state,action) => {
            state.messages.splice(Offset_Live_Chat,1)
            state.messages.unshift(action.payload);
    }
}
})

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;