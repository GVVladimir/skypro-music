import { useEffect, useRef, useState } from "react";
import React from "react";

// import SkeletonFooter from "../SkeletonBar/SkeletonBar";

import * as S from "./bar.Styles";
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import {
  // setAllTrack,
  setPlayTrack,
  setPauseTrack,
  setNextTrack,
  setPrevTrack,
  setTracksListShuffled,
} from "../../Store/slice";

function Bar() {
  const currentTrack = useSelector((state) => state.music.currentTrack);
  const $isPlaying = useSelector((state) => state.music.$isPlaying);
  const isShuffledTrackList = useSelector(
    (state) => state.music.isShuffledTrackList
  );

  const dispatch = useDispatch();

  // const [isPlaying, setIsPlaying] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);
  const formatDuration = moment.utc(duration * 1000).format("mm:ss");
  const formatCurrantTime = moment.utc(currentTime * 1000).format("mm:ss");

  const onChenge = (event) => {
    const newCurrentTime = event.target.value;
    audioRef.current.currentTime = newCurrentTime;
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.5;
    setVolume(audio.volume);
    const timeUpdate = () => {
      if (audio.currentTime && audio.duration) {
        setDuration(audio.duration);
        setCurrentTime(audio.currentTime);
      } else {
        setDuration(0);
        setCurrentTime(0);
      }
    };

    // audioRef.current?.addEventListener('ended', () => { dispatch(playNextTrack()); });
    const setEndedTrack = () => {
      dispatch(setNextTrack());
    };

    audio.addEventListener("timeupdate", timeUpdate);
    audio.addEventListener("ended", setEndedTrack);
    return () => {
      audio.removeEventListener("timeupdate", timeUpdate);
      audio.removeEventListener("ended", setEndedTrack);
    };
  }, [dispatch]);

  const volumeUpdate = (event) => {
    const newVolume = event.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handlNextTrack = () => {
    dispatch(setNextTrack());
  };
  const handlRevTrack = () => {
    dispatch(setPrevTrack());
  };

  const handlShuffleTrack = () => {
    dispatch(setTracksListShuffled());
  };

  useEffect(() => {
    if (currentTrack) {
      handleStart();
    } else {
      handleStop();
    }
  }, []);

  const handleStart = () => {
    audioRef.current.play();
    dispatch(setPlayTrack());
  };

  const handleStop = () => {
    audioRef.current.pause();
    dispatch(setPauseTrack());
  };

  const handleStartLoop = () => {
    audioRef.current.loop = true;
    setIsLoop(true);
  };

  const handleStopLoop = () => {
    audioRef.current.loop = false;
    setIsLoop(false);
  };

  const handleEnded = () => {
    console.log("audio ended");
  };

  const toggleLoop = isLoop ? handleStopLoop : handleStartLoop;

  const togglePlay = $isPlaying ? handleStop : handleStart;

  useEffect(() => {
    if (currentTrack) {
      handleStart();
    } else {
      handleStop();
    }
  }, []);

  return (
    <>
      <audio
        loop={false}
        ref={audioRef}
        src={currentTrack.track_file}
        onEnded={handleEnded}
      ></audio>

      <S.Bar>
        <S.BarContent>
          <S.BarTime>
            {formatCurrantTime}/{formatDuration}
          </S.BarTime>
          <S.StyledProgressInput
            type="range"
            value={currentTime}
            min={0}
            max={duration}
            onChange={onChenge}
            step="0.01"
          ></S.StyledProgressInput>
          <S.BarProgress></S.BarProgress>
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.BarPlayerControls>
                <S.BarPlayerPrev onClick={handlRevTrack}>
                  <S.BarPlayerPrevSvg alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                  </S.BarPlayerPrevSvg>
                </S.BarPlayerPrev>
                <S.BarPlayerBtn onClick={togglePlay}>
                  {$isPlaying ? (
                    <S.BarPlayerBtnSvg alt="pause" onClick={togglePlay}>
                      <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
                    </S.BarPlayerBtnSvg>
                  ) : (
                    <S.BarPlayerBtnSvg alt="play">
                      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    </S.BarPlayerBtnSvg>
                  )}
                </S.BarPlayerBtn>
                <S.BarPlayerNext onClick={handlNextTrack}>
                  <S.BarPlayerNextSvg alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  </S.BarPlayerNextSvg>
                </S.BarPlayerNext>
                <S.BarPlayerRepeat onClick={toggleLoop}>
                  {isLoop ? (
                    <S.BarPlayerRepeatSvgActive alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </S.BarPlayerRepeatSvgActive>
                  ) : (
                    <S.BarPlayerRepeatSvg alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </S.BarPlayerRepeatSvg>
                  )}
                </S.BarPlayerRepeat>
                <S.BarPlayerShuffle onClick={handlShuffleTrack}>
                  {isShuffledTrackList ? (
                    <S.BarPlayerShuffleSvgActive alt="shuffle">
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                    </S.BarPlayerShuffleSvgActive>
                  ) : (
                    <S.BarPlayerShuffleSvg alt="shuffle">
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                    </S.BarPlayerShuffleSvg>
                  )}
                </S.BarPlayerShuffle>
              </S.BarPlayerControls>

              <S.PlayerTrackPlay>
                <S.BarNrackPlayContain>
                  <S.BarNrackPlayImage>
                    <S.BarNrackPlaySvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.BarNrackPlaySvg>
                  </S.BarNrackPlayImage>

                  <S.BarTrackPlyAutor>
                    <S.BarTrackPlyAutorLink href="http://">
                      {currentTrack.name}
                    </S.BarTrackPlyAutorLink>
                  </S.BarTrackPlyAutor>

                  <S.BarTrackPlyApbum>
                    <S.BarTrackPlyAlbumLink href="http://">
                      {currentTrack.author}
                    </S.BarTrackPlyAlbumLink>
                  </S.BarTrackPlyApbum>
                </S.BarNrackPlayContain>

                <S.BarTrackPlyLikeDis>
                  <S.BarTrackPlyLike>
                    <S.BarTrackPlyLikeSvg alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </S.BarTrackPlyLikeSvg>
                  </S.BarTrackPlyLike>
                  <S.BarTrackDisLike>
                    <S.BarTrackDisLikeSvg alt="dislike">
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                    </S.BarTrackDisLikeSvg>
                  </S.BarTrackDisLike>
                </S.BarTrackPlyLikeDis>
              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <S.BarNVolumeBlock>
              <S.BarNVolumeContent>
                <S.BarNVolumeImage>
                  <S.BarNVolumeSvg alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                  </S.BarNVolumeSvg>
                </S.BarNVolumeImage>
                <S.BarVolumeProgress>
                  <S.BarVolumeProgressLine
                    type="range"
                    name="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={volumeUpdate}
                  />
                </S.BarVolumeProgress>
              </S.BarNVolumeContent>
            </S.BarNVolumeBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  );
}

export default Bar;
