import { configureStore } from "@reduxjs/toolkit";
import sliceMusicTrack  from "./Store/slice";

export const store = configureStore({
  reducer: {
    music: sliceMusicTrack,
  },
});
