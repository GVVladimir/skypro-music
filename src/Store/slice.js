import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackList: [],
  currentTrack: null,
};
export const sliceMusicTrack = createSlice({
  name: "music",
  initialState,
  reducers: {
    getTrack: (state, action) => {
      console.log(state);
      console.log(action);
    //   state.carentTrak = action.payload;
      state.trackList = action.payload.getTracks;
    },

    //  setNextTrack:(state, action) => {
    //     let currentIndex = 0
    //     for (let i = 0; i < state.trackList.length; i++ ){

    //     }
    //     state.currentTrack = state.trackList[currentIndex + 1]
    //  }
  },
});
export const { getTrack } = sliceMusicTrack.actions;
export default sliceMusicTrack.reducer;
