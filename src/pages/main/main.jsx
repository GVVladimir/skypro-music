import React from 'react'; 
import Sidebar from '../../components/Sidebar/Sidebar';
import Bar from "../../components/Bar/Bar"
import Playlist from "../../components/PlayList/Playlist";
import * as S from "../../App.Styles";
import GlobalStyle from "../../components/global"
import Nav from "../../components/NavMain/Navigation";

export const Main = ({user, deletUserHendler}) => {
  return (
    <S.Wrapper>
    <S.Container>
     
      <S.Main>
        <Nav user={user} deletUserHendler={deletUserHendler}/>
        <Playlist />
        <Sidebar />
      </S.Main>
      <Bar />

      <footer className="footer">
        
        <GlobalStyle />
      </footer>
    </S.Container>
  </S.Wrapper>
  );
};
