import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const urlTrack = "https://skypro-music-api.skyeng.tech";

export const favoritMusic = createApi({
  reducerPath: "FavoritMusic",
  baseQuery: fetchBaseQuery({ baseUrl: urlTrack, prepareHeaders: (headers)=> {
    // получить из логстор в помощью метода getItem получить токен
    // распарсить с помощью JSON.pars
    // headers.append("auth", token)
    // return headers
  } }),
  endpoints: (build) => ({
    favoritsTracks: build.query({
      query: () => "/catalog/track/favorite/all/",
    }),
    getLike: build.mutation({
      query: ({ id }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: "POST",
      }),
    }),
    deleteLike: build.mutation({
      query: ({ id }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetLikeMutation, useDeleteLikeMutation, useFavoritsTracksQuery } = favoritMusic;
