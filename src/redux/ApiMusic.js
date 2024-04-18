import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const urlTrack = "https://skypro-music-api.skyeng.tech";

export const apiMusic = createApi({
  reducerPath: "ApiMusic",
  baseQuery: fetchBaseQuery({ baseUrl: urlTrack }),
  endpoints: (build) => ({
    allTracks: build.query({
      query: () => "/catalog/track/all/",
    }),
    favoritsTracks: build.query({
        query: () => "/catalog/track/favorite/all/",
      }),
  }),
});

export const {
useAllTracksQuery,
useFavoritsTracksQuery
} = apiMusic;
