import Nav from "./components/NavMain/Navigation";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Bar from "./components/Bar/Bar";
import Playlist from "./components/PlayList/Playlist";

import * as S from "./App.Styles";
import GlobalStyle from "./components/global";

function App() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav />
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
}

export default App;
