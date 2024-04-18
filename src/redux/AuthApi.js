import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const urlTrack = "https://skypro-music-api.skyeng.tech";

export const authMusic = createApi({
  reducerPath: "AuthMusic",
  baseQuery: fetchBaseQuery({
    baseUrl: urlTrack,
  }),
  endpoints: (build) => ({
    getToken: build.mutation({
      query: ({ email, password}) => ({
        url: "/user/token/",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
    }),
  }),
});

export const {
 useGetTokenMutation
} = authMusic;
