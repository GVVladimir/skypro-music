import { createSlice } from "@reduxjs/toolkit";
import "../components/PlayList/PlayList.Styles";

const initialState = {
  trackList: [],
  currentTrack: null,
  shuffledList: [],
  isShuffledTrackList: false,
  $isPlaying: false,
  likeTruck: false,
};
// const [activePlay, setActivePlay] = useState(false)
export const sliceTrackList = createSlice({
  name: "music",
  initialState,
  reducers: {
    getTrack: (state, action) => {
      // console.log(state);
      // console.log(action);
      state.currentTrack = action.payload;
    },

  

    setPlayTrack: (state) => {
      state.$isPlaying = true;
    },
    setPauseTrack: (state) => {
      state.$isPlaying = false;
    },
    setNextTrack: (state) => {
      const allTrackList = state.isShuffledTrackList
        ? state.shuffledList.sort(() => Math.random() - 0.5)
        : state.trackList;

      const tracksIndex = state.trackList.findIndex((track) => {
        console.log(track.id);
        return track.id === state.currentTrack.id;
      });
      console.log(allTrackList, tracksIndex, state.currentTrack);

      if (allTrackList[tracksIndex + 1]) {
        state.currentTrack = allTrackList[tracksIndex + 1];
      }
    },
    setPrevTrack: (state) => {
      const allTrackList = state.isShuffledTrackList
        ? state.shuffledList
        : state.trackList;

      const tracksIndex = allTrackList.findIndex((track) => {
        return track.id === state.currentTrack.id;
      });

      if (allTrackList[tracksIndex - 1]) {
        state.currentTrack = allTrackList[tracksIndex - 1];
      }
    },
    setTracksListShuffled: (state) => {
      state.isShuffledTrackList = !state.isShuffledTrackList;
      state.shuffledList = [...state.trackList].sort(() => Math.random() - 0.5);
    },

    setTrackList: (state, action) => {
      state.trackList = action.payload.trackList;
    },
  },
});

export const {
  getTrack,
  setAllTrack,
  setPlayTrack,
  setPauseTrack,
  setNextTrack,
  setPrevTrack,
  setTracksListShuffled,
  setTrackList,
  setLikeTruck,
} = sliceTrackList.actions;
export default sliceTrackList.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   trackList: [],
//   currentTrack: null,
//   isShuffledTrackList: [],
//   shuffledList: [],
// };
// export const sliceMusicTrack = createSlice({
//   name: "music",
//   initialState,
//   reducers: {
//     getTrack: (state, action) => {
//       console.log(state);
//       console.log(action);
//       state.currentTrack = action.payload;
//       state.trackList = action.payload.getAllTracks;
//     },

//     setNextTrack: (state, action) => {
//       console.log(state);
//       console.log(action);
//       const allTrackList = state.isShuffledTrackList
//         ? state.shuffledList.sort(() => Math.random() - 0.5)
//         : state.trackList;

//         const currentIndex = allTrackList.findIndex((track) => {
//           console.log(track.id);
//           return track.id === state.currentTrack.id;
//         });

//         if (allTrackList[currentIndex + 1]) {
//           state.currentTrack = allTrackList[currentIndex + 1];
//         }

//       // let currentIndex = 0;
//       // for (let i = 0; i < state.trackList.length; i++) {
//       //   if () {

//       //     state.currentTrack = action.payload;
//       //     state.currentTrack = state.trackList[currentIndex + 1];

//         }
//       }

//   //   setNextTrack: (state) => {
//   //     console.log(state);
//   //     const allTrackList = state.isShuffledTrackList
//   //       ? state.shuffledList.sort(() => Math.random() - 0.5)
//   //       : state.trackList;

//   //     const currentIndex = allTrackList.findIndex((track) => {
//   //       console.log(track.id);
//   //       return track.id === state.currentTrack.id;
//   //     });

//   //     if (allTrackList[currentIndex + 1]) {
//   //       state.currentTrack = allTrackList[currentIndex + 1];
//   //     }
//   //   },
//   // },
// });
// export const { getTrack, setNextTrack } = sliceMusicTrack.actions;
// export default sliceMusicTrack.reducer;
