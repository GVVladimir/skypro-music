import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Bar from "../../components/Bar/Bar";
import Playlist from "../../components/PlayList/Playlist";
import * as S from "../../App.Styles";
import GlobalStyle from "../../components/global";
import Nav from "../../components/NavMain/Navigation";
import { getTraks } from "../../Api/api";
import { useSelector } from "react-redux";

export const Main = ({ user, deletUserHendler }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [traks, setTraks] = useState([]);
  // const [carentTrak, setCarentTrak] = useState(null);

  useEffect(() => {
    getTraks().then((traks) => {
      setTraks(traks);
      setIsLoading(false);
    });
  }, []);

  const carentTrak = useSelector((state) => state.music.carentTrak);
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav user={user} deletUserHendler={deletUserHendler} />
          <Playlist traks={traks} isLoading={isLoading} />
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
