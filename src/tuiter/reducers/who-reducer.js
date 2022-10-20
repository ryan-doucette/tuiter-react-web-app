import { createSlice } from "@reduxjs/toolkit";
import { whoArray } from "../who-to-follow-list/who";

const whoSlice = createSlice({
    name: "who",
    initialState: whoArray
});

export default whoSlice.reducer;