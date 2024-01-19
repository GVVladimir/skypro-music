import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  trackList: [],
  carentTrack: null,
};
export const sliceMusicTrack = createSlice({
  name: "music",
  initialState,
  reducers: {
    getTrack: (state, action) => {
      state.carentTrack = action.payload;
      state.trackList = action.payload.getTraks;
    },
  },
});
export const { getTrack } = sliceMusicTrack.actions;
export default sliceMusicTrack.reducer;
