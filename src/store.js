import { configureStore } from "@reduxjs/toolkit";
import sliceMusicTrack from "./Store/slice";
import { apiMusic } from "./redux/ApiMusic";
import { favoritMusic } from "./redux/FavoritApi";
import { authMusic } from "./redux/AuthApi";

export const store = configureStore({
  reducer: {
    music: sliceMusicTrack,
    [apiMusic.reducerPath]: apiMusic.reducer,
    [favoritMusic.reducerPath]: favoritMusic.reducer,
    [authMusic.reducerPath]: authMusic.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      apiMusic.middleware,
      favoritMusic.middleware,
      authMusic.middleware,
    ]),
});
