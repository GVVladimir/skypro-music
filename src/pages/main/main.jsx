import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Bar from "../../components/Bar/Bar";
import Playlist from "../../components/PlayList/Playlist";
import * as S from "../../App.Styles";
import GlobalStyle from "../../components/global";
import Nav from "../../components/NavMain/Navigation";
import { getTracks } from "../../Api/api";
import { useSelector } from "react-redux";

export const Main = ({ user, deletUserHendler }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([]);
  // const [carentTrak, setCarentTrak] = useState(null);

  useEffect(() => {
    getTracks().then((tracks) => {
      setTracks(tracks);
      setIsLoading(false);
    });
  }, []);

  const carentTrak = useSelector((state) => state.music.carentTrak);
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav user={user} deletUserHendler={deletUserHendler} />
          <Playlist tracks={tracks} isLoading={isLoading} />
          <Sidebar isLoading={isLoading} />
        </S.Main>
        {carentTrak ? <Bar /> : null}

        <footer className="footer">
          <GlobalStyle />
        </footer>
      </S.Container>
    </S.Wrapper>
  );
};
