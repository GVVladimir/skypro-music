import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Bar from "../../components/Bar/Bar";
import Playlist from "../../components/PlayList/Playlist";
import * as S from "../../App.Styles";
import GlobalStyle from "../../components/global";
import Nav from "../../components/NavMain/Navigation";
import { getTracks } from "../../Api/api";
import { useDispatch, useSelector } from "react-redux";
import { setNextTrack, setTrackList } from "../../Store/slice";


export const Main = ({ user, deletUserHendler }) => {
  const [isLoading, setIsLoading] = useState(true);
  // const [tracks, setTracks] = useState([]);
  // const [carentTrak, setCarentTrak] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    getTracks().then((tracks) => {
      dispatch(
        setTrackList({
          trackList: tracks,
        })
      );
      setIsLoading(false);
    }, 3000);
  }, []);

  const currentTrack = useSelector((state) => state.music.currentTrack);
  const tracks = useSelector((state) => state.music.trackList);
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav user={user} deletUserHendler={deletUserHendler} />
          <Playlist tracks={tracks} isLoading={isLoading} />
          <Sidebar isLoading={isLoading} />
        </S.Main>
       
        {currentTrack ? <Bar handlNextTrack={setNextTrack} /> : null}

        <footer className="footer">
          <GlobalStyle />
        </footer>
      </S.Container>
    </S.Wrapper>
  );
};
